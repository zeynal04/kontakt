import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { RiMastercardFill } from "react-icons/ri";
import "../Footer/footer.css"

const Footer = () => {
  return (
    <footer className='w-100 px-10 py-5 bg-white flex flex-col'>
      <div className="footerTop flex">
        <div className="footerLinks w-4/5 h-64 flex justify-between gap-8 font-montserrat">
            <ul className='footerItem flex flex-col gap-3'>
                <h4 className='font-bold'>Əlaqə</h4>
                <li><a href="#">*6060</a></li>
                <li><a href="#">Biz xəritədə</a></li>
                <li><a href="#" className='flex text-5xl'><RiVisaLine/>< RiMastercardFill/></a></li>
            </ul>
            <ul className='footerItem flex flex-col gap-3'>
                <h4 className='font-bold'>Kontakt</h4>
                <li><a href="#">Şirkət haqqında</a></li>
                <li><a href="#">Karyera</a></li>
                <li><a href="#">"Qarabağ" proqramı</a></li>
                <li><a href="#">Kontakt TV</a></li>                
            </ul>
            <ul className='footerItem flex flex-col gap-4'>
                <h4 className='font-bold'>Məlumat</h4>
                <li><a href="#">Konfidensiallıq siyasəti</a></li>
                <li><a href="#">Qiymət siyasəti</a></li>
                <li><a href="#">Şikayətlərin idarəolunması siyasəti</a></li>
                <li><a href="#">Saytın istifadə şərtləri</a></li>
                <li><a href="#">Ən yaxşı qiymətə zəmanət!</a></li>
                <li><a href="#">Korporativ satışlar</a></li>                
            </ul>
            <ul className='footerItem flex flex-col gap-3'>
                <h4 className='font-bold'>Müştərilər üçün</h4>
                <li><a href="#">Çatdırılma və ödəmə</a></li>
                <li><a href="#">Hissə-hissə ödəniş şərtləri</a></li>
                <li><a href="#">Geri qaytarma siyasəti</a></li>
                <li><a href="#">Zəmanətlər</a></li>
                <li><a href="#">Naxçıvana çatdırılma</a></li>
                <li><a href="#">Aylıq ödənişlərin həyata keçirilməsi</a></li>
                
            </ul>
        </div>
        <ul className="footerSocials flex flex-col gap-2">
            <h4 className='font-bold'>Bizimlə qalın</h4>
            <ul className='flex gap-4'>
                    <li><a href="#"><FaFacebook/></a></li>
                    <li><a href="#"><FaInstagramSquare/></a></li>
                    <li><a href="#"><FaYoutube/></a></li>
                    <li><a href="#"><FaTelegram/></a></li>
                    <li><a href="#"><FaWhatsappSquare/></a></li>
                    <li><a href="#"><FaTiktok/></a></li>
            </ul>
        </ul>
      </div>
      <div className="footerSubscribe flex justify-center pt-4">
        <h4>© Kontakt Home 2024</h4>
      </div>
    </footer>
  )
}

export default Footer
