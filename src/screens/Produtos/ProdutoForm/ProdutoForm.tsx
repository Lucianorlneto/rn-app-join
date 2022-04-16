import React, { useContext, useEffect, useState } from 'react';
import {
  View, Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import uuid from 'react-native-uuid';
import Toast from 'react-native-toast-message';
import RNPickerSelect from 'react-native-picker-select';
import { Picker } from '@react-native-picker/picker';
import { ActionButton } from '~/components';
import { Label, Input } from '~/styles/globalStyles';
import AuthContext from '~/context/auth';

// import { Container } from './styles';

const ProdutoForm: React.FC = ({ route, navigation }) => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [newProduto, setNewProduto] = useState(true);
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    const allStorage = await AsyncStorage.getAllKeys();

    let categories = allStorage.filter((key) => {
      if (key.includes(`@${user.name}_Category`)) {
        return key;
      }
    });

    categories = await AsyncStorage.multiGet(categories);

    categories = categories.map((category) => JSON.parse(category[1]));

    setCategories(categories);
  }

  useEffect(() => {
    if (route.params) {
      setName(route.params.produto.title);
      setCategory(route.params.produto.category);
      setNewProduto(false);
    }

    getCategories();
  }, []);

  async function handleSubmit() {
    if (name === '') {
      return Alert.alert(
        'Erro',
        'Adicione um nome à produto.',
        [
          { text: 'OK' },
        ],
      );
    }

    try {
      const catUuid = uuid.v4();
      await AsyncStorage.setItem(`@${user.name}_Product_${catUuid.toString()}`, JSON.stringify({ id: catUuid.toString(), title: name, category }));

      Toast.show({
        type: 'success',
        text1: 'Produto adicionada',
        position: 'bottom',
      });

      navigation.goBack();
    } catch (error) {
      Alert.alert(
        'Erro',
        'Houve uma falha ao cadastrar produto.',
        [
          { text: 'OK' },
        ],
      );
    }
  }

  async function handleEdit() {
    try {
      await AsyncStorage.mergeItem(`@${user.name}_Product_${route.params.produto.id}`, JSON.stringify({ id: route.params.produto.id.toString(), title: name, category }));
      //   await AsyncStorage.clear();

      Toast.show({
        type: 'success',
        text1: 'Produto editado',
        position: 'bottom',
      });

      navigation.goBack();
    } catch (error) {
      Alert.alert(
        'Erro',
        'Houve uma falha ao editar produto.',
        [
          { text: 'OK' },
        ],
      );
    }
  }

  async function handleDelete() {
    try {
      await AsyncStorage.removeItem(`@${user.name}_Product_${route.params.produto.id}`);
      //   await AsyncStorage.clear();

      Toast.show({
        type: 'info',
        text1: 'Produto apagado',
        position: 'bottom',
      });

      navigation.goBack();
    } catch (error) {
      Alert.alert(
        'Erro',
        'Houve uma falha ao deletar produto.',
        [
          { text: 'OK' },
        ],
      );
    }
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ marginBottom: 16 }}>
        <Label>
          Nome do produto:
        </Label>
        <Input placeholder="Nome do produto" value={name} onChangeText={(text) => setName(text)} />
      </View>
      <View>
        <Label>
          Categoria do produto:
        </Label>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue: string, itemIndex: number) => {
            setCategory(itemValue);
          }}
        >
          {categories.map((category) => <Picker.Item key={category.id} label={category.title} value={category.title} />)}
        </Picker>
      </View>
      <View style={{
        flex: 1, justifyContent: 'flex-end',
      }}
      >

        {!newProduto
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

export default ProdutoForm;
