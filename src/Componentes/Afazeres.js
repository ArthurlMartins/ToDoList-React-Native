import { Component } from "react";
import { FlatList, Text, View } from "react-native";
import styles from "./ListaStyle";
import Afazer from "./Afazer";
import { useState } from "react";

export default class Afazeres extends Component {

    constructor(props) {
        super(props)
        this.state = {
          list: [{id: 1, nome: 'arthur'}],

        }
      }

    render() {

        return (
            <View style={styles.container}>
                <FlatList data={this.state.list} keyExtractor={item=>item.id} renderItem={({item})=>
                <View>
                    <Afazer nome="Afazer 1" />
                    <Afazer nome="Afazer 1" />
                    <Afazer nome="Afazer 1" />
                    <Afazer nome="Afazer 1" />
                    <Afazer nome="Afazer 1" />
                    <Afazer nome="Afazer 1" />
                    <Afazer nome="Afazer 1" />
                    <Afazer nome="Afazer 1" />
                    <Afazer nome="Afazer 2" />

                </View>}>

                </FlatList>   
            </View>
        )
    }
}