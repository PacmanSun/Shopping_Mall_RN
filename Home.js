import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Dimensions,
  Alert,
  TouchableHighlight,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Container, Header, /* Content,  */Icon, Input, Button, Item, List, ListItem, Thumbnail, Text, Body } from 'native-base';

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
      products: [
        {
          image: require('./images/product-image-01.jpg'),
          title: '商品1',
          subTitle: '描述1',
        },
        {
          image: require('./images/product-image-01.jpg'),
          title: '商品2',
          subTitle: '描述2',
        },
        {
          image: require('./images/product-image-01.jpg'),
          title: '商品3',
          subTitle: '描述3',
        },
        {
          image: require('./images/product-image-01.jpg'),
          title: '商品4',
          subTitle: '描述4',
        },
        {
          image: require('./images/product-image-01.jpg'),
          title: '商品5',
          subTitle: '描述5',
        },
        {
          image: require('./images/product-image-01.jpg'),
          title: '商品6',
          subTitle: '描述6',
        },
        {
          image: require('./images/product-image-01.jpg'),
          title: '商品7',
          subTitle: '描述7',
        },
        {
          image: require('./images/product-image-01.jpg'),
          title: '商品8',
          subTitle: '描述8',
        },
        {
          image: require('./images/product-image-01.jpg'),
          title: '商品9',
          subTitle: '描述9',
        },
        {
          image: require('./images/product-image-01.jpg'),
          title: '商品10',
          subTitle: '描述10',
        },
      ],


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

  _renderRow(rowData) {
    return (
      <ListItem
        style={{ height: 60 }}
        onPress={
          () => this.props.navigation.navigate('Details',
            { title: rowData.title, subTitle: rowData.subTitle })}
      >
        <Thumbnail
          square={true}
          // size={20}
          style={{ height: 40, width: 40 }}
          source={rowData.image}
        />
        <Body>
          <Text>{rowData.title}</Text>
          <Text note={true}>{rowData.subTitle}</Text>
        </Body>
      </ListItem>
    );
  }

  render() {

    return (
      <Container>
        <Header
          searchBar={true}
          rounded={true}
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

          <List style={{ backgroundColor: 'white',height:Dimensions.get('window').height-290 }}
            dataArray={this.state.products}
            renderRow={this._renderRow.bind(this)}
          >

          </List>

        </View>
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


