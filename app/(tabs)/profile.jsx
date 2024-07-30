// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Button, View } from 'react-native';
// import { Video } from 'expo-av';
// import React from 'react';

// export default function App() {
//   const video = React.useRef(null);
//   const secondVideo = React.useRef(null);
//   const [status, setStatus] = React.useState({});
//   const [statusSecondVideo, setStatusSecondVideo] = React.useState({});



  

//   return (
//     <View style={styles.container}>
//       <Video
//         ref={secondVideo}
//         style={styles.video}
//         source={require("../../assets/videos/volkeno.mp4")}
//         useNativeControls
//         resizeMode="contain"
//         isLooping
//         onPlaybackStatusUpdate={setStatusSecondVideo}
//       />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   video: {
//     flex: 1,
//     alignSelf: 'stretch'
//   },
//   buttons: {
//     margin: 16
//   }
// });



import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer />
    </GestureHandlerRootView>
  );
}
