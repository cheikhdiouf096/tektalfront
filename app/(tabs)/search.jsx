
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Dimensions } from 'react-native';
import { Video } from 'expo-av'; 

// Chemin vers la vidéo locale
const localVideo = require('../../assets/videos/volkeno.mp4');

const tripsData = [
  { id: '1',
     place: 'khelcom',
      videoUri: localVideo ,
    description : 'une tres longue description',
    Reference: 'garage Joal',
    addresse: 'adresse ' 
  },
  { id: '2',
     place: 'Bakeli',
      videoUri: localVideo ,
    description : 'une tres longue description',
    Reference: 'lieu de Reference',
    addresse: 'adresse '
  },
  { id: '3',
     place: 'Red Team ',
      videoUri: localVideo ,
    description : 'une tres longue description',
    Reference: 'lieu de Reference',
    addresse: 'adresse '
  },
  { id: '4',
     place: 'Place de france',
      videoUri: localVideo ,
    description : 'une tres longue description',
    Reference: 'lieu de Reference',
    addresse: 'adresse '
  },
  { id: '5',
     place: 'gare de thies',
      videoUri: localVideo ,
    description : 'une tres longue description',
    Reference: 'lieu de Reference',
    addresse: 'adresse '
  },
  { id: '6',
     place: 'autre',
      videoUri: localVideo ,
    description : 'une tres longue description',
    Reference: 'lieu de Reference',
    addresse: 'adresse '
  },
  { id: '7',
    place: 'Volkeno',
     videoUri: localVideo ,
   description : 'Rendez-nous visite dans notre tout nouveau local situé aux HLM Grand Yoff près du terminus AIBD. Nous sommes ouverts du Lundi au Samedi',
   Reference: 'Terminus AIBD',
   addresse: 'adresse de volkeno'
 },
];

const { width } = Dimensions.get('window');

export default function App() {
  const [searchPlace, setSearchPlace] = useState('');
  const [filteredTrips, setFilteredTrips] = useState(tripsData);

  const handleSearch = (text) => {
    setSearchPlace(text);
    const filteredPlace = tripsData.filter(trip =>
      trip.place.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredTrips(filteredPlace);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recherche de Trajets</Text>
      <TextInput
        style={styles.input}
        placeholder="Place..."
        value={searchPlace}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filteredTrips}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.trip}>
            <View style={styles.tripInfo}>
              <Text style={styles.tripText}>Nom: {item.place}</Text>
            </View>
            <View style={styles.tripInfo}>
              <Text style={styles.tripText}>Description: {item.description}</Text>
            </View>
            <View style={styles.tripInfo}>
              <Text style={styles.tripText}>Adresse: {item.addresse}</Text>
            </View>
            <View style={styles.tripInfo}>
              <Text style={styles.tripText}>Point de Reference: {item.Reference}</Text>
            </View>
            <View style={styles.videoContainer}>
              <Video
                source={item.videoUri}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="contain"
                shouldPlay
                style={styles.video}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  trip: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  videoContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 10,
    width: width - 40,
    alignSelf: 'center'
  },
  video: {
    width: '100%',
    height: 250,
  },
  tripInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  tripText: {
    fontSize: 16,
    alignItems: 'center'
  },
});



