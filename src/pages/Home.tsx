import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';
import { ChangeTheme } from '../components/ChangeTheme';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isEnabled, setIsEnabled] = useState(false);
  //const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  function handleTheme() {
    setIsEnabled(previousState => !previousState)
  }

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if (newTaskTitle.trim().length > 0) {
      const data = {
        id: String(new Date().getTime()),
        title: newTaskTitle,
        done: false
      }

      setTasks(oldState => [...oldState, data]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    let newTasks = [...tasks];
    let index = newTasks.findIndex(item => item.id === id);
    newTasks[index].done ? newTasks[index].done = false : newTasks[index].done = true;
    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(oldState => oldState.filter(
      task => task.id !== id
    ));
  }

  return (
    <>
      <View
        style={isEnabled ? styles.bodyDark : styles.body}>
        <Header dark={isEnabled} />

        <TodoInput
          dark={isEnabled}
          addTask={handleAddTask} />

        <ChangeTheme
          onValueChange={handleTheme}
          value={isEnabled}
        />

        <MyTasksList
          tasks={tasks}
          onPress={handleMarkTaskAsDone}
          onLongPress={handleRemoveTask}
          dark={isEnabled}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fff",
    flex: 1
  },
  bodyDark: {
    backgroundColor: "#1F1F1F",
    flex: 1
  }
});
