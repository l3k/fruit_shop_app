import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(14)}px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  border-radius: ${RFValue(12)}px;
  padding: ${RFValue(14)}px;
  background-color: ${({theme}) => theme.colors.button};
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({theme}) => theme.colors.text_white};
  font-size: ${RFValue(14)}px;
`;
