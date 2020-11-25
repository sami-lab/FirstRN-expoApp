import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import Goals from './Components/ShowGoals';
import InputGoal from './Components/GoalInput';
import LoginForm from './Components/Login';
export default function App() {
  const [itemstate, setItemstate] = useState([]);
  const [modalState, setModalState] = useState(false);

  const AddItemListener = (inputState, callback) => {
    const item = inputState;
    // setInputState(null)
    callback();
    if (item) {
      const items = [...itemstate];
      items.push({ id: Math.random().toString(), value: item });
      setItemstate(items);
      setModalState(false);
    }
  };
  const removeItemListner = (id) => {
    setItemstate((currentItem) => {
      return currentItem.filter((goals) => goals.id !== id);
    });
  };
  const modelStateToggler = () => {
    setModalState((current) => !current);
  };
  return (
    <View style={styles.container}>
      <Button title="Show Modals" onPress={modelStateToggler} />
      <LoginForm />
      <InputGoal
        showModal={modalState}
        addItem={AddItemListener}
        hideModel={() => setModalState(false)}
      />
      {/* <ScrollView style={styles.scrollView}>
       {itemstate.length?  itemstate.map((item,i)=>
        <Text  style= {styles.listItem}  key={i}>{`${i+1}: ${item}`}</Text> ): <Text>'No Goals Added Yet'</Text> }
      </ScrollView> */}
      <FlatList
        style={styles.scrollView}
        keyExtractor={(item) => item.id}
        data={itemstate}
        renderItem={(itemData) => (
          <Goals
            id={itemData.item.id}
            OnDelete={removeItemListner}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
  },

  // scrollView: {
  //   backgroundColor: 'pink',
  //   marginHorizontal: 20,
  // },
});
