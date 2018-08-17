
import React, { Component } from 'react';
import {
    FlatList,
    Text,
    View
} from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';

class SuggestionList extends Component {
    renderEmpty = () => <Empty text="No hay sugerencias 😢" />
    itemSeparator = () => <Separator />
    render() {
        const list = [
            {
                title: 'Avenger',
                key: '1',
            },
            {
                title: 'Pokemon',
                key: '2',
            }
            
        ]
        return(
            <Layout
                title="Recomendado para ti">
                <FlatList
                    data = {list}
                    ListEmptyComponent= { this.renderEmpty }
                    ItemSeparatorComponent = { this.itemSeparator }
                    renderItem = { ({ item }) => <Text>{ item.title }</Text> }
                />
            </Layout>
            
        )
    }
}

export default SuggestionList