import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeObjectData = async (key, value) => {
  //  const dispatch = useDispatch();
  //  dispatch(setUserLoggedRedux(value));

    console.log("storeObjectData",key);
    try {
   // await removeItem(key);
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log(error);
  }
};

export const removeItem = async (key) => {
    try {
        console.log("removeItem",key);

        await AsyncStorage.removeItem(key);
        return true;
    }
    catch(exception) {
        return false;
    }
  };

export const getStringData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    //console.log("getStringData",jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;

   // return value;
  } catch (error) {
    console.log(error);
  }
  return null;
};
