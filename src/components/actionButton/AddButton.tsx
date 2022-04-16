import React from 'react';
import { ButtonText, ButtonAdd } from './styles';

// import { Container } from './styles';
interface Props {
    onPress: () => void;
}

const AddButton: React.FC<Props> = ({ onPress }) => (
  <ButtonAdd onPress={onPress}>
    <ButtonText style={{ fontSize: 30 }}>+</ButtonText>
  </ButtonAdd>
);

export default AddButton;
