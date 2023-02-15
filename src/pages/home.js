import React from 'react'
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react'

function home({signOut, user}) {
    return (
        <div>
        This is my react app
        <div>
            <Heading level={1}>Hello {user.attributes.email}</Heading>
            <Button onClick={signOut}>Sign out</Button>
            <h2>Amplify Todos</h2>
            <ul>
            <li>fuck me</li>
            </ul>
        </div>
        </div>
    )
}

export default home