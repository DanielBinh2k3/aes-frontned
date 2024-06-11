import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from './firebase-config';

function TestPage() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(data.docs.map((doc) => doc.data())); // Logs user data to console
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };
    
    getUser(); // Call the function
  }, []); // Passing an empty array means this effect runs once after the initial render

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>Name: {user.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default TestPage;