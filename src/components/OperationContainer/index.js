import React, { Component } from 'react';
import { Actions as OperationActions } from '../../store/ducks/operations';

import './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class OperationContainer extends Component {

    handleSelection = (element) => {
        let binaryNumber = '';
        let sibiling = element.target.parentNode.firstChild;

        while (sibiling) {
            if (sibiling.className.includes('operation-selected')) {
                sibiling.className = "";
            }
            sibiling = sibiling.nextSibling
        }

        element.target.className = "operation-selected";

        this.props.OperationActions.setOperation(element.target.innerText);

        return binaryNumber;
    }

    render() {
        return (
            <div className="operations-container">
                <p onClick={(e) => this.handleSelection(e)}>AND</p>
                <p onClick={(e) => this.handleSelection(e)}>OR</p>
                <p onClick={(e) => this.handleSelection(e)}>XOR</p>
                <p onClick={(e) => this.handleSelection(e)}>NOT</p>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    OperationActions: bindActionCreators(OperationActions, dispatch)
})

const mapStateToProps = state => ({
    operation: state.operations,
});

export default connect(mapStateToProps, mapDispatchToProps)(OperationContainer);