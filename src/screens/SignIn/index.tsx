import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, Container, TextButton} from './styles';

import {Input} from '../../components/Input';
import {NavigationProps} from '../../routes/app.routes';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProps>();

  function handleLogin() {
    navigation.navigate('Fruits');
  }

  return (
    <Container>
      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        placeholderTextColor="#999"
      />
      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
        placeholderTextColor="#999"
      />
      <Button onPress={handleLogin}>
        <TextButton>Entrar</TextButton>
      </Button>
    </Container>
  );
}
