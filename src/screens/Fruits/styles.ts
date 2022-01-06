import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding: 0 ${RFValue(14)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: ${getStatusBarHeight() + RFValue(14)}px;
`;

export const Space = styled.View`
  width: ${RFValue(18)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(16)}px;
`;

export const Cart = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.shape};
  padding: ${RFValue(12)}px;
  border-radius: ${RFValue(10)}px;
`;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(20)}px;
`;

export const Badge = styled.View`
  background-color: ${({theme}) => theme.colors.text_dark};
  border-radius: ${RFValue(4)}px;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: ${RFValue(16)}px;
  width: ${RFValue(16)}px;
  top: 0;
  right: 0;
`;

export const TextBadge = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_white};
  font-size: ${RFValue(12)}px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Filter = styled.View`
  background-color: ${({theme}) => theme.colors.shape};
  margin: ${RFValue(12)}px 0;
  padding: 0 ${RFValue(12)}px;
  border-radius: ${RFValue(10)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputFilter = styled.TextInput`
  width: 90%;
  padding: ${RFValue(12)}px 0;
`;
