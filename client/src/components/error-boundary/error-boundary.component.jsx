import React from 'react';

import { ErrorImageContainer, ErrorImageText, ErrorImageOverlay} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    constructor() {
        super();

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        // process the error
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png'/>
                    <ErrorImageText>Sorry, the server is down or the internet has failed</ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children;
    }

}

export default ErrorBoundary;