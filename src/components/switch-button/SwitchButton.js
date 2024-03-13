import React, { Component } from 'react';
import './styles.css'
class SwitchButton extends Component {
  handleToggle = () => {
    const { isChecked, onChange } = this.props;
    onChange && onChange(!isChecked);
  };

  render() {
    const { isChecked } = this.props;

    return (
      <label className={`switch ${isChecked ? 'checked' : ''}`}>
        <input type="checkbox" checked={isChecked} onChange={this.handleToggle} />
        <span className="slider"></span>
      </label>
    );
  }
}

export default SwitchButton;
