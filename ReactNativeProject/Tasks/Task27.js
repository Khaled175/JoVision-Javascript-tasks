import React, { useState } from 'react';
import { View, Text, Image, Button, Alert, StyleSheet } from 'react-native';

const Task27 = () => {
    const images = [
        require('../../Resource/image1.png'),
        require('../../Resource/image2.png'),
        require('../../Resource/image3.png'),
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const showImagePickerAlert = () => {
        Alert.alert(
            'Pick an Image',
            'Please choose the image you want to display (1, 2, or 3):',
            [
                {
                    text: 'Image 1',
                    onPress: () => setCurrentImageIndex(0),
                },
                {   
                    text: 'Image 2',
                    onPress: () => setCurrentImageIndex(1),
                },
                { 
                    text: 'Image 3',
                    onPress: () => setCurrentImageIndex(2),
                },
            ],
            { cancelable: true }
        );
    };

    return (
        <View style={styles.container}>
            <Text style ={styles.headerText}>Currently Displaying:</Text>

            <Image
                source              = {images[currentImageIndex]}
                style               = {styles.image}
                onError = {(e) => console.log('Failed to load image:', e.nativeEvent.error)}
            />  

            <Text style ={styles.imageInfoText}>
                Image {currentImageIndex + 1} of {images.length}
            </Text>

            <Button
                title   = "Pick Image"
                onPress = {showImagePickerAlert}
            />
        </View>
    );
};  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
    },  
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
    },  
    imageInfoText: {
        fontSize: 16,
        marginBottom: 30,
        color: '#666',
    },
});

export default Task27;