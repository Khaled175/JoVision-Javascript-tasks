import { useState, useRef } from 'react';
import { View, Text, Image, FlatList, Pressable, Alert,
    StyleSheet, Modal, TextInput, TouchableOpacity, Button } from 'react-native';

const Task31 = () => {
    const [imageData, setImageData] = useState([
        { id: '1' , source: require('../../Resource/img1.png' ) , alt: 'Image 1' },
        { id: '2' , source: require('../../Resource/img2.png' ) , alt: 'Image 2' },
        { id: '3' , source: require('../../Resource/img3.png' ) , alt: 'Image 3' },
        { id: '4' , source: require('../../Resource/img4.png' ) , alt: 'Image 4' },
        { id: '5' , source: require('../../Resource/img5.png' ) , alt: 'Image 5' },
        { id: '6' , source: require('../../Resource/img6.png' ) , alt: 'Image 6' },
        { id: '7' , source: require('../../Resource/img7.png' ) , alt: 'Image 7' },
        { id: '8' , source: require('../../Resource/img8.png' ) , alt: 'Image 8' },
        { id: '9' , source: require('../../Resource/img9.png' ) , alt: 'Image 9' },
        { id: '10', source: require('../../Resource/img10.png') , alt: 'Image 10'},
    ]);

    const flatListRef = useRef(null);

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedIndexInput, setSelectedIndexInput] = useState('');

    const handleImagePress = (index) => {
        Alert.alert(
            'Image Selected',
            `You have selected image: ${index + 1}`,
        );
    };

    const handleRemoveImage = (idToRemove) => {
        Alert.alert(
            'Remove Image?',
            'Are you sure you want to remove this image from the list?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Remove',
                    onPress: () => {
                        setImageData(prevImageData => prevImageData.filter(image => image.id !== idToRemove));
                    },
                    style: 'destructive', // for iOS
                },
            ],
            {cancelable: true },
        );
    };

    const handleRepeatImage = (idToRepeat) => {
        setImageData(prevImageData => {
            const originalIndex = prevImageData.findIndex(img => img.id === idToRepeat);

            if (originalIndex === -1) {
                return prevImageData;
            }

            const originalImage = prevImageData[originalIndex];

            const newUniqueId = `${originalImage.id}-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;

            const newImage = {
                ...originalImage,
                id: newUniqueId,
                alt: `${originalImage.alt} (copy)`,
            };

            const newImageData = [
                ...prevImageData.slice(0, originalIndex + 1),
                newImage,
                ...prevImageData.slice(originalIndex + 1),
            ];

            return newImageData;
        });
    };

    const handleSubmitIndex = () => {
        const inputNum = parseInt(selectedIndexInput, 10);

        if (isNaN(inputNum) || inputNum < 1 || inputNum > imageData.length) {
            Alert.alert('Invalid Input', `Please enter a number between 1 and ${imageData.length}.`);
            return;
        }

        setModalVisible(false);
        setSelectedIndexInput('');

        if (flatListRef.current && imageData.length > 0) {
            flatListRef.current.scrollToIndex({ animated: true, index: inputNum - 1 });
        } else {
            Alert.alert('Scroll Error', 'No images to scroll to or FlatList not ready.');
        }
    };

    const getItemLayout = (data, index) => ({
        length: styles.imageWrapper.width + styles.imageWrapper.marginHorizontal * 2,
        offset: (styles.imageWrapper.width + styles.imageWrapper.marginHorizontal * 2) * index,
        index,
    });

    const renderItem = ({ item, index }) => (
        <Pressable
            style   = {styles.imageWrapper}
            onPress = {() => handleImagePress(index)}
            accessibilityLabel  = {item.alt || `Image ${item.id}`}
            accessibilityHint   = {`Tap to select image ${item.id}`}
        >
            <Image
                source  = {item.source}
                style   = {styles.image}
                onError = {(e) => console.log(`Failed to load image ${item.id}:`, e.nativeEvent.error)}
            />
            <Text style = {styles.imageIndexText}>{item.id}</Text>
            <Pressable
                style   = {styles.deleteIconContainer}
                onPress = {() => handleRemoveImage(item.id)}
                accessibilityLabel  = {`Remove image ${item.id}`}
                accessibilityHint   = "Tap to remove this image from the list"
            >
                <Text style={styles.deleteIconText}>✖</Text>
            </Pressable>
            <Pressable
                style   = {styles.repeatIconContainer}
                onPress = {() => handleRepeatImage(item.id)}
                accessibilityLabel  = {`Repeat image ${item.id}`}
                accessibilityHint   = "Tap to duplicate this image in the list"
            >
                <Text style={styles.repeatIconText}>⟳</Text>
            </Pressable>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Horizontal Image Gallery</Text>
            <FlatList
                ref          = {flatListRef}
                data         = {imageData}
                renderItem   = {renderItem}
                keyExtractor = {(item) => item.id}
                horizontal   = {true}
                showsHorizontalScrollIndicator  = {false}
                contentContainerStyle           = {styles.flatListContent}
                getItemLayout       = {getItemLayout}
                initialNumToRender  = {5}
                maxToRenderPerBatch = {5}
                windowSize          = {10}
            />
            <Text style={styles.footerText}>Tap an image to see its index.</Text>

            <Button
                title   = "Go to Image by Index"
                onPress = {() => setModalVisible(true)}
            />

            <Modal
                animationType   = "slide"
                transparent     = {true}
                visible         = {modalVisible}
                onRequestClose  = {() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Enter Image Index (1-{imageData.length}):</Text>
                        <TextInput
                            style        = {styles.modalTextInput}
                            keyboardType = "numeric"
                            onChangeText = {setSelectedIndexInput}
                            value        = {selectedIndexInput}
                            placeholder  = "e.g., 5"
                        />
                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonSubmit]}
                                onPress={handleSubmitIndex}
                            >
                                <Text style={styles.textStyle}>Go</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const colors = {
    backgroundLight: '#f8f8f8',
    textDark: '#333',
    white: '#fff',
    black: '#000',
    textMedium: '#555',
    textLight: '#777',
    borderColor: '#ddd',
    modalBackground: 'rgba(0,0,0,0.5)',
    modalBorder: '#eee',
    buttonClose: '#dc3545',
    buttonSubmit: '#007bff',
    buttonText: '#fff',
    modalInputBackground: '#f0f0f0',
    deleteIconBackground: 'rgba(255, 0, 0, 0.7)',
    deleteIconColor: '#fff',
    repeatIconBackground: 'rgba(0, 123, 255, 0.7)',
    repeatIconColor: '#fff',
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderRadius: 8,
        elevation: 2,
        marginHorizontal: 5,
        padding: 10,
        width: 100,
    },
    buttonClose: {
        backgroundColor: colors.buttonClose,
    },
    buttonSubmit: {
        backgroundColor: colors.buttonSubmit,
    },
    centeredView: {
        alignItems: 'center',
        backgroundColor: colors.modalBackground,
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        alignItems: 'center',
        backgroundColor: colors.backgroundLight,
        flex: 1,
        justifyContent: 'flex-start',
        padding: 20,
        paddingTop: 50,
    },
    deleteIconContainer: {
        alignItems: 'center',
        backgroundColor: colors.deleteIconBackground,
        borderRadius: 15,
        height: 30,
        justifyContent: 'center',
        position: 'absolute',
        right: 5,
        top: 5,
        width: 30,
        zIndex: 1,
    },
    deleteIconText: {
        color: colors.deleteIconColor,
        fontSize: 16,
        fontWeight: 'bold',
    },
    flatListContent: {
        paddingHorizontal: 10,
    },
    footerText: {
        color: colors.textLight,
        fontSize: 16,
        marginTop: 5,
        textAlign: 'center',
    },
    headerText: {
        color: colors.textDark,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        borderRadius: 8,
        height: 120,
        marginBottom: 5,
        resizeMode: 'cover',
        width: 120,
    },
    imageIndexText: {
        color: colors.textMedium,
        fontSize: 16,
        fontWeight: 'bold',
    },
    imageWrapper: {
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        elevation: 3,
        marginHorizontal: 10,
        padding: 5,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        width: 120,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: '100%',
    },
    modalText: {
        color: colors.textDark,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    modalTextInput: {
        backgroundColor: colors.modalInputBackground,
        borderColor: colors.borderColor,
        borderRadius: 5,
        borderWidth: 1,
        fontSize: 16,
        height: 40,
        paddingHorizontal: 10,
        width: '80%',
    },
    modalView: {
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 20,
        elevation: 5,
        margin: 20,
        padding: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    repeatIconContainer: {
        alignItems: 'center',
        backgroundColor: colors.repeatIconBackground,
        borderRadius: 15,
        height: 30,
        justifyContent: 'center',
        left: 5,
        position: 'absolute',
        top: 5,
        width: 30,
        zIndex: 1,
    },
    repeatIconText: {
        color: colors.repeatIconColor,
        fontSize: 16,
        fontWeight: 'bold',
    },
    textStyle: {
        color: colors.buttonText,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Task31;
