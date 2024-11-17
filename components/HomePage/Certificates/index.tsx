import Image from 'next/image'
import React from 'react'

const images = [
    {id: 1, path: '/certificates/1.jpeg',  iconBackground: 'border-pink-400',},
    {id: 2, path: '/certificates/2.jpeg',iconBackground: 'border-green-400',},
    {id: 3, path: '/certificates/3.jpeg', iconBackground: 'border-purple-400',},
    {id: 4, path: '/certificates/4.jpeg', iconBackground: 'border-blue-400',},

]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

export default function Certificates() {
  return (
    <div className='my-32'><h1 className='text-5xl sm:text-6xl text-center'>Certificates</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-8 gap-4 my-8'>
        {images.map(i => <Image className={classNames(i.iconBackground, "rounded-2xl border-8")} key={i.id} alt={i.path} height={1046} width={748} src={i.path}/>)}
    </div>
    </div>
  )
}