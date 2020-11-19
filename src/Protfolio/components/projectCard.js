import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Popup from 'reactjs-popup';
import ImageGallery from 'react-image-gallery';

const ProjectCard = ({ image, name, url }) => {
//   const images = [
//     {
//       original: 'https://picsum.photos/id/1018/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1015/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1019/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
//   ];

  const projectCardVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.7,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: 'easeInOut',
      },
    },
  };

  return (
    //     <Popup trigger={<button> Trigger</button>} position="right center">
    //     <div>Popup content here !!</div>
    //   </Popup>

    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="col-sm-12 col-md-6 col-lg-4 mt-2"
        variants={projectCardVariants}
        initial="initial"
        animate="visible"
        exit="exit"
      >
        <figure className="project_wrapper">
          {/* <a href={url}>
            <img src={image} alt="project_image" className="project_image" />
          </a> */}

          <Popup
            trigger={
              <img src={image} alt="project_image" className="project_image" />
            }
            modal
            contentStyle={{
              width: '770px',
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '1%',
              border: '2px solid #848484',
            }}
            closeOnDocumentClick={true}
            triggerOn="click"
          >
            {/* <ImageGallery items={images} /> */}
            <div className="project_name mt-2">{name}</div>
            <div>asdasd</div>
            <div>asdasd</div>
          </Popup>
        </figure>
      </motion.div>
    </AnimatePresence>
  );
};
export default ProjectCard;
