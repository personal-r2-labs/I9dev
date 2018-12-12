import _ from 'lodash';
import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';

export default class ProjectSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () => {
    this.setState({ isLoading: false, results: [], value: '' });
  }

  handleResultSelect = (e, { result }) => 
    this.setState({ value: result[this.state.option] });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result[this.state.option]);
      this.setState({
        isLoading: false,
        results: _.filter(this.props.source, isMatch)
      });
    }, 300);
  };
  
  render() {
    const { isLoading, value, results } = this.state;
    return <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            value={value}
            results={results}
            {...this.props}
          />
  }
}
