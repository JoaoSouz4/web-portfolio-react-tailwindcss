import AboutMe from "../../pages/about";
import Apresentation from "../../pages/apresentation";
import Contact from "../../pages/contact";
import MyProjects from "../../pages/myProjects";

export default function Main(){
    return(
        <main className = 'max-w-[1200px]'>
            <Apresentation />
            <AboutMe />
            <MyProjects />
            <Contact />
        </main>
    )
}