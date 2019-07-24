import React from 'react';

const Authentication = (Component1) => (Component2) =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        isLoggedIn: false
      }
    }

    componentDidMount() {
      if (localStorage.getItem('fbase_key')) {
        this.setState({
          isLoggedIn: true
        })
      } else {
        this.setState({
          isLoggedIn: false
        })
      }
    }

    render() {
      if (!this.state.isLoggedIn) {
        return <Component1 />
      } else {
        return <Component2 />
      }
    }
  }

export default Authentication;