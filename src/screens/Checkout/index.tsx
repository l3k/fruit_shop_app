import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList, ActivityIndicator} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Share from 'react-native-share';

import {
  Container,
  Header,
  ButtonBack,
  Icon,
  Content,
  Body,
  Footer,
  GroupTotal,
  TextTotal,
  Amount,
  ButtonPurchase,
  TextPurchase,
  Empty,
  EmptyText,
} from './styles';

import {NavigationProps} from '../../routes/app.routes';
import {Fruit, useCart} from '../../hooks/cart';
import {SubTotalFruit} from '../../components/SubTotalFruit';

export function Checkout() {
  const navigation = useNavigation<NavigationProps>();
  const [loading, setLoading] = useState(false);
  const {fruits} = useCart();

  function handleBack() {
    navigation.goBack();
  }

  function getTotalQtdCart() {
    const quantityTotal = fruits.reduce((acumullator: number, fruit: Fruit) => {
      return acumullator + fruit.qtd * fruit.price;
    }, 0);

    return quantityTotal;
  }

  async function handlePurchase() {
    setLoading(true);
    let html = `
      <h3>Comprovante da frutaria</h3>
      <h4>Produtos</h4>
      <table style="width: 100%; border-collapse: collapse; border-style: solid;" border="1">
        <tbody>
            <tr>
              <td>Imagem</td>
              <td>Nome</td>
              <td>Quantidade</td>
              <td>Pre&ccedil;o</td>
              <td>SubTotal</td>
            </tr>
            ${fruits.map(fruit => {
              return `<tr>
                        <td>
                          <img src="${
                            fruit.image
                          }" style="height: 50px;width:50px;border-radius: 10px;object-fit: cover;"/>
                        </td>
                        <td>${fruit.name}</td>
                        <td>${fruit.qtd}</td>
                        <td>${Number(fruit.price).toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}</td>
                        <td>${Number(fruit.qtd * fruit.price).toLocaleString(
                          'pt-BR',
                          {
                            style: 'currency',
                            currency: 'BRL',
                          },
                        )}</td>
                      </tr>`;
            })}
        </tbody>
      </table>
      <p>&nbsp;</p>
      <hr />
      <div style="display: flex; width: 100%; justify-content: space-between;">
        <p><strong>Total</strong></p>
        <p><strong>${Number(getTotalQtdCart()).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}</strong></p>
      </div>
    `;
    const options = {
      html,
      fileName: 'comprovante',
      directory: 'Documents',
    };

    const file = await RNHTMLtoPDF.convert(options);
    console.log(file.filePath);
    await Share.open({
      url: file.filePath,
    }).finally(() => setLoading(false));
  }

  return (
    <Container>
      <Header>
        <ButtonBack onPress={handleBack}>
          <Icon name="chevron-left" />
        </ButtonBack>
      </Header>
      <Content>
        {fruits.length ? (
          <>
            <Body>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={fruits}
                renderItem={({item}) => <SubTotalFruit data={item} />}
                keyExtractor={item => `${item.id}`}
              />
            </Body>
            <Footer>
              <GroupTotal>
                <TextTotal>Total</TextTotal>
                <Amount>
                  {Number(getTotalQtdCart()).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </Amount>
              </GroupTotal>
              <ButtonPurchase onPress={handlePurchase}>
                {loading ? (
                  <ActivityIndicator />
                ) : (
                  <TextPurchase>Finalizar compra</TextPurchase>
                )}
              </ButtonPurchase>
            </Footer>
          </>
        ) : (
          <Empty>
            <EmptyText>Seu carrinho esta vazio :(</EmptyText>
          </Empty>
        )}
      </Content>
    </Container>
  );
}
