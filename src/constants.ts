/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  price: string;
  category: 'Necklace' | 'Ring' | 'Earrings' | 'Bracelet';
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Eternal Diamond Necklace',
    price: '$1,200',
    category: 'Necklace',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800&h=800'
  },
  {
    id: '2',
    name: 'Rose Gold Solitaire Ring',
    price: '$850',
    category: 'Ring',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800&h=800'
  },
  {
    id: '3',
    name: 'Pearl Drop Earrings',
    price: '$450',
    category: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800&h=800'
  },
  {
    id: '4',
    name: 'Royal Emerald Bracelet',
    price: '$2,100',
    category: 'Bracelet',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800&h=800'
  },
  {
    id: '5',
    name: 'Crystal Choker',
    price: '$300',
    category: 'Necklace',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=800&h=800'
  },
  {
    id: '6',
    name: 'Sapphire Band',
    price: '$950',
    category: 'Ring',
    image: 'https://images.unsplash.com/photo-1573408302324-4643fe424397?auto=format&fit=crop&q=80&w=800&h=800'
  }
];
