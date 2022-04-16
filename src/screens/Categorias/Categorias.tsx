import React, { useState, useEffect, useContext } from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { ActionButton, AddButton } from '~/components';
import { Container } from '~/styles/globalStyles';
import AuthContext from '~/context/auth';
import CategoriasList from './components/CategoriasList';

const Categorias: React.FC = ({ navigation }) => {
  const { user } = useContext(AuthContext);

  const [categoriasData, setCategoriasData] = useState([]);
  const isFocused = useIsFocused();

  async function getCategories() {
    try {
      const allStorage = await AsyncStorage.getAllKeys();

      let categories = allStorage.filter((key) => {
        if (key.includes(`@${user.name}_Category`)) {
          return key;
        }
      });

      categories = await AsyncStorage.multiGet(categories);

      categories = categories.map((category) => JSON.parse(category[1]));

      setCategoriasData(categories);
    } catch (error) {

    }
  }

  useEffect(() => {
    if (isFocused) {
      getCategories();
    }
  }, [isFocused]);

  return (
    <Container>
      <CategoriasList data={categoriasData.length ? categoriasData : null} />
      <AddButton onPress={() => navigation.push('Categoria')} />
    </Container>
  );
};

export default Categorias;
