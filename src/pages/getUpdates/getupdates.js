import React from "react";

const GetUpdates = () => {
    return (
        <div id="getupdates">
            <div className="container mx-auto">
                <div className="py-20 mb-10 px-2">
                    <h2 className="text-4xl text-center font-extrabold mb-6">Get Updates</h2>
                    <p className="font-semibold text-center text-base">Sign up for our mailing list and we will let you know when we </p>
                    <p className="font-semibold text-center text-base mb-6">release new features or updates.</p>
                    <div class=" mb-3 p-2 w-80 shadow bg-white absolute left-[50%] rounded-3xl border-gray-800 border-1" style={{ transform: 'translateX(-50%)' }}>
                        <input
                            type="text"
                            className="border-none pl-2 focus:outline-none text-base font-semibold w-48"

                            placeholder="Enter your mail" />
                        <button className="rounded-3xl text-white py-1 font-semibold px-4 text-base bg-[#003333]">Subscribe</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetUpdates;