import React, { Component } from 'react';
import { Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts = {
'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class Feed extends Component {
constructor(props) {
super(props);
this.state = {
fontsLoaded: false,
        };
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
        }
        componentDidMount() {
        this._loadFontsAsync();
        }
        render() {
        if (!this.state.fontsLoaded) {
        return <AppLoading />;
        } else {

return (
    <View style={styles.container}>
    <SafeAreaView style={styles.droidSafeArea} />
    <View style={styles.appTitle}>
    <View style={styles.appIcon}>
    <Image source={require("../assets/logo.png")} style={{ width: 60,
    height: 60, resizeMode: 'contain', marginLeft: 10 }}></Image>
    </View>
    <View style={styles.appTitleTextContainer}>
    <Text style={styles.appTitleText}>
    Storytelling App
    </Text>
    </View>
    </View>
    <View style={styles.cardContainer}>
    <FlatList
    keyExtractor={this.keyExtractor}
    data={stories}
    renderItem={this.renderItem}
    />
    </View>
    </View>
    )
        }
    }
}