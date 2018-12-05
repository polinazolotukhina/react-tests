import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Congrats extends Component {
  render() {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        {this.props.success&& <h1>Congrats</h1>}
      </div>
    );
  }
}
Congrats.propTypes = {
    success: PropTypes.bool
}
export default Congrats;
