import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import theme from './src/global/styles/theme';

import {AppRoutes} from './src/routes/app.routes';
import {CartProvider} from './src/hooks/cart';
import {FavoriteProvider} from './src/hooks/favorite';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <FavoriteProvider>
          <StatusBar barStyle="dark-content" />
          <AppRoutes />
        </FavoriteProvider>
      </CartProvider>
    </ThemeProvider>
  );
}
