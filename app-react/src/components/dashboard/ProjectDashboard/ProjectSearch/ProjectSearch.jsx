import _ from 'lodash';
import React, { Component } from 'react';
import { Search, Grid, GridColumn } from 'semantic-ui-react';
import ProjectResult from '../ProjectResult/ProjectResult';
import axios from 'axios';

export default class SearchExampleStandard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.source = '';
  }
  componentDidMount() {
    this.getProjects();
  }

  componentWillMount() {
    this.resetComponent();
    // this.getProjects();
  }

  getProjects = () => {
    // const { params } = this.props.match;
    axios
      .get(`http://localhost:5000/api/projects`)
      .then(responseFromApi => {
        const theProfile = responseFromApi.data;
        this.source = theProfile;
      })
      .catch(err => {
        console.log(err);
      });
  };

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: '' });

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.category });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.category);
      console.log(this.source);
      this.setState({
        isLoading: false,
        results: _.filter(this.source, isMatch)
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;
    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            value={value}
            showNoResults={false}
            {...this.props}
          />
        </Grid.Column>
        <GridColumn width={2}>
          <ProjectResult projects={results} />
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
