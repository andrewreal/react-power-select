import { Component } from 'react';
import Select from '../Select';
import SearchInput from './SearchInput';

export default class PowerSelect extends Component {
  render() {
    let { searchEnabled, beforeOptionsComponent, ...rest } = this.props;

    if (!searchEnabled && beforeOptionsComponent === SearchInput) {
      beforeOptionsComponent = null;
    }

    return <Select beforeOptionsComponent={beforeOptionsComponent} {...rest} />;
  }
}

PowerSelect.defaultProps = {
  searchEnabled: true,
  beforeOptionsComponent: SearchInput,
};
