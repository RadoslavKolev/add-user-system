import React, { useState } from 'react';

import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, age) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList, 
        { 
          id: Math.random().toString(), 
          name: username, 
          age: age 
        }
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length !== 0 && <UsersList users={usersList} />}
    </div>
  );
}

export default App;
