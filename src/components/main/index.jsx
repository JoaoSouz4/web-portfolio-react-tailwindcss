import AboutMe from "../../pages/about";
import Apresentation from "../../pages/apresentation";
import Contact from "../../pages/contact";
import MyProjects from "../../pages/myProjects";

export default function Main(){
    return(
        <main className = 'max-w-[1200px] px-4'>
            <Apresentation />
            <AboutMe />
            <MyProjects />
            <Contact />
        </main>
    )
}