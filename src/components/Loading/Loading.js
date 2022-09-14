import React from 'react'
import { CircularProgress } from '@mui/material'
import { UseAuth } from '../Firebase'


function Loading() {
  const currentUser = UseAuth()

  return (
    <section className="bg-purple w-screen">
      <main className="flex items-center justify-center h-screen flex-col tracking-wider font-font">
        <section> <figure className='w-4 h-4 rounded-full bg-yellow relative right-32 top-18'></figure>
          <figure className='w-4 h-4 rounded-full bg-Pink relative left-10 bottom-14' ></figure>
          <figure className='w-4 h-4 rounded-full bg-green-400 relative right-48 top-32'></figure>
          <figure className='w-4 h-4 rounded-full bg-red-500 relative left-48 top-10'></figure>
        </section>

        <div className='bg-yellow w-40 h-40 rounded-full flex items-center flex-col justify-center align-middle'>
          <CircularProgress />
          <h1 className='text-primary text-sm font-thin mt-2'>Processing...</h1>
        </div>
        <section>
          <figure className='w-4 h-4 rounded-full bg-yellow relative right-20 top-20'></figure>
          <figure className='w-4 h-4 rounded-full bg-Pink relative left-32 top-18'></figure>
        </section>
        <p className='text-primary text-sm font-thin mt-2'>alert(`Currently logging in as ${currentUser?.email} `)</p>
      </main>
    </section>
  )

}

export default Loading