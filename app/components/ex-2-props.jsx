import React from 'react';

class Component extends React.Component {
    constructor(props) {
        super(props);

        this.name = 'Elmo';
        this.imageUrl = 'https://pbs.twimg.com/profile_images/716986458406424576/8AOacOOQ.jpg';
    }

    render() {
        return (
            <ChildComponent name={this.name} image={this.imageUrl} />
        );
    }
}

// On définit notre composant enfant
// et on lui demande d'afficher les valeurs passés en props
class ChildComponent extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} />
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

export default Component;
