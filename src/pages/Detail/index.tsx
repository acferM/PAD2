import React from 'react';

import {
  Container,
  Header,
  HeaderTitle,
  TaskContainer,
  TaskTitle,
  TaskContent,
  Button,
} from './styles';

export function Detail(): JSX.Element {
  return (
    <Container>
      <Header>
        <HeaderTitle>Aplicativo ToDo List</HeaderTitle>
      </Header>
    </Container>
  );
}
