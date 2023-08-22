import repositoriocriativo from '../assets/projects/repositorio-criativo.png'
import screenmanager from '../assets/projects/screen-manager.png';

const projects = [
    {
        id: "1",
        title: "Repositório criativo",
        description: "Web App desenvolvido para ser meu portfólio para divulgar minhas ilustrações. Usuários uma vez cadastrados e autenticados podem curtir e comentar posts",
        img: repositoriocriativo,
        url: {
            linkedin: '',
            gitHub: '',
            app: '',
        },
        stacks: ['React', 'javaScript', 'TypeScript', 'MongoDB', 'NodeJs', 'Styled-Components', 'Express']
    },
    {

        id: 1,
        title: "Screen Manager",
        description: "Aplicação desktop para uma assistência técnica em que trabalhei. Sua função é registrar e gerenciar informação a respeito de Displays de celulares, com o propósito de tornar o atendimento mais ágil.",
        img: screenmanager,
        url: {
            linkedin: '',
            gitHub: '',
            app: '',
        },
        stacks: ['React', 'Electron', 'Tailwindcss', 'NodeJs', 'Express', 'MongoDB']
    }

]

export default projects;