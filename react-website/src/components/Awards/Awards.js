import React from 'react';
import { Row } from 'react-bootstrap';
import AwardsItems from './AwardsItems';

class Awards extends React.Component {

    render() {
        return (
        <div responsive="true" style={{backgroundColor: "#f8fafc", maxWidth: "100%", minWidth: "100%"}}>    

                <AwardsItems/>


        </div>
        );
    }
}
export default Awards;
