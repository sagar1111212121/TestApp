import React from 'react';
import {  Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactEachItem = (props) => {

    return (

        <Col className="outerTileCLass">
            <div className="innerTileCLasCon">
                {props.details}
                <div className="viewAllClass">
                    View All
                            </div>
            </div>
        </Col>


    );
}

export default ContactEachItem;