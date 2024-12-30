import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <Header />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className="header">
            <div className="container">
                <h1 className="logo">Bhoomika Sahu</h1>
                <nav className="nav">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2>About Me</h2>
                <p>Hi, I am Bhoomika Sahu, a dedicated software developer and aspiring Cloud Engineer skilled in Python, web development, and cloud technologies.</p>
            </div>
        </section>
    );
}

function Projects() {
  const projectList = [
      { id: 1, title: 'Portfolio Website', description: 'A responsive ReactJS portfolio showcasing projects and skills.', image: 'https://via.placeholder.com/150' },
      { id: 2, title: 'E-commerce Platform', description: 'An online store built with React, Node.js, and MySQL.', image: 'https://via.placeholder.com/150' },
      { id: 3, title: 'Task Manager', description: 'A web application for managing tasks efficiently, featuring CRUD operations.', image: 'https://via.placeholder.com/150' },
  ];

  return (
      <section id="projects" className="projects">
          <div className="container">
              <h2>Projects</h2>
              <div className="project-list">
                  {projectList.map((project) => (
                      <div className="project" key={project.id}>
                          <img src={project.image} alt={project.title} />
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  );
}

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Contact</h2>
                <p>Reach out for collaborations or inquiries:</p>
                <form action="http://localhost:5000/contact" method="POST">
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2024 Bhoomika Sahu. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default App;
