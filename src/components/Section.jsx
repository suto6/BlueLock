
import nagi from '../assets/models/nagi.png'

const Section = () => {
    return (
        <>
            <div className='flex justify-between mt-4 overscroll-none'>
                <div className='p-9 w-3/6 lg:pl-24 lg:text-pretty'>
                    <h1 className='text-6xl lg:text-9xl uppercase font-bold font-mono'>Best of Nagi Seishiro</h1>
                    <div className='text-3xl lg:text-6xl md:text-5xl text-gray-700 font-medium'>“If You Never Accept the Frustration of Losing, You’ll Never Grow.”</div>
                    <div className='flex gap-7 pt-9 lg:text-2xl'>
                        <button className="bg-blue-800 py-2 px-6 font-bold hover:bg-slate-800 rounded-xl">Watch Here</button>
                        <button className="hover:bg-blue-800 py-2 px-6 font-bold bg-slate-800 rounded-xl">Show more</button>
                    </div>
                </div>
                <div className='w-3/6 px-2 flex justify-center'>
                    <img className='shadow-slate-500 lg:h-5/6 lg:w-7/12 sm:max-w-5xl' src={nagi} alt="Nagi Seishiro" />
                </div>
            </div>
        </>
    )
}

export default Section