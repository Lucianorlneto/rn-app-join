import React, { useContext, useEffect, useState } from 'react';
import {
  TextInput, View, Text, Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import uuid from 'react-native-uuid';
import Toast from 'react-native-toast-message';
import { ActionButton } from '~/components';

import AuthContext from '~/context/auth';

import { Label, Input } from '~/styles/globalStyles';

// import { Container } from './styles';

const CategoriaForm: React.FC = ({ route, navigation }) => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [newCategoria, setNewCategoria] = useState(true);

  useEffect(() => {
    if (route.params) {
      setName(route.params.categoria.title);
      setNewCategoria(false);
    }
  }, []);

  async function handleSubmit() {
    if (name === '') {
      return Alert.alert(
        'Erro',
        'Adicione um nome à categoria.',
        [
          { text: 'OK' },
        ],
      );
    }

    try {
      const catUuid = uuid.v4();
      await AsyncStorage.setItem(`@${user.name}_Category_${catUuid.toString()}`, JSON.stringify({ id: catUuid.toString(), title: name }));

      Toast.show({
        type: 'success',
        text1: 'Categoria adicionada',
        position: 'bottom',
      });

      navigation.goBack();
    } catch (error) {
      Alert.alert(
        'Erro',
        'Houve uma falha ao cadastrar categoria.',
        [
          { text: 'OK' },
        ],
      );
    }
  }

  async function handleEdit() {
    try {
      await AsyncStorage.mergeItem(`@${user.name}_Category_${route.params.categoria.id}`, JSON.stringify({ id: route.params.categoria.id.toString(), title: name }));
      //   await AsyncStorage.clear();

      Toast.show({
        type: 'success',
        text1: 'Categoria editada',
        position: 'bottom',
      });

      navigation.goBack();
    } catch (error) {
      Alert.alert(
        'Erro',
        'Houve uma falha ao editar categoria.',
        [
          { text: 'OK' },
        ],
      );
    }
  }

  async function handleDelete() {
    try {
      await AsyncStorage.removeItem(`@Category_${route.params.categoria.id}`);
      //   await AsyncStorage.clear();

      Toast.show({
        type: 'info',
        text1: 'Categoria apagada',
        position: 'bottom',
      });

      navigation.goBack();
    } catch (error) {
      Alert.alert(
        'Erro',
        'Houve uma falha ao deletar categoria.',
        [
          { text: 'OK' },
        ],
      );
    }
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Label>
        Nome da categoria:
      </Label>
      <Input placeholder="Nome da categoria" value={name} onChangeText={(text) => setName(text)} />
      <View style={{
        flex: 1, justifyContent: 'flex-end',
      }}
      >

        {!newCategoria
          ? (
            <View style={{
              flexDirection: 'row', justifyContent: 'space-around', height: '15%',
            }}
            >
              <ActionButton text="EDITAR" onPress={() => handleEdit()} />
              <ActionButton text="REMOVER" onPress={() => handleDelete()} />
            </View>
          ) : <ActionButton text="CADASTRAR" onPress={() => handleSubmit()} />}
      </View>
    </View>
  );
};

export default CategoriaForm;
