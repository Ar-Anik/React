import React from "react";

const withLoading = (WrappedComponent) => {
  class WithLoading extends React.Component {
    state = {
      isLoading: true,
    };

    componentDidMount() {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 2000);
    }

    render() {
      return (
        <WrappedComponent {...this.props} loading={this.state.isLoading} />
      );
    }
  }

  return WithLoading;
};

export default withLoading;
