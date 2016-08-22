import React, { Component, PropTypes } from 'react';
import Close from './close';
import Minimize from './minimize';
import Maximize from './maximize';
import Lock from './lock';

var styles = {
  controls: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    cursor: 'default',
    display: 'flex',
    height: '32px'
  }
};

class Controls extends Component {
  static propTypes = {
    onCloseClick: PropTypes.func,
    onMinimizeClick: PropTypes.func,
    onRestoreDownClick: PropTypes.func,
    onMaximizeClick: PropTypes.func,
    onLockClick: PropTypes.func,
    onUnlockClick: PropTypes.func
  };

  render() {
    return (
      <div style={styles.controls}>
        <Lock onLockClick={this.props.onLockClick} onUnlockClick={this.props.onUnlockClick} ref="lock"/>
        <Minimize onClick={this.props.onMinimizeClick} ref="minimize"/>
        <Maximize onMaximizeClick={this.props.onMaximizeClick} onRestoreDownClick={this.props.onRestoreDownClick} ref="maximize"/>
        <Close onClick={this.props.onCloseClick} ref="close"/>
      </div>
    );
  }
}

export default Controls;
