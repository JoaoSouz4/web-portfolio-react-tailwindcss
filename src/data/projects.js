const projects = [
  {
    id: 0,
    title: 'Repositório criativo',
    description:
      'Web App desenvolvido para ser meu portfólio para divulgar minhas ilustrações. Usuários uma vez cadastrados e autenticados podem curtir e comentar posts',
    url: {
      linkedin: '',
      gitHub: 'https://github.com/JoaoSouz4/frontend_rc',
      app: 'https://rcjoaosouza.vercel.app/',
    },
    stacks: {
      frontEnd: ['react', 'vite', 'styledcomponents'],
      backEnd: ['node', 'mongodb', 'express'],
    },
  },
  {
    id: 1,
    title: 'Hero Path',
    description:
      'Para colecionares de quadrinhos iniciantes que buscam as melhores histórias de super-heróis para ter na coleção',
    url: {
      linkedin:
        'https://www.linkedin.com/feed/update/urn:li:activity:7096593063929667584/',
      gitHub: 'https://github.com/JoaoSouz4/ScreenManager-React-Electron',
      app: 'https://heropathproject.vercel.app/',
    },
    stacks: {
      frontEnd: ['react', 'vite', 'electron', 'tailwind'],
      backEnd: ['node', 'express', 'mongodb'],
    },
  },
];

export default projects;
