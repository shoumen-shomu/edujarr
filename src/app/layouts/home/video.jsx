import Container from '@/app/components/Container'
import Image from 'next/image'
import React from 'react'

const video = () => {
  return (
    <>
    <section>
        <Container>
            <Image className='mx-auto' src="/images/playimage.png" alt='' width={1373} height={727}/>
        </Container>
    </section>
    </>
  )
}

export default video