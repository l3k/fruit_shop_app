import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';

interface Props {
  isFavorite: boolean;
}

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.shape};
  padding: ${RFValue(14)}px;
  margin: 2%;
  width: 45%;
  align-items: center;
  border-radius: ${RFValue(15)}px;
`;

export const ButtonBordeless = styled.TouchableOpacity``;

export const FruitImage = styled.Image`
  width: ${RFValue(90)}px;
  height: ${RFValue(120)}px;
  border-radius: ${RFValue(15)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(12)}px;
  width: 100%;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(14)}px;
`;

export const Button = styled.TouchableOpacity<Props>`
  padding: ${RFValue(5)}px;
  height: ${RFValue(30)}px;
  width: ${RFValue(30)}px;
  border-radius: ${RFValue(15)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({isFavorite, theme}) =>
    isFavorite ? theme.colors.favorite : theme.colors.text_dark};
`;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.text_white};
  font-size: ${RFValue(14)}px;
`;
