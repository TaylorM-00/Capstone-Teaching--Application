<!-- Tools often used with react native  -->

Expo: Makes setup easier; great for beginners.

React Navigation: Handles routing/navigation between screens.

Redux/Zustand/Context API: For state management.

AsyncStorage: For local storage.

Axios/Fetch: For API calls.

<!-- Common Components in React Native -->

<View> – like a <div> in web

<Text> – for rendering text

<Image> – for displaying images

<ScrollView> – for scrollable content

<TextInput> – for user input

<TouchableOpacity> – for buttons and touchable elements

<!-- Core Concepts  -->

| **Components** | Reusable UI pieces (like buttons, images, views) |
| **JSX** | A syntax extension that lets you write HTML-like code inside JavaScript |
| **Props** | Data passed into a component from a parent |
| **State** | Data managed within a component that can change over time |
| **Hooks** | Functions like `useState` and `useEffect` to manage state and lifecycle |
| **Navigation** | React Native doesn’t have built-in navigation; you use libraries like `react-navigation` |

<!-- View Properties -->

- style > style={{ padding: 10 }} - used to add layout / styling

- onLayout > onLayout={(e) => console.log(e)} - this a callback when layout is calculated.

- pointerEvents > pointerEvents="none" - used to control touch handling

a style prop is almost always used with view, used to control layout , spacing and alignment

<!-- ScrollView Properties -->

vertically by default

- horizontal > <ScrollView horizontal> - makes it scroll sideways

- showsVerticalScrollIndicator > false to hide it - show/ hide scroll bar

- contentContainerStyle > contentContainerStyle={{ paddingBottom: 100 }} - style the inner container

- onScroll > onScroll={(e) => ...} - handle scroll events

<!-- FlatList  -->

- used for 50 + pics

```js
<FlatList
  data={DATA}
  renderItem={renderFunction}
  keyExtractor={(item) => item.id}
/>
```

- data > The array of items to render

- renderItem > A function that returns how each item should look

- keyExtractor > Tells FlatList how to uniquely identify each item (for performance)

- horizontal > Makes the list scroll left to right instead of top to bottom

- numColumns > Makes it render in grid form (e.g., 2 columns)

```js
const photos = [
  { id: "1", uri: "https://picsum.photos/id/1/200/300" },
  { id: "2", uri: "https://picsum.photos/id/2/200/300" },
  { id: "3", uri: "https://picsum.photos/id/3/200/300" },
  // Add more items
];

export default function PhotoGallery() {
  return (
    <FlatList
      data={photos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.uri }} style={styles.image} />
        </View>
      )}
    />
  );
}
```

<!-- Bones FlatList feature and how to use it   -->

- Horizontal scrolling > horizontal={true}

- Grid layout > numColumns={2}

- Pull-to-refresh > onRefresh and refreshing props

- Infinite scroll / load more > onEndReached + onEndReachedThreshold
