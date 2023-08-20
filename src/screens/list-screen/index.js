import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {getUsers} from '../../utils/UserManager';
import ListItem from './components/ListItem';
import CustomNavigationHeader from './components/CustomNavigationHeader';

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
      <CustomNavigationHeader navigation={navigation} />
      <FlatList
        data={displayedUsers}
        ListHeaderComponent={ListHeaderComponent}
        onEndReachedThreshold={0.01}
        onEndReached={showNextBatch}
        contentContainerStyle={styles.itemContainer}
        style={{flex: 1}}
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
    backgroundColor: '#EEEFF4',
  },

  header: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 25,
  },
  itemContainer: {padding: 20},
});
