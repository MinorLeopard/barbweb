import Image from 'next/image'
const Cities = () => {
    return (
        <>
        <div className='grid-cols-2 '>

            <Image
              src={require('../images/Gurgaon(3).mp4')}
              height={700}
              width={1000}
            />
            </div>
        </>
    )
}

export default Cities
