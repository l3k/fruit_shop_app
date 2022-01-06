import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {FlatList} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {useNavigation} from '@react-navigation/native';
import {debounce} from 'lodash';

import {
  Container,
  Header,
  Space,
  Title,
  Cart,
  Icon,
  Badge,
  TextBadge,
  Content,
  InputFilter,
  Filter,
} from './styles';

import {fruits} from '../../utils/fruits';
import {CardFruit} from '../../components/CardFruit';
import {NavigationProps} from '../../routes/app.routes';
import {useCart, FruitProps, Fruit} from '../../hooks/cart';

export function Fruits() {
  const navigation = useNavigation<NavigationProps>();
  const [search, setSearch] = useState('');
  const [listFruits, setListFruits] = useState<FruitProps[]>(
    fruits as FruitProps[],
  );
  const {fruits: fruitsCart} = useCart();

  useEffect(() => {}, []);

  function handleCheckout() {
    navigation.navigate('Checkout');
  }

  function getTotalQtdCart() {
    const quantityTotal = fruitsCart.reduce(
      (acumullator: number, fruit: Fruit) => {
        return acumullator + Number(fruit.qtd);
      },
      0,
    );

    return quantityTotal;
  }

  const debouncedSearch = useMemo(
    () =>
      debounce(text => {
        setListFruits(
          fruits.filter(
            fruit => fruit.name.toLowerCase().indexOf(text.toLowerCase()) >= 0,
          ),
        );
      }, 500),
    [],
  );

  const handleChange = useCallback(
    text => {
      setSearch(text);
      debouncedSearch(text);
    },
    [debouncedSearch],
  );

  return (
    <Container>
      <Header>
        <Space />
        <Title>Faça a feira</Title>
        <Cart onPress={handleCheckout}>
          <Icon name="shopping-bag" />
          {getTotalQtdCart() >= 1 && (
            <Badge>
              <TextBadge>{getTotalQtdCart()}</TextBadge>
            </Badge>
          )}
        </Cart>
      </Header>
      <Content>
        <Filter>
          <Icon name="search" />
          <InputFilter
            value={search}
            onChangeText={handleChange}
            placeholder="Buscar"
            placeholderTextColor="#777"
          />
        </Filter>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace(),
          }}
          numColumns={2}
          data={listFruits}
          renderItem={({item}) => <CardFruit data={item} />}
          keyExtractor={item => `${item.id}`}
        />
      </Content>
    </Container>
  );
}
