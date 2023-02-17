import React from 'react'
import { useState, useEffect } from 'react'

//will replace this with material UI
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react'

function Home({signOut, user}) {
    //I will need to use react query but for now just use fetch against the API
    const [cmaList, setCmaList] = useState()

    
    return (
    <div>
        <div>
            <Heading level={3}>Hello {user.attributes.email}</Heading>
            <Button onClick={signOut}>Sign out</Button>
            <h2>Amplify Todos</h2>
            <ul>
                <li><b>Create New CMA functionality</b>: new template, list of existing CMAs owned by an account, delete an existing CMA</li>
            </ul>
        </div>
        <div>
            <h2>Created CMAs</h2>
        </div>
    </div>
    )
}

export default Home