import React, {Component} from 'react';
import { Text, TextInput } from 'react-native';
import Estilo from '../estilo';

export default class Mega extends Component{
    state = {
        qtdNumeros: this.props.qtdNumeros,
    }

    alterarQtdeNumeros = (qtde) => {
        this.setState({qtdNumeros: qtde});
    }
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         qtdNumeros: props.qtdNumeros,
    //     };
    // }
    render(){
        return(
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena 
                    {this.state.qtdNumeros}
                </Text>
                <TextInput
                    placeholder='Qtd. Números'    
                    value={this.state.qtdNumeros}
                    onChangeText={this.alterarQtdeNumeros}
                />
            </>
        );
    }
}