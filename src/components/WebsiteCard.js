import React from 'react';

const WebsiteCard = props => {
  return (
    <article>
      <a target="_blank" href={props.url} className="image">
        <img src={props.image} alt={`${props.name} screenshot`} />
      </a>
      <h3 className="major">{props.name}</h3>
      <p>{props.description}</p>
      <a target="_blank" rel="noreferrer" href={props.url} className="special">
        View more
      </a>
    </article>
  );
};

export default WebsiteCard;
