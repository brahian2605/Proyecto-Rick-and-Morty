import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="form-container">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" className="input-field" />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" className="input-field" />
        
        <button type="submit" className="submit-button">Submit</button>
      </form>
    );
  }
}

export default Form;
