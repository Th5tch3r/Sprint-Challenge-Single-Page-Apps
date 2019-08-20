import React from "react";
import {Card, Image} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default function CharacterCard({name, image, created, location, origin}) {
  return (<Card>
    <Image src={image} alt={name} />
    <Card.Content>
      <Card.Header>
        {name}
      </Card.Header>
      <Card.Meta>
        {location.name}
      </Card.Meta>
      <Card.Meta>
        {origin.name}
      </Card.Meta>
      <Card.Description>
        {created}
      </Card.Description>
    </Card.Content>
  </Card>)
}
