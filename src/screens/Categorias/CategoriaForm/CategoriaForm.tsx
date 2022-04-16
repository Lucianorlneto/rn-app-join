import React, { useEffect, useState } from 'react';
import { TextInput, View, Text } from 'react-native';

import { Label, Input } from '~/styles/globalStyles';

// import { Container } from './styles';

const CategoriaForm: React.FC = ({ route }) => {
  console.log(route);
  const [name, setName] = useState('');

  useEffect(() => {
    if (route.params) {
      setName(route.params.categoria.title);
    }
  }, []);

  return (
    <View style={{ padding: 16 }}>
      <Label>
        Nome da categoria:
      </Label>
      <Input placeholder="Nome da categoria" value={name} onChangeText={(text) => setName(text)} />
    </View>
  );
};

export default CategoriaForm;
