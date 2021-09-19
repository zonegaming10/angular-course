export interface Book {
  img: string;
  title: string;
  price: number;
}

export const books: Book[] = [
  {
    img: 'https://d.top4top.io/p_20811ohik1.jpg',
    title: 'Angular book',
    price: 50,
  },
  {
    img: 'https://c.top4top.io/p_2081bthrj1.jpg',
    title: 'React book',
    price: 30,
  },
];
