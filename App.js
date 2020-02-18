import * as React from 'react';
import { Button, View, Text, TextInput, ScrollView, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen({ navigation }) {
  const [value, onChangeText] = React.useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView keyboardShouldPersistTaps="never">
        <View style={{ paddingTop:20 }}>
          <TextInput
          style={{ height: 90, width: 250, borderColor: 'gray', borderWidth: 1 }}
          multiline
          maxLength={ 160 }
          textAlignVertical={ "top" }
          onChangeText={text => onChangeText(text)}
          value={value}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button
            title="Send SMS"
            onPress={() => alert("SMS Sent!")}
          />
          <Button
            title="Contacts"
            onPress={() => navigation.navigate('Contacts')}
          />
          <Button
            title="Exit App"
            onPress={() => BackHandler.exitApp()}
          />
        </View>
      </ScrollView>
    </View>
  );
}

function Contacts({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Contacts')}
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
          name="Contacts" 
          component={Contacts} 
          options={{ 
            title: "Contacts",
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