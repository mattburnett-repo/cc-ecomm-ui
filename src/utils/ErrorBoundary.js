import React from 'react'

export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state to trigger fallback UI
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
        // Log error or send logging data to log management tool
        //   logErrorToMyService(error, errorInfo);
        console.log('ErrorBoundary ', errorInfo)
    }
  
    render() {
      if (this.state.hasError) {
        // Render fallback UI
        return <h1>There was an error. Sorry about that; we're working on it.</h1>;
      }
  
      return this.props.children; 
    }
  }

