import { View, Text, Image, FlatList, Pressable, Alert, StyleSheet } from 'react-native';

const Task28 = () => {
    const imageData = [
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
    ];

    const handleImagePress = (index) => {
        Alert.alert(
            'Image Selected',
            `You have selected image: ${index + 1}`,
        );
    };

    const renderItem = ({ item, index }) => (
        <Pressable
            style={styles.imageWrapper}
            onPress={() => handleImagePress(index)}
            accessibilityLabel  = {item.alt || `Image ${item.id}`}
            accessibilityHint   = {`Tap to select image ${item.id}`}
        >
            <Image
              source={item.source}
              style={styles.image}
              onError={(e) => console.log(`Failed to load image ${item.id}:`, e.nativeEvent.error)}
            />
            <Text style={styles.imageIndexText}>{item.id}</Text>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Horizontal Image Gallery</Text>
            <FlatList
                data        = {imageData}
                renderItem  = {renderItem}
                keyExtractor= {(item) => item.id}
                horizontal  = {true}
                showsHorizontalScrollIndicator  = {false}
                contentContainerStyle           = {styles.flatListContent}
            />
            <Text style={styles.footerText}>Tap an image to see its index.</Text>
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
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.backgroundLight,
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        paddingTop: 50,
    },
    flatListContent: {
        paddingHorizontal: 10,
    },
    footerText: {
        color: colors.textLight,
        fontSize: 16,
        marginTop: 30,
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
    },
});

export default Task28;
