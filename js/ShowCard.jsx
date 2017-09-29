// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled((Link: any))`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const ShowCard = ({ show }: Show) => (
  <Wrapper to={`/details/${show.imdbID}`}>
    <Image
      src={`/public/img/posters/${show.poster}`}
      alt={`${show.title} Show Poster`}
    />
    <div>
      <h3>{show.title}</h3>
      <h3>({show.year})</h3>
      <p>{show.description}</p>
    </div>
  </Wrapper>
);

export default ShowCard;
