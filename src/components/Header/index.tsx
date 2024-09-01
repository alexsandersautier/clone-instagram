import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

export default function Header() {
    return (
        <View 
            style={styles.container}
        >
            <TouchableOpacity
                onPress={() => alert("Home")}
            >
                <Image
                    source={require("../../img/logo.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => alert("Vai enviar nuds para quem?")}
            >
                <Image
                    style={styles.send}
                    source={require("../../img/send.png")}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        height: 55,
        borderBottomWidth: 0.2,
        shadowColor: "#000",
        elevation: 2
    },
    send: {
        height: 23,
        width: 23
    }
});