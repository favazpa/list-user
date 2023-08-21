import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {getUsers} from '../../utils/UserManager';
import ListItem from './components/ListItem';
import CustomNavigationHeader from './components/CustomNavigationHeader';
import Colors from '../../themes/Colors';

const ListHeaderComponent = () => {
  return <Text style={styles.header}>Select Profile</Text>;
};

const ListFooterComponent = loading =>
  loading ? <ActivityIndicator size="large" color={Colors.primary} /> : null;

const UserListScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [currentBatchIndex, setCurrentBatchIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const batchSize = 12;

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const usersData = await getUsers();
      setUsers(usersData);
      setIsLoading(false);
    };
    fetchUsers();
  }, []);

  const showNextBatch = () => {
    if (!isLoading) {
      const startIndex = (currentBatchIndex + 1) * batchSize;
      if (startIndex < users.length) {
        setIsLoading(true);
        setTimeout(() => {
          setCurrentBatchIndex(currentBatchIndex + 1);
          setIsLoading(false);
        }, 500);
      }
    }
  };

  return (
    <View style={styles.container}>
      <CustomNavigationHeader navigation={navigation} />
      <FlatList
        data={users.slice(0, (currentBatchIndex + 1) * batchSize)}
        ListHeaderComponent={ListHeaderComponent}
        onEndReachedThreshold={0.01}
        onEndReached={showNextBatch}
        contentContainerStyle={styles.itemContainer}
        style={{flex: 1}}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <ListItem details={item} />}
        ListFooterComponent={ListFooterComponent(isLoading)}
      />
    </View>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor2,
  },
  header: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 25,
  },
  itemContainer: {padding: 20},
});
