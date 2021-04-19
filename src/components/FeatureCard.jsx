import React from "react"
import classes from "../modules/FeatureCard.module.css"
import {Card} from "react-bootstrap"

function FeatureCard(props)
{
    return(
       <Card className={classes.card}>
            <Card.Img variant="top" src={props.imageURL} className={classes.image} />
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