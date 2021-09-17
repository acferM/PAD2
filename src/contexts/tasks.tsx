import React, {
  createContext,
  ReactNode,
  useState,
  useCallback,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Task = {
  id: number;
  content: string;
};

type TasksContext = {
  tasks: Task[];
  addTask: (content: string) => void;
  removeTask: (id: number) => void;
};

interface TasksProviderProps {
  children: ReactNode;
}

const tasksContext = createContext<TasksContext>({} as TasksContext);

function TasksProvider({ children }: TasksProviderProps): JSX.Element {
  const [contador, setContador] = useState(1);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function loadTasks() {
      const [storaged, counter] = await AsyncStorage.multiGet([
        '@PAD::tasks',
        '@PAD::counter',
      ]);

      if (!storaged[1]) {
        throw new Error('Error using memory tasks');
      }

      const parsedStorage = JSON.parse(storaged[1]);

      setTasks(parsedStorage);
      setContador(Number(counter[1]));
    }

    loadTasks();
  }, []);

  const addTask = useCallback(
    async (content: string) => {
      await AsyncStorage.multiSet([
        [
          '@PAD::tasks',
          JSON.stringify([
            ...tasks,
            {
              id: contador,
              content,
            },
          ]),
        ],
        ['@PAD::counter', String(contador + 1)],
      ]);

      setTasks(oldTasks => [
        ...oldTasks,
        {
          id: contador,
          content,
        },
      ]);

      setContador(contador + 1);
    },
    [contador, tasks],
  );

  const removeTask = useCallback(
    (id: number) => {
      const filteredTasks = tasks.filter(task => task.id !== id);

      setTasks(filteredTasks);
    },
    [tasks],
  );

  return (
    <tasksContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </tasksContext.Provider>
  );
}

export { TasksProvider, tasksContext, TasksContext };
