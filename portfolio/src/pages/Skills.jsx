import React from "react"
import "../styles/skills.css"

const skills = ["React", "JavaScript", "HTML", "CSS", "Git", "API Integration"]

function Skills(){
  return(
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill,i)=>(
          <div key={i} className="skill-card">{skill}</div>
        ))}
      </div>
    </section>
  )
}

export default Skills