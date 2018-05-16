import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Dimensions,
  Alert,
  TouchableHighlight,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Container, Header, Content, Icon, Input, Button, Item, List, ListItem, Thumbnail, Text, Body } from 'native-base';

type Props = {};
export default class Home extends Component<Props> {

  static navigationOptions = {
    headerStyle: {
      height: 0
    },
    header: Platform.select({
      ios: 'null',
    })
  };

  constructor(Props) {
    super(Props);
    this.state = {
      currentPage: 0,
      products: [],


      advertisements: [
        {
          // title:'广告1',
          // backgroundColor:'gray',
          // url:'https://manhua.qpic.cn/vertical/0/17_16_53_938f9aa69728fd462a62074b81f0f3fb.jpg/420',
          image: require('./images/advertisement-image-01.jpg'),
          title: '商品1',
          subTitle: '描述1',
        },
        {
          // title:'广告2',
          // backgroundColor:'orange',
          // url:'https://manhua.qpic.cn/vertical/0/21_15_30_e74fc730f5b060f35c6eb0eeb082478f_1498030250417.jpg/420',
          image: require('./images/advertisement-image-02.jpg'),
          title: '商品2',
          subTitle: '描述2',
        },
        {
          // title:'广告3',
          // backgroundColor:'yellow',
          // url:'https://manhua.qpic.cn/vertical/0/18_11_45_d223b0e7004fcfac7eb5531ba2490348_1503027925211.jpg/420',
          image: require('./images/advertisement-image-03.jpg'),
          title: '商品3',
          subTitle: '描述3',
        },
      ],
      searchText: '',
      refreshing: false,
    };
  }


  componentDidMount() {
    this._fetchProducts();
  }

  _renderRow(rowData) {
    return (
      <ListItem
        style={{ height: 60 }}
        onPress={
          () => this.props.navigation.navigate('Details',
            { product: rowData })}
      >
        <Thumbnail
          square={true}
          // size={20}
          style={{ height: 40, width: 40 }}
          // source={rowData.image}
          source={{ uri: SEVER_URL + String(rowData.image).substr(7) }}
        />
        <Body>
          <Text>{rowData.title}</Text>
          <Text note={true}>{rowData.subTitle}</Text>
        </Body>
      </ListItem>
    );
  }

  _fetchProducts() {

    const req = new Request(SEVER_URL + '/' + PRODUCT_API, { method: 'GET' });
    console.log('request: ', SEVER_URL + PRODUCT_API);
    fetch(req).then((response) => response.json())
      .then((responseJson) => {
        console.log('response: ', JSON.stringify(responseJson));
        this.setState({ products: responseJson })
      })
      .catch((error) => {
        console.error(error);
      });
    fetch
  }


  render() {

    return (
      <Container>
        <Header
          searchBar={true}
        // rounded={true}
        >
          <Item>
            <Icon name="ios-search-outline"></Icon>
            <Input
              placeholder="搜索商品"
              onChangeText={(text) => { this.setState({ searchText: text }) }}
            >
            </Input>
          </Item>
          <Button
            transparent={true}
            onPress={() => Alert.alert('搜索内容' + this.state.searchText, null, null)}
          >
            <Text>搜索</Text>
          </Button>
        </Header>

        <View>
          <View style={styles.advertisement}>
            <Swiper
              loop={true}
              // height={190}
              autoplay={true}
              // showsPagination={false}
              activeDotColor={'white'}
              // dotColor={'black'}
              paginationStyle={{ bottom: 10 }}
            >
              {
                this.state.advertisements.map(
                  (advertisement, index) => {
                    return (
                      <TouchableHighlight key={index}
                        onPress={() => Alert.alert('你单击了轮播广告', null, null)}
                      >
                        <Image style={styles.advertismentContent}
                          // source={{uri:advertisement.url}}
                          source={advertisement.image}
                        >
                        </Image>
                      </TouchableHighlight>
                    )
                  }
                )
              }
            </Swiper>
          </View>
        </View>
        <Content>
          <List style={{ backgroundColor: 'white'/* ,height:Dimensions.get('window').height-290 */ }}
            dataArray={this.state.products}
            renderRow={this._renderRow.bind(this)}
          >

          </List>
        </Content>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  advertisement: {
    height: 180,
    // backgroundColor: 'green',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  advertismentContent: {
    width: Dimensions.get('window').width,
    height: 180,
  },
});

const LOCAL_HOST = '10.0.0.11'
const SEVER_URL = 'http://' + LOCAL_HOST + ':3000';
const PRODUCT_API = 'products/';

