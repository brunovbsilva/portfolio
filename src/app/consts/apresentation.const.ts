import { ApresentationButtonType, ApresentationModel } from "../main-page/models/apresentation.model";

const years = new Date().getFullYear() - 2019;

export const apresentationEN: ApresentationModel = {
    greatings: "Hello 👋 I'm Bruno",
    firstLine: "Web",
    secondLine: "Developer",
    description: `I have ${years} years of professional experience in fullstack web development. Working mainly with .NET and Angular. I am ready to contribute with innovative solutions and technical excellence.`,
    buttons: [
      { 
        type: ApresentationButtonType.link,
        tooltip: "Linkedin",
        value: 'https://www.linkedin.com/in/bruno-silva-346b77163',
        svgIcon: 'linkedin' 
      },
      { 
        type: ApresentationButtonType.link,
        tooltip: 'Github',
        value: 'https://github.com/brunovbsilva',
        svgIcon: 'github' 
      },
      { 
        type: ApresentationButtonType.copy,
        tooltip: "Copy Discord tag",
        value: 'sonynz',
        svgIcon: 'discord',
        snackbar: "Copied to clipboard!"
      },
      { 
        type: ApresentationButtonType.copy,
        tooltip: "Copy email",
        value: 'brunovinicius0704@gmail.com',
        svgIcon: 'email',
        snackbar: "Copied to clipboard!"
      }
    ]
  };

  export const apresentationPT: ApresentationModel = {
    greatings: "Olá 👋 Eu sou o Bruno",
    firstLine: "Web",
    secondLine: "Developer",
    description: `Tenho ${years} anos de experiência profissional em desenvolvimento web fullstack. Trabalhando principalmente com .NET e Angular. Estou pronto para contribuir com soluções inovadoras e excelência técnica.`,
    buttons: [
      {
        type: ApresentationButtonType.link,
        tooltip: "Linkedin",
        value: 'https://www.linkedin.com/in/bruno-silva-346b77163',
        svgIcon: 'linkedin'
      },
      {
        type: ApresentationButtonType.link,
        tooltip: 'Github',
        value: 'https://github.com/brunovbsilva',
        svgIcon: 'github'
      },
      {
        type: ApresentationButtonType.copy,
        tooltip: "Copiar tag do Discord",
        value: 'sonynz',
        svgIcon: 'discord',
        snackbar: "Copiado para a área de transferência!",
      },
      {
        type: ApresentationButtonType.copy,
        tooltip: "Copiar email",
        value: 'brunovinicius0704@gmail.com',
        svgIcon: 'email',
        snackbar: "Copiado para a área de transferência!",
      }
    ]
  };