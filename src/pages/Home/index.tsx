import React, { useCallback, useState } from 'react';
import { TodoItem } from '../../components/TodoItem';
import { useTasks } from '../../hooks/useTasks';

import {
  Container,
  Header,
  HeaderTitle,
  CreateToDoContainer,
  CreateToDoTitle,
  CreateToDoInput,
  CreateToDoButton,
  CreateToDoButtonText,
  TodoList,
} from './styles';

export function Home(): JSX.Element {
  const { tasks, addTask, removeTask } = useTasks();

  const [content, setContent] = useState('');

  const handleCreateTask = useCallback(() => {
    addTask(content);
  }, [addTask, content]);

  return (
    <Container>
      <Header>
        <HeaderTitle>Aplicativo ToDo List</HeaderTitle>
      </Header>

      <CreateToDoContainer>
        <CreateToDoTitle>Adicione aqui uma tarefa</CreateToDoTitle>

        <CreateToDoInput
          placeholder="tarefa"
          onChangeText={e => setContent(e)}
        />

        <CreateToDoButton onPress={handleCreateTask}>
          <CreateToDoButtonText>Adicionar uma tarefa</CreateToDoButtonText>
        </CreateToDoButton>
      </CreateToDoContainer>

      <TodoList showsVerticalScrollIndicator={false}>
        {tasks.map(task => (
          <TodoItem
            key={task.id}
            id={task.id}
            content={task.content}
            removeTask={removeTask}
          />
        ))}
      </TodoList>
    </Container>
  );
}
