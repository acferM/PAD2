import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useMemo, useCallback } from 'react';
import { useTasks } from '../../hooks/useTasks';

import {
  Container,
  Header,
  HeaderTitle,
  TaskContainer,
  TaskTitle,
  TaskContent,
  Button,
  ButtonText,
} from './styles';

type RouteParams = {
  id: number;
};

export function Detail(): JSX.Element {
  const { tasks, removeTask } = useTasks();
  const { params } = useRoute();
  const navigation = useNavigation();

  const { id } = params as RouteParams;

  const task = useMemo(() => {
    const find = tasks.find(t => t.id === id);

    return find;
  }, [tasks, id]);

  const HandleRemoveTask = useCallback(() => {
    removeTask(id);
    navigation.goBack();
  }, [id, removeTask, navigation]);

  return (
    <Container>
      <Header>
        <HeaderTitle>Aplicativo ToDo List</HeaderTitle>
      </Header>

      <TaskContainer>
        <TaskTitle>Tarefa#{id}</TaskTitle>

        <TaskContent>{task ? task.content : 'deleted'}</TaskContent>
      </TaskContainer>

      <Button color="purple" style={{ marginTop: 26 }}>
        <ButtonText>EDITAR TAREFA</ButtonText>
      </Button>
      <Button color="red" onPress={HandleRemoveTask}>
        <ButtonText>REMOVER TAREFA</ButtonText>
      </Button>
    </Container>
  );
}
