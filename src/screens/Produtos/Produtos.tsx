import React, { useState, useEffect, useContext } from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { ActionButton, AddButton } from '~/components';
import { Container } from '~/styles/globalStyles';
import AuthContext from '~/context/auth';
import ProdutosList from './components/ProdutosList';

const Produtos: React.FC = ({ navigation }) => {
  const { user } = useContext(AuthContext);

  const [produtosData, setProdutosData] = useState([]);
  const isFocused = useIsFocused();

  async function getProducts() {
    try {
      const allStorage = await AsyncStorage.getAllKeys();

      let products = allStorage.filter((key) => {
        if (key.includes(`@${user.name}_Product`)) {
          return key;
        }
      });

      products = await AsyncStorage.multiGet(products);

      products = products.map((product) => JSON.parse(product[1]));

      setProdutosData(products);
    } catch (error) {

    }
  }

  useEffect(() => {
    if (isFocused) {
      getProducts();
    }
  }, [isFocused]);

  return (
    <Container>
      <ProdutosList data={produtosData.length ? produtosData : null} />
      <AddButton onPress={() => navigation.push('Produto')} />
    </Container>
  );
};

export default Produtos;
