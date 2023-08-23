import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 25px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  color: #8b9dc3;

  :hover {
    color: #3b5998;
  }
`;

export const LinkContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;
