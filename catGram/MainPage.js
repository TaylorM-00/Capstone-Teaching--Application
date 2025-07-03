import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import

////////////
export default function MainPage() {
  const [photo, setPhotos] = useState([]);
  const [likedPhotos, setLikedPhotos] = useState({});
  const [savedPhotos, setSavedPhotos] = useState({});
  // navigation.navigate("Favorites", {
  //   photo,
  //   likePhoto,
  // });

  ////////////////////////////////////
  // toggle / event handlers

  const likePhoto = (id) => {
    setLikedPhotos((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const savePhoto = (id) => {
    setSavedPhotos((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  ////////////////////////////////////////////////////////////////////////
  // this
  useEffect(() => {
    getCatPics();
  }, []);

  // the fetch for the cat pics
  const getCatPics = () => {
    const URL = "https://api.thecatapi.com/v1/images/search?limit=10";
    //
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPhotos(data);
        console.log(data);
      });
  };
  //////////////////////////////////////////////////////////////////////////
  //
  return (
    <>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {photo.map((item, index) => (
            <View key={index} style={styles.imageBlock}>
              {/*  */}
              <Image
                key={index}
                source={{ uri: item.url }}
                style={styles.image}
              />
              {/*  */}
              <View style={styles.buttonRow}>
                <Text onPress={() => likePhoto(item.id)} style={styles.button}>
                  {likedPhotos[item.id] ? "❤️ Liked" : "🤍 Like"}
                </Text>
                {/*  */}
                <Text onPress={() => savePhoto(item.id)} style={styles.button}>
                  {savedPhotos[item.id] ? "💾 Saved" : "📁 Save"}
                </Text>
              </View>

              {/*  */}
            </View>
          ))}
          <Image />
        </ScrollView>
      </View>
    </>
  );
}

///////////////////////////////////////////////////////////////////////////////////
// the style sheet container that handles all on the page
// This MUST be updated or the work will not display.

//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87ceeb",
    alignItems: "center",
    // justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
    paddingBottom: 20,
  },
  scrollContent: {
    alignItems: "center",
    paddingVertical: 20,
  },
  image: {
    width: 200,
    height: 100,
    marginVertical: 10,
    borderRadius: 10,
  },
  imageBlock: {
    alignItems: "center",
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    fontSize: 16,
    marginHorizontal: 10,
  },
});
