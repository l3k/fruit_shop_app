import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  Container,
  Header,
  ButtonBack,
  Icon,
  Content,
  Footer,
  Title,
  ContentFooter,
  Price,
  GroupButton,
  Select,
  Minus,
  IconButton,
  Quantity,
  Plus,
  Button,
  TextButton,
  ImageFruit,
  Alert,
  Message,
} from './styles';

import {FruitProps} from '../../hooks/cart';
import {NavigationProps} from '../../routes/app.routes';
import {useCart} from '../../hooks/cart';

export function Detail() {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute();
  const [fruit, setFruit] = useState<FruitProps | null>(null);
  const [counter, setCounter] = useState(1);
  const [alert, setAlert] = useState(false);
  const {addFruit} = useCart();

  useEffect(() => {
    if (route.params.hasOwnProperty('fruit')) {
      setFruit(route.params?.fruit);
    }
  }, [route.params]);

  function handleBack() {
    navigation.goBack();
  }

  function handleMinus() {
    if (counter !== 1) {
      setCounter(counter - 1);
    }
  }

  function handlePlus() {
    setCounter(counter + 1);
  }

  function handleAddCart() {
    const newFruit = {
      ...fruit,
      qtd: counter,
    };

    addFruit(newFruit);
    setAlert(true);
    setCounter(1);
  }

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
  }, [alert]);

  return (
    <Container>
      <Header>
        <ButtonBack onPress={handleBack}>
          <Icon name="chevron-left" />
        </ButtonBack>
      </Header>
      <Content>
        <ImageFruit source={{uri: fruit?.image}} />
        <Footer>
          <Title>{fruit?.name}</Title>
          <ContentFooter>
            <Price>
              {Number(fruit?.price || 0).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </Price>
            <GroupButton>
              <Select>
                <Minus onPress={handleMinus}>
                  <IconButton name="minus" />
                </Minus>
                <Quantity>{counter}</Quantity>
                <Plus onPress={handlePlus}>
                  <IconButton name="plus" />
                </Plus>
              </Select>
              <Button onPress={handleAddCart}>
                <TextButton>Comprar</TextButton>
              </Button>
            </GroupButton>
          </ContentFooter>
        </Footer>
      </Content>
      {alert && (
        <Alert>
          <Message>Produto adicionado ao carrinho</Message>
        </Alert>
      )}
    </Container>
  );
}
