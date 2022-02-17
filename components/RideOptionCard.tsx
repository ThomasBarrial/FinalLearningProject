import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../store/slices/NavSlices';

interface IUberDriver {
  id: string;
  title: string;
  multiplier: number;
  image: string;
}

const RideOptionCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState<IUberDriver>();
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const data = [
    {
      id: 'Uber-X-123',
      title: 'UberX',
      multiplier: 1,
      image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png',
    },
    {
      id: 'Uber-X-456',
      title: 'Uber XL',
      multiplier: 1.2,
      image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png',
    },
    {
      id: 'Uber-X-789',
      title: 'Uber LUX',
      multiplier: 1.75,
      image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png',
    },
  ];

  const SURGE_CHARGE_RATE = 1.5;

  return (
    <SafeAreaView style={tw`bg-white flex-grow p-0`}>
      <View style={tw`py-5`}>
        <TouchableOpacity onPress={() => navigation.navigate('NavigateCard')} style={tw`absolute z-50 left-5 top-6 rounded-full`}>
          <Icon name="chevron-left" type="fontawesome" tvParallaxProperties={undefined} />
        </TouchableOpacity>
        <Text style={tw`text-center text-xl`}>Select a Ride - {travelTimeInformation?.distance.text}</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: IUberDriver }) => {
          return (
            <TouchableOpacity onPress={() => setSelected(item)} style={item.id === selected?.id ? styles.driverbg : styles.driver}>
              <Image
                style={{
                  width: 80,
                  height: 80,
                  resizeMode: 'contain',
                }}
                source={{
                  uri: item.image,
                }}
              />
              <View style={tw`-ml-6`}>
                <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
                <Text>{travelTimeInformation?.duration?.text}</Text>
              </View>
              <Text style={tw`text-xl`}>
                {new Intl.NumberFormat('FR', {
                  style: 'currency',
                  currency: 'EUR',
                }).format((travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * item.multiplier) / 100)}
              </Text>
            </TouchableOpacity>
          );
        }}
      />

      <View style={tw`mt-auto border-t pt-2 border-gray-200`}>
        <TouchableOpacity disabled={!selected} style={tw`bg-black py-2 m-3 rounded-2xl`}>
          <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionCard;

const styles = StyleSheet.create({
  driver: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  driverbg: {
    backgroundColor: '#DBDBDB',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
