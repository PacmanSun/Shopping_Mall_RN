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
  StatusBar
} from 'react-native';


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

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
        '商品1',
        '商品2',
        '商品3',
        '商品4',
        '商品5',
        '商品6',
        '商品7',
        '商品8',
        '商品9',
        '商品10',
      ])
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
      <View style={styles.rows}>
        <Text>{rowData}</Text>
      </View>
    );
  }

  render() {
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
          >
          </TextInput>

          <Button style={styles.button}
            title=" 搜 索 "
            onPress={()=>Alert.alert('你单击了搜索按钮',null,null)}
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
            <TouchableHighlight onPress={()=>Alert.alert('你单击了轮播广告',null,null)}>
              <Text style={{
                width:Dimensions.get('window').width,
                height:180,
                backgroundColor:'gray',
                }}
              >广告1
              </Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=>Alert.alert('你单击了轮播广告',null,null)}>
            <Text style={{
              width:Dimensions.get('window').width,
              height:180,
              backgroundColor:'orange',
              }}
            >广告2
            </Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=>Alert.alert('你单击了轮播广告',null,null)}>
            <Text style={{
              width:Dimensions.get('window').width,
              height:180,
              backgroundColor:'yellow',
              }}
            >广告3
            </Text>
            </TouchableHighlight>

          </ScrollView>
        </View>

        <View style={styles.products}>
          <ListView dataSource={this.state.dataSource}
            renderRow={this._renderRow}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});


