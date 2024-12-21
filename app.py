from flask import Flask, request, redirect, url_for, session, flash, send_from_directory
from flask_mysqldb import MySQL
from werkzeug.security import generate_password_hash, check_password_hash
import os

app = Flask(__name__)
app.secret_key = 'your_secret_key'

# Configure upload folder
app.config['UPLOAD_FOLDER'] = 'uploads'

# Ensure the folder exists
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# MySQL Configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'ROOT75'  # Replace with your password
app.config['MYSQL_DB'] = 'travel_vista'

mysql = MySQL(app)

# Serve Static Files
@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('.', filename)

# Routes
@app.route('/')
def home():
    return send_from_directory('.', 'index.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = generate_password_hash(request.form['password'])

        cursor = mysql.connection.cursor()
        try:
            cursor.execute("INSERT INTO users (username, email, password) VALUES (%s, %s, %s)", 
                           (username, email, password))
            mysql.connection.commit()
            flash('Signup successful! Please login.', 'success')
            return redirect(url_for('serve_static', filename='login.html'))
        except Exception as e:
            flash('Error: ' + str(e), 'danger')
        finally:
            cursor.close()
    return send_from_directory('.', 'signup.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        cursor = mysql.connection.cursor()
        cursor.execute("SELECT * FROM users WHERE email=%s", (email,))
        user = cursor.fetchone()
        cursor.close()

        if user and check_password_hash(user[3], password):
            session['logged_in'] = True
            session['username'] = user[1]
            flash('Login successful!', 'success')
            return redirect(url_for('home'))  # Redirect to home page
        else:
            flash('Invalid credentials, please try again.', 'danger')

    return send_from_directory('.', 'login.html')

@app.route('/logout')
def logout():
    session.clear()
    flash('You have been logged out.', 'info')
    return redirect(url_for('serve_static', filename='login.html'))

@app.route('/submit', methods=['POST'])
def submit_booking():
    # Extract form data
    phone_number = request.form.get('phoneNumber')
    password = request.form.get('password')  # Plain text passwords should NOT be used in production.
    destination = request.form.get('destination')
    package = request.form.get('package')
    number_of_members = request.form.get('numberOfMembers')
    payment_method = request.form.get('paymentMethod')
    payment_proof = request.files.get('paymentProof')

    proof_filename = None
    if payment_proof:
        # Save the uploaded file
        proof_filename = os.path.join(app.config['UPLOAD_FOLDER'], payment_proof.filename)
        payment_proof.save(proof_filename)
        print(f"Payment proof saved at: {proof_filename}")

    # Insert booking data into the database
    cursor = mysql.connection.cursor()
    try:
        cursor.execute("""
            INSERT INTO bookings (phone_number, destination, package, number_of_members, payment_method, payment_proof)
            VALUES (%s, %s, %s, %s, %s, %s)
        """, (phone_number, destination, package, number_of_members, payment_method, proof_filename))
        mysql.connection.commit()
        flash('Booking successful!', 'success')
    except Exception as e:
        print(f"Error during booking submission: {e}")
        flash(f'Error: {str(e)}', 'danger')
    finally:
        cursor.close()

    return redirect(url_for('home'))


if __name__ == '__main__':
    app.run(debug=True)
