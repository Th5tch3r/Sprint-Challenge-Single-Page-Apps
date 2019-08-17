import React from "react";
import { Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default function LocationCard({ data}) {
  return (<Card>
            <Card.Content>
              <Card.Header>
                {data.name}
              </Card.Header>
              <Card.Meta>
                {data.type}
              </Card.Meta>
              <Card.Meta>
                {data.dimension}
              </Card.Meta>
              <Card.Description>
                Residents: {data.residents}
              </Card.Description>
            </Card.Content>
          </Card>);
}
