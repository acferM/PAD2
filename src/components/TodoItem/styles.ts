import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 8px 14px;
  margin-top: 34px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const Content = styled.Text`
  margin-top: 18px;
  color: rgba(0, 0, 0, 0.5);
`;
