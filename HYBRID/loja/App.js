import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import { ReactiveBase, ReactiveSearch, DataSearch, ReactiveList } from '@appbaseio/reactivesearch-native';
import { createStackNavigator } from 'react-navigation';
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 25
  },
  image_topo: {
    width: 340,
    height: 200
  },
  image: {
    width: 100,
    height: 100
  },
  result: {
    flexDirection: 'row',
    width: '100%',
    margin: 5,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'column',
    paddingLeft: 10
  },
  title: {
    fontWeight: 'bold'
  }
});

class ImagemCapa extends React.Component {
  render() {
    return (
      <Image source={{ uri: this.props.uri }} style={styles.image_topo} />
    );
  }
}

class ElementosBusca extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <DataSearch componentId="searchbox" dataField={[
          'nome'
        ]} placeholder="Ache o seu heroi" autosuggest={false} />
        <ReactiveList componentId="results"
          dataField="nome" size={7}
          showResultStats={false}
          pagination={false}
          react={{ and: "searchbox" }}
          onData={(res) => (
            <View style={styles.result}>
              <Image source={{ uri: res.imagem }} style={styles.image} />
              <View style={styles.item}>
                <Text style={styles.title}> {res.nome} </Text>
                <Text> {res.criador} </Text>
                {res.nome != null ? <Button onPress={() => {
                  this.props.navegar.navigate('Detalhes', { resumo: res.info })
                }} title="Detalhes" /> : null}
              </View>
            </View>
          )} />
      </View>
    )
  }
}


class HomeBusca extends React.Component {
  render() {
    return (
      <ReactiveBase
        app="Loja"
        credentials="BIDrPA06X:bd164cf8-5b3b-469d-8634-c792ce52102a"
      >
        <ScrollView>
          <View style={styles.container}>
            <ImagemCapa uri='https://static.quizur.com/i/b/554a7a7fd536d8.56499981554a7a7f8ed550.30250408.jpg' />
            <ElementosBusca navegar={this.props.navigation} />
          </View>
        </ScrollView>
      </ReactiveBase>
    );
  }
}

class DetalhesHeroi extends React.Component {
  render() {
    const {navigation}  = this.props;
    const resumo = navigation.getParam('resumo', 'sem resumo');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Detalhes do super heroi </Text>
        <Text>{resumo}</Text>
      </View>
    )
  }
}

export default createStackNavigator({
  Home: {
    screen: HomeBusca,
    navigationOptions: {
      title: 'Loja HQ'
    },
  },
  Detalhes: {
    screen: DetalhesHeroi,
    navigationOptions: {
      title: 'Detalhes'
    },
  },
}, {
    initialRouteName: 'Home'
  }
);