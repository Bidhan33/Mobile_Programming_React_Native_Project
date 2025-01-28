import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

export default function History({ route }) {
  const { history } = route.params;

  const ListEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No Calculations Yet</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={history.map((item, index) => ({ key: `${index}`, value: item }))}
        ListEmptyComponent={ListEmptyComponent}
        renderItem={({ item }) => (
          <Text style={styles.historyText}>{item.value}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: 'gray',
  },
  historyText: {
    fontSize: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});