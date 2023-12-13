import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineContactSupport } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";
import { MdOutlineHome } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { IoArrowBack } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { GoDeviceCameraVideo } from "react-icons/go";
import { CiStreamOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { LiaShareSquare } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import { RiLink } from "react-icons/ri";

const OnlyFans = () => {
  const [openContent, setopenContent] = useState(false);
  const toggleVisibilityOn = () => {
    setopenContent(true);
    console.log("visibility toggled on");
  };
  const toggleVisibilityOff = () => {
    setopenContent(false);
    console.log("visibility toggled off");
  };

  return (
    <div className="onlyfans-page flex font-roboto text-[#8a96a3] text-[15px] w-screen">
      {/* icons column 1 */}
      <div className="w-1/3">
        <div className="flex flex-col mt-5">
          <div className="user-icon p-1 bg-[#F1F2F4] w-10 h-10 rounded-full flex justify-center items-center font-bold">
            <RiUserLine />
          </div>
          <div className="home-icon flex justify-center items-center my-3">
            <span className="text-[40px] mr-3">
              <MdOutlineHome />
            </span>
            <span className="font-[500] text-[19px] ">Home</span>
          </div>
          <div className="more-icon flex justify-center items-center">
            <span className="text-[40px] mr-3">
              <CiCircleMore />
            </span>
            <span className="font-[500] text-[19px]"> More</span>
          </div>
        </div>
      </div>

      {/* content column 2 */}
      <div className="relative w-3/5 border min-h-screen ">
        <div
          className="column-header bg-cover bg-center bg-no-repeat h-48"
          style={{
            backgroundImage: 'url("./src/assets/spiritualbimbo-header.jpg")',
          }}
        >
          {/* header text */}
          <div className="wrapper flex justify-around gap-0 text-white text-xl font-semibold">
            <div className="back-icon">
              <IoArrowBack />
            </div>
            <div className="model-header">
              <h2>Bimbo Mommy🤭💦 BREED me</h2>
              <p className="font-normal text-sm">
                <span className="pics-icon inline-block">
                  <MdOutlineInsertPhoto />
                </span>
                14.7k
                <span className="video-icon inline-block">
                  <GoDeviceCameraVideo />
                </span>
                1.0K
                <span className="streaming inline-block">
                  <CiStreamOn />
                </span>
                30
                <span className="love inline-block">
                  <CiHeart />
                </span>
                1.45M
                <span className="user inline-block">
                  <BiUser />
                </span>
                240.3K
              </p>
            </div>
            <div className="dots-icon">
              <IoMdMore />
            </div>
          </div>
        </div>
        {/* profile image */}
        <div className="absolute top-40 left-3 status-img w-32 h-32 rounded-full border-white border-2 ">
          <img
            src="./src/assets/spiritualbimbo.jpg"
            alt="status image"
            className="w-full h-full rounded-full object-cover"
          />
          <div className="online w-4 h-4 rounded-full bg-green-600 absolute bottom-2 right-4 border-2 border-white"></div>
        </div>

        {/* forward icon */}
        <div className="share-icon absolute right-2 top-60 font-bold border-2 rounded-full text-[35px] w-15 h-15 p-1 text-[#00aff0]">
          <LiaShareSquare />
        </div>

        <div className="mt-[120px]">
          <h2 className="font-[500] text-black text-lg">
            Bimbo Mommy🤭💦 BREED me
          </h2>
          <p>
            @indeedbella
            <span className=" w-1 h-1 rounded-full inline-block align-middle bg-[#8a96a3] mx-3"></span>
            Available now
          </p>

          <p className="text-[#00aff0] italic font-bold">
            MOMMY LOVES YOU <span className="text-black">...</span>
          </p>
          <div>
            {}

            {!openContent ? (
              <p
                className="text-[#00aff0] hover:underline cursor-pointer"
                onClick={toggleVisibilityOn}
              >
                {" "}
                more info
              </p>
            ) : (
              <>
                <p className="text-black">
                  ⚠️ THIS PAGE IS SUPER INTERACTIVE ⚠️ <br />
                  <span className="text-[#00aff0]">
                    Voted hottest sexting 2020-2022
                  </span>
                  <br />
                  <span>
                    I’m kinda weird. We can be weird together? 🧐
                  </span>
                  <br />
                  <span>
                    I really love being a part time Mommy, part time Fuck doll
                    for my online lovers, it’s kinda my fetish 😅 It’s nice to
                    have a place to express my sexuality and help others feel
                    good 🥰
                  </span>
                  <br />
                  <span>
                    I also share casual photos bc I am a multi faceted being of
                    all shorts and it’s fun to show you lots of looks, hope you
                    enjoy 🥺
                  </span>
                  <br />
                  Anyways… <br />
                  I have ALOT of content. I’m definitely praised most for my
                  INSANE💦 squirting/🔥 Joi’s 😌JS…. <br />
                  <span className="text-[#00aff0]">
                    Check profile tabs for videos!!
                  </span>
                  <br />
                  I LOVE to SEXT weekly live streams ,play games, sell panties,
                  chat in DMs ( I ONLY reply here) 🐱 clones and more!! <br />
                  P.s. I can be dominant or submissive so choose your adventure
                  😈
                  <br />
                  ✨Let’s have some fun baby ✨ <br />
                  Xoxo Isabella James aka spiritual bimbo <br />
                  <span className="text-[#8a96a3]">
                    <CiLocationOn className="inline" /> In the astrals ✨{" "}
                  </span>
                  <br />
                  <span className="text-[#8a96a3] cursor-pointer">
                    <RiLink className="inline " /> https://www.ineedbella.com/
                  </span>
                </p>
                <p className="text-[#00aff0] cursor-pointer"  onClick={toggleVisibilityOff}>
                  Collapse info
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* subscription column 3 */}
      <div className="subscription-column mt-5 ml-5 w-1/3">
        <div className="subscription-box border p-5 mb-5">
          {/* subscription column */}
          <h2 className="font-bold mb-4">SUBSCRIPTION</h2>
          <NavLink
            to="/subscription-page"
            className="bg-[#00AFF0] text-white px-5 py-2 rounded-xl text-[14px]"
          >
            SUBSCRIBE <span className="ml-[150px]">FOR FREE</span>
          </NavLink>
        </div>
        <hr />
        <div className="flex justify-around items-center text-[13px] mt-[16px] py-[14px]">
          <div className="privacy">Privacy</div>
          <div className="dot w-1 h-1 rounded-full mx-3 bg-[#8a96a3]"></div>
          <div className="cookie">Cookie Notice</div>
          <div className="dot w-1 h-1 rounded-full mx-3 bg-[#8a96a3]"></div>
          <div className="terms">Terms of Service</div>
        </div>
        <div className="absolute right-0 bg-[#00AFF0] p-2 text-white text-[30px] rounded">
          <MdOutlineContactSupport />
        </div>
      </div>
    </div>
  );
};

export default OnlyFans;
