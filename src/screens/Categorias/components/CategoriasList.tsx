import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View, Text, FlatList, TouchableOpacity,
} from 'react-native';

import { ListSeparator } from '~/styles/globalStyles';

interface Props{
    data: Array<object>;
}

const FlatListItemSeparator = () => (
  <ListSeparator />
);

const CategoriasList: React.FC<Props> = ({ data }) => {
  const navigation = useNavigation();

  function renderItem({ item }) {
    return (
      <TouchableOpacity style={{ padding: 16, flexDirection: 'row', justifyContent: 'space-between' }} onPress={() => navigation.push('Categoria', { categoria: item })}>
        <Text style={{ fontSize: 12, textAlign: 'center' }}>
          Id:
          {' '}
          {item.id}
        </Text>
        <Text style={{ textAlign: 'center' }}>{item.title}</Text>
      </TouchableOpacity>

    );
  }

  return (
    <FlatList
      style={{ width: '100%' }}
      data={data}
      renderItem={({ item }) => renderItem({ item })}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={FlatListItemSeparator}
    />
  );
};

export default CategoriasList;
