import React, { Component } from 'react';
import { connect } from 'react-redux';

class Summary extends Component {
    render() {
        return (
            <div>
                <p>Summary Page</p>
            </div>
        );
    }
}

export default connect()(Summary);