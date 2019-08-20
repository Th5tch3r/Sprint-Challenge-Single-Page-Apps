import React from "react";
import { Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default function LocationCard({ name, type, dimension}) {
  return (<Card>
            <Card.Content>
              <Card.Header>
                {name}
              </Card.Header>
              <Card.Meta>
                {type}
              </Card.Meta>
              <Card.Meta>
                {dimension}
              </Card.Meta>

            </Card.Content>
          </Card>);
}
