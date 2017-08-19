import React from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px
`;

const ShowCard = props => (
  <Wrapper>
    <Image src={`/public/img/posters/${props.show.poster}`} alt={`${props.show.title} Show Poster`} />
    <div>
      <h3>{props.show.title}</h3>
      <h3>({props.show.year})</h3>
      <p>{props.show.description}</p>
    </div>
  </Wrapper>
);

ShowCard.propTypes = {
  show: shape({
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired
  }).isRequired
};

export default ShowCard;
