import AboutMe from "../../pages/about";
import Apresentation from "../../pages/apresentation";
import Contact from "../../pages/contact";
import MyProjects from "../../pages/myProjects";

export default function Main(){
    return(
        <main className = 'max-w-[100vw] md:max-w-[1200px] px-4 md:px-10'>
            <Apresentation />
            <AboutMe />
            <MyProjects />
            <Contact />
        </main>
    )
}