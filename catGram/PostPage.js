import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Alert,
  View,
  ScrollView,
  Button,
  Platform,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function PostPage() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const pickImageFromLibrary = async () => {
    // Ask for permission to access media
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access gallery is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhotoWithCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access camera is required!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };
  const submitPost = () => {
    if (!image || !caption) {
      Alert.alert("Missing info", "Please add a photo and a caption.");
      return;
    }

    // This is where you’d send data to a backend
    console.log("Post submitted:", { image, caption });
    Alert.alert("Success", "Post created!");

    // Reset form
    setImage(null);
    setCaption("");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick Image from Gallery" onPress={pickImageFromLibrary} />
      <Button title="Take Photo with Camera" onPress={takePhotoWithCamera} />

      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, marginTop: 20 }}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#afeeee",
    alignItems: "center",
    justifyContent: "center",
  },
});
