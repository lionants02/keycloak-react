import React, {Component} from 'react';

class Secured extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        console.log("Render 3 ")
        return (
            <div>
                <p>Initializing Keycloak...</p>
                <p><code>{localStorage.getItem("react-token")}</code></p>
            </div>
        );
    }
}

export default Secured;
