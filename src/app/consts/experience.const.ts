import { ExperienceModel } from "../main-page/models/experience.model";

export const experienceEN: ExperienceModel = {
    header: 'Experience',
    jobs: [
      {
        position: 'Fullstack Developer',
        company: 'Stefanini',
        description: 'Development of the Trading platform for Raízen, one of the largest energy companies in Brazil. In this platform, customers can request fuel and petroleum derivatives deliveries, as well as track and manage their deliveries and account statements. The system was developed using a microservices architecture, .NET Core, Angular, and SQL Server.',
        startDate: new Date(2022, 8, 1),
        skills: ['C#', 'Angular', 'Docker', 'Azure', 'CI/CD']
      },
      {
        position: 'Fullstack Developer',
        company: 'Portway',
        description: 'Migration and support in a sales management system for multinational companies. The system was migrated from a monolithic architecture built on .NET Core MVC to a microservices architecture. It was developed using .NET Core, Angular, and SQL Server.',
        startDate: new Date(2020, 10, 1),
        endDate: new Date(2022, 7, 1),
        skills: ['C#', 'Angular', 'Ionic', 'Git', 'SQL Server']
      },
    ]
};

export const experiencePT: ExperienceModel = {
    header: 'Experiência',
    jobs: [
      {
        position: 'Desenvolvedor Fullstack',
        company: 'Stefanini',
        description: 'Desenvolvimento da plataforma de Trading para a Raízen, uma das maiores empresas de energia do Brasil. Nesta plataforma, os clientes podem solicitar entregas de combustíveis e derivados de petróleo, além de acompanhar e gerenciar suas entregas e extratos de conta. O sistema foi desenvolvido utilizando uma arquitetura de microsserviços, .NET Core, Angular e SQL Server.',
        startDate: new Date(2022, 8, 1),
        skills: ['C#', 'Angular', 'Docker', 'Azure', 'CI/CD']
      },
      {
        position: 'Desenvolvedor Fullstack',
        company: 'Portway',
        description: 'Migração e suporte em um sistema de gestão de vendas para empresas multinacionais. O sistema foi migrado de uma arquitetura monolítica construída em .NET Core MVC para uma arquitetura de microsserviços. Foi desenvolvido utilizando .NET Core, Angular e SQL Server.',
        startDate: new Date(2020, 10, 1),
        endDate: new Date(2022, 7, 1),
        skills: ['C#', 'Angular', 'Ionic', 'Git', 'SQL Server']
      },
    ]
};