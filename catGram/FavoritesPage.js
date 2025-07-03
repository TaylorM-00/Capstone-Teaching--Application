import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import MainPage from "./MainPage";
import { useNavigation } from "@react-navigation/native";
//
export default function FavoritesPage({ route }) {
  //   const { photos, likedPhotos } = route.params;
  // useNavigation.navigate("Favorites", {
  //   photos,

  //   likedPhotos,
  // });

  //   const likedPics = photos.filter((photo) => likedPhotos[photo.id]);
  //
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Liked Photos</Text>
        {/* <ScrollView contentContainerStyle={styles.scrollContainer}>
          {likedPics.map((photo, index) => (
            <Image
              key={index}
              source={{ uri: photo.url }}
              style={styles.image}
            />
          ))}
          {likedPics.length === 0 && (
            <Text style={styles.notLiked}> You haven't liked any photos.</Text>
          )}
        </ScrollView> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#afeeee",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
  },
  scrollContainer: {
    alignItems: "center",
  },
  image: {
    width: 200,
    width: 200,
    borderRadius: 10,
  },
  notLiked: {
    color: "gray",
    fontSize: 16,
  },
});
