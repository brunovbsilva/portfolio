import { ProjectsModel } from "../main-page/models/project.model";

export const projectsEN : ProjectsModel = {
    header: 'Projects',
    projects: [
      {
        title: "AirFinder",
        description: "Personal project that aims to facilitate the search for Air-Soft games. It was developed in C# and Angular, it is not released yet and it is not hosted anywhere.",
        imagePath: 'assets/images/air-finder.png',
        buttons: [
          { type: 'code', link: 'https://gitfront.io/r/brunovbsilva/h58r3DCZ9UpB/air-finder/', tooltip: 'View back-end code' },
          { type: 'code', link: 'https://gitfront.io/r/brunovbsilva/kDFY9r3UuLhW/angular-air-finder/', tooltip: 'View front-end code' },
        ]
      },
      {
        title: "Portfolio",
        description: "This project is my personal portfolio. It was developed using Angular and Material Design. It is a SPA (Single Page Application) and is hosted on Github Pages.",
        imagePath: 'assets/images/portfolio.png',
        buttons: [
          { type: 'code', link: 'https://github.com/brunovbsilva/portfolio', tooltip: 'View code' },
          { type: 'open_in_new', link: 'https://brunovbsilva.github.io/portfolio/', tooltip: 'Open project' },
        ]
      },
    ]
};

export const projectsPT : ProjectsModel = {
    header: 'Projetos',
    projects: [
      {
        title: "AirFinder",
        description: "Projeto pessoal que visa facilitar a procura por jogos de Air-Soft. Foi desenvolvido em C# e Angular, ainda não foi lançado e não está hospedado em nenhum lugar.",
        imagePath: 'assets/images/air-finder.png',
        buttons: [
          { type: 'code', link: 'https://gitfront.io/r/brunovbsilva/h58r3DCZ9UpB/air-finder/', tooltip: 'Ver código back-end' },
          { type: 'code', link: 'https://gitfront.io/r/brunovbsilva/kDFY9r3UuLhW/angular-air-finder/', tooltip: 'Ver código front-end' },
        ]
      },
      {
        title: "Portfólio",
        description: "Este projeto é o meu portfólio pessoal. Foi desenvolvido utilizando Angular e Material Design. É uma SPA (Single Page Application) e está hospedado no Github Pages.",
        imagePath: 'assets/images/portfolio.png',
        buttons: [
          { type: 'code', link: 'https://github.com/brunovbsilva/portfolio', tooltip: 'Ver código' },
          { type: 'open_in_new', link: 'https://brunovbsilva.github.io/portfolio/', tooltip: 'Abrir projeto' },
        ]
      },
    ]
};
