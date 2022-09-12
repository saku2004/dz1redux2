import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const UserInput = () => {
  const dispatch = useDispatch()
  const [newUser] = useState()
  const handleClick = () => dispatch({
    type: 'ADD_USER',
    payload: {
      label: newUser,
    }
  })

  return (
    <div className='home'>
    <button onClick={handleClick}>New user</button>
    </div>
  )
}
const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users);
  const handleClick = label => dispatch({
    type: 'DELETE_USER',
  })
  return (
    <ul>
      {users.map(user => <li onClick={() => handleClick(user)}>{user.label}User <button onClick={() => handleClick(user)}> DELETE USER</button></li>)}
    </ul>
  )
}
function App() {
  return (
    <div className="App">
        <Users />
        <UserInput />
    </div>
  );
}

export default App;