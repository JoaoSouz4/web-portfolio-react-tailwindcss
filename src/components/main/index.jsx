import AboutMe from '../../pages/about';
import Apresentation from '../../pages/apresentation';
import Contact from '../../pages/contact';
import MyProjects from '../../pages/myProjects';
import { FormProvider } from '../../context/FormContext';
import Modal from '../modal';
import { Element } from 'react-scroll';
import Alert from '../alert';

export default function Main() {
  return (
    <>
      <Modal.Root>ss</Modal.Root>

      <Alert />
      <main className="max-w-[100dvw] md:max-w-[1200px] md:px-10">
        <Element name="apresentation">
          <Apresentation />
        </Element>

        <Element
          name = "projects"
          className = 'gap-2 md:flex md:flex-col md:justify-center md:gap-8 md:h-[100dvh] mb-8 '
        >
          
            <AboutMe />
            <MyProjects />
          
        </Element>

        <Element name="contact">
          <FormProvider>
            <Contact />
          </FormProvider>
        </Element>
      </main>
    </>
  );
}
