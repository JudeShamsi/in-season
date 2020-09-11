 import React, { Component } from 'react';
 import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
 import { CSSTransition, TransitionGroup } from 'react-transition-group';
 import { v1 as uuid } from 'uuid';

 class ResultsList extends Component {
    state = {
        items: [
            {
                "_id": "5f5325d0ceceb9573e914a52",
                "Type": "Vegetable",
                "Name": "Brussel Sprouts",
                "January": "N",
                "February": "N",
                "March": "N",
                "April": "N",
                "May": "N",
                "June": "N",
                "July": "N",
                "August": "N",
                "September": "Y",
                "October": "Y",
                "November": "Y",
                "December": "Y"
            },
            {
                "_id": "5f5325d0ceceb9573e914a61",
                "Type": "Vegetable",
                "Name": "Mushroom",
                "January": "Y",
                "February": "Y",
                "March": "Y",
                "April": "N",
                "May": "N",
                "June": "N",
                "July": "N",
                "August": "N",
                "September": "N",
                "October": "N",
                "November": "Y",
                "December": "Y"
            }
        ]
    }

    render() {
        const { items } = this.state;
        return(
            <Container>
                
            </Container>
        )
    }
 }

 export default ResultsList;