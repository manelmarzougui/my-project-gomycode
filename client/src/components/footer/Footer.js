import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className='footeer'>
      <div className='bloccc bijoux'>
        <h3>Nos Bijoux</h3>

        <Link to='/bagues' className='f-link'>
          <h6>Bagues</h6>
        </Link>
        <Link to='/colliers' className='f-link'>
          <h6>Colliers</h6>
        </Link>
        <Link to='/bracelets' className='f-link'>
          <h6>Bracelets</h6>
        </Link>
        <Link to='/boucle' className='f-link'>
          <h6>Boucle D'oreille</h6>
        </Link>
        <Link to='/mariage' className='f-link'>
          <h6>Mariage</h6>
        </Link>
        <Link to='/pierres' className='f-link'>
          <h6>Pierres</h6>
        </Link>
      </div>
      <div className='bloccc service'>
        <h3>Service Aprés Vente</h3>
        <h6>Retour ou échange</h6>
        <h6>Livraison</h6>
        <h6>Service Gravure</h6>
      </div>
      <div className='bloccc contact'>
        <h3>Nous contactes</h3>
        <h6>Sidi bolbeba,Gabes,Tunis</h6>
        <h6>Tel:+21658291512</h6>
        <h6>E-amil:manel.marzougui94@gmail.com</h6>
      </div>
      <div className=' bloccc suivez'>
        <h3 className='text'>Suivez-Nous</h3>
        <div className=' socio'>
          <a href='https://www.facebook.com/manel.marzougui.5/'>
            <BsFacebook className='icoons' />
          </a>

          <a href='https://www.instagram.com/manelmarzougui/'>
            <BsInstagram className='icoons' />
          </a>
         
          <SiTiktok className='icoons' />
        </div>
      </div>
    </div>
  )
};

export default Footer;
