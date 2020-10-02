import React, { Component } from 'react';

const withUser = WrappedComponent => {
  const user = "Vivek S";
  return props => <WrappedComponent user={user} {...props} />;
};


const UserPage = props => (
  <div>
    <p>My name is {props.user}!</p>
  </div>
);


export default withUser(UserPage);

