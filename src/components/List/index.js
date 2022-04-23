import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button';
import { deleteToDo } from '../../actions/deleteToDo';

const List = ({ulClassName, toDoList, liClassName, deleteToDo, delClassName, alertClassName}) => toDoList.length > 0 ? (
    <ul className={ulClassName}>
        {toDoList.map(({id, name}) => (
            <li key={id} className={liClassName}>
                {name}
                <Button onClick={() => deleteToDo(id)} className={delClassName}>Delete</Button>
            </li>
        ))}
    </ul>
) : (
    <div className={alertClassName} role="alert">
        All done go to sleep :p
    </div>
)

export default connect(null, { deleteToDo })(List);