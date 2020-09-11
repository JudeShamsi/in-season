import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Container } from 'reactstrap';
class AppForm extends Component {

    render() {
        return (
            <Form>
                <Container>
                <Col>
                <FormGroup>
                    <Label for="getType">Choose From a Selection of Food Categories</Label>
                        <Input type="select" name="selectType" id="type-selection">
                            <option>Vegetable</option>
                            <option>Fruit</option>
                            <option>Herbs</option>
                            <option>Seafood</option>
                            <option>Meat/Dairy</option>
                    </Input>
                </FormGroup>
                </Col>
                </Container>
                
                <Container>
                <Col>
                <FormGroup>
                <Label for="getType">Select a Month</Label>
                        <Input type="select" name="selectMonth" id="month-selection">
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
                </FormGroup>
                </Col>
                </Container>
                <Container>
                    <Col>
                        <Button color="info">Show Me What's In Season!</Button>
                    </Col></Container>
            </Form>   
        )
    }
};

export default AppForm;