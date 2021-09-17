import React from 'react';
import { TasksProvider } from './src/contexts/tasks';
import { Routes } from './src/routes';

export default function App(): JSX.Element {
  return (
    <TasksProvider>
      <Routes />
    </TasksProvider>
  );
}
