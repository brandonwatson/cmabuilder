import './App.css'
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Search from './pages/search'
import About from './pages/about'
import NoMatch from './pages/nomatch'
import NavBar from './components/NavBar'

import '@aws-amplify/ui-react/styles.css'

function App({signOut, user}) {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home  user={user} signOut={signOut}/>} />
        <Route path="/search" element={<Search user={user} signOut={signOut}/>} />
        <Route path="/about" element={<About user={user} signOut={signOut}/>} />
        <Route path="*" element={<NoMatch user={user} signOut={signOut}/>} />  {/*TODO: Implement*/}
      </Routes>
    </>
    )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default withAuthenticator(App)
