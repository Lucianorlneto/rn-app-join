import React from 'react';
import { Text } from 'react-native';
import { Button, ButtonText } from './styles';

// import { Container } from './styles';
interface Props {
    onPress: () => void;
    text: string;
}

const ActionButton: React.FC<Props> = ({ onPress, text }) => (
  <Button onPress={onPress}>
    <ButtonText>{text}</ButtonText>
  </Button>
);

export default ActionButton;
