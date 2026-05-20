import Container from '@/app/components/Container'
import Image from 'next/image'
import React from 'react'

const video = () => {
  return (
    <>
    <section className='mb-33'>
        <Container>
            <div className="relative">
              <Image className='mx-auto' src="/images/playimage.png" alt='' width={1373} height={727}/>
              <Image className='absolute bottom-0 right-29.5' src="/images/design.png" alt='' width={324} height={260}/>
              <Image className='absolute top-1/2 left-1/2 -translate-1/2' src="/images/playbtn.png" alt='' width={218} height={218}/>

            </div>
            
        </Container>
    </section>
    </>
  )
}

export default video