// import LandingScreen from './components/auth/Landing'
// import Landing from './components/auth/Landing';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './components/auth/AuthStack';

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
  );
}