import React, { PureComponent } from "react";
import PropTypes from "prop-types";

interface Props {
  onSubmit: any;
  onChange: any;
  value: string;
}

class Input extends PureComponent<Props> {
  static propTypes = {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    value: PropTypes.string
  };

  render() {
    const { onChange, onSubmit, value } = this.props;
    return (
      <div>
        <input onChange={onChange} value={value} />
        <button onClick={onSubmit}> Submit</button>
      </div>
    );
  }
}

export default Input;
