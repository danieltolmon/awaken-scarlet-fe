import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "home.",
    path: "/",
    scroll: true,
    newTab: false,
  },
  {
    id: 2,
    title: "scarlet.",
    path: "/#scarlet",
    scroll: false,
    newTab: false,
  },
  {
    id: 3,
    title: "kundalini.",
    path: "/kundalini",
    scroll: true,
    newTab: false,
  },
  {
    id: 4,
    title: "sessions.",
    path: "/#sessions",
    scroll: true,
    newTab: false,
  },
  {
    id: 5,
    title: "daniel.",
    path: "/about",
    scroll: false,
    newTab: false,
  },
  {
    id: 6,
    title: "contact.",
    path: "/contact",
    scroll: true,
    newTab: false,
  }
];
export default menuData;
