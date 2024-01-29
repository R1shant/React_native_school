import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Image, TouchableOpacity, Text, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNounsContext } from '../controller/NounsController';
import styles from './assets/UpfrontStyles';

const CreateNounView = () => {
    const {nounsState, dispatch } = useNounsContext();
    const [name, setName] = useState('');
    const [bornAt, setBornAt] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            const selectedAsset = result.assets[0];
            setImage(selectedAsset.uri);
        }
    };

    const saveNoun = () => {
        const newNoun = {
            id: nounsState.nouns.length + 1,
            name,
            bornAt,
            photo: image,
        };
        dispatch({ type: 'CREATENEWNOUN', payload: newNoun });
    };

    return (
        <View style={styles.createForm}>
            <TextInput styles={styles.createName}
                placeholder="Your Name"
                blurOnSubmit
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput styles={styles.CreateBornAt}
                placeholder="Born At"
                blurOnSubmit
                value={bornAt}
                onChangeText={(text) => setBornAt(text)}
            />

            <TouchableOpacity onPress={pickImage}>
                <Text>Pick an image</Text>
            </TouchableOpacity>

            {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}

            <Button title="Submit" onPress={saveNoun} />
        </View>
    );
};

export default CreateNounView;