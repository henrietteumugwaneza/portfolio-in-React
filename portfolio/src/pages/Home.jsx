import React from "react"
import "../styles/hero.css"

function Home(){
  return(
    <section className="hero">
      <h1>Hi, I'm <span>Henrich</span></h1>
      <p>Frontend Developer | React Developer</p>
      <button onClick={()=>window.location.href="/projects"}>View Projects</button>
    </section>
  )
}

export default Home