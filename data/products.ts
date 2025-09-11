export interface ProductType {
  id: string;
  title: string;
  description?: string;
  price: number;
  image?: string;
  available: boolean;
  sizes: string[];
}

export const initialProducts: ProductType[] = [
  {
    id: "sh-t-01",
    title: "Swanholm Alert Vest 01 Electronic collar included",
    description: `An AI driven safety vest, class 2, with accompanying electronic collar for connectivity and alarm functionality.
          The electronics is easily snapped in into the vest collar and is controlled with a button and also the Sense app.
          Alert Vest 01 levereras med aktiva ljus över axlarna. Dessa ljus är av självlysande färg och gör personen mycket synlig när man bär västen i mörkret.
          Plastic hook on elastic band in front left pocket.`,
    price: 613,
    image: "",
    available: true,
    sizes: ["S", "M", "L"],
  },
  {
    id: "sh-t-02",
    title: "Swanholm Alert Vest 02 Electronic collar included",
    description: `An AI driven safety vest, class 2, with accompanying electronic collar for connectivity and alarm functionality.
        The electronics is easily snapped in into the vest collar and is controlled with a button and also the Sense app.
        Alert Vest 01 levereras med aktiva ljus över axlarna. Dessa ljus är av självlysande färg och gör personen mycket synlig när man bär västen i mörkret
        Plastic hook on elastic band in front left pocket`,
    price: 613,
    image: "",
    available: true,
    sizes: ["S", "M", "L"],
  },
  {
    id: "sh-t-03",
    title: "Swanholm Alert Vest 01 Electronic collar not included",
    description: `An AI driven safety vest, class 2, without electronic collar. Perfect when you have worn-out vest that needs to be replaced. Remove electronic collar and recycle the old vest as textiles.
        The electronics is easily snapped in into the vest collar and is controlled with a button and also the Sense app.
        Alert Vest 01 levereras med aktiva ljus över axlarna. Dessa ljus är av självlysande färg och gör personen mycket synlig när man bär västen i mörkret.
        Plastic hook on elastic band in front left pocket.`,
    price: 313,
    image: "",
    available: true,
    sizes: ["S", "M", "L"],
  },
  {
    id: "sh-t-04",
    title: "Swanholm Alert Vest 02 Electronic collar not included",
    description: `An AI driven safety vest, class 2, without electronic collar. Perfect when you have worn-out vest that needs to be replaced. Remove electronic collar and recycle the old vest as textiles.
        The vest can be used as a jacket by attaching the sleeves. The jacket in sizes L-XXL is a class 3.
        The electronics is easily snapped in into the vest collar and is controlled with a button and also the Sense app.
        Plastic hook on elastic band in front left pocket.`,
    price: 107,
    image: "",
    available: true,
    sizes: ["S", "M", "L"],
  },
  {
    id: "sh-t-05",
    title: "Electronic collar for Alert Vest incl USB-C cable",
    description: `
        Den elektroniska kragen är hjärnan i Alert Vest och kan användas både för plagg med och utan ljus.
        The electronic collar comes in two sizes for best fit in the Alert Vest and the Alert Jacket:
        Small: for vests/jackets in sizes S, M and L.
        Large: for vests/jackets sizes XL and XXL.`,
    price: 107,
    image: "",
    available: true,
    sizes: ["S", "M", "L"],
  },
];
