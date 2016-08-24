import React, { Component, PropTypes } from 'react';
import Close from './close';
import Minimize from './minimize';
import Resize from './resize';
import Lock from './lock';
var styles = {
  controls: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    cursor: 'default',
    display: 'flex',
    width: '61px'
  },

  inset: {
    marginLeft: '5px'
  }
};

class Controls extends Component {
  static propTypes = {
    inset: PropTypes.bool,
    isFullscreen: PropTypes.bool,
    onCloseClick: PropTypes.func,
    onMinimizeClick: PropTypes.func,
    onMaximizeClick: PropTypes.func,
    onResizeClick: PropTypes.func,
    onLockClick: PropTypes.func,
    onUnlockClick: PropTypes.func,
    showMinimize: PropTypes.bool,
    showResize: PropTypes.bool,
    showLock: PropTypes.bool,
  };
  static defaultProps = {
    showMinimize: false,
    showMaximize: false,
    showLock: false,
  }
  constructor() {
    super();
    this.state = {
      isOver: false
    };
  }

  render() {
    return (
      <div
        style={{ ...styles.controls }}
        onMouseEnter={() => this.setState({ isOver: true })}
        onMouseLeave={() => this.setState({ isOver: false })}
      >
        <Close onClick={this.props.onCloseClick} showIcon={this.state.isOver}/>
        {this.props.showMinimize ? <Minimize onClick={this.props.onMinimizeClick} showIcon={this.state.isOver}/>: null}
        {this.props.showResize? <Resize
          isFullscreen={this.props.isFullscreen}
          onClick={this.props.onResizeClick}
          onMaximizeClick={this.props.onMaximizeClick}
          showIcon={this.state.isOver}
        /> : null}
        {this.props.showLock? <Lock onLockClick={this.props.onLockClick} onUnlockClick={this.props.onUnlockClick} showIcon={this.state.isOver}/>: null}
      </div>
    );
  }
}

export default Controls;
