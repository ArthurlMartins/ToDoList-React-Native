import { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, FlatList, SafeAreaView, ScrollView, TextInput } from "react-native";
import { padStart } from "lodash";

//header
import stylesHeader from "./src/Componentes/HeaderStyle";
import { Dropdown } from 'react-native-element-dropdown'

import styles from "./src/Componentes/PageStyle";

import AfazerObj from "./Model/AfazerObj";
import Afazer from "./src/Componentes/Afazer";

import stylesLista from "./src/Componentes/ListaStyle";
import Crud from "./Model/Banco/crud_rn"
import DatePicker from 'react-native-date-picker'



export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
        descricao: '',
        prioridades: [{ label: 'Muito Importante', value: '1' }, { label: 'Importante', value: '2'}, { label: 'Pouco Importante', value: '3'}],
        prioridadesValue: 0,
    
        marcado: false,

        data: new Date(),
        open: false,
        list: [],

        
    }

  
  }

  dataAtualFormatada = (data) => {
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear()
    return diaF+"/"+mesF+'/'+anoF;
  }

  Insert = (descricao, data, prioridades, marcado) => {

    if (!this.state.descricao.trim()) {
      alert('Descrição Inválida!');
      return;
    } else {
      const afazerNovo = new AfazerObj(descricao, data, prioridades, marcado)
      // this.state.list.push(afazerNovo)
      const banco = new Crud()
      banco.Inserir(afazerNovo)
      // this.forceUpdate()
      this.Listar()
    }

    
  }

  Listar = () => {
    const banco = new Crud()
    banco.Listar().then(
      listaCompleta => {
        this.setState({list: listaCompleta})
      }
    )
  }

  Remover = (id) => {
    const banco = new Crud()
    banco.Remover(id)
    this.Listar()
  }

  Atualizar = (marcado , id) => {
    this.setState({marcado: marcado})
    const banco = new Crud()
    banco.Atualizar(marcado, id)
    this.Listar()
  }


  componentDidMount = () => {
    this.Listar()
  }



  render() {

    const hoje = new Date()

    return (

        <View style={styles.container}>
        <View style={stylesHeader.container}>
              <Text style={stylesHeader.cadastre}>Cadastre sua meta!</Text>
                <TextInput placeholder="Descrição" placeholderTextColor="#508AA8" style={stylesHeader.entrada}
                onChangeText={(valor) => {this.setState({descricao: valor})}}  />

                <TouchableOpacity onPress={() => {this.setState({open: true})}} 
                style={stylesHeader.botaoData}><Text 
                style={stylesHeader.textData}>Data de término: {this.dataAtualFormatada(this.state.data)}</Text></TouchableOpacity>
                <DatePicker 
                mode="date"
                modal
                open={this.state.open}
                date={hoje}
                onConfirm={(date) => {
                  this.setState({open: false, data: date})
                  console.log(this.dataAtualFormatada(date))
                }}
                onCancel={() => {this.setState({open: false})}}/>

                <View style={stylesHeader.container2}>
                    <TouchableOpacity onPress={() => this.Insert(this.state.descricao, this.state.data, this.state.prioridadesValue, this.state.marcado)} 
                    style={stylesHeader.botao}><Text style={stylesHeader.botaoTexto}>Salvar</Text></TouchableOpacity>
                    <Dropdown
                        style={stylesHeader.selecao}
                        data={this.state.prioridades}
                        selectedTextStyle={stylesHeader.placeholder}
                        itemTextStyle={{fontSize: 21, color: '#508AA8'}}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholderStyle={stylesHeader.placeholder}
                        placeholder="Prioridades"
                        value={this.state.value}
                        onChange={item => {
                            console.log(item)
                            newState = this.state
                            newState.prioridadesValue = item.value
                            this.setState(newState)
                            console.log(this.state.prioridadesValue)
                        }}
                    />
                </View>
            </View>
              <View style={stylesLista.container}>
                
                    {
                      this.state.list.map(l => (
                        <Afazer
                        id={l.id}
                        descricao={l.descricao}
                        date={l.data}
                        prioridades={parseInt(l.prioridades)}
                        marcado={parseInt(l.marcado) == 1 ? true : false}
                        Remover={this.Remover}
                        Atualizar={this.Atualizar}                        
                        status={Date.parse(l.data) < new Date() ? 'Atrasado' : ''}
                        />
                      ))
                    }         
                       
              </View>
              
        </View> 
      
        
        
        
        
    )
  }
}

