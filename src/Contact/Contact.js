import "@pnp/polyfill-ie11";
import React, { useState, useEffect } from 'react';
import '../Contact/Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'reactstrap';
import ContactEachItem from './ContactEachItem/ContactEachItem';
import { sp } from "@pnp/sp/presets/all"


const Contact = (props) => {

    const [productDataArr, setProductDataArr] = useState({
        allPoductDataArr: []
    });
    

    useEffect(() => {
        console.log(props);

        sp.setup({
            ie11: true,
            sp: {
                baseUrl: "https://pfizer.sharepoint.com/sites/Launchpad-stg/"
            }
        });
        
        sp.web.lists.getByTitle("ReactTilesTest").items.select("*").top(5000).get().then((items) => {

            console.log("SUCCESS.", items);

            let fianlDataArray = [];
            for (let i = 0; i < items.length; i++) {
                let item = items[i];
                fianlDataArray.push({ TileDesc: item.DetailDesc });
            }

            setProductDataArr({
                allPoductDataArr: fianlDataArray
            });
        })
            .catch(error => {
                console.log("ERROR.", error);
            });
    }, []);



    return (
        <div className="mainOuterContact">
            <div className="contactFunCss">
                Welcome you
            </div>
            <div className="belowTiles">
                <Row xs="4">
                    {productDataArr.allPoductDataArr.map((item,index) => (
                        <ContactEachItem details={item.TileDesc} key={index}></ContactEachItem>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Contact;