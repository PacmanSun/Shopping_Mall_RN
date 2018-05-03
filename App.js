/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Dimensions,
  ListView,
  Alert,
  TouchableHighlight,
  StatusBar,
  RefreshControl
} from 'react-native';
import { Image } from 'react-native';


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
const circleSize = 8;
const circleMargin = 5;

type Props = {};
export default class App extends Component<Props> {
  constructor(Props){
    super(Props);

    const ds = new ListView.DataSource({
      rowHasChanged:(r1,r2)=> r1 !== r2
    });
    
    this.state={
      currentPage: 0,
      dataSource:ds.cloneWithRows([
        // '商品1',
        // '商品2',
        // '商品3',
        // '商品4',
        // '商品5',
        // '商品6',
        // '商品7',
        // '商品8',
        // '商品9',
        // '商品10',
        {
          image:require('./images/product-image-01.jpg'),
          title:'商品1',
          subTitle:'描述1',
        },
        {
          image:require('./images/product-image-01.jpg'),
          title:'商品2',
          subTitle:'描述2',
        },
        {
          image:require('./images/product-image-01.jpg'),
          title:'商品3',
          subTitle:'描述3',
        },
        {
          image:require('./images/product-image-01.jpg'),
          title:'商品4',
          subTitle:'描述4',
        },
        {
          image:require('./images/product-image-01.jpg'),
          title:'商品5',
          subTitle:'描述5',
        },
        {
          image:require('./images/product-image-01.jpg'),
          title:'商品6',
          subTitle:'描述6',
        },
        {
          image:require('./images/product-image-01.jpg'),
          title:'商品7',
          subTitle:'描述7',
        },
        {
          image:require('./images/product-image-01.jpg'),
          title:'商品8',
          subTitle:'描述8',
        },
        {
          image:require('./images/product-image-01.jpg'),
          title:'商品9',
          subTitle:'描述9',
        },
        {
          image:require('./images/product-image-01.jpg'),
          title:'商品10',
          subTitle:'描述10',
        },
      ]),
      advertisements:[
        {
          // title:'广告1',
          // backgroundColor:'gray',
          // url:'https://manhua.qpic.cn/vertical/0/17_16_53_938f9aa69728fd462a62074b81f0f3fb.jpg/420',
          image:require('./images/advertisement-image-01.jpg'),
          title:'商品1',
          subTitle:'描述1',
        },
        {
          // title:'广告2',
          // backgroundColor:'orange',
          // url:'https://manhua.qpic.cn/vertical/0/21_15_30_e74fc730f5b060f35c6eb0eeb082478f_1498030250417.jpg/420',
          image:require('./images/advertisement-image-02.jpg'),
          title:'商品2',
          subTitle:'描述2',
        },
        {
          // title:'广告3',
          // backgroundColor:'yellow',
          // url:'https://manhua.qpic.cn/vertical/0/18_11_45_d223b0e7004fcfac7eb5531ba2490348_1503027925211.jpg/420',
          image:require('./images/advertisement-image-03.jpg'),
          title:'商品3',
          subTitle:'描述3',
        },
      ],
      searchText:'',
      refreshing:false,
    };
  }

  componentDidMount(){
    this._startTimer();
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  _startTimer(){
    this.interval=setInterval(()=>{
      var nextPage=this.state.currentPage + 1;
      if (nextPage >= 3) {
        nextPage = 0;
      }
      this.setState({currentPage:nextPage});
      const offSetX=nextPage * Dimensions.get('window').width;
      this.refs.scrollView.scrollTo({x: offSetX, y: 0, animated: true})
      // this.refs.scrollView.scrollToEnd({animated: false});
    },5000);
  }

  _renderRow(rowData){
    return (
      <TouchableHighlight onPress={()=>Alert.alert('你单击了商品',null,null)}>
        <View style={styles.rows}>
          <Image source={rowData.image}
            style={styles.productImage}
          >
          </Image>
          <View style={styles.productText}>
            <Text style={styles.productTitle}>
              {rowData.title}
            </Text>
            <Text style={styles.productSubTitle}>
              {rowData.subTitle}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  _renderSeperator(sectionID, rowID){
    // console.log(`${sectionID}-${rowID}`)
    return(
      <View key={`${sectionID}-${rowID}`}
        style={styles.divider}
      >
      </View>
    )
  }

  _renderRefreshControl(){
    return(
      <RefreshControl refreshing={this.state.refreshing}
        onRefresh={this._onRefresh.bind(this)}
        tintColor={'#FF0000'}
        title={'正在刷新数据，请稍后...'}
        titleColor={'#0000FF'}
      >  
      </RefreshControl>

    )
  }

  _onRefresh() {
    this.setState({refreshing: true});
    setTimeout(() => {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});      
      const products = Array.from(new Array(10)).map((value,index)=>({
        image:require('./images/product-image-01.jpg'),
        title:'新商品'+index,
        subTitle:'新商品描述'+index,
      }));
      this.setState({refreshing: false,dataSource:ds.cloneWithRows(products)});
    },2000);
  }

  render() {
    const advertisementCount=this.state.advertisements.length//指示器圆点数
    const indicatorWidth = circleSize*advertisementCount + circleMargin*advertisementCount*2
    const left=(Dimensions.get('window').width-indicatorWidth)/2
    return (
      <View  style={styles.container}>
        <StatusBar backgroundColor={'blue'}// 设置背景色为蓝色
          barStyle={'default'} // 设置默认样式
          networkActivityIndicatorVisible={true}// 显示正在请求网络的状态
        >
        </StatusBar>
        
        <View style={styles.searchbar}>

          <TextInput style={styles.input} 
            placeholder="搜索商品"
            onChangeText={(text)=>{this.setState({searchText:text})}}
          >
          </TextInput>

          <Button style={styles.button}
            title=" 搜 索 "
            onPress={()=>Alert.alert('搜索内容'+this.state.searchText,null,null)}
          >
          </Button>

        </View>

        <View style={styles.advertisement}>
          <ScrollView ref={'scrollView'}
            // this.refs.scrollView 可获取改组件
            horizontal={true}//横向滚动
            showsHorizontalScrollIndicator={false}//不显示横向滚动条
            pagingEnabled={true}//分页
          >
            {
              this.state.advertisements.map(
                (advertisement,index)=>{
                  return (
                    <TouchableHighlight key={index}
                      onPress={()=>Alert.alert('你单击了轮播广告',null,null)}
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
          </ScrollView>
          <View style={[styles.indicator,{left:left}]}>
            {this.state.advertisements.map(
              (advertisement,index)=>{
                return (
                  <View key={index}
                    style={(index===this.state.currentPage)?styles.circleSelected:styles.circle}
                  >
                  </View>
                )
              }
            )
          }
          </View>
        </View>

        <View style={styles.products}>
          <ListView dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            style={{backgroundColor:'white',width:Dimensions.get('window').width}}
            renderSeparator={this._renderSeperator}
            refreshControl={this._renderRefreshControl()}
          >
          </ListView>
        </View>

      </View>

    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchbar: {
    marginTop: Platform.select({
      ios:20,
      android:0,
    }),
    height:40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input:{
    flex: 1,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
  },
  button:{
    flex: 1,
  },

  advertisement: {
    height:180,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  products: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rows: {
    height: 60,
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
  },
  productImage:{
    marginLeft: 10,
    marginRight: 10,
    width:40,
    height:40,
    alignSelf: 'center',
  },
  productText:{
    flexDirection: 'column',
    marginBottom: 10,
    marginTop:10,
    flex: 1,
  },
  productTitle:{
    fontSize: 16,
    color:'black',
    flex: 3,
  },
  productSubTitle:{
    fontSize:14,
    color:'gray',
    flex: 2,
  },
  divider:{
    height:1,
    width:Dimensions.get('window').width-10,
    marginLeft:5,
    backgroundColor:'lightgray',
  },
  advertismentContent: {
    width:Dimensions.get('window').width,
    height:180,
  },
  indicator: {
    position: 'absolute',
    top: 160,
    flexDirection: 'row',
  },
  circle: {
    width:circleSize,
    height:circleSize,
    borderRadius:circleSize/2,
    backgroundColor:'gray',
    marginHorizontal:circleMargin,
  },
  circleSelected: {
    width:circleSize,
    height:circleSize,
    borderRadius:circleSize/2,
    backgroundColor:'white',
    marginHorizontal:circleMargin,
  },
});


