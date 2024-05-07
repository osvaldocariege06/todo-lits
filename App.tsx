import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Alert, Keyboard } from 'react-native';
import Header from './app/components/Header';
import Input from './app/components/Input';
import Task from './app/components/Task';
import { useEffect, useState } from 'react';
import { supabase } from './app/services/supabase';

interface TasksProps {
  id: number;
  title: string;
  completed: boolean;
}



export default function App() {

const [newTask, setNewTask] = useState('')
const [tasks, setTasks] = useState<TasksProps[]>([])
const [isLoading, setIsLoading] = useState(false)
const [isLoadingDelete, setIsLoadingDelete] = useState(false)
const [isLoadingUpdate, setIsLoadingUpdate] = useState(false)

  const handleAddTask = async (task: string) => {
    setIsLoading(true)
  if (task === '') {
    Alert.alert('Please enter a task')
    setIsLoading(false)
  } else {
    const {data, error} = await supabase.from('tasks').insert({title: task, completed: false})

    if (error) {
      console.error(error)
    } else {
      await fetchTask()
    }
    
    Keyboard.dismiss()
    setNewTask('')
    setIsLoading(false)
  }

}

const fetchTask = async () => {
  const {data, error} = await supabase.from('tasks').select("*")

  if (error) {
    console.error(error)
  } else {
    setTasks(data)
    console.log('data: ', data);
    
  }
}

  const updateTask = async (id: number, completed: boolean) => {
    setIsLoadingUpdate(true)
    const { error } = await supabase.from("tasks").update({ completed }).match({ id })

    if (error) {
      setIsLoadingUpdate(false)
      console.error('UpdateTask error: ', error);
    } else {
      setIsLoadingUpdate(false)
      await fetchTask()
    }
  }

  const deleteTask = async (id: number) => {
    setIsLoadingDelete(true)

    const { error } = await supabase.from("tasks").delete().eq("id", id);

    if (error) {
      setIsLoadingDelete(false)
      console.error('Error delete task: ', error);
    } else {
      setIsLoadingDelete(false)
      await fetchTask()
    }
  }

  useEffect(() => {

    console.log('Tasks: ', tasks);
    
    fetchTask()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Input props={{
        handleAddTask: () => handleAddTask(newTask),
        task: newTask,
        setTask: setNewTask,
        isLoading: isLoading,
      }} />
      <View style={{ marginTop: 20 }}>
        {tasks.map((item, index) => (
          <Task key={index} id={item.id} title={item.title} completed={item.completed} onDelete={() => deleteTask(item.id)} onUpdate={() => updateTask(item.id, item.completed)} isLoadingDelete={isLoadingDelete} isLoadingUpdate={isLoadingUpdate}  />
        ))}
      </View>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
