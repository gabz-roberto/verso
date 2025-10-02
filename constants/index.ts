export const navigationLinks = [
  {
    href: "/library",
    label: "Library",
  },

  {
    img: "/icons/user.svg",
    selectedImg: "/icons/user-fill.svg",
    href: "/my-profile",
    label: "My Profile",
  },
];

export const adminSideBarLinks = [
  {
    img: "/icons/admin/home.svg",
    route: "/admin",
    text: "Home",
  },
  {
    img: "/icons/admin/users.svg",
    route: "/admin/users",
    text: "All Users",
  },
  {
    img: "/icons/admin/book.svg",
    route: "/admin/books",
    text: "All Books",
  },
  {
    img: "/icons/admin/bookmark.svg",
    route: "/admin/book-requests",
    text: "Borrow Requests",
  },
  {
    img: "/icons/admin/user.svg",
    route: "/admin/account-requests",
    text: "Account Requests",
  },
];

export const FIELD_NAMES = {
  fullName: "Full name",
  email: "Email",
  universityId: "University ID Number",
  password: "Password",
  universityCard: "Upload University ID Card",
};

export const FIELD_TYPES = {
  fullName: "text",
  email: "email",
  universityId: "number",
  password: "password",
};

export const sampleBooks = [
  {
    id: 1,
    title: "Dom Casmurro",
    author: "Machado de Assis",
    genre: "Romance / Literatura Brasileira",
    rating: 4.8,
    total_copies: 30,
    available_copies: 15,
    description:
      "A clássica obra de Machado de Assis, narrada por Bentinho, que revisita sua vida marcada pelo ciúme e pela dúvida em relação a Capitu.",
    color: "#2c2c2c",
    cover: "https://m.media-amazon.com/images/I/61x1ZHomWUL._SL1200_.jpg",
    video: "/sample-video.mp4",
    summary:
      "Obra-prima de Machado de Assis que retrata com ironia e profundidade psicológica a relação de Bentinho e Capitu.",
    isLoanedBook: true,
  },
  {
    id: 2,
    title: "Grande Sertão: Veredas",
    author: "João Guimarães Rosa",
    genre: "Romance / Regionalismo",
    rating: 4.9,
    total_copies: 20,
    available_copies: 10,
    description:
      "Uma das maiores obras da literatura brasileira, acompanhando Riobaldo em sua jornada pelo sertão e suas reflexões filosóficas.",
    color: "#7c4a2d",
    cover: "https://m.media-amazon.com/images/I/81NtboFZziL._SL1440_.jpg",
    video: "/sample-video.mp4",
    summary:
      "Clássico de Guimarães Rosa que une poesia, filosofia e a força da oralidade sertaneja.",
  },
  {
    id: 3,
    title: "Vidas Secas",
    author: "Graciliano Ramos",
    genre: "Romance / Regionalismo",
    rating: 4.7,
    total_copies: 25,
    available_copies: 5,
    description:
      "História comovente de uma família sertaneja em luta contra a seca, narrada com realismo social e concisão literária.",
    color: "#d1bfa7",
    cover: "https://m.media-amazon.com/images/I/618-b9Im6dL._SL1457_.jpg",
    video: "/sample-video.mp4",
    summary:
      "Um retrato poderoso da miséria, da esperança e da luta pela sobrevivência no sertão nordestino.",
  },
  {
    id: 4,
    title: "Capitães da Areia",
    author: "Jorge Amado",
    genre: "Romance / Literatura Social",
    rating: 4.6,
    total_copies: 40,
    available_copies: 22,
    description:
      "A história de meninos de rua em Salvador, denunciando desigualdades sociais e explorando a liberdade e os dramas da juventude.",
    color: "#e4c289",
    cover: "https://m.media-amazon.com/images/I/81t7altQZxL._SL1500_.jpg",
    video: "/sample-video.mp4",
    summary:
      "Um dos livros mais marcantes de Jorge Amado, repleto de crítica social e humanismo.",
  },
  {
    id: 5,
    title: "O Guarani",
    author: "José de Alencar",
    genre: "Romance / Indianista",
    rating: 4.5,
    total_copies: 18,
    available_copies: 12,
    description:
      "Romance indianista que conta a história de Peri, um índio corajoso e leal, em sua relação com a jovem Cecília.",
    color: "#375d46",
    cover: "https://m.media-amazon.com/images/I/7125-MeD+KL._SL1360_.jpg",
    video: "/sample-video.mp4",
    summary:
      "Um marco do romantismo brasileiro, exaltando a natureza e os povos indígenas.",
  },
  {
    id: 6,
    title: "Iracema",
    author: "José de Alencar",
    genre: "Romance / Indianista",
    rating: 4.6,
    total_copies: 15,
    available_copies: 7,
    description:
      "A trágica história de amor entre Iracema, índia tabajara, e Martim, um colonizador português.",
    color: "#a85943",
    cover: "https://m.media-amazon.com/images/I/71LCDi6E2oL._SL1500_.jpg",
    video: "/sample-video.mp4",
    summary:
      "Obra lírica e simbólica que marca o indianismo no romantismo brasileiro.",
  },
  {
    id: 7,
    title: "O Cortiço",
    author: "Aluísio Azevedo",
    genre: "Romance / Naturalismo",
    rating: 4.7,
    total_copies: 22,
    available_copies: 10,
    description:
      "Retrato vivo da vida em um cortiço do Rio de Janeiro, explorando as tensões sociais, econômicas e culturais.",
    color: "#444444",
    cover: "https://m.media-amazon.com/images/I/61hI7QLrTkL._SL1021_.jpg",
    video: "/sample-video.mp4",
    summary:
      "Um dos maiores romances naturalistas do Brasil, analisando a influência do meio na vida das pessoas.",
  },
  {
    id: 8,
    title: "Macunaíma",
    author: "Mário de Andrade",
    genre: "Modernismo / Romance",
    rating: 4.4,
    total_copies: 28,
    available_copies: 15,
    description:
      "A rapsódia modernista sobre o herói sem nenhum caráter, que atravessa o Brasil em aventuras míticas e críticas sociais.",
    color: "#e6e6e6",
    cover: "https://m.media-amazon.com/images/I/71kADstk2gL._SL1358_.jpg",
    video: "/sample-video.mp4",
    summary:
      "Símbolo do modernismo brasileiro, mistura mitologia, crítica cultural e linguagem inovadora.",
  },
];
