import Container from '@/app/components/Container'
import Image from 'next/image'
import React from 'react'

const video = () => {
  return (
    <>
    <section>
        <Container>
            <div className="relative">
              <Image className='mx-auto' src="/images/playimage.png" alt='' width={1373} height={727}/>
              <Image className='absolute bottom-0 right-17' src="/images/design.png" alt='' width={324} height={260}/>

            </div>
            
        </Container>
    </section>
    </>
  )
}

export default video