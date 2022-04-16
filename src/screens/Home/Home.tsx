import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import {
  View, Text, SafeAreaView, TouchableOpacity,
} from 'react-native';

import AuthContext from '~/context/auth';

import { Container, Title1 } from '~/styles/globalStyles';

import { ActionButton } from '~/components';
// import { Container } from './styles';

const Home: React.FC = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <Container>
      <Title1>
        Bem-vindo,
        {' '}
        {user.name}
      </Title1>
      <View style={{ marginTop: '20%' }}>
        <ActionButton onPress={() => logout()} text="Encerrar Sessão" />
      </View>
    </Container>
  );
};

export default Home;
