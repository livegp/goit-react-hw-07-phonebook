import { IoIosArrowDropup } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(273px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h1`
  color: #8b9dc3;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 25px;
`;

export const ScrollTopIcon = styled(IoIosArrowDropup)`
  height: 50px;
  width: 50px;
  background-color: #dfe3ee;
  opacity: 0.6;
  border-radius: 50%;
  fill: #8b9dc3;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 0.8;
    fill: #3b5998;
  }
`;
