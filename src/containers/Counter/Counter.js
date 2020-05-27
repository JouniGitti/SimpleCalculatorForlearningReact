import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';
// or e.g import { increase } from '../../actions/actions';


class Counter extends Component {
    state = {
        counter: 0,
        results: []
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increase" clicked={this.props.onIncreaseCounter} />
                <CounterControl label="Decrease" clicked={this.props.onDecreaseCounter} />
                <CounterControl label="Add" clicked={this.props.onAddFiveCounter} />
                <CounterControl label="Subtract" clicked={this.props.onSubtractFiveCounter}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter, // ctr and rlt is the name given in the index file in the combined reducers
        storedResults: state.rlt.results //The property name set in the reducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncreaseCounter: () => dispatch(actionCreators.increase()),
        onDecreaseCounter: () => dispatch(actionCreators.decrease()),
        onAddFiveCounter: () => dispatch(actionCreators.add(10)),
        onSubtractFiveCounter: () => dispatch(actionCreators.subtract(15)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)), //binding to the result argument we get into
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);