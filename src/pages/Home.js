import React from 'react'
import { useState, useEffect } from 'react'

//will replace the ux items with material UI
//import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react'

//material UI imports
import { Typography } from '@mui/material'
import { Container } from '@mui/material'
import { Button } from '@mui/material'

//amplify imports
import { DataStore } from 'aws-amplify'
import { CMA, Property } from '../models/index'

//TEST DATA INIT
import INIT_DATA from '../dynamo/amplify_init_data'

async function CreateNewCma(cma)
{
    await DataStore.save(
        new CMA ({
            pk: cma.pk,
            sk: cma.sk
            })
        )
}

async function InitData(allProperties, user)
{
    //This is sample data what will be removed
    const listingProperty = allProperties.slice(0,1)
    const compProperties = allProperties.slice(1)

    const targets = listingProperty.map(property => [property.pk, property.sk])
    const comparables = compProperties.map(property => [property.pk, property.sk])
    // console.log(targets[0])
    // console.log(comparables)

    const cma = {
        pk: 'CMA',
        sk: user.attributes.email + '#' + new Date(),
        cma_label: allProperties[0]["sk"],
        client_name: "Jenkins",
        properties: targets[0],
        comparables: comparables
    }

    // console.log(cma)
    //create the objects here and then write to datastore
    // for (let i=0; i < allProperties.length; i++)
    // {
    //     //console.log("inserting", allProperties[i].sk)
    //     try {
    //         await DataStore.save(
    //             new Property ({
    //                 "pk": allProperties[i].pk,
    //                 "sk": allProperties[i].sk,
    //                 "above_grade": allProperties[i].above_grade,
    //                 "finished_basement_sqft": allProperties[i].finished_basement_sqft,
    //                 "list_price": allProperties[i].list_price,
    //                 "main_sqft": allProperties[i].main_sqft,
    //                 "num_baths": allProperties[i].num_baths,
    //                 "num_beds": allProperties[i].num_beds,
    //                 "sale_price": allProperties[i].sale_price,
    //                 "total_sqft": allProperties[i].total_sqft,
    //                 "unfinished_basement_sqft": allProperties[i].unfinised_basement_sqft,
    //                 "upper_sqft": allProperties[i].upper_sqft,
    //                 "UUID": allProperties[i].uuid}
    //             )
    //         )
    //         console.log("Success inserting propert");
    //     } catch (error) {
    //         console.log("Error saving property", error);
    //     }
    // }
    // }

    try {
        await DataStore.save(
            new CMA ({
                "pk": cma.pk,
                "sk": cma.sk,
                "cma_label": cma.cma_label,
                "client_name": cma.client_name,
                "properties": cma.properties,
                "comparables": cma.comparables
            })
        )
        // console.log(cma.comparables)
        console.log("success inserting CMA")
    } catch (error) {
        console.log("error inserting CMA", error)
    }
}

function Home({signOut, user}) {
    //I will need to use react query but for now just use fetch against the API
    const [cmaList, setCmaList] = useState()

    function initDataHandler()
    {
        InitData(INIT_DATA["properties"], user)
    }

    function newCmaClickHandler()
    {
        console.log(`New CMA button clicked`)
    }
    
    return (
    <Container>
        <div>
            <Typography variant='h4'>Hello, {user.attributes.email}  - Welcome to CMA Builder</Typography>
        </div>
        <div>
            <Button
                variant='contained'
                onClick = {initDataHandler}>Initialize
            </Button>
            <Button
                variant='contained'
                onClick = {newCmaClickHandler}>Create New CMA
            </Button>
        </div>
        <div>
            <Typography variant='h4'>Created CMAs</Typography>
        </div>
    </Container>
    )
}

export default Home