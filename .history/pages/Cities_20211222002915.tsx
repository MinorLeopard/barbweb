import Image from 'next/image'
const Cities = () => {
    return (
        <>
        <div className='grid-cols-2 '>

            <Image
              src={require('../images/ggn.mp4')}
              height={700}
              width={1000}
            />
            </div>
        </div>
        </>
    )
}

export default Cities
