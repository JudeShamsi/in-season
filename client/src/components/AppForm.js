import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Container, ListGroupItem} from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, setSelectedItems } from '../actions/itemActions';
import  PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class AppForm extends Component {

    state = {
        hasSelected: false,
        selectType: '',
        selectMonth: ''
    };

    componentDidMount() {
        this.props.actions.getItems();
    }

    onChangeType = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    onChangeMonth = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        
        this.setState({hasSelected: true});

        const {selectType, selectMonth} = this.state;

        const {setSelectedItems} = this.props.actions
        setSelectedItems(selectMonth, selectType);

    };

    render() {

        const {selectedItems} = this.props.item;

        const {hasSelected} = this.state;

        return (
            <div>
            <Form onSubmit={this.onSubmit}>
                <Container>
                <Col>
                <FormGroup>
                    <Label for="getType">Choose From a Selection of Food Categories</Label>
                        <Input type="select" name="selectType" id="type-selection" onChange={this.onChangeType}>
                            <option>Vegetable</option>
                            <option>Fruit</option>
                            <option>Herbs</option>
                            <option>Seafood</option>
                    </Input>
                </FormGroup>
                </Col>
                </Container>
                
                <Container>
                <Col>
                <FormGroup>
                <Label for="getType">Select a Month</Label>
                        <Input type="select" name="selectMonth" id="month-selection" onChange={this.onChangeMonth}>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                    </Input>
                    <Button className="form-btn" color="info">Show Me What's In Season!</Button>
                </FormGroup>
                </Col>
                </Container>
            </Form>
            <Container>
                <Col>
                    <div>
                        {hasSelected ? (selectedItems.length ? (selectedItems.map(item => (
                            <ListGroupItem className="result-clr" key={item._id}>
                                {item.Name}    
                            </ListGroupItem>
                        ))) : <div>No Matching Items</div>
                    ) : null}
                    </div>
                </Col>
            </Container>
        </div>
        )
    }
};

AppForm.propTypes = {
    //getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

// return my 
function mapStateToProps(state){
   return {
       item: state.item
   };
};


function matchDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({getItems: getItems, setSelectedItems: setSelectedItems}, dispatch)
    };
}


// the container
export default connect(mapStateToProps, matchDispatchToProps)(AppForm);