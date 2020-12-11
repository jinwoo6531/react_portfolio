import React from 'react';
import { motion } from 'framer-motion';
import max from '../images/profile.png';
import pin from '../images/pin.svg';
import github from '../images/github.svg';

const SideBar = () => {
  let sidebarVariants = {
    initial: {
      x: '-10vw',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.3, duration: 0.5, type: 'spring' },
    },
  };
  const handleSentEmail = () => window.open('mailto:jintakk6531@gmail.com');

  return (
    <motion.div
      className="sideBar_custom"
      variants={sidebarVariants}
      initial="initial"
      animate="visible"
    >
      <img src={max} alt="avatar" className="rounded-circle image_custom" />
      <h3 className="name">박진우</h3>
      <div className="title bg-gray side_item">FrontEnd Developer</div>

      {/* 이력서 다운로드 */}
      {/* <a href={resume} download="resume.pdf">
                <div className="cv side_item"><img src={tie} alt="resume" className='icon_small' /> download resume</div>
            </a> */}

      {/* SNS */}
      {/* <figure className='social_icons'>
                <a href="https://www.facebook.com/profile.php?id=100015327075818"><img src={facebook} alt="facebook" className='icon_small social_icon' /></a>
                <a href="https://www.instagram.com/_sumax__/"><img src={instagram} alt="instagram" className='icon_small social_icon' /></a>
            </figure> */}

      <div className="contact">
        <div className="location side_item">
          <img src={pin} alt="pin" className="icon_small  mr-1" /> 서울시 노원구
        </div>
        <a
          href="https://github.com/jinwoo6531/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="github side_item">
            <img
              src={github}
              alt="git"
              className="icon_small social_icon mr-1"
            />
            github
          </div>
        </a>
        <div className="email_id side_item"> jintakk6531@gmail.com </div>
        <div className="phone side_item"> 010-3952-6531 </div>
      </div>

      <div className="email side_item mt-6" onClick={handleSentEmail}>
        {' '}
        Email
      </div>
      {/* <div className="mode"><button className='btn' onClick={changeMode}>mode</button></div> */}
    </motion.div>
  );
};

export default SideBar;
