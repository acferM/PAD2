import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ButtonProps {
  color: 'purple' | 'red';
}

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  background: #e5e5e5;
`;

export const Header = styled.View`
  background: #fff;
  height: 169px;
  width: 100%;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 36px;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const TaskContainer = styled.View``;

export const TaskTitle = styled.Text``;

export const TaskContent = styled.Text``;

export const Button = styled(RectButton)<ButtonProps>``;
