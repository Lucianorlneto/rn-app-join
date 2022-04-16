import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View, Text, FlatList, TouchableOpacity,
} from 'react-native';

import { ListSeparator, Container, Title1 } from '~/styles/globalStyles';

interface Props{
    data: Array<object>;
}

const FlatListItemSeparator = () => (
  <ListSeparator />
);

const ProdutosList: React.FC<Props> = ({ data }) => {
  const navigation = useNavigation();

  function renderItem({ item }) {
    return (
      <TouchableOpacity style={{ padding: 16, flexDirection: 'row', justifyContent: 'space-between' }} onPress={() => navigation.push('Produto', { produto: item })}>
        <View>
          <Text style={{ fontSize: 12, textAlign: 'center' }}>
            Id:
            {' '}
            {item.id}
          </Text>
          <Text>
            Categoria:
            {' '}
            {item.category}
          </Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ fontSize: 16, textAlign: 'center' }}>{item.title}</Text>
        </View>
      </TouchableOpacity>

    );
  }

  return (data
    ? (
      <FlatList
        style={{ width: '100%' }}
        data={data}
        renderItem={({ item }) => renderItem({ item })}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={FlatListItemSeparator}
      />
    )
    : (
      <Container>
        <Title1>Não há produtos cadastrados</Title1>
      </Container>
    ));
};

export default ProdutosList;
