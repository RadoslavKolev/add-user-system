import React, { useState } from 'react';

import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';

import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (e) => {
    e.preventDefault();

    // Validations for invalid input
    // Number() can be replaced with '+'
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || 
        Number(enteredAge) < 1) return;

    // Lifting the state up (to App)
    props.onAddUser(enteredUsername, enteredAge);

    // Resetting
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <div>
      <ErrorModal 
        title="An error occurred!" 
        message="Something went wrong" 
      />
      
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            value={enteredUsername} // Clearing the input after submit
            onChange={usernameChangeHandler} 
          />

          <label htmlFor="age">Age (Years)</label>
          <input 
            type="number" 
            id="age"
            value={enteredAge} // Clearing the input after submit
            onChange={ageChangeHandler} 
          />

          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;