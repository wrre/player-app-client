import React, { Component } from 'react';
import UserAction from './UserAction';
import ImageLink from '../share/ImageLink';
import homeImage from '../../image/home.svg';
import './Header.css';

class Header extends Component {
  render() {
    const homePath = '/';
    return (
      <table className="Header-main">
        <tr>
          <td width="30px"><ImageLink className="Header-left" src={homeImage} alt="home" path={homePath}/></td>
          <td><h3>{this.props.title || 'Video Player'}</h3></td>
          <td width="30px"><UserAction/></td>
        </tr>
      </table>
    );
  }
}

export default Header;
