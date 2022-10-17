import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap'
import React, { Component } from 'react';

class ControlledForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInputChange(event) {
        this.setState({ value: event.target.value })
        console.log(event.target.value)
    }
    handleSubmit(event) {
        console.log('Current state: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type='text' value={this.state.value} onChange={this.handleInputChange} />
                    <Button type='submit'>submit</Button>
                </FormGroup>
            </Form>
        )
    }
}

export default ControlledForm;