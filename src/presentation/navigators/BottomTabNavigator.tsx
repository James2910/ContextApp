import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { IonIcons } from '../components/IonIcons';
import { useCounterStore } from '../../store/counter-store';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {

  const count = useCounterStore( state => state.counter)

  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#8E44AD',
            
            tabBarLabelStyle: {
                marginBottom: 5,
            },
            
            headerStyle: {
                elevation: 0,
                borderColor: 'transparent',
                shadowColor: 'transparent',
            },
            
            tabBarStyle: {
                elevation: 0,
                borderTopWidth: 0,
                paddingTop: 5,
            }
        }}
    >
      <Tab.Screen name="Home" options={{ title: 'Home', tabBarIcon: ({ color }) => ( <IonIcons name='home' color={color} /> ) }} component={HomeScreen} />
      <Tab.Screen name="Profile" options={{ title: 'Profile', tabBarIcon: ({ color }) => ( <IonIcons name='person' color={color} /> ) }} component={ProfileScreen} />
      <Tab.Screen name="Settings" options={{ tabBarLabel: 'Settings', tabBarIcon: ({ color }) => ( <IonIcons name='settings' color={color} /> ) }} component={SettingsScreen} />
    </Tab.Navigator>
  );
}