import { Session } from "@/types/session";

const sessionsData: Session[] = [
  {
    id: 1,
    title: '1:1 Sessions Online',
    description: 'Energy transcends space and time allowing to transmit energy in different parts of the world',
    price: '50€',
    imageURL: '/images/sessions/online.png',

    booking: true,
    bookingLink: 'https://tidycal.com/danielawakenscarlet/online'
  },
  {
    id: 2,
    title: '1:1 Sessions in Barcelona',
    description: 'Presential sessions currently in Barcelona. In the heart of Gracia neibourhood. Book or contact me for details',
    price: '150€',
    imageURL: '/images/sessions/presential.png',


    booking: true,
    bookingLink: 'https://tidycal.com/danielawakenscarlet/in-person'
  },
  {
    id: 3,
    title: 'Group Sessions in Barcelona and Online',
    description: 'In group energy field is shared and maximised. Contact me and join the whatsapp group to do not miss this experience',
    price: '50€',
    imageURL: '/images/sessions/group.png',


    booking: false,
  }
];
export default sessionsData;