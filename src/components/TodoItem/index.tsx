import React, { useCallback } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { Container, Header, Title, Content } from './styles';

import barsImg from '../../assets/bars.png';
import closeImg from '../../assets/close.png';

interface TodoItemProps {
  id: number;
  content: string;
  removeTask: (id: number) => void;
}

export function TodoItem({
  id,
  content,
  removeTask,
}: TodoItemProps): JSX.Element {
  const navigation = useNavigation();

  const HandleNavigateToDetails = useCallback(() => {
    navigation.navigate('Details', { id });
  }, [navigation, id]);

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={HandleNavigateToDetails}>
          <Image source={barsImg} />
        </TouchableOpacity>

        <Title>Tarefa#{id}</Title>

        <TouchableOpacity onPress={() => removeTask(id)}>
          <Image source={closeImg} />
        </TouchableOpacity>
      </Header>

      <Content>{content}</Content>
    </Container>
  );
}
