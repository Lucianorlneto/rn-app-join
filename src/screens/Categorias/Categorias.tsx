import React from 'react';

import { AddButton } from '~/components';
import { Container } from '~/styles/globalStyles';

import CategoriasList from './components/CategoriasList';

const categoriasData = [
  {
    id: 0,
    title: 'categoria 1',
  },
  {
    id: 1,
    title: 'categoria 2',
  },
  {
    id: 2,
    title: 'categoria 3',
  },
  {
    id: 3,
    title: 'categoria 4',
  },
  {
    id: 4,
    title: 'categoria 5',
  },
  {
    id: 5,
    title: 'categoria 6',
  },
  {
    id: 6,
    title: 'categoria 7',
  },
  {
    id: 7,
    title: 'categoria 8',
  },
  {
    id: 8,
    title: 'categoria 9',
  },
  {
    id: 9,
    title: 'categoria 10',
  },
  {
    id: 10,
    title: 'categoria 11',
  },
];

const Categorias: React.FC = ({ navigation }) => (
  <Container>
    <CategoriasList data={categoriasData} />
    <AddButton onPress={() => navigation.push('Categoria')} />
  </Container>
);

export default Categorias;
