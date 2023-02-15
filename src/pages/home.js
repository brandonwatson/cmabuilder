import React from 'react'
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react'

function home({signOut, user}) {
    return (
    <div>
        <Heading level={3}>Hello {user.attributes.email}</Heading>
        <Button onClick={signOut}>Sign out</Button>
        <h2>Amplify Todos</h2>
        <ul>
            <li><b>Install Material UI in npm</b>: run the npm commands</li>
            <li><b>Create New CMA functionality</b>: new template, list of existing CMAs owned by an account, delete an existing CMA</li>
        </ul>
    </div>
    )
}

export default home