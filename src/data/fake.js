const notes = [
  {
    title: 'Hello World',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sed est atque sequi delectus at fugit numquam voluptate temporibus praesentium iure, repellendus laborum porro amet qua!',
    block_name: 'Primeiro caderno',
  },
  {
    title: 'React Hooks',
    text: 'useStateconst [sidebarOn, setSidebarOn] React.useState(false);',
    block_name: 'React',
  },
  {
    title: 'Arquitetura Flux',
    text:
      'Biblioteca : Redux implementa a arquitetura flux Controle de estados globais manipulado por vários componentes O',
    block_name: 'Redux',
  },
  {
    title: 'prova java oo',
    text:
      'Lorem ipsum, dolor sit amet voluptate temporibus praesentium iure, repellendus laborum porro amet quas voluptatibus? Atque, facilis quo!',
    block_name: 'Faculdade',
  },
  {
    title: 'Pendências',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sed est atque sequi delectus at fugit numquam voluptate temporibus praesentium iure, repellendus laborum porro amet quas voluptatibus? Atque, facilis quo!',
    block_name: 'Primeiro caderno',
  },
  {
    title: 'Leitura',
    text:
      'Lorem ipsum, dolor dipisicing elit. Architecto sed est atque sequi delectus at fugit numquam voluptate temporibus praesentium iure, repellendus laborum porro amet quas voluptatibus? Atque, facilis quo!',
    block_name: 'Marcações, livros',
  },

  {
    title: 'Javascript select item',
    text:
      'Lorem ipsum, dolor sit amet consectetur temporibus praesentium iure, repellendus laborum porro amet quas voluptatibus? Atque, facilis quo!',
    block_name: 'Javascript',
  },
  {
    title: 'Bootcamp',
    text:
      'met consectetur  Architecto sed est atque sequi delectus at fugit numquam voluptate temporibus praesentium iure, repellendus laborum porro amet quas voluptatibus? Atque, facilis quo!',
    block_name: 'Cursos',
  },
  {
    title: 'Redux, Redux Saga, Axios',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sed est atque ',
    block_name: 'Redux',
  },
  {
    title: 'Sistemas Operacionais',
    text:
      'conteúdo para prova possível questão: Um processador não executa vários processos "ao mesmo tempo", oque acontece é uma mudança de contexto lembrar osregistradores ** Shell - interpretador de comandos Gui - interface gráfica',
    block_name: 'Faculdade',
  },
  // {
  //   title: 'prova java oo',
  //   text:
  //     'Lorem ipsum, dolor sit amet voluptate temporibus praesentium iure, repellendus laborum porro amet quas voluptatibus? Atque, facilis quo!',
  // },
  // {
  //   title: 'Pendências',
  //   text:
  //     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sed est atque sequi delectus at fugit numquam voluptate temporibus praesentium iure, repellendus laborum porro amet quas voluptatibus? Atque, facilis quo!',
  // },
  // {
  //   title: 'Leitura',
  //   text:
  //     'Lorem ipsum, dolor dipisicing elit. Architecto sed est atque sequi delectus at fugit numquam voluptate temporibus praesentium iure, repellendus laborum porro amet quas voluptatibus? Atque, facilis quo!',
  // },
];

const notesblock = [
  {
    title: 'Hello World',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sed est atque sequi delectus at fugit numquam voluptate temporibus praesentium iure, repellendus laborum porro amet qua!',
    block_name: 'Primeiro caderno',
  },
  {
    title: 'React Hooks',
    text: 'useStateconst [sidebarOn, setSidebarOn] React.useState(false);',
    block_name: 'Primeiro caderno',
  },
  {
    title: 'Arquitetura Flux',
    text:
      'Biblioteca : Redux implementa a arquitetura flux Controle de estados globais manipulado por vários componentes O',
    block_name: 'Primeiro caderno',
  },
  {
    title: 'prova java oo',
    text:
      'Lorem ipsum, dolor sit amet voluptate temporibus praesentium iure, repellendus laborum porro amet quas voluptatibus? Atque, facilis quo!',
    block_name: 'Primeiro caderno',
  },
  {
    title: 'Pendências',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sed est atque sequi delectus at fugit numquam voluptate temporibus praesentium iure, repellendus laborum porro amet quas voluptatibus? Atque, facilis quo!',
    block_name: 'Primeiro caderno',
  },
  {
    title: 'Leitura',
    text:
      'Lorem ipsum, dolor dipisicing elit. Architecto sed est atque sequi delectus at fugit numquam voluptate temporibus praesentium iure, repellendus laborum porro amet quas voluptatibus? Atque, facilis quo!',
    block_name: 'Primeiro caderno',
  },
];

const decks = [
  {
    id: 1,
    title: 'Atalhos teclado',
    cards: 32,
    review: 12,
    reviewed: 12,
  },
  {
    id: 2,
    title: 'Conceitos React',
    cards: 21,
    review: 10,
    reviewed: 8,
  },
  {
    id: 3,
    title: 'Palavras em inglês',
    cards: 43,
    review: 22,
    reviewed: 4,
  },
  {
    id: 3,
    title: 'Marcações, livros',
    cards: 76,
    review: 42,
    reviewed: 11,
  },
];

const blocknotes = [
  {
    id: 1,
    title: 'Primeiro caderno',
    notes: 32,
  },
  {
    id: 2,
    title: 'Faculdade',
    notes: 21,
    review: 10,
    reviewed: 8,
  },
  {
    id: 3,
    title: 'Redux',
    notes: 43,
  },
  {
    id: 3,
    title: 'Marcações, livros',
    notes: 76,
  },
];

const notifications = [
  {
    id: 1,
    title: 'Notificação 01',
    content: 'Texto que vai na notificação com 1 linha',
    date: '01/07/2020 - 15:10',
    newNotification: true,
    read: false,
  },
  {
    id: 2,
    title: 'Notificação 02',
    content:
      'Texto que vai na notificação com 2 linhas mas alinhada à esquerda, que ficará assim',
    date: '01/07/2020 - 15:10',
    newNotification: false,
    read: false,
  },
  {
    id: 3,
    title: 'Notificação 03',
    content:
      'Texto que vai na notificação com 3 linhas mas alinhada à esquerda, que ficará assim. Contando que fique sempre fique... Ver mais',
    date: '01/07/2020 - 15:10',
    newNotification: false,
    read: true,
  },
  {
    id: 3,
    title: 'Notificação 01',
    content: 'Texto que vai na notificação com 1 linha',
    date: '01/07/2020 - 15:10',
    newNotification: false,
    read: true,
  },
  {
    id: 3,
    title: 'Notificação 01',
    content: 'Texto que vai na notificação com 1 linha',
    date: '01/07/2020 - 15:10',
    newNotification: false,
    read: true,
  },
  {
    id: 3,
    title: 'Notificação 01',
    content: 'Texto que vai na notificação com 1 linha',
    date: '01/07/2020 - 15:10',
    newNotification: false,
    read: true,
  },
  {
    id: 3,
    title: 'Notificação 01',
    content: 'Texto que vai na notificação com 1 linha',
    date: '01/07/2020 - 15:10',
    newNotification: false,
    read: true,
  },
  {
    id: 3,
    title: 'Notificação 01',
    content: 'Texto que vai na notificação com 1 linha',
    date: '01/07/2020 - 15:10',
    newNotification: false,
    read: true,
  },
  {
    id: 3,
    title: 'Notificação 01',
    content: 'Texto que vai na notificação com 1 linha',
    date: '01/07/2020 - 15:10',
    newNotification: false,
    read: true,
  },
  {
    id: 3,
    title: 'Notificação 01',
    content: 'Texto que vai na notificação com 1 linha',
    date: '01/07/2020 - 15:10',
    newNotification: false,
    read: true,
  },
];

export { notes, notifications, decks, blocknotes, notesblock };
