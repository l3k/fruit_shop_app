import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  ButtonBordeless,
  FruitImage,
  Title,
  Content,
  Price,
  Button,
  Icon,
} from './styles';

import {FruitProps} from '../../hooks/cart';
import {NavigationProps} from '../../routes/app.routes';
import {useFavorite} from '../../hooks/favorite';

interface Props {
  data: FruitProps;
}

export function CardFruit({data}: Props) {
  const navigation = useNavigation<NavigationProps>();
  const {favorites, toggleFavorite} = useFavorite();

  function handleDetail() {
    navigation.navigate('Detail', {fruit: data});
  }

  function handleToggleFavorite() {
    toggleFavorite(data.id);
  }

  return (
    <Container>
      <ButtonBordeless onPress={handleDetail}>
        <FruitImage source={{uri: data.image}} resizeMode="cover" />
      </ButtonBordeless>
      <Title>{data.name}</Title>
      <Content>
        <Price>
          {Number(data.price).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Price>
        <Button
          isFavorite={favorites.includes(data.id)}
          onPress={handleToggleFavorite}>
          <Icon name="heart" />
        </Button>
      </Content>
    </Container>
  );
}
