// Fake JSON data with GitHub links
const portfolioData = [
  {
    title: "My Personal PortFolio",
    description:
      "A great project that demonstrates my skills in front-end development with React and Tailwind CSS.",
    image: "/p-1.PNG",
    github: "https://portfolio-nextjs-abid.vercel.app/",
  },
  {
    title: "Project 2",
    description:
      "A responsive website built with Next.js, featuring dynamic content and interactive elements.",
    image: "/p-2.PNG",
    github: "https://sewing-machine-roshan.vercel.app/",
  },
  {
    title: "Project 3",
    description:
      "An e-commerce platform showcasing my skills in building scalable applications and implementing payment gateways.",
    image: "/p-3.PNG",
    github: "https://healthcare-system-nqz8.vercel.app/",
  },
  {
    title: "Project 4",
    description:
      "A personal blog with a custom CMS, demonstrating my ability to create content management systems from scratch.",
    image: "/P-4.PNG",
    github: "https://github.com/AbidJunani",
  },
];

// Function to render portfolio items
function renderPortfolio() {
  const portfolioGrid = document.getElementById("portfolio-grid");
  portfolioData.forEach((item) => {
    const portfolioItem = document.createElement("div");
    portfolioItem.className = "portfolio-item";
    portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="${item.github}" class="github-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
        `;
    portfolioGrid.appendChild(portfolioItem);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

// Initialize portfolio items
renderPortfolio();
