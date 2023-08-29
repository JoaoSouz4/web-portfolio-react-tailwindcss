import repositoriocriativo from '../assets/projects/repositorio-criativo.png'
import screenmanager from '../assets/projects/screen-manager.png';

const projects = [
    {
        id: 0,
        title: "Repositório criativo",
        description: "Web App desenvolvido para ser meu portfólio para divulgar minhas ilustrações. Usuários uma vez cadastrados e autenticados podem curtir e comentar posts",
        img: repositoriocriativo,
        url: {
            linkedin: '',
            gitHub: 'https://github.com/JoaoSouz4/frontend_rc',
            app: 'https://repositoriocriativo.vercel.app/',
        },
        stacks: {
            frontEnd: ['react', 'vite', 'styledcomponents'],
            backEnd: ['node', 'mongodb', 'express'],
        }
    },
    {

        id: 1,
        title: "Screen Manager",
        description: "Aplicação desktop para uma assistência técnica em que trabalhei. Sua função é registrar e gerenciar informação sobre Displays de celulares Aplicação desktop para uma assistência técnica em que trabalhei. Sua função é registrar e gerenciar informação ",
        img: screenmanager,
        url: {
            linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7096593063929667584/',
            gitHub: 'https://github.com/JoaoSouz4/ScreenManager-React-Electron',
            app: '',
        },
        stacks: {
            frontEnd: ['react', 'vite', 'electron', 'tailwind'],
            backEnd: ['node', 'express', 'mongodb'],
        }
    },
    

]

export default projects;