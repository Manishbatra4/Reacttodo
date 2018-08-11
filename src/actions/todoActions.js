import { FETCH_TODO, NEW_TODO, REMOVE_TODO, EDIT_TODO} from './type';
import  database  from '../firebase/firebase';

export const fetchtodos = () => dispatch => {
    return database.ref('todos').on('value',(snapshot) => {
        const todos = [];
        snapshot.forEach((childSnapshot) => {
            todos.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        dispatch({
            type: FETCH_TODO,
            payload: todos
        });
    });
};

export const addTodo = (todo) => ({
    type: NEW_TODO,
    todo
});

export const createtodo = todo => dispatch  => {
    return database.ref('todos').push(todo).then((ref) => {
        dispatch(addTodo({
            id: ref.key,
            ...todo
        }));
    });
};

export const deletetodo = id => dispatch => {
    return database.ref(`todos/${id}`).remove().then(() => {
        dispatch({
            type: REMOVE_TODO,
            id
        });
    });
};
export const edittodo = (id,complete) => dispatch => {
    return database.ref(`todos/${id}`).update({
            isComplete: !complete
    }).then(() => {
        dispatch({
            type: EDIT_TODO,
            id
        });
    });
};