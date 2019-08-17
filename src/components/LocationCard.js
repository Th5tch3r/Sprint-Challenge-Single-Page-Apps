import React from "react";

export default function LocationCard({ name, type, dimension, residents }) {
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
