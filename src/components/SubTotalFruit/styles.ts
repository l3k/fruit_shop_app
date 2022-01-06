import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  padding: ${RFValue(14)}px;
  /* width: 100%; */
  align-items: center;
  border-radius: ${RFValue(15)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonBordeless = styled.TouchableOpacity``;

export const FruitImage = styled.Image`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  border-radius: ${RFValue(14)}px;
  margin-right: ${RFValue(20)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(14)}px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  height: ${RFValue(60)}px;
`;

export const Price = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(16)}px;
`;

export const Button = styled.TouchableOpacity`
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
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(14)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Footer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const GroupButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonQtdMinus = styled.TouchableOpacity`
  padding: ${RFValue(5)}px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.text_dark};
  border-radius: 30px;
`;
export const ButtonQtdPlus = styled.TouchableOpacity`
  padding: ${RFValue(5)}px;
  background-color: ${({theme}) => theme.colors.text_dark};
  border-radius: 30px;
`;

export const IconButtonMinus = styled(Feather)`
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(14)}px;
`;

export const IconButtonPlus = styled(Feather)`
  color: ${({theme}) => theme.colors.text_white};
  font-size: ${RFValue(14)}px;
`;

export const Quantity = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(14)}px;
  margin: 0 ${RFValue(14)}px;
`;
