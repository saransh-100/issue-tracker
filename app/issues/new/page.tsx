'use client'
import React from 'react'
import { Button, TextArea, TextField } from '@radix-ui/themes'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root placeholder="Title" />
      <TextArea placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage
