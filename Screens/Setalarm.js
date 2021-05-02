import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Setalarm = ({navigation}) => {
  const renderHeader = () => {
    return (
      <View
        style={{
          marginLeft: '2%',
          height: '20%',
          justifyContent: 'center',
          marginBottom: 10,
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            // top: 20,
          }}>
          <Text style={{fontSize: 27, fontWeight: 'bold'}}>Set an alarm</Text>
          <View style={{alignSelf: 'center', marginRight: '2%'}}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Launching')}
              style={{}}>
              <Feather name="eye" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const renderSetAlarm = () => {
    return (
      <View style={{}}>
        {/* section for setTime  */}
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <Text style={{fontSize: 35, fontWeight: 'bold', color: '#868B98'}}>
            10 {'         '}20
          </Text>
          <Text style={{fontSize: 40, fontWeight: 'bold'}}>
            11 {'  '}: {'  '} 20
          </Text>
          <Text style={{fontSize: 35, fontWeight: 'bold', color: '#868B98'}}>
            12 {'         '}20
          </Text>
        </View>
        {/* section for setDate  */}
        <View
          style={{
            height: 50,
            marginLeft: '10%',
            marginRight: '10%',
            justifyContent: 'center',
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                height: 40,
                width: 40,
                backgroundColor: '#ABBAD9',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                S
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                height: 40,
                width: 40,
                backgroundColor: '#CD0023',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                height: 40,
                width: 40,
                backgroundColor: '#CD0023',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                T
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                height: 40,
                width: 40,
                backgroundColor: '#CD0023',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                W
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                height: 40,
                width: 40,
                backgroundColor: '#CD0023',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                T
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                height: 40,
                width: 40,
                backgroundColor: '#CD0023',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                F
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                height: 40,
                width: 40,
                backgroundColor: '#ABBAD9',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                S
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* next ring in time  */}
        <View
          style={{
            height: 25,
            backgroundColor: '#E1E9F4',
            width: '90%',
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            borderRadius: 8,
            marginTop: 5,
          }}>
          <Text style={{color: '#868B98'}}>
            Ring in 10 hours and 52 minutes
          </Text>
        </View>
        {/* underline */}
        <View
          style={{
            height: 2,
            backgroundColor: '#E1E9F4',
            width: '90%',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 10,
          }}></View>
      </View>
    );
  };

  const renderSettings = () => {
    return (
      <View style={{}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            height: 70,
            width: '95%',
            backgroundColor: 'white',
            borderRadius: 10,
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 10,
            // _________SHADOW
            shadowColor: '#000',
            shadowOffset: {
              width: 2,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 3,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingRight: 15,
              alignItems: 'center',
            }}>
            <View style={{paddingLeft: 20, flexDirection: 'row'}}>
              <MaterialCommunityIcons
                name="bell-ring-outline"
                size={30}
                color="#868B98"
                style={{alignSelf: 'center'}}
              />
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#868B98',
                    paddingLeft: 10,
                  }}>
                  Alarm Ringtone
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    // fontWeight: 'bold',
                    color: '#868B98',
                    paddingLeft: 10,
                  }}>
                  Go to settings
                </Text>
              </View>
            </View>
            {/* rightArrow */}
            <View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={30}
                color="#868B98"
                // style={{alignSelf: 'center'}}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            height: 70,
            width: '95%',
            backgroundColor: 'white',
            borderRadius: 10,
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 10,
            // _________SHADOW
            shadowColor: '#000',
            shadowOffset: {
              width: 2,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 3,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingRight: 15,
              alignItems: 'center',
            }}>
            <View style={{paddingLeft: 20, flexDirection: 'row'}}>
              <MaterialCommunityIcons
                name="bell-ring-outline"
                size={30}
                color="#868B98"
                style={{alignSelf: 'center'}}
              />
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#868B98',
                    paddingLeft: 10,
                  }}>
                  Alarm Ringtone
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    // fontWeight: 'bold',
                    color: '#868B98',
                    paddingLeft: 10,
                  }}>
                  Go to settings
                </Text>
              </View>
            </View>
            {/* rightArrow */}
            <View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={30}
                color="#868B98"
                // style={{alignSelf: 'center'}}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            height: 70,
            width: '95%',
            backgroundColor: 'white',
            borderRadius: 10,
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 10,
            // _________SHADOW
            shadowColor: '#000',
            shadowOffset: {
              width: 2,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 3,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingRight: 15,
              alignItems: 'center',
            }}>
            <View style={{paddingLeft: 20, flexDirection: 'row'}}>
              <MaterialCommunityIcons
                name="bell-ring-outline"
                size={30}
                color="#868B98"
                style={{alignSelf: 'center'}}
              />
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#868B98',
                    paddingLeft: 10,
                  }}>
                  Alarm Ringtone
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    // fontWeight: 'bold',
                    color: '#868B98',
                    paddingLeft: 10,
                  }}>
                  Go to settings
                </Text>
              </View>
            </View>
            {/* rightArrow */}
            <View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={30}
                color="#868B98"
                // style={{alignSelf: 'center'}}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      {renderHeader()}
      {renderSetAlarm()}
      {renderSettings()}
    </View>
  );
};

export default Setalarm;

const styles = StyleSheet.create({});
