import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Button from './components/Button';
import Input from './components/Input';
import List from './components/List';
import { addToDo } from './actions/toDo';

class App extends Component {
  state = {
      input: '',
      disabled: true,
  };

  submit = () => {
      const { addToDo } = this.props;
      const { input } = this.state;
      addToDo(input);
      this.setState({input: '', disabled: true})
  };

  handleOnChange = (event) => {
  
      if(event.target.value.length !== 0){
          this.setState({input: event.target.value, disabled: false});
      } else {
          this.setState({input: event.target.value, disabled: true});
      }
  };

  render(){
      const { input, disabled } = this.state;
      const { toDoList } = this.props;
      return(
          <>
              <h1 className='h1'>Hola,<br />start doing these things now!</h1>
              <List
                  toDoList={toDoList}
              />
              <h2 className='h2'>New Task</h2>
              {this.state.disabled}
              <Input onChange={(event) => this.handleOnChange(event)} value={input} className="form" />
              <Button onClick={() => this.submit()} className="button" disabled={disabled}>Add to the list</Button>
              <footer className='footer'>
                  Developed by <a href="https://www.burhan.saleemi.com">Burhan</a> in  by <a href="https://reactjs.org/" target="_blank" rel='noreferrer'>React</a>.
              </footer>
          </>
      )
  }
}

const mapsStateToProps = (state) => ({
  toDoList: state.toDo.list
})

export default connect(mapsStateToProps, { addToDo })(App);
