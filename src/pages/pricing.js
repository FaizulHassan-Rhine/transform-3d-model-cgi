
const Pricing = () => {
    return (
        <div id='price' className='mx-auto container h-full pt-8 md:pt-20 pb-20'>
            <div>
                <h2 className='font-extrabold text-center text-4xl md:text-4xl text-black pb-3 md:pb-16'>Pricing</h2>
            </div>
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center xl:mx-16`}>

                <div className=''>

                    <div className='h-[320px] w-[270px] lg:w-[240px] xl:w-[270px] rounded-md mb-2 border bg-white border-stone-200 shadow-xl  '>
                        <h2 className='text-left ml-3 mt-3  pt-1 text-[#003333]  text-lg font-bold'>Standard</h2>
                        <h2 className='text-left ml-3 pt-1 text-[#003333] mb-12 h-12 text-sm font-semibold'></h2>
                        <h2 className='text-left ml-3 mb-8 pt-1 text-[#003333]  text-4xl font-bold'>$10<span className='text-base'>/Model</span></h2>
                        <p className='text-start text-sm lg:text-xs xl:text-sm ml-2 mt-1 px-2'></p>

                    </div>
                </div>
                <div className=''>

                    <div className='h-[320px] w-[270px] lg:w-[240px] xl:w-[270px]  mb-2 border bg-white border-stone-200 shadow-xl rounded-md '>

                        <h2 className='text-left ml-3 mt-3  pt-1 text-[#003333]  text-lg font-bold'>Premium</h2>
                        <h2 className='text-left ml-3 pt-1 text-[#003333] mb-12 h-12 text-sm font-semibold'></h2>
                        <h2 className='text-left ml-3 mb-8 pt-1 text-[#003333]  text-4xl font-bold'>$15<span className='text-base'>/Model</span></h2>

                        <p className='text-start text-sm lg:text-xs xl:text-sm ml-2 mt-1 px-2'></p>

                    </div>
                </div>
                <div className=''>

                    <div className='h-[320px] w-[270px] lg:w-[240px] xl:w-[270px]  mb-2 border bg-white border-stone-200 shadow-xl rounded-md  '>


                        <h2 className='text-left ml-3 mt-3  pt-1 text-[#003333]  text-lg font-bold'>Enterprice</h2>
                        <h2 className='text-left ml-3 pt-1 text-[#003333] mb-12 h-12 text-sm font-semibold'></h2>
                        <h2 className='text-left ml-3 mb-8 pt-1 text-[#003333]  text-4xl font-bold'>$25<span className='text-base'>/Model</span></h2>

                        <p className='text-start text-sm lg:text-xs xl:text-sm ml-2 mt-1 px-2'></p>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default Pricing


