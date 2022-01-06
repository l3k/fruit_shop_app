import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';

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

export const Footer = styled.View`
  padding: ${RFValue(18)}px;
  padding-bottom: ${getBottomSpace() + RFValue(14)}px;
`;

export const Body = styled.View``;

export const GroupTotal = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: ${RFValue(12)}px;
  justify-content: space-between;
  align-items: center;
`;

export const TextTotal = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(16)}px;
`;

export const ButtonPurchase = styled.TouchableOpacity`
  padding: ${RFValue(14)}px;
  background-color: ${({theme}) => theme.colors.button};
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(50)}px;
`;

export const TextPurchase = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_white};
  font-size: ${RFValue(16)}px;
`;
export const Empty = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(50)}px;
`;
export const EmptyText = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(16)}px;
`;
