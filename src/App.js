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
    //* If <></> (shorter syntax) doesn't work, we can use <React.Fragment></React.Fragment>
    //* It removes the unnecessary div's
    <>  
      <AddUser onAddUser={addUserHandler} />
      {usersList.length !== 0 && <UsersList users={usersList} />}
    </>
  );
}

export default App;
