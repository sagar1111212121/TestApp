import React from 'react';
import '../Team/Team.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col } from 'reactstrap';

const Team = (props) =>{
    
    return (
        <div className="mainOuterContactTeam">
            <div className="TeamFunCss">
                Team Page            
            </div>
            <div className="belowTilesTeam">
                <Row xs="1">
                    <Col>
                        <div className="sectionHeader">
                            Patients Insights
                        </div>
                    </Col>
                </Row>
                <Row xs="3">
                <Col className="outerTileCLass">
                        <img alt="" className="teamImg" src="https://pfizer.sharepoint.com/sites/MedicalNavigator-Stg/SiteAssets/Images/1.PNG"></img>
                    </Col>
                    <Col className="outerTileCLass">
                         <img alt="" className="teamImg" src="https://pfizer.sharepoint.com/sites/MedicalNavigator-Stg/SiteAssets/Images/2.PNG"></img>
                    </Col>
                    <Col className="outerTileCLass">
                         <img alt="" className="teamImg" src="https://pfizer.sharepoint.com/sites/MedicalNavigator-Stg/SiteAssets/Images/3.PNG"></img>
                    </Col>
                   
                </Row>
                <Row xs="1">
                    <Col>
                        <div className="sectionHeaderFronSec">
                            Health Literacy & Activation
                        </div>
                    </Col>
                </Row>
                <Row xs="3">
                <Col className="outerTileCLass">
                        <img alt="" className="teamImg" src="https://pfizer.sharepoint.com/sites/MedicalNavigator-Stg/SiteAssets/Images/11.PNG"></img>
                    </Col>
                    <Col className="outerTileCLass">
                         <img alt="" className="teamImg" src="https://pfizer.sharepoint.com/sites/MedicalNavigator-Stg/SiteAssets/Images/22.PNG"></img>
                    </Col>
                    <Col className="outerTileCLass">
                         <img alt="" className="teamImg" src="https://pfizer.sharepoint.com/sites/MedicalNavigator-Stg/SiteAssets/Images/33.PNG"></img>
                    </Col>
                   
                </Row>
            </div>
        </div>
    );           
}


export default Team;