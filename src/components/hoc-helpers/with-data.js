import React, { Component } from 'react';
import Spiner from '../spiner/spiner';

const withData = (View) => {
  return class Hoc extends Component {
   
    state = {
      data: null
    }
  
    componentDidMount() {
     
      this.props.getData()
        .then((data) => {
          this.setState({
            data
          })
        });
    }
    render() {
      const { data } = this.state;
     
      if (!data) {
        return <Spiner />
      }
      return <View {...this.props} data={data} />;
    }
  };
}

export default withData;