export type Service = {
  id: string;
  title: string;
  description: string;
  priceLabel: string;
  image: string;
  tag?: string;
};

export const services: Service[] = [
  {
    id: "jour",
    title: "Maquillage Coup d’Éclat (Jour)",
    description: "Un maquillage naturel et lumineux pour le quotidien.",
    priceLabel: "15 000 F CFA",
    image: "/images/intro/1.jpg",
    tag: "Naturel",
  },
  {
    id: "soiree",
    title: "Maquillage Soirée",
    description: "Un maquillage sophistiqué et glamour pour tes événements.",
    priceLabel: "35 000 F CFA",
    image: "/images/intro/2.jpg",
    tag: "Glam",
  },
  {
    id: "mariage",
    title: "Maquillage Mariage",
    description:
      "Options adaptées à ta journée. Tarifs valables sur Abidjan. Hors Abidjan : tarif + logement à la charge de la cliente.",
    priceLabel: "Dès 50 000 F CFA",
    image: "/images/intro/3.jpg",
    tag: "Bridal",
  },
  {
    id: "grossesse",
    title: "Baby Shower / Shooting de Grossesse",
    description: "Mise en beauté douce, lumineuse, parfaite pour photo & event.",
    priceLabel: "25 000 F CFA (sans transport)",
    image: "/images/intro/4.jpg",
    tag: "Glow",
  },
  {
    id: "shooting",
    title: "Maquillage Shooting",
    description:
      "Coup d’éclat : 15 000 • Sophistiqué : 35 000 • Pré-mariage : 35 000 (formule complète mariage : total 170 000 avec test).",
    priceLabel: "Dès 15 000 F CFA",
    image: "/images/intro/5.jpg",
    tag: "Photo",
  },
  {
    id: "video",
    title: "Shootings Vidéo",
    description:
      "120 000 F CFA / jour (jusqu’à 4 personnes). Au-delà : tarif discuté en privé. TV : devis sur demande.",
    priceLabel: "120 000 F CFA / jour",
    image: "/images/intro/6.jpg",
    tag: "Pro",
  },
];
