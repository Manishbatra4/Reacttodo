import React, {Component} from 'react';
import { getFunName } from '../helpers';
import { connect } from 'react-redux';
import { fetchtodos, deletetodo, edittodo } from '../actions/todoActions';
import moment from 'moment';
class DisplayTodo extends Component {
    componentWillMount() {
        this.props.fetchtodos();
    };
    delete(id){
        this.props.deletetodo(id);
    };
    complete(id,com){
        this.props.edittodo(id,com);
    };
    render() {
        const todoItems = this.props.todos.reverse().map(todo => (
            <li key={todo.id} className={'list-group-item ' + getFunName() + ' ' + todo.isComplete}>
                {todo.todo} <span className="small">-{moment(todo.createdAt).format('DD/MMM/YYYY')}</span>
                <button className="btn btn-outline-info float-right" onClick={() => this.complete(todo.id,todo.isComplete)}>{todo.isComplete ? '✖' : '✔' }</button>
                <button className="btn btn-outline-info float-right" onClick={() => this.delete(todo.id)}><i className="fa fa-trash"></i></button>
            </li>
        ));
        return (
            <div className="raw todos">
                <div className="col-md-12">
                    <h1>My Todos</h1>
                    <ul className="list-group">
                        {todoItems}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos.items
});

export default connect(mapStateToProps, { fetchtodos, deletetodo, edittodo })(DisplayTodo);