import React from 'react';

import { SpinnerContainer, SpinnerOverlay} from './spinner.styles';


//this component is used to show a loading spinner
const Spinner = () => (
    <SpinnerOverlay>
        <SpinnerContainer/>
    </SpinnerOverlay>
);

export default Spinner;