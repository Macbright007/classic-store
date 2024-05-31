import React from 'react'
import { FooterContainer } from './layoutStyles'
import { RiFacebookCircleFill } from "react-icons/ri";
import { BiLogoPinterest, BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";



const Footer = () => {
  return (
    <FooterContainer>
      <div className="footContent genLayout">
          <div className="footerCard">
            <h1>your security</h1>
            <ul>
              <li>terms & conditions</li>
              <li>privacy & security</li>
              <li>cookie policy</li>
              <li>accessibility</li>
            </ul>
          </div>
          <div className="footerCard">
            <h1>who we are</h1>
            <ul>
              <li>our history</li>
              <li>our showrooms</li>
              <li>careers</li>
              <li>editorial</li>
              <li>corporate policies</li>
            </ul>
          </div>
          <div className="footerCard">
            <h1>services & repairs</h1>
            <ul>
              <li>at your service</li>
              <li>watch services</li>
              <li>jewellery services</li>
              <li>ring size guide</li>
              <li>gift wrapping</li>
            </ul>
          </div>
          <div className="footerCard">
            <h1>help & support</h1>
            <ul>
              <li>contact us</li>
              <li>delivery</li>
              <li>click & collect</li>
              <li>returns & refunds</li>
              <li>payment options</li>
              <li>payment security</li>
              <li>finance options</li>
            </ul>
          </div>
          <div className="footerCard">
            <h1>follow us on</h1>
            
            <div className="icons">
              <RiFacebookCircleFill className='socialIcon' />
              <BiLogoPinterest className='socialIcon' />
              <BiLogoInstagramAlt className='socialIcon' />
              <AiFillYoutube className='socialIcon' />
            </div>

            <h6>For the latest offers, news and VIP information</h6>
            <div className="footInput">
              <input type="email" placeholder='enter your mail' />
              <button>sign up</button>
            </div>
          </div>
      </div>
    </FooterContainer>
  )
}

export default Footer