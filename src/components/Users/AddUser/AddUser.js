import React, { useState, useRef } from 'react';

import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';
import Wrapper from '../../Helpers/Wrapper/Wrapper';

import classes from './AddUser.module.css';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState(); // Initial state - undefined

  const addUserHandler = (e) => {
    e.preventDefault();

    // Values from the useRef hook (connected to the input fields)
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    // Validations for invalid input
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    } 

    // Number() can be replaced with '+'
    if (Number(enteredAge) < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (greater than 0).'
      });
      return;
    }

    // Lifting the state up (to App)
    props.onAddUser(enteredUsername, enteredAge);

    // Resetting 
    //! Don't use refs to manipulate the DOM
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Wrapper>
      {/* If error is not undefined - it will render the ErrorModal component */}
      {error && (
        <ErrorModal 
          title={error.title} 
          message={error.message} 
          onConfirm={errorHandler} 
        />
      )}
         
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            ref={nameInputRef}
          />

          <label htmlFor="age">Age (Years)</label>
          <input 
            type="number" 
            id="age"
            ref={ageInputRef} 
          />

          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;