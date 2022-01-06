import React, {ReactNode, createContext, useContext, useState} from 'react';

interface FavoriteProviderProps {
  children: ReactNode;
}

interface IFavoriteContextData {
  favorites: Array<string>;
  toggleFavorite(id: string): void;
}

const FavoriteContext = createContext({} as IFavoriteContextData);

function FavoriteProvider({children}: FavoriteProviderProps) {
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(id: string) {
    if (favorites.includes(id)) {
      const newFavorites = favorites.filter(fav => fav !== id);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, id]);
    }
  }

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        toggleFavorite,
      }}>
      {children}
    </FavoriteContext.Provider>
  );
}

function useFavorite() {
  const context = useContext(FavoriteContext);

  return context;
}

export {FavoriteProvider, useFavorite};
