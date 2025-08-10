function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Project One</h3>
          <p>Built a full-stack application using MERN stack and OpenAI API to review code, suggest improvements, and highlight errors. Implemented authentication, real-time feedback, and a smooth, responsive UI 
            <br/> Live Project:  https://ai-powered-code-reviewer-1-frontend.onrender.com/</p> 
        </div>
        <div className="project-card">
          <h3>Project Two</h3>
          <p>Developed a full-stack web application to create, manage, and book events with an intuitive and responsive interface. Implemented secure user authentication, complete CRUD operations, and real-time event updates. Designed a user-friendly UI with React, connected to a robust backend using Express and Node.js, and integrated MongoDB for efficient data storage and retrieval.
            <br/>Live Project:https://event-planning-application-with-mern-jp2e.onrender.com/
          </p>
        </div>
        <div className="project-card">
          <h3>Project Three</h3>
          <p>Resume Builder (MERN) – Created a full-stack Resume Builder using MongoDB, Express.js, React, Node.js, and Tailwind CSS. Features responsive design, secure APIs, and real-time form updates — showcasing end-to-end web app development skills.
            <br/>Live Project: https://resumexpert-frontend.onrender.com/
          </p>
        </div>
      </div>
    </section>
  );
}
export default Projects;
