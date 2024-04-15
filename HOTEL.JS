const hotelData = {
  singapore: [
    { name: "Hotel Singapore 1", price: "$300/night", image: "singapore1.jpg" },
    { name: "Hotel Singapore 2", price: "$350/night", image: "singapore2.jpg" },
    { name: "Hotel Singapore 3", price: "$280/night", image: "singapore3.jpg" }
  ],
  dubai: [
    { name: "Hotel Dubai 1", price: "$200/night", image: "dubai1.jpg" },
    { name: "Hotel Dubai 2", price: "$250/night", image: "dubai2.jpg" },
    { name: "Hotel Dubai 3", price: "$180/night", image: "dubai3.jpg" }
  ],
  japan: [  { name: "Hotel Dubai 1", price: "$200/night", image: "dubai1.jpg" },
  { name: "Hotel Dubai 2", price: "$250/night", image: "dubai2.jpg" },
  { name: "Hotel Dubai 3", price: "$180/night", image: "dubai3.jpg" }
    // Hotel data for Japan
  ],
  maldives: [  { name: "Hotel Dubai 1", price: "$200/night", image: "dubai1.jpg" },
  { name: "Hotel Dubai 2", price: "$250/night", image: "dubai2.jpg" },
  { name: "Hotel Dubai 3", price: "$180/night", image: "dubai3.jpg" }
    // Hotel data for Maldives
  ],
  bali: [  { name: "Hotel Dubai 1", price: "$200/night", image: "dubai1.jpg" },
  { name: "Hotel Dubai 2", price: "$250/night", image: "dubai2.jpg" },
  { name: "Hotel Dubai 3", price: "$180/night", image: "dubai3.jpg" }
    // Hotel data for Bali
  ],
  mauritius: [
   { name: "Hotel Dubai 1", price: "$200/night", image: "" },
    { name: "Hotel Dubai 2", price: "$250/night", image: "dubai2.jpg" },
    { name: "Hotel Dubai 3", price: "$180/night", image: "dubai3.jpg" }
  ],
  losangeles: [  { name: "Hotel Dubai 1", price: "$200/night", image: "dubai1.jpg" },
  { name: "Hotel Dubai 2", price: "$250/night", image: "dubai2.jpg" },
  { name: "Hotel Dubai 3", price: "$180/night", image: "dubai3.jpg" }
    // Hotel data for Los Angeles
  ],
  newyork: [  { name: "Hotel Dubai 1", price: "$200/night", image: "dubai1.jpg" },
  { name: "Hotel Dubai 2", price: "$250/night", image: "dubai2.jpg" },
  { name: "Hotel Dubai 3", price: "$180/night", image: "dubai3.jpg" }
    // Hotel data for New York
  ],
  canada: [  { name: "Hotel Dubai 1", price: "$200/night", image: "dubai1.jpg" },
  { name: "Hotel Dubai 2", price: "$250/night", image: "dubai2.jpg" },
  { name: "Hotel Dubai 3", price: "$180/night", image: "dubai3.jpg" }
    // Hotel data for Canada
  ],
  thailand: [  { name: "Hotel Dubai 1", price: "$200/night", image: "dubai1.jpg" },
  { name: "Hotel Dubai 2", price: "$250/night", image: "dubai2.jpg" },
  { name: "Hotel Dubai 3", price: "$180/night", image: "dubai3.jpg" }
    // Hotel data for Thailand
  ],
  kedarnath: [  { name: "Hotel Govind", price: "RS 2200/night", image:"govind.avif" },
  { name: "Uma Shree", price: "Rs2152/night", image: "Uma Shree.jpg" },
  { name: "Behl Ashram", price: "$1809/night", image: "Behl Ashram.avif" }
    // Hotel data for Kedarnath
  ],
  kashmir: [  { name: "Hotel East Lodge Inn", price: "RS1712/night", image: "east lodge inn.avif" },
  { name: "Lit Homestay", price: "RS2059/night", image: "Lit Homestay.avif" },
  { name: "Hotel Hunter", price: "Rs1024/night", image: "Hotel Hunter's & Cafe.avif" }
    // Hotel data for Kashmir
  ],
  goldentemple: [  { name: "Hotel Winner Inn", price: "RS3149/night", image: "Hotel Winner Inn.avif" },
  { name: "Hotel Axis Inn", price: "RS3842/night", image: "Hotel Axis Inn.avif" },
  { name: "Hotel Hollywood Heights", price: "RS4258/night", image: "Hotel Hollywood Heights.avif" }
    // Hotel data for Golden Temple
  ],
  statueofunity: [  { name: "Mahavir Home Stay", price: "RS1350/night", image: "Mahavir Home Stay.avif" },
  { name: "Hotel Roshni", price: "RS3250/night", image: "Hotel Roshni.avif" },
  { name: "Hotel Vinayak", price: "RS4361/night", image: "Hotel Vinayak.jpg" }
    // Hotel data for Statue of Unity
  ],
  ayodhya: [  { name: "Hotel Dubai 1", price: "$200/night", image: "dubai1.jpg" },
  { name: "Hotel Dubai 2", price: "$250/night", image: "dubai2.jpg" },
  { name: "Hotel Dubai 3", price: "$180/night", image: "dubai3.jpg" }
    // Hotel data for Ayodhya
  ],
  shimla: [  { name: "Hotel Dubai 1", price: "$200/night", image: "dubai1.jpg" },
  { name: "Hotel Dubai 2", price: "$250/night", image: "dubai2.jpg" },
  { name: "Hotel Dubai 3", price: "$180/night", image: "dubai3.jpg" }
    // Hotel data for Shimla
  ],
  mahabaleshwar: [  { name: "Hotel Dubai 1", price: "$200/night", image: "dubai1.jpg" },
  { name: "Hotel Dubai 2", price: "$250/night", image: "dubai2.jpg" },
  { name: "Hotel Dubai 3", price: "$180/night", image: "dubai3.jpg" }
    // Hotel data for Mahabaleshwar
  ],
  kerala: [  { name: "Hotel Dubai 1", price: "$200/night", image: "dubai1.jpg" },
  { name: "Hotel Dubai 2", price: "$250/night", image: "dubai2.jpg" },
  { name: "Hotel Dubai 3", price: "$180/night", image: "dubai3.jpg" }
    // Hotel data for Kerala
  ],
  goa: [  { name: "Hotel Dubai 1", price: "$200/night", image: "dubai1.jpg" },
  { name: "Hotel Dubai 2", price: "$250/night", image: "dubai2.jpg" },
  { name: "Hotel Dubai 3", price: "$180/night", image: "dubai3.jpg" }
    // Hotel data for Goa
  ],
  rajasthan: [
   { name: "Hotel Dubai 1", price: "$200/night", image: "bg1.jpg" },
    { name: "Hotel Dubai 2", price: "$250/night", image: "dubai2.jpg" },
    { name: "Hotel Dubai 3", price: "$180/night", image: "dubai3.jpg" }
  ]
};
const bookingLinks = {
  "Hotel Govind": "https://www.oyorooms.com/85761/",
  "Hotel East Lodge Inn": " https://www.oyorooms.com/50644/",
  "Lit Homestay": "https://www.oyorooms.com/213048/",
  "Hotel Hunter": "https://www.oyorooms.com/192473/",
  "Uma Shree": " https://www.oyorooms.com/82740/",
  "Behl Ashram": " https://www.oyorooms.com/83492/",
  "Hotel Winner Inn": "https://www.oyorooms.com/6335/",
  "Hotel Axis Inn": "https://www.oyorooms.com/197545/",
  "Hotel Hollywood Heights": "https://www.oyorooms.com/14276/",
  "Mahavir Home Stay": " https://www.oyorooms.com/162310/",
  "Hotel Roshni": " https://www.oyorooms.com/224607/",
  "Hotel Vinayak": "https://www.oyorooms.com/223186/",
  "": "",
  
  // Add other hotel booking links here
};

function searchHotels() {
  const destination = document.getElementById('destinationSelect').value;
  const hotelsList = document.querySelector('.hotels-list');
  hotelsList.innerHTML = ''; // Clear previous search results

  hotelData[destination].forEach(hotel => {
    const hotelItem = document.createElement('div');
    hotelItem.classList.add('hotel-item');
    hotelItem.innerHTML = `
      <img src="images/${hotel.image}" alt="${hotel.name}" style="width: 250px; height: 350px;" >
      <h3>${hotel.name}</h3>
      <p>Price: ${hotel.price}</p>
      <button onclick="bookHotel('${hotel.name}')">Book Now</button>
    `;
    hotelsList.appendChild(hotelItem);
  });
}

function bookHotel(hotelName) {
  // Get the booking link corresponding to the selected hotel
  const bookingLink = bookingLinks[hotelName];
  // Redirect to the booking page URL
  window.location.href = bookingLink;
}
