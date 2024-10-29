import React from 'react';
import { View, Text, Image, StyleSheet, FlatList,ScrollView } from 'react-native';

const ProfileScreen = () => {
  const profiles = [
    { id: '1', name: 'Puja Purkar', image: 'profile1' },
    { id: '2', name: 'Mayuri Wagh', image: 'profile2' },
    { id: '3', name: 'Gayatri Wagh', image: 'profile3' },
    { id: '4', name: 'Sakshi Dube', image: 'profile4' },
    { id: '5', name: 'Akash Satpute', image: 'profile5' },
    { id: '6', name: 'Vaibhav Satpute', image: 'profile6' },
    { id: '7', name: 'Disha Khule', image: 'profile7' },
    
  ];

  const renderItem = ({ item }) => (
    <View style={styles.profileContainer}>
      <Image
        style={styles.profileImage}
        source={getImageSource(item.image)}
      />
      <Text style={styles.profileName}>{item.name}</Text>
    </View>
  );

  const getImageSource = (imageName) => {
    switch (imageName) {
      case 'profile1':
        return require('./Images/purkar_puja.jpg');
      case 'profile2':
        return require('./Images/wagh_mayuri.jpeg');
      case 'profile3':
        return require('./Images/wagh_gayatri.jpeg');
      case 'profile4':
        return require('./Images/dube_sakshi.png');
      case 'profile5':
        return require('./Images/satpute_akash.jpg');
      case 'profile6':
        return require('./Images/satpute_vaibhav.jpg');
      case 'profile7':
        return require('./Images/khule_disha.jpg');
      
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Design by Takechange Solution Team</Text>
      <FlatList
        data={profiles}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2} 
        columnWrapperStyle={styles.row} 
      />
    </ScrollView>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9F5EF',
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#062626',
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    justifyContent: 'space-between', 
    marginBottom: 5
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#ffffff',
    borderRadius: 11,
    width: '91%', 

  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
    borderColor: '#1ABC9C',
    borderWidth: 2,
  },
  profileName: {
    fontSize: 16,
    color: '#062626',
    textAlign: 'center',
  },
});


