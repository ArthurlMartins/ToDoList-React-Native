
import { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./AfazerStyle";
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Feather'

export default class Afazer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataAtual: new Date(),
            marcado: false
        }
    
      
      }

      mudarBool = (boleano) => {
        this.setState({marcado: boleano})
        this.props.Atualizar(boleano, this.props.id)
      }


    render() {
        return (
            <View style={[styles.container, this.props.status == 'Atrasado' && {borderColor: 'red', borderWidth: 4}]}>
                    
                <Text style={styles.texto}>{this.props.descricao}</Text>
                <Text style={styles.texto}>{this.props.marcado}</Text>
                

                <View style={styles.conatiner2}>
                    <TouchableOpacity 
                    onPress={() => this.props.Remover(this.props.id)}><Icon name='trash-2' size={40} color="#ba1200" /></TouchableOpacity>
                    <CheckBox
                    disabled={false}
                    style={styles.checkingBox}
                    
                    value={this.state.marcado}
                    onValueChange={(newValue) => {
                        this.mudarBool(newValue)
                    }}
                    boxType="circle" />
                </View>

                {/* <Text style={styles.texto}>{this.props.prioridade}</Text> */}
            </View>
        )
    }
}