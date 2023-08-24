import AboutMe from "../../pages/about";
import Apresentation from "../../pages/apresentation";
import MyProjects from "../../pages/myProjects";

export default function Main(){
    return(
        <main className = 'max-w-[1200px]'>
            <Apresentation />
            <AboutMe />
            <MyProjects />
        </main>
    )
}