import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, Image, StyleSheet } from "react-native";

const Recipe = () => {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    if (!ingredient) return;
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Recipes</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter ingredient"
        value={ingredient}
        onChangeText={setIngredient}
      />
      <Button title="Search" onPress={fetchRecipes} />
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.strMealThumb }} style={styles.image} />
            <Text style={styles.mealTitle}>{item.strMeal}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  mealTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Recipe;
