import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import DisplayTodo from './components/DisplayTodo';
import { Provider } from 'react-redux';
import store from './store/store';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="App">
                <div className="container">
                    <h1 className="top-heading">MY SCHEDULE APP</h1>
                    <AddTodo />
                    <DisplayTodo />
                </div>
            </div>
        </Provider>
    );
  }
}

export default App;
