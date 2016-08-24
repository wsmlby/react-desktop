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
    onUnlockClick: PropTypes.func,
    showMinimize: PropTypes.bool,
    showMaximize: PropTypes.bool,
    showLock: PropTypes.bool,
  };
  static defaultProps = {
    showMinimize: false,
    showMaximize: false,
    showLock: false,
  };
  render() {
    return (
      <div style={styles.controls}>
        {this.props.showLock ? <Lock onLockClick={this.props.onLockClick} onUnlockClick={this.props.onUnlockClick} ref="lock"/> : null}
        {this.props.showMinimize? <Minimize onClick={this.props.onMinimizeClick} ref="minimize"/>: null}
        {this.props.showMaximize? <Maximize onMaximizeClick={this.props.onMaximizeClick} onRestoreDownClick={this.props.onRestoreDownClick} ref="maximize"/> :null}
        <Close onClick={this.props.onCloseClick} ref="close"/>
      </div>
    );
  }
}

export default Controls;
