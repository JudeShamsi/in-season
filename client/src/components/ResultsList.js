 import React, { Component } from 'react';
 import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
 import { CSSTransition, TransitionGroup } from 'react-transition-group';
 import { v1 as uuid } from 'uuid';
 import { connect } from 'react-redux';
 import { getItems } from '../actions/itemActions';

 class ResultsList extends Component {
    
    render() {
        const { items } = this.state;
        return(
            <Container>
                <h1>Hi</h1>
            </Container>
        )
    }
 }

 export default ResultsList;