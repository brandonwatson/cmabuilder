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
import { CMA, Property, PropertyCMAs } from '../models/index'

//TEST DATA INIT
import INIT_DATA from '../dynamo/amplify_init_data'

async function CreateNewCma(cma)
{
    await DataStore.save(
        new CMA ({
            })
        )
}

async function InitData(allProperties, user)
{
    //This is sample data what will be removed
    const listingProperty = new Property (allProperties.slice(0,1)[0])
    let compProperties = []

    for (let allPropCount=0; allPropCount < allProperties.slice(1).length; allPropCount++)
    {
        compProperties.push(new Property (allProperties.slice(1)[allPropCount]))
    }

    // const targets = listingProperty.map(property => [property.pk, property.sk])
    // const comparables = compProperties.map(property => [property.pk, property.sk])

    console.log("listingProperty:", listingProperty)
    try
    {
        await DataStore.save(listingProperty)
        console.log("inserted listing property: ", listingProperty)
    }
    catch (error)
    {
        console.log("error writing listing property: ", error)
    }


    console.log("commpProperties: ", compProperties)
    for (let compPropCount=0; compPropCount < compProperties.length; compPropCount++)
    {
        try {
            await DataStore.save(compProperties[compPropCount])
            console.log("Success inserting propert");
        } catch (error) {
            console.log("Error saving property", error);
        }
    }

    const cma = new CMA (
        {
            pk: user.attributes.email,
            sk: new Date().toISOString(),
            cma_label: listingProperty["pk"].slice(0, listingProperty["pk"].length-1),
            property: listingProperty
        }
    )
    
    console.log("CMA: ", cma)
    try {
        await DataStore.save(cma)
        // console.log(cma.comparables)
        console.log("success inserting CMA")
    } catch (error) {
        console.log("error inserting CMA", error)
    }

    const propertyCma = new PropertyCMAs({
            property: [compProperties],
            cma: cma
    })

    console.log("propertyCma: ", propertyCma)
    try {
        await DataStore.save(propertyCma)
        // console.log(cma.comparables)
        console.log("success inserting PropertyCMAs")
    } catch (error) {
        console.log("error inserting PropertyCMAs", error)
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