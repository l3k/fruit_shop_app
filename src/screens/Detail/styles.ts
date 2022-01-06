import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  padding: 0 ${RFValue(14)}px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: ${getStatusBarHeight() + RFValue(14)}px;
`;

export const ButtonBack = styled.TouchableOpacity``;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(30)}px;
`;
export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const ImageFruit = styled.Image`
  width: 100%;
  height: 80%;
`;

export const Footer = styled.View`
  z-index: 2;
  width: 100%;
  height: 30%;
  background-color: ${({theme}) => theme.colors.shape};
  padding: ${RFValue(14)}px;
  padding-bottom: ${getBottomSpace() + RFValue(14)}px;
  border-top-right-radius: ${RFValue(30)}px;
  border-top-left-radius: ${RFValue(30)}px;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(18)}px;
`;

export const ContentFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(20)}px;
`;

export const GroupButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Select = styled.View`
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.text_dark};
  border-radius: ${RFValue(20)}px;
  width: ${RFValue(100)}px;
  height: ${RFValue(30)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Minus = styled.TouchableOpacity``;

export const IconButton = styled(Feather)`
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(12)}px;
`;

export const Quantity = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(14)}px;
`;

export const Plus = styled.TouchableOpacity``;

export const Button = styled.TouchableOpacity`
  border-radius: ${RFValue(12)}px;
  padding: ${RFValue(14)}px;
  background-color: ${({theme}) => theme.colors.button};
  margin-left: ${RFValue(14)}px;
`;

export const TextButton = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({theme}) => theme.colors.text_white};
  font-size: ${RFValue(14)}px;
`;

export const Alert = styled.View`
  width: 100%;
  z-index: 3;
  background-color: ${({theme}) => theme.colors.shape};
  padding: ${RFValue(14)}px;
  padding-top: ${getStatusBarHeight() + RFValue(30)}px;
  border-bottom-right-radius: ${RFValue(30)}px;
  border-bottom-left-radius: ${RFValue(30)}px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

export const Message = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(18)}px;
`;
