import { useContext } from 'react';
import { TasksContext, tasksContext } from '../contexts/tasks';

function useTasks(): TasksContext {
  const context = useContext(tasksContext);

  return context;
}

export { useTasks };
