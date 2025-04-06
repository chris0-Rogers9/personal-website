const greetingElement = document.getElementById("greeting");

function setGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good morning! 👋";
    } else if (hour < 18) {
        greeting = "Good afternoon! ☀️";
    } else {
        greeting = "Good evening! 🌙";
    }

    greetingElement.textContent = greeting;
}

setGreeting();


const projects = [
    { title: "Portfolio Website", description: "A personal portfolio built with HTML, CSS, and JavaScript." },
    { title: "Weather App", description: "An app that fetches weather data using an API." }
];

const blogs = [
    { title: "How I Built My Portfolio", summary: "A quick overview of the tools and techniques I used." },
    { title: "Getting Started with JavaScript", summary: "A beginner-friendly intro to JavaScript basics." }
];

function renderList(data, containerId) {
    const container = document.getElementById(containerId);
    data.forEach(item => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description || item.summary}</p>
        `;
        container.appendChild(div);
    });
}

renderList(projects, "project-list");
renderList(blogs, "blog-list");


document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        alert("Thanks for your message, " + name + "!");
        this.reset();
    } else {
        alert("Please fill in all fields.");
    }
});
