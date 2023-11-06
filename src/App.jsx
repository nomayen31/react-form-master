import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StatefulForm from './StatefulForm/StatefulForm'
// import RefFrom from './Components/RefFrom/RefFrom'
// import HookForm from './HookForm/HookForm'
import ReusableFrom from './Components/ReusableFrom/ReusableFrom'

function App() {

  const handleSIgnUpSubmit = data => {
    console.log(data);
  }
  const handleUpdateSubmit = data => {
   console.log('update profile',data);
  }


  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookForm></HookForm> */}
      <ReusableFrom formTitle={'Profile update'} handleSubmit={handleSIgnUpSubmit}></ReusableFrom>
      <ReusableFrom formTitle={'sign in'} handleSubmit={handleUpdateSubmit} submitButtonText={'Update'}></ReusableFrom>
    </>
  )
}

export default App
