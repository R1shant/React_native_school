import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useNounsContext } from '../controller/NounsController';
import styles from './assets/UpfrontStyles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Snackbar } from 'react-native-paper';

const ReadNounView = () => {
    const navigation = useNavigation();
    const { nounsState } = useNounsContext();
    const [visible, setVisible] = useState(false);

    const showSnack = () => {
        setVisible(true);
    };

    const onDismissSnackBar = () => {
        setVisible(false);
    };

    const handleDelete = () => {
        const deletedNouns = deleteNoun(nounsState.noun.id);

        dispatch({ type: 'DELETENOUN', payload:  deletedNouns });

        navigation.navigate('ListNounsView');
        setVisible(false);
    };



    return (
        <ImageBackground source={{ uri: nounsState.noun.photo }} style={styles.Image}>
            <View>
                <Text style={styles.idText}>{nounsState.noun.id}</Text>
                <Text style={styles.nameText}>{nounsState.noun.name}</Text>
                <Text style={styles.bornAtText}>{nounsState.noun.bornAt}</Text>

                <View style={styles.buttons}>
                    <TouchableOpacity
                        style={styles.pencilButton}
                        onPress={() => navigation.navigate('UpdateNounView')}
                    >
                        <Icon name="pencil" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.trashButton} onPress={showSnack}>
                        <Icon name="trash" size={30} color="black" />
                    </TouchableOpacity>
                </View>

                <Snackbar
                    visible={visible}
                    onDismiss={onDismissSnackBar}
                    action={{
                        label: 'Yes',
                        onPress: handleDelete,
                    }}
                >
                    Are you Sure?
                </Snackbar>
            </View>
        </ImageBackground>
    );
};

export default ReadNounView;
