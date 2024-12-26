// Event data
const events = [
  {
    date: "FEBRUARY 17, 2025",
    time: "12:00 PM",
    description: "Evolvere Society is a collaborative community at NIT Durgapur focused on Biotechnology and research. We aim to promote innovation, critical thinking, and skill-building through projects, events, and knowledge-driven activities.",
    imageUrl: "https://th.bing.com/th/id/OIP.VuAxZ1ks1vJ0caSisY-VlgAAAA?w=138&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    date: "JANUARY 17, 2025",
    time: "12:00 PM",
    description: "Evolvere Society is a collaborative community at NIT Durgapur focused on Biotechnology and research. We aim to promote innovation, critical thinking, and skill-building through projects, events, and knowledge-driven activities.",
    imageUrl: "https://th.bing.com/th?q=NIT+Durgapur+Logo+without+BG&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
  }
];

const carouselInner = document.getElementById('carousel-inner');

events.forEach((event, index) => {
  const carouselItem = document.createElement('div');
  carouselItem.className = 'carousel-item' + (index === 0 ? ' active' : '');

  carouselItem.innerHTML = `
    <div class="event-details">
      <div class="event-image">
        <img src="${event.imageUrl}" alt="Event Image">
      </div>
      <div class="date-box">
        <p id="date">${event.date}</p>
        <p>${event.time}</p>
      </div>
      <div class="event-description">
        <h3>DETAILS</h3>
        <p>${event.description}</p>
      </div>
    </div>
  `;

  carouselInner.appendChild(carouselItem);
});

let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;

document.getElementById('prevBtn').addEventListener('click', () => {
  carouselItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
  carouselItems[currentIndex].classList.add('active');
});

document.getElementById('nextBtn').addEventListener('click', () => {
  carouselItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
  carouselItems[currentIndex].classList.add('active');
});

// Team data with names and image URLs
const teamData = {
  alumni: [
    { name: "Alumni 1", image: "images/alumni2.jpg" },
    { name: "Alumni 2", image: "path/to/alumni2.jpg" },
    { name: "Alumni 3", image: "path/to/alumni3.jpg" },
    { name: "Alumni 4", image: "path/to/alumni4.jpg" },
    { name: "Alumni 5", image: "path/to/alumni5.jpg" },
  ],
  fourthYears: [
    { name: "Fourth Year 1", image: "path/to/fourthYear1.jpg" },
    { name: "Fourth Year 2", image: "path/to/fourthYear2.jpg" },
    { name: "Fourth Year 3", image: "path/to/fourthYear3.jpg" },
    { name: "Fourth Year 4", image: "path/to/fourthYear4.jpg" },
    { name: "Fourth Year 5", image: "path/to/fourthYear5.jpg" },
  ],
  thirdYears: [
    { name: "Third Year 1", image: "path/to/thirdYear1.jpg" },
    { name: "Third Year 2", image: "path/to/thirdYear2.jpg" },
    { name: "Third Year 3", image: "path/to/thirdYear3.jpg" },
    { name: "Third Year 4", image: "path/to/thirdYear4.jpg" },
    { name: "Third Year 5", image: "path/to/thirdYear5.jpg" },
  ],
  secondYears: [
    { name: "Second Year 1", image: "path/to/secondYear1.jpg" },
    { name: "Second Year 2", image: "path/to/secondYear2.jpg" },
    { name: "Second Year 3", image: "path/to/secondYear3.jpg" },
    { name: "Second Year 4", image: "path/to/secondYear4.jpg" },
    { name: "Second Year 5", image: "path/to/secondYear5.jpg" },
  ],
};
function showTeam(teamKey) {
  const gallery = document.getElementById("team-gallery");
  gallery.innerHTML = ""; // Clear previous content

  // Generate cards for the selected team
  teamData[teamKey].forEach((member) => {
    const card = document.createElement("div");
    card.className = "team-card";

    // Add member image
    const img = document.createElement("img");
    img.src = member.image;
    img.alt = member.name;
    img.className = "team-img";

    // Add member name
    const name = document.createElement("p");
    name.className = "team-name";
    name.innerText = member.name;

    // Append image and name to the card
    card.appendChild(img);
    card.appendChild(name);

    // Append card to gallery
    gallery.appendChild(card);
  });
}
