import Image from "next/image";
import car1 from "../assets/car_image/car1.png"
import car2 from "../assets/car_image/car2.png"
import car3 from "../assets/car_image/car3.png"
import car4 from "../assets/car_image/car4.png"
import car5 from "../assets/car_image/car5.png"
import car6 from "../assets/car_image/car6.png"
import car7 from "../assets/car_image/car7.png"
import car8 from "../assets/car_image/car8.png"
import car9 from "../assets/car_image/car9.png"
import car10 from "../assets/car_image/car10.png"
import Layout from "@/components/layout";
import Head from "next/head";


const ImageProcess = () => {
    return (
        <div className="container pt-10 mx-auto">
            <Head>
                <title>3D Model - Image Processing</title>
            </Head>
            <h2 className="text-3xl font-bold text-center mb-10">3D Model Processing</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-5 justify-items-center gap-5">
                <div className="border border-slate-200 shadow-xl rounded-md">
                    <Image className="p-5"
                        src={car1}
                        width={500}
                        height={500}
                        alt="car"
                    />
                </div>
                <div className="border border-slate-200 shadow-xl rounded-md">
                    <Image className="p-5"
                        src={car2}
                        width={500}
                        height={500}
                        alt="car"
                    />
                </div>
                <div className="border border-slate-200 shadow-xl rounded-md">
                    <Image className="p-5"
                        src={car3}
                        width={500}
                        height={500}
                        alt="car"
                    />
                </div>
                <div className="border border-slate-200 shadow-xl rounded-md">
                    <Image className="p-5"
                        src={car4}
                        width={500}
                        height={500}
                        alt="car"
                    />
                </div>
                <div className="border border-slate-200 shadow-xl rounded-md">
                    <Image className="p-5"
                        src={car5}
                        width={500}
                        height={500}
                        alt="car"
                    />
                </div>
                <div className="border border-slate-200 shadow-xl rounded-md">
                    <Image className="p-5"
                        src={car6}
                        width={500}
                        height={500}
                        alt="car"
                    />
                </div>
                <div className="border border-slate-200 shadow-xl rounded-md">
                    <Image className="p-5"
                        src={car7}
                        width={500}
                        height={500}
                        alt="car"
                    />
                </div>
                <div className="border border-slate-200 shadow-xl rounded-md">
                    <Image className="p-5"
                        src={car8}
                        width={500}
                        height={500}
                        alt="car"
                    />
                </div>
                <div className="border border-slate-200 shadow-xl rounded-md">
                    <Image className="p-5"
                        src={car9}
                        width={500}
                        height={500}
                        alt="car"
                    />
                </div>
                <div className="border border-slate-200 shadow-xl rounded-md">
                    <Image className="p-5"
                        src={car10}
                        width={500}
                        height={500}
                        alt="car"
                    />
                </div>
            </div>

            <div className="flex justify-center my-12">
                <button className="bg-cyan-500 text-white text-xl font-bold rounded-md px-4 py-2">Processing</button>
            </div>

            <div className="w-full flex justify-center mb-40">
                <div className="border border-slate-200 h-[450px]  w-[700px] shadow-xl rounded-md">

                    <Image className="p-5"
                        src={car9}
                        width={600}
                        height={600}
                        alt="car"
                    />
                </div>
            </div>

        </div>
    );
};

export default ImageProcess;


ImageProcess.getLayout = function getLayout(page) {
    return (
        <Layout>{page}</Layout>
    )
}


