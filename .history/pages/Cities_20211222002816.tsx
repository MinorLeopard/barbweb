import Image from 'next/image'
const Cities = () => {
    return (
        <>
        <div className='grid-cols-2 '>
            <div className="grid">
            <Image
              src={require('../images/ggn.gif')}
              height={700}
              width={1000}
            />
            </div>
        </div>
        </>
    )
}

export default Cities
