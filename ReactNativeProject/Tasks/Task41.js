import { Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';

const Tab = createBottomTabNavigator();

const getTabBarIcon = ({ route, focused, color, size }) => {
    let iconName;
    if (route.name === 'Screen1') {
        iconName = focused ? '🏡' : '🏠';
    } else if (route.name === 'Screen2') {
        iconName = focused ? '🔍' : '🔎';
    } else if (route.name === 'Screen3') {
        iconName = focused ? '⚙️' : '⚙️';
    } else if (route.name === 'Screen4') {
        iconName = focused ? '👤' : '👥';
    }
    return <Text style = {{ color, fontSize: size }}>{iconName}</Text>;
};

const Task41 = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName = "Screen1"
                screenOptions = {({ route }) => ({
                    headerShown: false,
                    tabBarActiveTintColor: '#6200EE',
                    tabBarInactiveTintColor: '#888',
                    tabBarStyle: styles.tabBarStyle,
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarIcon: (props) => getTabBarIcon({ ...props, route}),
                })}
            >
                <Tab.Screen name="Screen1" component={Screen1} options={{ title: 'Home' }} />
                <Tab.Screen name="Screen2" component={Screen2} options={{ title: 'Explore' }} />
                <Tab.Screen name="Screen3" component={Screen3} options={{ title: 'Settings' }} />
                <Tab.Screen name="Screen4" component={Screen4} options={{ title: 'Profile' }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const colors = {
    background: '#f8f8f8',
    border: '#ddd',
};

const styles = StyleSheet.create({
    tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    tabBarStyle: {
        backgroundColor: colors.background,
        borderTopColor: colors.border,
        borderTopWidth: 1,
        height: 60,
        paddingBottom: 5,
    },
});

export default Task41;
