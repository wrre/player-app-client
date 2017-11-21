import React from 'react';
import { Popup } from 'semantic-ui-react';
import user from '../../image/user.svg';

const UserAction = () => (
  <Popup
    trigger={<img className="Header-right" src={user} alt="user"/>}
    flowing
    hoverable
  >
  <table>
    <tr>My List</tr>
  </table>
  </Popup>
)

export default UserAction;
