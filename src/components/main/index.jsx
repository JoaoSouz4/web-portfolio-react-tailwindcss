import AboutMe from "../../pages/about";
import Apresentation from "../../pages/apresentation";
import Contact from "../../pages/contact";
import MyProjects from "../../pages/myProjects";
import { FormProvider } from "../../context/FormContext";
import Modal from "../modal";
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import Alert from "../alert";

export default function Main(){
    return(
        <>
            <Modal.Root>
                ss
            </Modal.Root>

            <Alert />
            <main className = 'max-w-[100vw] md:max-w-[1200px] px-4 md:px-10'>
                <Element name = 'apresentation'>
                    <Apresentation />
                </Element>

                <Element name = 'about'>
                    <AboutMe />
                </Element>

                <Element name = 'myprojects'>
                    <MyProjects />
                </Element>

                <Element name = 'contact'>
                    <FormProvider>
                        <Contact />
                    </FormProvider>
                </Element>
            </main>
        </>
    )
}