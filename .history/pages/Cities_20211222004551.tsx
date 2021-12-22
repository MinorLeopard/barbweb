import Image from 'next/image'
const Cities = () => {
    return (
        <>
        <div className='grid grid-cols-2 gap-4'>

            <Image className='float-right'
              src={require('../images/ggn.gif')}
              height={700}
              width={1000}
            />
            </div>
        </>
    )
}

export default Cities
