import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import theme_pattern from "../../assets/theme.svg";
import './mywork.css';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

export const MyWork = ({ setShowProjects }) => {
  const { t } = useTranslation();
  const [selectedWork, setSelectedWork] = useState(null);

  const openModal = (work) => {
    setSelectedWork(work);
  };

  const closeModal = () => {
    setSelectedWork(null);
  };

  return (
    <div className='mywork' id='work'>
      <div className='mywork-title'>
        <h1>{t('mywork.title')}</h1>
        <img src={theme_pattern} alt='theme' />
      </div>

      <div className='mywork-container'>
        {mywork_data.map((work) => (
          <div
            key={work.w_no}
            className="mywork-item"
            onClick={() => openModal(work)}
          >
            <img src={work.w_img} alt='work' />
          </div>
        ))}
      </div>

      <button
        className="mywork-showmore"
        onClick={() => {
          setShowProjects(true);
          setTimeout(() => {
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }}
      >
        <p>{t("mywork.showmore")}</p>
        <img src={arrow_icon} alt="arrow" />
      </button>

      {/* MODAL */}
      {selectedWork && (
        <div className="work-modal" onClick={closeModal}>
          <div className="work-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <img src={selectedWork.w_img} alt={selectedWork.w_name} className="modal-img" />

            {/* Overlay description showing on hover */}
            <div className="modal-overlay">
              <h2>{selectedWork.w_title}</h2>
              <p>{selectedWork.w_desc}</p>
              {selectedWork.w_link && (
                <a href={selectedWork.w_link} target="_blank" rel="noreferrer">
                  Visit Project
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
