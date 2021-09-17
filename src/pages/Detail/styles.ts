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

export const TaskContainer = styled.View`
  width: 100%;
  background: white;
  margin-top: 46px;
  border-radius: 10px;
  height: 370px;
`;

export const TaskTitle = styled.Text`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

export const TaskContent = styled.Text`
  margin-top: 8px;
  padding: 0 14px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
`;

export const Button = styled(RectButton)<ButtonProps>`
  margin-top: 14px;
  background: ${props => (props.color === 'purple' ? '#6200EE' : '#EB3223')};
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;
