import React from 'react'
import Input from './Input'
import Button from './Button'

const From = () => {
  return <div >
    <Input id="email" label="Email" required />
    <Input id="password" type="password"label="Password"/>
  <Button />

    </div>
}

export default From;