'use client'


import { Divider } from '@nextui-org/react'
import MatButton from '../components/Matematica/MatButton'

import MatHero from '../components/Matematica/MatHero'
import MatFrac from '../components/Matematica/MatFrac'
import MatVideo1 from '../components/Matematica/MatVideo1'




function Matematica() {
  return (
    <>
        
        <MatHero />
        <MatFrac />
        <Divider className='max-w-5xl mx-auto'/>
        <MatVideo1 />
        <Divider className='max-w-5xl mx-auto'/>
        <MatButton />
        
    
    </>
    
  )
}

export default Matematica