import { Session } from "@/types/session";

const sessionsData: Session[] = [
  {
    id: 1,
    title: 'Free Online Call',
    description: "Let's start! Book this call if you want to meet me, resolve doubts and understand better how kundalini activation can improve your life",
    price: 'Free',
    imageURL: '/images/sessions/free.png',


    booking: true,
    bookingLink: 'https://tidycal.com/danielawakenscarlet/free-call'
  },
  {
    id: 2,
    title: '1:1 Sessions Online',
    description: 'Energy transcends space and time allowing to transmit energy in different parts of the world',
    price: '50€',
    imageURL: '/images/sessions/online.png',

    booking: true,
    bookingLink: 'https://tidycal.com/danielawakenscarlet/online'
  },
  {
    id: 3,
    title: '1:1 Sessions Barcelona',
    description: 'Presential sessions currently in Barcelona. In the heart of Gracia neibourhood. Book or contact me for details',
    price: '150€',
    imageURL: '/images/sessions/presential.png',


    booking: true,
    bookingLink: 'https://tidycal.com/danielawakenscarlet/in-person'
  },
  {
    id: 4,
    title: 'Group Sessions',
    description: 'In group energy field is shared and maximised. Contact me to know when is the next event',
    price: '50€',
    imageURL: '/images/sessions/group.png',


    booking: false,
  },
];
export default sessionsData;