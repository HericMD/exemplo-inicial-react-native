import {Component} from 'react';
import {FlatList, Text} from 'react-native';

import ItemEstado from '.ItemEstado';

export default class ListadoEstado extends Component {
    state = [
        {sigla: 'SC', capital: 'Florianópolis'},
        {sigla: 'RS', capital: 'Porto Alegre'},
        {sigla: 'PR', capital: 'Curitiba'},
        {sigla: 'SP', capital: 'São Paulo'},
    ]
};

render() {
    return(
        <>
            <FlatList 
                data={this.state.estados}
                renderItem={({item}) => <ItemEstado estado={item} />
                }
            />
            <Text>Total: {this.state.estados.length}</Text>
        </>
    )
}