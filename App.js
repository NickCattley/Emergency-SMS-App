import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'My home' }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: "Home",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#6666FF", // Blue colour
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }} 
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ 
            title: "Details",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#6666FF", // Blue colour
            }, 
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            // Sets parameters for the back button in the top left.
            headerBackTitle: "Home",
            headerBackTitleVisible: true,
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;