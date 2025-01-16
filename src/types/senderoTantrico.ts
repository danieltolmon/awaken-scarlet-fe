export type SenderoTantrico = {
  logros: {
    id: number;
    title: string;
    description: string;
  }[],
  programa: {
    description: string,
    semanas: {
      titulo: string, puntos: string[]

    }[]
  },
  para: string[]
};
