import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SelectPlayerScreen from './screens/SelectPlayerScreen';

export default function App() {
	const Tab = createBottomTabNavigator();

	return (
		<NavigationContainer key="navigation">
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Select Player" component={SelectPlayerScreen} />
		</NavigationContainer>
	);
}
