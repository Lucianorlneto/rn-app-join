import styled from 'styled-components';

import { AppColors } from '~/styles';

const Button = styled.TouchableOpacity`
    /* flex: 1; */
    padding: 8px;
    background-color: ${AppColors.colors.primary};
    border-radius: 9px;
    justify-content: center;
`;

const ButtonText = styled.Text`
 text-align: center;
 color: ${AppColors.colors.textOnPrimary}
 font-family: 'Lucida Sans';
`;

const ButtonAlt = styled.TouchableOpacity`
    flex: 1;
    background-color: ${AppColors.colors.textOnPrimary};
    border-radius: 9px;
`;

const ButtonAdd = styled.TouchableOpacity`
    position: absolute;
    bottom: 25px;
    right: 60px;
    width: 48px;
    height: 48px;
    background-color: ${AppColors.colors.primary};
    border-radius: 999px;
    justify-content: center;
`;

export {
  Button, ButtonAlt, ButtonText, ButtonAdd,
};
