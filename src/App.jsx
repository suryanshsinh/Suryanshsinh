import React from "react"
import Navbar from "./components/Navbar"
import Window from "./components/Window"
import ProjectCard from "./components/ProjectCard"

export default function App() {
    const [workPage, setWorkPage] = React.useState(true);

    return (
        <div className="app"><div className="glare-top"></div>
            <Navbar workPage={workPage} setWorkPage={setWorkPage}/>
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