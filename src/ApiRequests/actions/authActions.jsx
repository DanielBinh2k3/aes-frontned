import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { collection, addDoc } from 'firebase/firestore';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db, providerFacebook, providerGoogle } from "../../components/Account/firebase-config"


export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ email, password, name }, { rejectWithValue }) => {
    const usersCollectionRef = collection(db, 'users');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const { user } = userCredential;

      // await addDoc(usersCollectionRef, {
      //   uid: user.uid,
      //   name,
      //   email,
      //   subscribtion: false,
      // });
      localStorage.setItem("userInfo", JSON.stringify(user));
      return {
        email: user.email,
        uid: user.uid,
        name,
      };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// import { auth, provider } from '../firebaseConfig'; // Adjust the import based on your file structure
export const facebookSignIn = createAsyncThunk(
  'auth/facebookSignIn',
  async (_, { rejectWithValue }) => {

    try {
      const result = await signInWithPopup(auth, providerFacebook);
      console.log(result)
      const user = result.user;

      localStorage.setItem("userInfo", JSON.stringify(user));

      return {
        email: user.email,
      };
    } catch (error) {
      return rejectWithValue({
        code: error.code,
        message: error.message,
        email: error.customData?.email,
      });
    }
  }
);

export const googleSignIn = createAsyncThunk(
  'auth/googleSignIn',
  async (_, { rejectWithValue }) => {
    try {
      const result = await signInWithPopup(auth, providerGoogle);
      const user = result.user;

      localStorage.setItem("userInfo", JSON.stringify(user));

      return {
        email: user.email,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const emailSignIn = createAsyncThunk(
  'auth/emailSignIn',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      localStorage.setItem("userInfo", JSON.stringify(user));
      return user.email;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
