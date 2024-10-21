import React from "react";
import kontakImg from "../../img/kontakt24Ay.png";
import logo from "../../img/logo.svg";
import facebook from "../../img/facebook.svg"
import google from "../../img/google.svg"
import { CiGrid41 } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GiScales } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import  "./header.css"
import Odenis from "../odenis/Odenis";
import Language from "../lang/Language"
const Header = () => {
  return (
   <>
    <header>
      <div className="headerUp">
        <img src={kontakImg} alt="" />
      </div>
      <div className="headerMiddle w-full flex justify-between items-center bg-white px-7 py-5 border-b-2">
        <div className="logo w-[26%]">
          <img className="" src={logo} alt="" />
        </div>
        <ul className="navigation hidden lg:flex gap-6 font-montserrat text-base font-bold">
          <li>
            <a className="text-red-500" href="#">
              Kampaniya
            </a>
          </li>
          <li>
            <a href="#">Mağazalar</a>
          </li>
          <li>
            <a href="#">Korporativ satışlar</a>
          </li>
        </ul>
        <ul className="profInfo flex items-center font-montserrat text-base">
          <a className="px-2 font-bold text-lg" href="tel:6060">
            <span className="text-red-800">*</span>6060
          </a>
          <div className="profInfoBtns mx-6 gap-2 hidden md:flex">
            <button className="payMouth border border-green-500 rounded-md p-1 text-green-500"><Odenis/></button>
            <button className="login font-semibold">Daxil ol</button>
          </div>
          <Language/>
          <ul className="USER flex px-2 md:hidden">
             <li className=" text-xl"><a href="#"><FaRegUser/></a></li>
          </ul>
        </ul>
      </div>

      <div className="headerBottom w-full flex justify-between px-7 py-4 bg-white">
        <div className="kataloq flex items-center">
          <i className="text-2xl"><CiGrid41 /></i>
          <span className="mx-2 text-xl">Kataloq</span>
        </div>
        <form className="formClass w-[800px] flex items-center p-1 rounded-md text-base border-0" action="#">         
            <span className="text-xl"><CiSearch /></span>
            <input className="w-100 mx-2" type="text" placeholder="Axtaris..." />
         
        </form>
        <div className="cartHistory flex items-center gap-5 text-2xl">
            <span className="hidden md:flex p-2"><GiScales /></span>
            <span className="hidden md:flex border-x-2 p-2"><CiHeart /></span>
            <span className="p-2"><FiShoppingCart /></span>
            
        </div>
      </div>
    </header>
    {/* <div className="modal h-auto flex justify-end absolute">  
        <div className="sign flex flex-col gap-1 p-6 font-montserrat relative">
            <a className="flex justify-end" href="#"><b>X</b></a>
            <h2 className="font-bold mt-4 mb-3 text-3xl">Xoş gördük! 👋</h2>
            <p className="text-sm text-gray-500">Üstünlüklərindən faydalanmaq üçün daxil olun!</p>
            <button className="fb flex justify-center gap-1"><img src={facebook} alt="" />Facebook</button>
            <button className="goog flex justify-center gap-1"><img src={google} alt="" />Google</button>
            <p className="other">və ya</p>
            <form className="w-100" action="#">
                <div className="email flex items-center my-4 "><small><i className="mx-1 text-red-500">*</i>Elektron poçt</small><input className="p-1" type="text"/></div>
                <div className="pass my-4 flex items-center justify-between "><small><i className="mx-1 text-red-500">*</i>Şifrə</small><input className="p-1" type="password"/>
                <button className="hidePass"><FaRegEyeSlash/></button>
                </div>
                <div className="save flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <input type="checkbox" id="check" /> 
                        <label htmlFor="check">Yadda saxla</label>
                    </div>
                    <small>Şifrənizi unutmusunuz?</small>
                </div>
                <button className="submit bg-red-500 rounded-md text-white my-4 p-2" type="submit">Daxil ol</button>
            </form>
        </div>
    </div> */}
   </>
  );
};

export default Header;
