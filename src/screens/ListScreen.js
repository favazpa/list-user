import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {getUsers} from '../utils/UserManager';
import ListItem from '../components/ListItem';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {handleLogOut} from '../utils/AuthUtils';

const ListHeaderComponent = () => {
  return <Text style={styles.header}>Select Profile</Text>;
};

const UserListScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [currentBatchIndex, setCurrentBatchIndex] = useState(0);

  const displayedUsers = users.slice(0, (currentBatchIndex + 1) * 12);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  const showNextBatch = () => {
    setCurrentBatchIndex(currentBatchIndex + 1);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          backgroundColor: '#34A2B1',
          height: 50,
          alignItems: 'center',
          gap: 10,
          padding: 10,
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => handleLogOut(navigation)}>
          <Icon name="logout" size={20} color="white" />
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: 15}}>Logout</Text>
      </View>
      <FlatList
        data={displayedUsers}
        ListHeaderComponent={ListHeaderComponent}
        onEndReachedThreshold={0.01}
        onEndReached={showNextBatch}
        contentContainerStyle={styles.itemContainer}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <ListItem details={item} />}
      />
    </View>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    backgroundColor: '#EEEFF4',
  },
  userItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  profileIcon: {
    marginRight: 16,
    backgroundColor: '#F6F7F9',
    borderRadius: 25,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  userDetails: {
    fontSize: 13,
    fontWeight: '400',
    color: 'black',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F7F9',
    marginHorizontal: 10,
  },
  header: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 25,
  },
  itemContainer: {flex: 1, padding: 20},
});
