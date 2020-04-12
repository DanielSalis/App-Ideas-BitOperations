import React, { Component } from 'react';
// import { Actions as InputActions } from '../../store/ducks/inputs';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './style.css'

class OutputContainer extends Component {

    compareBits = () => {
        const firstInput = this.props.inputs.firstInput;
        const secondInput = this.props.inputs.secondInput;
        const operation = this.props.operations.operation;

        let output = [];

        switch (operation) {
            case 'AND':
                for (let i = 0; i < firstInput.length; i++) {
                    if (firstInput[i] === secondInput[i]) {
                        output[i] = firstInput[i];
                    } else {
                        output[i] = '0'
                    }
                }
                break;

            case 'OR':
                for (let i = 0; i < firstInput.length; i++) {
                    if (firstInput[i] === '1' || secondInput[i] === '1') {
                        output[i] = '1';
                    } else {
                        output[i] = '0';
                    }
                }
                break;

            case 'XOR':
                for (let i = 0; i < firstInput.length; i++) {
                    if (firstInput[i] === secondInput[i]) {
                        output[i] = '0';
                    } else {
                        output[i] = '1';
                    }
                }
                break;

            case 'NOT':
                for (let i = 0; i < firstInput.length; i++) {
                    if (firstInput[i] === '1' || secondInput[i] === '1') {
                        output[i] = '0';
                    } else {
                        output[i] = '1';
                    }
                }
                break;

            default:
                output = '0';
                break;
        }

        return this.generateOutput(output);
    }

    generateOutput = (output) => {
        if (this.props.inputs.firstInput !== '' && this.props.operations.operation !== '') {
            // console.log(output);

            let bits = [];
            for (let i = 0; i < output.length; i++) {
                if (output[i] === '1') {
                    bits.push(
                        <div key={i} className="circle circle-selected"></div>
                    );
                } else {
                    bits.push(
                        <div key={i} className="circle"></div>
                    );
                }
            }

            const items = bits.map(item => {
                return item
            })

            return items;
        }
        return <></>;
    }

    render() {
        return (
            <div className="output-container">
                <div className="output-content">
                    <h3>Output</h3>
                    <div className="circles-container">
                        {this.compareBits()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    inputs: state.inputs,
    operations: state.operations
})

export default connect(mapStateToProps, null)(OutputContainer);

