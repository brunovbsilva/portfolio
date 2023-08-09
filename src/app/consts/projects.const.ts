import { ProjectsModel } from "../main-page/models/project.model";

export const projectsEN : ProjectsModel = {
    header: 'Projects',
    projects: [
      {
        title: "Portfolio",
        description: "This project is my personal portfolio. It was developed using Angular and Material Design. It is a SPA (Single Page Application) and is hosted on Github Pages.",
        imagePath: 'assets/images/portfolio.png',
        buttons: [
          { type: 'code', link: 'https://github.com/brunovbsilva/portfolio', tooltip: 'View code' },
          { type: 'open_in_new', link: 'https://brunovbsilva.github.io/portfolio/', tooltip: 'Open project' },
        ]
      },
      { 
        title: 'Under construction...',
        description: "Under construction. There will be more features soon...",
        loading: true
      },
    ]
};

export const projectsPT : ProjectsModel = {
    header: 'Projetos',
    projects: [
      {
        title: "Portfólio",
        description: "Este projeto é o meu portfólio pessoal. Foi desenvolvido utilizando Angular e Material Design. É uma SPA (Single Page Application) e está hospedado no Github Pages.",
        imagePath: 'assets/images/portfolio.png',
        buttons: [
          { type: 'code', link: 'https://github.com/brunovbsilva/portfolio', tooltip: 'Ver código' },
          { type: 'open_in_new', link: 'https://brunovbsilva.github.io/portfolio/', tooltip: 'Abrir projeto' },
        ]
      },
      { 
        title: "Em construção...",
        description: "Em construção. Em breve terá mais funcionalidades...",
        loading: true 
      }
    ]
};
