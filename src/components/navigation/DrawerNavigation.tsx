import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from './TabNavigation';
import {SearchScreenStack} from '../../stacks';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation (props)  {
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor: '#A44200',
                color: 'white',
                itemStyle: { marginVertical: 5, color: 'white' },
                labelStyle: {
                    color: '#fff',
                },
            }}
            screenOptions={{ headerShown: false }}
        >

            <Drawer.Screen
                name="TabNavigator"
                options={{ drawerLabel: 'Home' }}
                component={TabNavigation}
            />
            <Drawer.Screen
                name="Search"
                options={{ drawerLabel: 'Search' }}
                component={SearchScreenStack}
            />
        </Drawer.Navigator>
    );
}