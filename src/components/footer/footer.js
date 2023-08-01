import React from "react";
import { FaInstagram, FaYoutube, FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div>
                <div id="footer" className="">
                    <footer className="footer container  pt-24 pb-10 mx-auto lg:justify-items-center justify-items-center  text-[#003333] gap-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                        <div className="text-left flex flex-col justify-center">

                            <p className="w-40 p-1 border-b-2 border-white text-sm mb-4">
                                All-in-one photo editor for easy editing and better design.
                            </p>
                            <div className="flex text-[#003333] justify-center gap-3 mb-2">
                                <a className="link cursor-pointer hover:text-blue-600 transition duration-300  link-hover">
                                    <FaFacebookSquare />
                                </a>
                                <a className="link cursor-pointer hover:text-red-500 transition duration-300 link-hover">
                                    <FaYoutube />
                                </a>
                                <a className="link cursor-pointer hover:text-blue-600 transition duration-300 link-hover">
                                    <FaLinkedin />
                                </a>
                                <a className="link cursor-pointer hover:text-blue-400 transition duration-300 link-hover">
                                    <FaTwitter />
                                </a>
                                <a className="link cursor-pointer hover:text-pink-500 transition duration-300 link-hover">
                                    <FaInstagram />
                                </a>
                            </div>

                            <button className="bg-white px-8 py-2 flex justify-center items-center gap-2 rounded-3xl text-xs">Language <i class="fa-solid pb-1 fa-sort-down"></i></button>
                        </div>

                        <div className="flex flex-col lg:items-start md:-ml-16 md:items-start text-start gap-1">
                            <span className="text-lg font-semibold text-[#003333]  ">Company</span>
                            <a className="link link-hover text-sm">Blog</a>
                            <a className="link link-hover text-sm">Affiliate Program</a>
                            <a className="link link-hover text-sm">Create automatic </a>
                            <a className="link link-hover text-sm">Video Background </a>
                            <a className="link link-hover text-sm">Careers</a>
                            <a className="link link-hover text-sm">About us</a>
                            <a className="link link-hover text-sm">Press</a>

                        </div>
                        <div className="flex lg:items-start  md:items-start flex-col md:-ml-16 text-start  gap-1  lg:-ml-0">
                            <span className="text-lg font-semibold text-[#003333]">Learn more</span>
                            <a className="link link-hover text-sm">Magic Brush</a>
                            <a className="link link-hover text-sm">Individuals</a>
                            <a className="link link-hover text-sm">Photographers</a>
                            <a className="link link-hover text-sm">Marketing</a>
                            <a className="link link-hover text-sm">Developers</a>
                            <a className="link link-hover text-sm">Ecommerce</a>
                        </div>
                        <div className="flex  lg:items-start md:items-start md:-ml-16 flex-col text-left gap-1  lg:-ml-0">
                            <span className="text-lg font-semibold text-[#003333]">Support</span>
                            <a className="link link-hover text-sm">Help & FAQs</a>
                            <a className="link link-hover text-sm">Refunds</a>
                            <a className="link link-hover text-sm">Platform Status</a>
                            <a className="link link-hover text-sm">Privacy Policy</a>
                            <a className="link link-hover text-sm">Terms & Conditions</a>
                            <a className="link link-hover text-sm">Contact us</a>
                            <a className="link link-hover text-sm">Sign up</a>
                        </div>


                    </footer>


                </div>
            </div>
        </>
    )
}

export default Footer;