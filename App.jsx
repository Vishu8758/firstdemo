import React from 'react'
import Stack from './src/Routes/Stack';
import { LogBox,StatusBar } from 'react-native';
LogBox.ignoreAllLogs()


const App = () => {
  return (
    <>
            {/* <StatusBar backgroundColor={'green'} barStyle={'dark-content'} /> */}
      <Stack />
    </>
  );
};

export default App;