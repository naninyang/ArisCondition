import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ScreenStack from './src/routers/ScreenStack';

function App() {
  return (
    <NavigationContainer>
      <ScreenStack />
    </NavigationContainer>
  );
}

export default App;
