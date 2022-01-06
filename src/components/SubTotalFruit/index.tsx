import React from 'react';

import {
  Container,
  ButtonBordeless,
  FruitImage,
  Title,
  Content,
  Price,
  Icon,
  Header,
  Footer,
  GroupButton,
  ButtonQtdMinus,
  ButtonQtdPlus,
  IconButtonMinus,
  IconButtonPlus,
  Quantity,
} from './styles';

import {Fruit, useCart} from '../../hooks/cart';

interface Props {
  data: Fruit;
}

export function SubTotalFruit({data}: Props) {
  const {removeQtd, addQtd, removeFruit} = useCart();

  function handleMinus() {
    removeQtd(data.id);
  }

  function handlePlus() {
    addQtd(data.id);
  }

  function handleRemoveFruit() {
    removeFruit(data.id);
  }

  return (
    <Container>
      <FruitImage source={{uri: data.image}} resizeMode="cover" />
      <Content>
        <Header>
          <Title>{data.name}</Title>
          <ButtonBordeless onPress={handleRemoveFruit}>
            <Icon name="x" />
          </ButtonBordeless>
        </Header>
        <Footer>
          <Price>
            {Number(data.qtd * data.price).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Price>
          <GroupButton>
            <ButtonQtdMinus onPress={handleMinus}>
              <IconButtonMinus name="minus" />
            </ButtonQtdMinus>
            <Quantity>{data.qtd}</Quantity>
            <ButtonQtdPlus onPress={handlePlus}>
              <IconButtonPlus name="plus" />
            </ButtonQtdPlus>
          </GroupButton>
        </Footer>
      </Content>
    </Container>
  );
}
