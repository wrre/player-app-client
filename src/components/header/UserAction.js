import React from 'react';
import { Link } from 'react-router-dom'
import { Popup } from 'semantic-ui-react';
import user from '../../image/user.svg';

const UserAction = () => (
  <Popup
    trigger={<img className="Header-right" src={user} alt="user"/>}
    flowing
    hoverable
  >
  <table>
    <tr><Link to="/user/list">My List</Link></tr>
  </table>
  </Popup>
)

export default UserAction;
