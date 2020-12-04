import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Popup from 'reactjs-popup';

const ProjectCard = ({
  image,
  name,
  disc1,
  disc2,
  disc3,
  disc4,
  disc5,
  disc6,
  intro,
  url,
  deploy,
}) => {
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
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="col-sm-12 col-md-6 col-lg-4 mt-2"
        variants={projectCardVariants}
        initial="initial"
        animate="visible"
        exit="exit"
      >
        <figure className="project_wrapper">
          {/* Popup설정 */}
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
            <h4>소개</h4>
            <p>{intro}</p>
            <h4>사용기술</h4>
            <ul>
              {disc1 && <li>{disc1}</li>}
              {disc2 && <li>{disc2}</li>}
              {disc3 && <li>{disc3}</li>}
              {disc4 && <li>{disc4}</li>}
              {disc5 && <li>{disc5}</li>}
              {disc6 && <li>{disc6}</li>}
            </ul>

            <h4>Github</h4>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
            <br />
            <br />

            {deploy && (
              <>
                <h4>배포</h4>
                <a href={deploy} target="_blank" rel="noopener noreferrer">
                  {deploy}
                </a>
              </>
            )}
          </Popup>
        </figure>
      </motion.div>
    </AnimatePresence>
  );
};
export default ProjectCard;
