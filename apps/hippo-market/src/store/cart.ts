import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { Product } from '@/types/Product';

export type CartItem = {
  product: Product;
};

type CartState = {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
};

export const mockProducts: Product[] = [
  {
    id: '1',
    img: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg',
    name: 'Product 1',
    category: 'Category 1',
    price: 19.99,
    description: 'Description 1',
  },
  {
    id: '2',
    img: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg',
    name: 'Product 2',
    category: 'Category 2',
    price: 29.99,
    description: 'Description 1',
  },
  {
    id: '3',
    img: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg',
    name: 'Product 3',
    category: 'Category 3',
    price: 39.99,
    description: 'Description 1',
  },
  {
    id: '4',
    img: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg',
    name: 'Product 4',
    category: 'Category 4',
    price: 49.99,
    description: `Download Free Icons and Stickers for your projects. Resources made by
and for designers. PNG, SVG, EPS, PSD and CSS formats.`,
  },
  {
    id: '5',
    img: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg',
    name: 'Product 5',
    category: 'Category 5',
    price: 59.99,
    description: 'Description 1',
  },
];
export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          return { items: [...state.items, { product }] };
        }),
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
