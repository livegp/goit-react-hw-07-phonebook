import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled.div`
  display: grid;
  grid-template: auto auto 1fr auto auto / 1fr 3fr auto;
  gap: 25px;
  height: 100%;
  font-size: 16px;

  @media (width <= 576px) {
    grid-template: auto auto auto auto auto auto auto / 1fr auto;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  grid-row: 1 / 4;
  grid-column: 1 / 2;
  border-radius: 4px;
  box-shadow:
    0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  object-fit: cover;

  @media (width <= 576px) {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
  }
`;

export const Title = styled.h1`
  color: #3b5998;
  font-size: 20px;
  font-weight: bold;
  grid-row: 1 / 2;
  grid-column: 2 / 4;

  @media (width <= 576px) {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
  }
`;

export const Genres = styled.p`
  color: #3b5998;
  grid-row: 2 / 3;
  grid-column: 2 / 3;

  @media (width <= 576px) {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
  }
`;

export const Rating = styled.p`
  display: flex;
  color: #3b5998;
  grid-row: 2 / 3;
  grid-column: 3 / 4;

  @media (width <= 576px) {
    grid-row: 3 / 4;
    grid-column: 2 / 3;
  }
`;

export const Overview = styled.p`
  color: #3b5998;
  text-align: justify;
  line-height: 1.2;
  grid-row: 3 / 4;
  grid-column: 2 / 4;

  @media (width <= 576px) {
    grid-row: 4 / 5;
    grid-column: 1 / 3;
  }
`;

export const BtnAdditional = styled.ul`
  color: #3b5998;
  grid-row: 4 / 5;
  grid-column: 1 / 2;
  display: flex;
  gap: 25px;
  justify-content: space-between;

  li {
    width: 100%;
  }

  @media (width <= 576px) {
    grid-row: 5 / 6;
    grid-column: 1 / 3;
  }
`;

export const Link = styled(NavLink)`
  text-align: center;
  background-color: #dfe3ee;
  color: #3b5998;
  border-radius: 4px;
  padding: 8px 16px;
  display: block;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #3b5998;
    color: #dfe3ee;

    &.active {
      color: #f7f7f7;
    }
  }

  &.active {
    background-color: #3b5998;
    color: #dfe3ee;
  }
`;
