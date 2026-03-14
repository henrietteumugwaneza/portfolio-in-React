import React from "react"
import { useQuery } from "@tanstack/react-query"
import "../styles/projects.css"

function Projects(){

  const { data, isLoading } = useQuery(["repos"], ()=>{
    return fetch("https://api.github.com/users/github_username/repos").then(res=>res.json())
  })

  if(isLoading) return <p style={{textAlign:"center"}}>Loading...</p>

  return(
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {data.map(repo=>(
          <div className="project-card" key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <a href={repo.html_url} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects