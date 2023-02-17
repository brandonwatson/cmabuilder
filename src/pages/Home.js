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

function Home({signOut, user}) {
    //I will need to use react query but for now just use fetch against the API
    const [cmaList, setCmaList] = useState()

    
    return (
    <Container>
        <div>
            <Typography variant='h4'>Hello, {user.attributes.email}  - Welcome to CMA Builder</Typography>
        </div>
        <div>
            <Button
                variant='contained'
                onClick = {() => console.log("new CMA button click")}>Create New CMA</Button>
        </div>
        <div>
            <Typography variant='h4'>Created CMAs</Typography>
        </div>
    </Container>
    )
}

export default Home