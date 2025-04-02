document.addEventListener("DOMContentLoaded", function () {
    
    function updateGreeting() {
        const greetingElement = document.getElementById("greeting");
        const hour = new Date().getHours();
        let greeting;
        
        if (hour < 12) {
            greeting = "Good morning!";
        } else if (hour < 18) {
            greeting = "Good afternoon!";
        } else {
            greeting = "Good evening!";
        }
        
        greetingElement.textContent = greeting;
    }
    updateGreeting();

  
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }
        
        alert("Message sent successfully!");
        this.reset();
    });

    const projects = [
        { title: "Project One", category: "Web Development" },
        { title: "Project Two", category: "Machine Learning" },
        { title: "Project Three", category: "Mobile App" }
    ];
    
    const projectList = document.getElementById("project-list");
    projects.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.textContent = `${project.title} - ${project.category}`;
        projectList.appendChild(projectItem);
    });

  
    const blogPosts = [
        { title: "My First Blog", content: "This is my first blog post!" },
        { title: "Learning JavaScript", content: "JavaScript is awesome!" }
    ];
    
    const blogList = document.getElementById("blog-list");
    blogPosts.forEach(post => {
        const blogItem = document.createElement("div");
        blogItem.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        blogList.appendChild(blogItem);
    });
});
