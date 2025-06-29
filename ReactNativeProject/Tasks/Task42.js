import { Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Screen01 from '../screens/Screen01';
import Screen02 from '../screens/Screen02';
import Screen03 from '../screens/Screen03';
import Screen04 from '../screens/Screen04';

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

const Task42 = () => {
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
                <Tab.Screen name="Screen1" component={Screen01} options={{ title: 'Home' }} />
                <Tab.Screen name="Screen2" component={Screen02} options={{ title: 'Explore' }} />
                <Tab.Screen name="Screen3" component={Screen03} options={{ title: 'Settings' }} />
                <Tab.Screen name="Screen4" component={Screen04} options={{ title: 'Profile' }} />
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

export default Task42;
