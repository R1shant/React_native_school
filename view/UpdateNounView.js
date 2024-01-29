import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, Platform, TextInput } from 'react-native';
import { useNounsContext } from '../controller/NounsController';
import * as ImagePicker from 'expo-image-picker';
import styles from './assets/UpfrontStyles'

const UpdateNounView = () => {
    const { nounsState, dispatch } = useNounsContext();
    const [name, setName] = useState(nounsState.noun.name);
    const [bornAt, setBornAt] = useState(nounsState.noun.bornAt);
    const [image, setImage] = useState(nounsState.noun.photo);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const updatedNoun = {
        id: nounsState.noun.id,
        name,
        bornAt,
        photo: image,

    }
    const saveNoun = () => {
        dispatch({ type: 'UPDATENOUN', payload: updatedNoun, sub: 'updatenoun' })

    }
    return (
        <View style={styles.updateForm}>
            <TextInput
                style={styles.textName}
                placeholder="Name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style={styles.textBornAt}
                value={bornAt}
                placeholder="Born At"
                onChangeText={(text) => setBornAt(text)}
            />
            <Button title="Pick an image from camera roll" onPress={pickImage} />

            <View style={styles.updateImageContainer}>
                {image && <Image source={{ uri: image }} style={styles.updateImage} />}
            </View>

            <Button title="Save" onPress={saveNoun} />
        </View>

    )
};

export default UpdateNounView;
