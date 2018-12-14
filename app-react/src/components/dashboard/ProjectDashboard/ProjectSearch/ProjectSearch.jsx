import _ from "lodash";
import React, { Component } from "react";
import {
  Search,
  GridColumn
} from "semantic-ui-react";
import ProjectSearchOption from "../ProjectSearchOptions/ProjectSearchOptions";
import axios from "axios";

export default class ProjectSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: "title"
    };
    this.source = "";
  }
  componentDidMount() {
    this.getProjects();
  }

  componentWillMount() {
    this.resetComponent();
  }

  getProjects = () => {
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
    this.setState({ isLoading: false, results: [], value: "" });

  handleSearchOption = (e, { option }) => this.setState({ option });

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result[this.state.option] });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result[this.state.option]);
      console.log(this.source);
      this.setState({
        isLoading: false,
        results: _.filter(this.source, isMatch)
      });
    }, 300);
  };

  render() {
    const { isLoading, value, option } = this.state;
    console.log(option);
    return (
        <GridColumn width={10}>
          <Search
            size="large"
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            value={value}
            showNoResults={false}
            {...this.props}
          />
          <ProjectSearchOption
            changed={this.handleSearchOption}
            checked={option}
          />
        </GridColumn>
    );
  }
}
