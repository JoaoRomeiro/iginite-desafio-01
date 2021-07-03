import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
  dark: boolean;
}

export function TodoInput({ addTask, dark }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    //TODO - Call addTask and clean input value
    addTask(task);
    setTask("");
  }

  return (
    <View style={[styles.inputContainer, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]}>
      <TextInput
        style={dark ? styles.inputDark : styles.input}
        placeholder="Adicionar novo todo..."
        placeholderTextColor={dark ? "#E1E1E6" : "#A09CB1"}
        returnKeyType="send"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      //TODO - use value, onChangeText and onSubmitEditing props
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={dark ? styles.addButtonDark : styles.addButton}
        onPress={handleAddNewTask}
      //TODO - onPress prop
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F5F4F8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F4F8',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    backgroundColor: '#3FAD27',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  inputDark: {
    flex: 1,
    borderTopColor: 'black',
    backgroundColor: '#212136',
    paddingLeft: 12,
    borderColor: '#212136',
    borderWidth: .5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: '#E1E1E6'
  },
  addButtonDark: {
    backgroundColor: '#565BFF',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  }
});
