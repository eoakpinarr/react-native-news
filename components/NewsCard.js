import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import styles from './NewsCard.style';

const NewsCard = ({ news }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => Linking.openURL(news.url)}
    >
      <Image style={styles.image} source={{ uri: news.imageUrl }} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.description}>{news.description}</Text>
        <Text style={styles.author}>{news.author}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;
