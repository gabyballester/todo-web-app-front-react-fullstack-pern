import { Fragment, useEffect, useState } from 'react';
import { getTodosApi, deleteTodoApi } from '../services/api.service';
import EditTodo from './EditTodo';

export default function ListTodos() {
  const [todos, setTodos] = useState([])

  const getTodos = async e => {
    try {
      const { data } = await getTodosApi();
      setTodos(data);
    } catch (err) {
      return err.message
    }
  };

  useEffect(() => {
    getTodos()
  }, [])

  const deleteTodo = async (id) => {
    try {
      await deleteTodoApi(id)
      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      return err.message
    }
  };

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td> <EditTodo todo={todo} /></td>
              <td><button
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.todo_id)}
              > Delete </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}
