import React from 'react';

class Input extends React.Component {
    static propTypes = {
        type: React.PropTypes.string,
        name: React.PropTypes.string,
        placeholder: React.PropTypes.string
    }
    render() {
        return (
            <input
                type={this.props.type}
                name={this.props.name}
                placeholder={this.props.placeholder}
                onFocus={this.props.onFocus} />
        );
    }
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this._onFocus = () => {
            console.log('focus');
        };
    }
    render() {
        return (
            <Input
                type="text"
                name={this._onFocus}
                placeholder="Nom d'utilisateur"
                onFocus={this._onFocus} />
        );
    }
}

export default Form;
