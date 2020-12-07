import {
    SET_LOGIN,
    SET_USER_LOGGED,
    SET_ERROR,
  } from '../actionType';

  import {storeObjectData} from '../../../services/storage'

  import {API_URL} from "@env";
  
  import axios from 'axios';
  
  export const setIsLoggedRedux = (payload) => ({
    type: SET_LOGIN,
    payload,
  });
  
  export const setUserLoggedRedux = (payload) => ({
    type: SET_USER_LOGGED,
    payload,
  });
  
  export const setError = (payload) => ({
    type: SET_ERROR,
    payload,
  });
  

  export const login = (username, password, callback) => async (dispatch) => {
    try {

   //   console.log("username",username);

      const response = await axios.post(
        `${API_URL}/client/login`,{
            email:username,
            password:password
        }
      );

     //console.log(response.data.data.client.phone)

     if(response.data.isSuccessFull){
      storeObjectData('user',response.data.data.client);
      //dispatch(setUserLoggedRedux(response.data.data.client));
      //console.log("mela");
      //dispatch(setIsLoggedRedux(response.data.isSuccessFull));
      callback(response.data.message,false, response.data.data.client);
     }else{
      callback(response.data.message,true);
      dispatch(setError(response.data.message));
     }
      
    } catch (e) {
      //console.log(e.message);
      dispatch(setError(e));
      //console.warn(e);
    }
  };
  
  