// import LandingScreen from './components/auth/Landing'
// import Landing from './components/auth/Landing';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './components/auth/AuthStack';
import HomeStackNavigator from './navigations/Navigator';

export default function App() {
  return (
    <NavigationContainer>
      < HomeStackNavigator/>
    </NavigationContainer>
  );
}
