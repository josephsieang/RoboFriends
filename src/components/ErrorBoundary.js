import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("error: " + error);
    console.log("info: " + info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooops. Error encountered</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
