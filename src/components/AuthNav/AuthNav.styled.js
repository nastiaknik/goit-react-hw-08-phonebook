import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-align: start;
  text-decoration: none;
  color: black;
  padding: 5px 10px;

  &.active {
    background-color: orangered;
    border-radius: 25px;
    color: white;

    &:hover {
      opacity: 0.8;
      color: white;
    }
  }
  &:hover {
    color: orangered;
  }
`;
