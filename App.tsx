import {
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold,
    useFonts,
} from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import SplashScreen from './src/screens/Splash';
import {
    BookmarkStack,
    DashboardStack,
    NotificationStack,
    SearchStack,
    ShoppingCartStack,
    CheckoutStack,
} from './src/stacks';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';

const Stack = createStackNavigator();

// const Tab = createBottomTabNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
        Roboto_400Regular_Italic,
    });

    // useCallback(async () => {
    //   if (fontsLoaded) {
    //     await SplashScreen.hideAsync();
    //   }
    // }, [fontsLoaded]);

    if (!fontsLoaded) {
        return <SplashScreen />;
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="SignIn"
                        component={SignIn}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="SignUp"
                        component={SignUp}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Dashboard"
                        options={{
                            headerShown: false,
                        }}
                        component={DashboardStack}
                    />
                    <Stack.Screen
                        name="Search"
                        options={{
                            headerShown: false,
                        }}
                        component={SearchStack}
                    />
                    <Stack.Screen
                        name="Bookmark"
                        options={{
                            headerShown: false,
                        }}
                        component={BookmarkStack}
                    />
                    <Stack.Screen
                        name="ShoppingCart"
                        options={{
                            headerShown: false,
                        }}
                        component={ShoppingCartStack}
                    />
                    <Stack.Screen
                        name="Notification"
                        options={{
                            headerShown: false,
                        }}
                        component={NotificationStack}
                    />
          
                    <Stack.Screen name="Dashboard" component={DashboardStack} />
                    <Stack.Screen name="Search" component={SearchStack} />
                    <Stack.Screen name="Bookmark" component={BookmarkStack} />
                    <Stack.Screen name="ShoppingCart" component={ShoppingCartStack} />
                    <Stack.Screen name="Notification" component={NotificationStack} />
                    <Stack.Screen name="Checkout" component={CheckoutStack} />
                </Stack.Navigator>

                {/* <Tab.Navigator
          initialRouteName="Dashboard"
          labeled={false}
          tabBarOptions={{
            activeTintColor: "#F7941D",
          }}
          tabBarStyle={{
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
            elevation: 24,
            borderTopLeftRadius: 21,
            borderTopRightRadius: 21,
            backgroundColor: "#fff",
            position: "absolute",
            bottom: 0,
            padding: 10,
            width: "100%",
            height: 84,
            zIndex: 0,
          }}
          screenOptions={{
            tabBarShowLabel: false,
          }}
        >
          <Tab.Screen
            name="Checkout"
            component={CheckoutStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon.Button
                  name="dollar-sign"
                  backgroundColor="transparent"
                  color="black"
                />
              ),
            }}
          />

          <Tab.Screen
            name="Search"
            component={SearchStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon.Button
                  name="briefcase"
                  backgroundColor="transparent"
                  color="black"
                />
              ),
            }}
          />
          <Tab.Screen
            name="DashboardStack"
            component={DashboardStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon.Button
                  name="home"
                  backgroundColor="transparent"
                  color="black"
                />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={NotificationStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon.Button
                  name="bell"
                  backgroundColor="transparent"
                  color="black"
                />
              ),
            }}
          />

          <Tab.Screen
            name="Bookmark"
            component={BookmarkStack}
            options={{
              headerShown: false,

              tabBarIcon: ({ color, size }) => (
                <Icon.Button
                  name="clock"
                  backgroundColor="transparent"
                  color="black"
                />
              ),
            }}
          />
          <Tab.Screen
            name="Shopping Cart"
            component={ShoppingCartStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon.Button
                  name="shopping-cart"
                  backgroundColor="transparent"
                  color="black"
                />
              ),
            }}
          />
        </Tab.Navigator> */}
            </NavigationContainer>
        );
    }
}
