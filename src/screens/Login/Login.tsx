import React, { useContext, useState } from 'react';
import {
  KeyboardAvoidingView, ScrollView, TextInput, View,
} from 'react-native';

import {
  Container, Title1, Title2, Input,
} from '~/styles/globalStyles';

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
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'center', alignContent: 'center', flex: 1,
      }}
      keyboardShouldPersistTaps="handled"
    >
      <Container>
        <KeyboardAvoidingView>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Title1> LOGIN </Title1>
            <Title2>Insira suas credenciais abaixo</Title2>
          </View>
          <View style={{ marginBottom: 12 }}>
            <Title2 style={{ textAlign: 'left' }}>Usuário</Title2>
            <Input
              onChangeText={(text) => setUserText(text)}
              value={userText}
              placeholder="admin/admin2"
            />
          </View>
          <View style={{ marginBottom: 12 }}>
            <Title2 style={{ textAlign: 'left' }}>Senha</Title2>
            <Input
              onChangeText={(text) => setPassText(text)}
              value={passText}
              placeholder="123456"
            />
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActionButton onPress={() => handleLogin(userText, passText)} text="ENTRAR" />
          </View>
        </KeyboardAvoidingView>
      </Container>
    </ScrollView>
  );
};

export default Login;
