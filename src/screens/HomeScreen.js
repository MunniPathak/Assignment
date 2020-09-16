import React, { Component } from 'react';
import {
   StyleSheet, View, Button, SafeAreaView, Dimensions,
   ScrollView, Image, TouchableOpacity, Text, FlatList, Card
} from 'react-native';
import AppImages from '../constants/AppImages';

const { width, height } = Dimensions.get('window');

export default class HomeScreen extends Component {

   constructor() {
      super();
      this.state = {
         foodItem: [
            {
               image: AppImages.garlic_bread,
               name: 'Krispy Creame',
               category: 'Breakfast and Brunch . Desserts',
               time: "15-25 mins",
               price: '$19.99',
               msg: AppImages.favourites,
               rtngView: "4.7 (500)",
            },
            {
               image: AppImages.pizza,
               name: 'Krispy Creame',
               category: 'Breakfast and Brunch . Desserts',
               time: "15-25 mins",
               price: '$19.99',
               msg: AppImages.favourites,
               rtngView: "4.7 (500)",
            },
            {
               image: AppImages.pizza2,
               name: 'Krispy Creame',
               category: 'Breakfast and Brunch . Desserts',
               time: "15-25 mins",
               price: '$19.99',
               msg: AppImages.favourites,
               rtngView: "4.7 (500)",
            },
         ],
      }
   }

   renderHeader = () => {
      return (
         <View style={{ margin: 15, width: '100%', justifyContent: "flex-start" }}>
            <View flexDirection='row'>
               <View
                  style={[{ justifyContent: 'center', margin: 10 }]}>
                  <Image
                     style={{ height: 20, width: 20, }}
                     source={AppImages.filter} />
               </View>
               <View style={{ alignContent: 'center', alignSelf: 'center', flexDirection: 'row', }}>
                  <Text style={{ color: 'white', alignContent: 'center', alignSelf: 'center', fontSize: 22, fontWeight: 'bold', marginLeft: 50 }}>Deliver to Atlanta</Text>
                  <Image
                     style={{ height: 15, width: 15, margin: 5, alignSelf: 'center' }}
                     source={AppImages.drop_down} />
               </View>
               <View style={{ marginRight: 0 }}>
                  <Image
                     style={{ height: 40, width: 40, marginLeft: 60 }}
                     source={AppImages.dots_icons} />
               </View>
            </View>
         </View>
      )
   }

   renderTopIcons = () => {
      return (
         <View style={{ width: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", padding: 10, }} >

               <Image
                  style={{ height: 35, width: 35, }}
                  source={AppImages.home} />
               <Image
                  style={{ height: 35, width: 35, }}
                  source={AppImages.search} />

               <Image
                  style={{ height: 35, width: 35, }}
                  source={AppImages.my_schedule} />
               <Image
                  style={{ height: 35, width: 35, }}
                  source={AppImages.favourites} />
               <Image
                  style={{ height: 35, width: 35, }}
                  source={AppImages.user
                  } />
            </View>
         </View>
      )
   }

   renderItem = ({ item, index }) => {
      return (
         <View>
            <View style={{
               backgroundColor: 'white',
               // width: width * 0.5 - 20,
               margin: 10,
               borderWidth: 0.3,
               borderColor: 'gray',
            }}>

               <TouchableOpacity>
                  <Image
                     style={{
                        height: 200,
                        width: 300,
                        margin: 3,
                        top: -10,
                        resizeMode: 'contain'
                     }}
                     source={item.image} />
                  <View>
                     <Image
                        style={{
                           margin:5,
                           justifyContent: 'flex-start',
                           padding: 5,
                           position: 'absolute',
                           left: 0,
                           top: -200,
                           height: 25,
                           width: 25
                        }}
                        source={AppImages.favourites} />
                  </View>
                  <View style={{ padding: 10, flexDirection: 'row',top:2 }}>
                     <View>
                        <Text style={{fontSize:18,}}>{item.name}</Text>
                        <Text numberOfLines={3}
                           style={{color: 'gray',} }>{item.category}</Text>
                        <View style={{ flexDirection: 'row' }}>
                           <Image
                              style={{
                                 height: 20,
                                 width: 20,
                                 margin: 3,
                                 resizeMode: 'contain'
                              }}
                              source={AppImages.star} />
                           <Text style={{ color: 'gray', margin: 5 }}>{item.rtngView}</Text>
                        </View>
                     </View>

                     <View style={{ flexDirection: 'column',marginLeft:20, }}>

                        <Text style={{ color: 'gray', margin: 5 }}>{item.time}</Text>
                        <Text style={{ color: 'green', margin: 5 ,left:20}}>{item.price}</Text>
                     </View>
                  </View>
               </TouchableOpacity>
            </View>

         </View>
      );
   }


   render() {
      const { navigate } = this.props.navigation;
      return (
         <SafeAreaView style={styles.container}>
            <View style={{ height: '8%', backgroundColor: '#84B737' }}>
               {this.renderHeader()}
            </View>
            <View style={{ height: '8%', }}>
               {this.renderTopIcons()}
            </View>

            <View style={{  backgroundColor: 'white' }}>
               <View style={{ margin: 10 ,left:10}}>
                  <Text style={{ fontSize: 24 }}>
                     Within 30mins
                     </Text>
               </View>

               <ScrollView contentContainerStyle={{}}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <View style={{ marginLeft: 20 }}>
                     <FlatList
                        showsVerticalScrollIndicator={false}
                        data={this.state.foodItem}
                        numColumns={6}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => String(index)}
                     />
                  </View>
               </ScrollView>


               <View>
               <View style={{ margin: 10 ,left:10 }}>
                  <Text style={{ fontSize: 24 }}>
                     Popular near by you
                     </Text>
               </View>

               <ScrollView contentContainerStyle={{}}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <View style={{ marginLeft: 20 }}>
                     <FlatList
                        showsVerticalScrollIndicator={false}
                        data={this.state.foodItem}
                        numColumns={6}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => String(index)}
                     />
                  </View>
               </ScrollView>
               </View>
            </View>
         </SafeAreaView>
      );
   }
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
});
