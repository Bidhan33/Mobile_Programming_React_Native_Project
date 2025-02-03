import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    SafeAreaView,
    Alert,
    FlatList,
    TouchableOpacity,
    Linking,
  } from 'react-native';
  import { useState } from 'react';
  import {GITHUB_API_URL } from  '@env';
  
  export default function GitFinder() {
    const [keyword, setKeyword] = useState('');
    const [repositories, setRepositories] = useState([]);
  
    const handleFetch = () => {
      if (!keyword) {
        Alert.alert('Please enter a keyword');
      } else {
        fetch(`${GITHUB_API_URL}?q=${keyword}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            return response.json();
          })
          .then((data) => {
            setRepositories(data.items);
          })
          .catch((error) => {
            Alert.alert('Error', error.message);
          });
      }
      };
  
      const handleRepoClick = (url) => {
        Linking.openURL(url).catch(() => 
            Alert.alert('Error', 'Failed to open the link')
          );
      };

    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter keyword..."
          onChangeText={(text) => setKeyword(text)}
          value={keyword}
        />
         <TouchableOpacity style={styles.button} onPress={handleFetch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
  
        
        <FlatList
          data={repositories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
            style={styles.repoItem}
            onPress={() => handleRepoClick(item.html_url)} 
          >
            <Text style={styles.repoName}>{item.name}</Text>
            <Text style={styles.repoDesc}>
              {item.description || 'No description available'}
            </Text>
          </TouchableOpacity>
          )}
        />
     </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    input: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 3,
      marginBottom: 15,
      paddingHorizontal: 10,
      borderRadius: 90,
    },
    repoItem: {
      padding: 10,
      backgroundColor: '#f9f9f9',
      marginVertical: 5,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    repoName: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    repoDesc: {
      color: '#555',
    },
    button: {
        backgroundColor: 'red',  
        paddingVertical: 20,
        paddingHorizontal: 50,
        borderRadius: 100,
        alignItems: 'center',
        marginBottom: 10,
         
      },
  });
  