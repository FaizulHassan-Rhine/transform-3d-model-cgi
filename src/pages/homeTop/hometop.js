// import '';
import Image from 'next/image'
import car from '../../assets/images/car.gif'
const HomeTopPart = () => {


    return (
        <div id="homeTopPart" className="flex items-center pt-0 xl:min-h-screen  md:pt-5 pb-16 md:pb-24 2xl:pb-0 2xl:pt-0">
            <div className="container mx-auto relative">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-3 items-center relative z-10">
                    <div className="flex justify-center">
                        <div className="topImgWrap relative w-full lg:w-[600px] xl:w-[550px] flex justify-center px-5 md:px-0">
                            <Image
                                src={car}
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />

                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:items-end xl:items-center">
                        <div className="w-full lg:w-[400px] flex flex-col gap-3 md:gap-9">
                            <div className="flex flex-col">
                                <h2 className=" font-extrabold w-full text-3xl lg:text-5xl text-center lg:text-left text-[#333333]">Create 3D Model</h2>
                                <p className="text-cyan-500  text-lg pt-1 md:pt-4 text-center lg:text-left font-bold">Completely Free and Automatic</p>
                            </div>
                            <div>
                                <div className="mx-auto flex flex-col justify-center lg:mx-0 w-[300px] sm:w-[350px] self-center lg:self-start py-[40px] px-[40px] shadow-xl rounded-3xl">

                                    <div>
                                        <input
                                            id='upload'
                                            type="file"
                                            className="hidden"
                                            accept="image/*"
                                            multiple
                                        />

                                        <button onClick={() => document.getElementById('upload').click()} className="bg-cyan-600 w-full hover:bg-green-500 transition-all py-[14px] px-[20px] text-white font-extrabold rounded-[48px] text-xl">Upload Images</button>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTopPart;