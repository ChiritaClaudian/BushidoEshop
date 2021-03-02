import React from "react"
import classes from "../modules/FeatureCard.module.css"
import {Card} from "react-bootstrap"

function FeatureCard(props)
{
    return(
       <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={props.imageURL} />
            <Card.Body>
                <Card.Title>{props.feature}</Card.Title>
                <Card.Text>
                    {props.paragraph}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default FeatureCard;