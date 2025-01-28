import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
 TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
} from "react-native";
import { SafeAreaView } from 'react-native';

export default function ShoppingList() {
  const [task, setTask] = useState({
     title: "",
     

  });
  const [tasks, setTasks] = useState([]);
 const  handleAdd = () => { 
  if (!task.title){
    Alert.alert('warning', 'please enter ShoppingList');
  }
  else {
    setTasks([...tasks, task]);
    
  }
}
const handleClear = () => {
    setTasks([]);

  }

  const ListEmptyComponent = () => {
    return (
      <View>
        <Text style={{ fontSize: 19}}> No Items in Shopping List </Text> 
      </View>

        )
  }

  return (
    <SafeAreaView style={styles.container}>
        
   <TextInput
    placeholder='Enter Shopping List'
    value={task.title}
    onChangeText={text => setTask({ ...task, title: text })}
    style={styles.input}
   
   />

<View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={handleAdd}
        >
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.clearButton} 
          onPress={handleClear}
        >
          <Text style={styles.buttonText}>CLEAR</Text>
        </TouchableOpacity>
      </View>
      {tasks.length > 0 && (
        <Text style={styles.subHeading}>Shopping List</Text>
      )}

    <FlatList
    data={tasks} 
    ListEmptyComponent={ListEmptyComponent}
    renderItem={({item}) => 
      
      <View style ={{ flexDirection: 'row'}}>
     <Text  style={{ fontSize: 18, marginRight: 10}}>{item.title}</Text>
     <Text style={{ color: item.priority === "high" ? 'red' : 'color' }}> {item.priority}
     </Text>
      
     </View>
     }

    />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
  },
  input: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  },
  clearButton: {
    backgroundColor: '#e74c3c',
    padding: 12,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 5,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#2c3e50',
  },
  itemText: {
    fontSize: 18,
    color: '#2c3e50',
  },
  priorityText: {
    fontSize: 16,
  },
  highPriority: {
    color: '#e74c3c',
  },
  normalPriority: {
    color: '#2ecc71',
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    color: '#7f8c8d',
  },
});