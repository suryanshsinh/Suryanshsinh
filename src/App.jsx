import React from "react"
import Navbar from "./components/Navbar"
import Window from "./components/Window"
import ProjectCard from "./components/ProjectCard"

export default function App() {
    return (
        <div className="app"><div className="glare-top"></div>
            <Navbar />
            <main>
                <Window />
                <div className="fade-out"></div>
            </main>
            <section>
                <ProjectCard />
            </section>
        </div>
    )
}