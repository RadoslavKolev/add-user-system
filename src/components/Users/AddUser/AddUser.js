import React from 'react';

import Card from '../../UI/Card/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" />
        <button type='submit'>Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;