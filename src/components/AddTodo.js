import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createtodo } from '../actions/todoActions';

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo: ''
        }
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };
    onSubmit = (e) => {
        e.preventDefault();
        const todo ={
            todo: this.state.todo,
            isComplete: false,
            createdAt: Date.now()
        };
        this.props.createtodo(todo);
        this.todoForm.reset();
    };
    render() {
        return (
            <div className="raw">
                <div className="col-md-12">
                    <form ref={(input) => this.todoForm = input} className="form-cust" onSubmit={this.onSubmit}>
                        <input className="form-control" required type="text" name="todo" onChange={this.onChange} placeholder="What you Want To Do?"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(null,{ createtodo })(AddTodo);