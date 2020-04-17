import React from 'react';

class Logout extends React.Component {



render(){
  localStorage.clear()
  window.location.href="/login"
}
}
export default Logout;
