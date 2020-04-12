import React, { Component } from 'react';
import { Actions as InputActions } from '../../store/ducks/inputs';

import './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class InputsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input_1: '',
            input_2: ''
        }
    }

    toggleCircle = (e, inputNumber) => {
        var class_ = e.target.className.includes('circle-selected') ? "circle" : "circle circle-selected";
        e.target.className = class_;

        const value = this.getBinaryNumber(e.target);

        if (inputNumber === 1) {
            this.setState({ input_1: value });
            this.props.InputActions.setFirstInput(value);

        } else if (inputNumber === 2) {
            this.setState({ input_2: value });
            this.props.InputActions.setSecondInput(value);
        }
    }

    getBinaryNumber = (element) => {
        let binaryNumber = '';
        let sibiling = element.parentNode.firstChild;

        while (sibiling) {
            if (sibiling.className.includes('circle-selected')) {
                binaryNumber = binaryNumber + '1';
            }
            else {
                binaryNumber = binaryNumber + '0';
            }
            sibiling = sibiling.nextSibling
        }

        // this.props.InputActions.setNumberOfBits(element.parentNode.children.length);

        return binaryNumber;
    }

    render() {
        return (
            <div className="inputs-container">
                <div className="input-content">
                    <h3>Input 1</h3>
                    <div className="circles-container">
                        <div className="circle" onClick={(e) => this.toggleCircle(e, 1)}></div>
                        <div className="circle" onClick={(e) => this.toggleCircle(e, 1)}></div>
                        <div className="circle" onClick={(e) => this.toggleCircle(e, 1)}></div>
                        <div className="circle" onClick={(e) => this.toggleCircle(e, 1)}></div>
                    </div>
                    <p> 1: {this.props.inputs.firstInput} </p>
                </div>
                <div className="input-content">
                    <h3>Input 2</h3>
                    <div className="circles-container">
                        <div className="circle" onClick={(e) => this.toggleCircle(e, 2)}></div>
                        <div className="circle" onClick={(e) => this.toggleCircle(e, 2)}></div>
                        <div className="circle" onClick={(e) => this.toggleCircle(e, 2)}></div>
                        <div className="circle" onClick={(e) => this.toggleCircle(e, 2)}></div>
                    </div>
                    <p> 2: {this.props.inputs.secondInput} </p>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    InputActions: bindActionCreators(InputActions, dispatch)
});

const mapStateToProps = state => ({
    inputs: state.inputs,
});

export default connect(mapStateToProps, mapDispatchToProps)(InputsContainer);