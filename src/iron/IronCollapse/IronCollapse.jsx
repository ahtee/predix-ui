import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * IronCollapse component implementation.
 */
class IronCollapse extends React.Component {
  constructor(props) {
    super(props);
    this.base = React.createRef();
    this.state = {
      noAnimation: props.noAnimation,
      horizontal: props.horizontal,
      opened: props.opened,
      style: null
    };
    this._handleRef = this._handleRef.bind(this);
    this._transitionEndBound = this._transitionEnd.bind(this);
  }

  get dimension() {
    return this.state.horizontal
      ? 'width'
      : 'height';
  }

  /* eslint-ignore-start */
  getIsDisplayed() {
    if(this.base.current) {
      const rect = this.base.current.getBoundingClientRect();
      Object.keys(rect)
        .forEach((key) => {
          if (rect[key] !== 0) {
            return true;
          }
          return false;
        });
    }
    return false;
  }

  /* eslint-ignore-stop */
  _calcSize() {
    return `${this.base.current.getBoundingClientRect()[this.dimension]}px`;
  }

  toggleClass(name, bool) {
    if (bool) {
      this.base.current.classList.add(name);
    } else {
      this.base.current.classList.remove(name);
    }
  }

  _transitionEnd() {
    if (this.state.opened) {
      this.base.current.style[this.dimension] = 'auto';
    }
    this._updateTransition(false);
    this.toggleClass('iron-collapse-closed', !this.state.opened);
  }

  _updateTransition = (enabled) => {
    if (this.base.current) {
      this.base.current.style.transitionDuration = (enabled && !this.state.noAnimation)
        ? ''
        : '0s';
    }
  };

  focus() {
    this.base.current.focus();
  }

  updateSize = (size, animated) => {
    if (!this.base.current) {
      return;
    }
    let newSize = size;
    if (this.base.current && this.base.current.style[this.dimension] === size) {
      return;
    }
    this._updateTransition(false);
    if (animated && !this.state.noAnimation && this.getIsDisplayed()) {
      const startSize = this._calcSize();

      // For `auto` we must calculate what is the final size for the animation.
      // After the transition is done, _transitionEnd will set the size back to `auto`.
      if (size === 'auto') {
        this.base.current.style[this.dimension] = size;
        newSize = this._calcSize();
      }
      this.base.current.style[this.dimension] = startSize;
      this.base.current.style.height = this.base.offsetHeight;
      this._updateTransition(true);
    }
    this.base.current.style[this.dimension] = newSize;
  };

  toggle() {
    if (this.state.opened) {
      this.hide();
    } else {
      this.show();
    }
  }

  /** Show content */
  show() {
    this.setState({ opened: true });
  }

  /** Hide content */
  hide() {
    this.setState({ opened: false });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.opened !== this.state.opened) {
      this.setState({ opened: nextProps.opened });
    }
  }

  componentDidUpdate() {
    this.updateSize(this.state.opened
      ? 'auto'
      : '0px', true);
    if (this.state.opened) {
      this.focus();
    }
    if (this.state.noAnimation) {
      this._transitionEnd();
    }
    if (this.props.onChange) {
      this.props.onChange(this.state);
    }
  }

  componentDidMount() {
    if (this.base.current) {
      this.base.current.addEventListener('transitionend', this._transitionEndBound);
      this._transitionEnd();
    }
  }

  componentWillUnmount() {
    if (this.base.current) {
      this.base.current.removeEventListener('transitionend', this._transitionEndBound);
    }
  }

  _handleRef(el) {
    this.base = el;
  }

  render() {
    const { opened } = this.state;
    const { children } = this.props;
    const baseClassnames = classnames('iron-collapse', { 'iron-collapse-opened': opened });

    return (
      <div
        className={baseClassnames}
        ref={this.base}
        aria-hidden={!opened}
        aria-expanded={opened}
      >
        {children}
        <style>
          {`
          .iron-collapse {
            display: block;
            -webkit-transition-duration: 300ms;
            -moz-transition-duration: 300ms;
            transition-duration: 300ms;
            overflow: visible;
          }
          .iron-collapse:not(.iron-collapse-opened) {
            overflow: hidden;
          }
        `}
        </style>
      </div>
    );
  }
}


IronCollapse.defaultProps = {
  horizontal: false,
  onChange: null,
  noAnimation: false,
  opened: false,
  children: null
};

IronCollapse.propTypes = {
  onChange: PropTypes.func,
  horizontal: PropTypes.bool,
  noAnimation: PropTypes.bool,
  opened: PropTypes.bool,
  children: PropTypes.node
};

export default IronCollapse;