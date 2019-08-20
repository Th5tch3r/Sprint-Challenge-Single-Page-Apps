import React from 'react';
import { Card} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default function CharacterCard({ name, air_date, episode, characters}) {
    return (<Card>
        <Card.Content>
            <Card.Header>
                {name}
            </Card.Header>
            <Card.Meta>
                {air_date}
            </Card.Meta>
            <Card.Meta>
                {episode}
            </Card.Meta>
            <Card.Description>
                Residents: {characters.length}
            </Card.Description>
        </Card.Content>
    </Card>)
} 