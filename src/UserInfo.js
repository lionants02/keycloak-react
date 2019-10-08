import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';

class UserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            user_id: "",
            groups: []
        };
        let decode = jwt_decode(localStorage.getItem("react-token"));
        this.state.name = decode.preferred_username
        this.state.email = decode.email
        this.state.user_id = decode.sub
        this.state.groups = decode.groups

        console.log(decode)
    }

    render() {

        let output = <div id="UserInfo">
            <p>ID: {this.state.user_id}</p>
            <p>Name: {this.state.name}</p>
            <p>Email: {this.state.email}</p>
            <table className="table">
                <tr>
                    <th>Groups</th>
                </tr>

                <tr><td>
                {this.state.groups.map(reptile =>
                    <a> {reptile}</a>
                )}
                </td></tr>
            </table>
        </div>;


        return (
            output
        );
    }
}

export default UserInfo;
