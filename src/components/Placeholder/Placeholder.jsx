import React from 'react'
import Skeleton from '@mui/material/Skeleton';

export default function Placeholder() {
  return (
    <>
        {Array.from(new Array(4)).map((item, index) => (
            <div key={index} >
                <Skeleton variant="rectangular" width={250} height={118} />
                <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
            </div>
        ))}
    </>
  )
}
