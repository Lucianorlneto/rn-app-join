import React from 'react';

import { AddButton } from '~/components';
import { Container } from '~/styles/globalStyles';

import ProdutosList from './components/ProdutosList';

const produtosData = [
  {
    id: 0,
    title: 'produto 1',
    category: 'categoria 2',
  },
  {
    id: 1,
    title: 'produto 2',
    category: 'categoria 3',
  },
  {
    id: 2,
    title: 'produto 3',
    category: 'categoria 6',
  },
  {
    id: 3,
    title: 'produto 4',
    category: 'categoria 3',
  },
];

const Produtos: React.FC = () => (
  <Container>
    <ProdutosList data={produtosData} />
    <AddButton onPress={() => console.log('add')} />
  </Container>
);

export default Produtos;
