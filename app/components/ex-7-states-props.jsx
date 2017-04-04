import React from 'react';

class FirstComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            firstState: 'value'
        };
    }
    render() {
        return (
            <SecondComponent value={this.state.firstState} />
        );
    }
}

class SecondComponent extends React.Component {
    render() {
        return (
            <p>The state has for value : {this.props.value}</p>
        );
    }
}

export default FirstComponent;
