 import React, { Component } from 'react';
 import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
 import { CSSTransition, TransitionGroup } from 'react-transition-group';
 import { v1 as uuid } from 'uuid';
 import { connect } from 'react-redux';
 import { getItems } from '../actions/itemActions';
 import  PropTypes from 'prop-types';

 class ResultsList extends Component {

    // componentDidMount() {
    //     this.props.getItems(this.props.item.Type, this.props.item.Month);
    // }
    
    render() {
        //const { items } = this.props.item;
        return(
            <Container>
                {/* <ListGroup>
                    {items.map(({Type, Name}) => (
                        <ListGroupItem key={items.id}>
                            Type: {Type}, Name: {Name}
                    </ListGroupItem>
                    ))}
                </ListGroup> */}
            </Container>
        )
    }
 }

//  ResultsList.propTypes = {
//      getItems: PropTypes.func.isRequired,
//      item: PropTypes.object.isRequired
//  }

// const mapStateToProps = (state) => ({
//     item: state.item
// });


// the container
 export default ResultsList;//connect(mapStateToProps, { getItems })(ResultsList);