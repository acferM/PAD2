import styled from 'styled-components/native';

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

export const CreateToDoContainer = styled.View`
  margin-top: 40px;
  height: 206px;
  width: 100%;
  background: #fff;
  border-radius: 12px;
  padding: 18px 22px;
`;

export const CreateToDoTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const CreateToDoInput = styled.TextInput`
  margin-top: 18px;
  width: 100%;
  height: 59px;
  background: #e5e5e5;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding-left: 18px;
  font-size: 18px;
`;

export const CreateToDoButton = styled.TouchableOpacity`
  margin-top: 28px;
  width: 100%;
  height: 38px;
  background: #6200ee;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const CreateToDoButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const TodoList = styled.ScrollView`
  margin-top: 14px;
`;
