import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Map() {
  const [address, setAddress] = useState("");
  const [region, setRegion] = useState({
    latitude: 60.1699,
    longitude: 24.9384,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const fetchCoordinates = async () => {
    if (!address) return;
    try {
      const response = await fetch(
        `https://geocode.maps.co/search?q=${encodeURIComponent(address)}`
      );
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        setRegion({
          latitude: parseFloat(lat),
          longitude: parseFloat(lon),
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        });
      } else {
        Alert.alert("Enter a valid address.");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to fetch coordinates.");
      console.error("Error fetching coordinates: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Haaga Map</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter address"
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Show" onPress={fetchCoordinates} />
      <MapView style={styles.map} region={region}>
        <Marker coordinate={region} title="Selected Location" />
      </MapView>
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
  map: {
    flex: 1,
    marginTop: 10,
  },
});

// export default App;
