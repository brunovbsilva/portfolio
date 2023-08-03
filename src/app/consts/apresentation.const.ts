import { ApresentationButtonType, ApresentationModel } from "../main-page/models/apresentation.model";

export const apresentationEN: ApresentationModel = {
    greatings: "Hello 👋 I'm Bruno",
    firstLine: "Web",
    secondLine: "Developer",
    description: "I have 3 years of professional experience in fullstack web development. Working mainly with .NET and Angular. I often find myself looking for new technologies knowing that there are always several ways to do something. I am ready to contribute with innovative solutions and seek technical excellence.",
    buttons: [
      { 
        type: ApresentationButtonType.link,
        tooltip: "Linkedin",
        value: 'https://www.linkedin.com/in/bruno-vinicius-346b77163/',
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
    description: "Tenho 3 anos de experiência profissional em desenvolvimento web fullstack. Trabalhando principalmente com .NET e Angular. Muitas vezes me pego procurando novas tecnologias sabendo que sempre existem várias formas de fazer algo. Estou pronto para contribuir com soluções inovadoras e buscar a excelência técnica.",
    buttons: [
      {
        type: ApresentationButtonType.link,
        tooltip: "Linkedin",
        value: 'https://www.linkedin.com/in/bruno-vinicius-346b77163/',
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