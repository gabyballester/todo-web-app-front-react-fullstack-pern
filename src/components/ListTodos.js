import { Fragment } from 'react';

export default function ListTodos() {
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
          {/*<tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
        </tr>*/}
        </tbody>
      </table>
    </Fragment>
  )
}