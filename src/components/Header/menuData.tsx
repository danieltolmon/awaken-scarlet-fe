import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  // {
  //   id: 1,
  //   title: "home.",
  //   path: "/",
  //   scroll: true,
  //   newTab: false,
  // },
  // {
  //   id: 2,
  //   title: "daka.",
  //   path: "/daka",
  //   scroll: false,
  //   newTab: false,
  // },
  // {
  //   id: 3,
  //   title: "kundalini.",
  //   path: "/kundalini",
  //   scroll: true,
  //   newTab: false,
  // },
  {
    id: 4,
    title: "servicios.",
    // path: "/sessions",
    scroll: true,
    newTab: false,
    submenu: [{
      id: 41,
      title: "transmision energetica SER",
      path: "/sessions",
      scroll: true,
      newTab: false,
    },
    {
      id: 42,
      title: "el sendero del hombre tántrico",
      path: "/sendero-tantrico",
      scroll: true,
      newTab: false,
    },
      //   // {
      //   //   id: 43,
      //   //   title: "circulo de hombres",
      //   //   path: "/circulo",
      //   //   scroll: true,
      //   //   newTab: false,
      //   // },

      //   // {
      //   //   id: 44,
      //   //   title: "masaje tántrico sanador",
      //   //   path: "/masaje-tantrico",
      //   //   scroll: true,
      //   //   newTab: false,
      //   // },
      //   {
      //     id: 45,
      //     title: "𖧷 mentoría privada",
      //     path: "/mentoria",
      //     scroll: true,
      //     newTab: false,
      // },
    ],
  },
  // {
  //   id: 41,
  //   title: "transmision energetica SER",
  //   path: "/sessions",
  //   scroll: true,
  //   newTab: false,
  // },
  // {
  //   id: 42,
  //   title: "hombre tantrico",
  //   path: "/sendero-tantrico",
  //   scroll: true,
  //   newTab: false,
  // },
  {
    id: 5,
    title: "sobre.",
    path: "/daniel",
    scroll: false,
    newTab: false,
  },
  {
    id: 6,
    title: "contacto.",
    path: "/contact",
    scroll: true,
    newTab: false,
  }
];
export default menuData;
