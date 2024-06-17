// RegisterPage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Loading from '../Elements/Common/Loading';
import Error from '../Elements/Common/Error';
import { registerUser } from '../../ApiRequests/actions/authActions';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase-config';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.userRegister);
  const { register, handleSubmit } = useForm();
  const auth = getAuth();
  const usersCollectionRef = collection(db, 'users');
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const { user } = userCredential;

      await addDoc(usersCollectionRef, {
        uid: user.uid,
        name: data.name,
        email: data.email,
        subscription: false, // Corrected spelling of "subscription"
      });

      dispatch(registerUser(data)).then((result) => {
        if (result.type === 'auth/registerUser/fulfilled' && success) {
          console.log("Sign Up successfully")
          localStorage.
          navigate("/")
        }
      });
    } catch (err) {
      console.error("Error creating user: ", err);
    }
  };

  return (
    <div className="wrapper">
      {loading && <Loading />}
      {error && <Error message={error} />}
      <div className="logo">
        <img
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-center"
          alt="React Bootstrap logo"
        />
      </div>
      <div className="text-center mt-4 name">AuIES</div>
      <form className="p-3 mt-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="text"
            name="name"
            placeholder="Name"
            {...register('name', { required: true })}
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-envelope"></span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            {...register('email', { required: true })}
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register('password', { required: true })}
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            {...register('confirmPassword', { required: true })}
          />
        </div>
        <button className="btn mt-3" type="submit" disabled={loading}>
          Register
        </button>
      </form>
      <div className="text-center fs-6">
        <a href="/login">Login</a>
      </div>
    </div>
  );
}

export default RegisterPage;
