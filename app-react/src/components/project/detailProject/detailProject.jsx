import React, { Component } from 'react';

class DetailProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Ray Charles',
      category: 'ray.charles@ironhack.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum, enim ac mollis ultrices, purus dolor bibendum turpis, eget fringilla risus nisi non libero. Pellentesque habitant morbi tristique senectus et.',
      dateLimit: '23/12/2018',
      filePath: '#'
    };
  }

  render() {
    const { name, category, description, dateLimit, filePath } = this.state;
    return (
    );
  }
}

export default DetailProject;
