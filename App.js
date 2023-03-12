import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions } from 'react-native';

import NewsCard from './components/NewsCard';

import haber_veri from './haber_veri';
import haber_kaydır from './haber_kaydır';

function App() {

  const renderNews = ({ item }) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Haberler</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal>
            {haber_kaydır.map(items => (
              <Image
                style={styles.banner_image}
                source={{ uri: items.imageUrl }}
              />

            ))}
          </ScrollView>
        )}
        keyExtractor={item => item.u_id.toString()}
        data={haber_veri}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 3,
    margin: 20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'steelblue'
  },
});

export default App;
