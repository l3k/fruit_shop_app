import React, {ReactNode, createContext, useContext, useState} from 'react';

interface CartProviderProps {
  children: ReactNode;
}

export interface FruitProps {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface Fruit extends FruitProps {
  qtd: number;
}

interface ICartContextData {
  fruits: Array<Fruit>;
  addQtd(id: string): void;
  removeQtd(id: string): void;
  addFruit(newFruit: Fruit): void;
  removeFruit(id: string): void;
}

const CartContext = createContext({} as ICartContextData);

function CartProvider({children}: CartProviderProps) {
  const [fruits, setFruits] = useState<Fruit[]>([]);

  function addQtd(id: string) {
    const newFruits = fruits.map(currentFruit => {
      if (currentFruit.id === id) {
        return {
          ...currentFruit,
          qtd: currentFruit.qtd + 1,
        };
      }

      return currentFruit;
    });

    setFruits(newFruits);
  }

  function removeQtd(id: string) {
    const existFruitCart = fruits.find(fruit => fruit.id === id);
    let newFruits = [];

    if (existFruitCart && existFruitCart.qtd > 1) {
      newFruits = fruits.map(currentFruit => {
        if (currentFruit.id === id) {
          return {
            ...currentFruit,
            qtd: currentFruit.qtd - 1,
          };
        }

        return currentFruit;
      });
    } else {
      newFruits = fruits.filter(currentFruit => currentFruit.id !== id);
    }

    setFruits(newFruits);
  }

  function addFruit(newFruit: Fruit) {
    let newFruits = [];
    if (fruits.includes(fruits.find(fruit => fruit.id === newFruit.id))) {
      newFruits = fruits.map(currentFruit => {
        if (currentFruit.id === newFruit.id) {
          return {
            ...currentFruit,
            qtd: currentFruit.qtd + newFruit.qtd,
          };
        }

        return currentFruit;
      });
    } else {
      newFruits = [...fruits, newFruit];
    }

    setFruits(newFruits);
  }

  function removeFruit(id: string) {
    const newFruits = fruits.filter(currentFruit => currentFruit.id !== id);
    setFruits(newFruits);
  }

  return (
    <CartContext.Provider
      value={{
        fruits,
        addQtd,
        removeQtd,
        addFruit,
        removeFruit,
      }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  return context;
}

export {CartProvider, useCart};
