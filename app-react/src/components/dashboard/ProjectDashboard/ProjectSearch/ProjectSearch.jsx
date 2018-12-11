import _ from 'lodash';
import React, { Component } from 'react';
import { Search, Grid, GridColumn } from 'semantic-ui-react';
import ProjectSearchOption from '../ProjectSearchOption/ProjectSearchOption';


export default class ProjectSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: 'title',
      projects: this.props.source
    };
  }
  
  componentWillMount() {
    this.resetComponent();
    console.log('[App.js] Method componentWillMount()')
  }

  resetComponent = () => {
    this.setState({ isLoading: false, results: [], value: '' });
  }

  handleSearchOption = (e, { option }) => this.setState({ option });

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
    const { isLoading, value, results, option } = this.state;
    return (
      <Grid>
        <GridColumn width={10}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            value={value}
            results={results}
            {...this.props}
          />
          <ProjectSearchOption
            changed={this.handleSearchOption}
            checked={option}
          />
        </GridColumn>
        {/* <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: 'auto' }}>{JSON.stringify(this.state, null, 2)}</pre>
            <Header>Options</Header>
            <pre style={{ overflowX: 'auto' }}>{JSON.stringify(this.source, null, 2)}</pre>
          </Segment>
        </Grid.Column> */}
      </Grid>
    );
  }
}
