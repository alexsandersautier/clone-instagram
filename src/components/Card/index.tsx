import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Card( {props}:any ){
    const [liked, setLiked] = useState(props.likeada);
    const [likes, setLikes] = useState(props.likers)
    function validateLikes() {

    }

    return(
        <View>
            <View style={styles.container}>
                <Image
                source={{uri: props.imgperfil}}
                style={styles.profilePhoto}
                />
                <Text
                    style={styles.username}
                >
                    {props.nome}
                </Text>
            </View>
            <Image
                source={{uri: props.imgPublicacao}}
                style={styles.postPhoto}
                resizeMode="cover"
            />
            <View style={styles.btnContent}>
                <TouchableOpacity
                    onPress={() => {
                        setLiked(!liked);

                        liked ? setLikes((prev: any) => likes > 0 ? prev - 1 : null) : setLikes((prev: any) => prev + 1);
                    }}
                >
                    <Image
                        style={styles.btnIcon}
                        source={liked ? require('../../img/likeada.png') : require('../../img/like.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    
                >
                    <Image
                        style={styles.btnIcon}
                        source={require('../../img/comment.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert("Vai enviar para quem se nem amigo tu tem?")}
                >
                    <Image
                        style={styles.btnIcon}
                        source={require('../../img/send.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.likersContainer}>
                <Text style={{fontWeight: "bold"}}>{likes > 0 ? likes : null} {likes > 1 ? ' curtidas' : likes > 0 ? 'curtida' : null}</Text>
                <Text style={{fontWeight: "bold"}}>{props.nome}</Text>
                <Text>{props.descricao}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        flex: 1
    },
    profilePhoto: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    username: {
        paddingLeft: 5,
        fontSize: 22,
        color: "#000"
    },
    postPhoto: {
        height: 400,
        alignItems: "center"
    },
    btnContent: {
        padding: 8,
        flexDirection: "row",
        gap: 5
    },
    btnIcon: {
        width: 25,
        height: 25
    },
    likersContainer: {
        paddingHorizontal: 10
    }
});