import { View } from 'react-native';
import styled from 'styled-components';
import { AppColors } from '.';

const Container = styled.View`
    flex: 1;
    margin: 8px;
    /* border: 2px black; */
    justify-content: center;
    align-items: center;
`;

const Title1 = styled.Text`
    font-size: 18px;
    text-align: center;
`;

const Title2 = styled.Text`
    font-size: 12px;
    text-align: center;
`;

const ListItem = styled.TouchableOpacity`
    flex: 1;
    padding: 16px;
    margin: 4px;
`;

const ListSeparator = styled.View`
    background-color: ${AppColors.colors.primary};
    width: 100%;
    height: 1px;
`;

const Label = styled.Text`
    padding: 4px;
    font-size: 16px;
    font-weight: bold;
`;

const Input = styled.TextInput`
    border-bottom-width: 1px;
`;

export {
  Container, Title1, Title2, ListItem, ListSeparator, Label, Input,
};
