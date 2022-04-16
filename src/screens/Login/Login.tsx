import React, { useContext, useState } from 'react';
import {
  KeyboardAvoidingView, ScrollView, TextInput, View,
} from 'react-native';

import { Container, Title1, Title2 } from '~/styles/globalStyles';
import { Input } from './styles';

import { ActionButton } from '~/components';

import AuthContext from '~/context/auth';

const Login: React.FC = ({ navigation }) => {
  const [userText, setUserText] = useState('');
  const [passText, setPassText] = useState('');

  const { login } = useContext(AuthContext);

  function handleLogin(username: string, pass: string) {
    login(username, pass);
  }

  return (
    <Container>
      {/* <ScrollView contentContainerStyle={{ justifyContent: 'center', alignContent: 'center' }} keyboardShouldPersistTaps="handled"> */}
      <KeyboardAvoidingView>
        <Title1> LOGIN </Title1>
        <View>
          <Title2>Usuário</Title2>
        </View>
        <Input
          onChangeText={(text) => setUserText(text)}
          value={userText}
        />
        <Title2>Senha</Title2>
        <TextInput
          onChangeText={(text) => setPassText(text)}
          value={passText}
        />
        <ActionButton onPress={() => handleLogin(userText, passText)} text="ENTRAR" />
      </KeyboardAvoidingView>
      {/* </ScrollView> */}
    </Container>
  );
};

export default Login;
