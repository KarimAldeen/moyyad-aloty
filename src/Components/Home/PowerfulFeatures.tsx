import React from 'react';
import Visibale from '../../HOC/withVisibale';
import { useTranslation } from 'react-i18next';
import { FaReact, FaGithub, FaFigma, FaSearchengin, FaSass, FaLaravel } from 'react-icons/fa';
import { SiTypescript, SiSolidity, SiDesignernews, SiNextdotjs } from 'react-icons/si';

const PowerfulFeatures = () => {
  const { t } = useTranslation();

  const skillsData = [
    { title: 'skills_1', icon: <FaReact /> },
    { title: 'skills_2', icon: <SiTypescript /> },
    { title: 'skills_3', icon: <FaSass /> },
    { title: 'skills_4', icon: <SiSolidity /> },
    { title: 'skills_5', icon: <FaGithub /> },
    { title: 'skills_6', icon: <FaSearchengin /> },
    { title: 'skills_7', icon: <FaLaravel /> },
    { title: 'skills_8', icon: <SiNextdotjs /> },
  ];

  return (
    <div className="PowerfulFeatures" id='features'>
      <div className="in">
        <h1>{t('powerfulFeatures.title')}</h1>
        <Visibale className='Features'>
          {skillsData?.map((item: any, index: number) => (
            <div className="Feature" key={index}>
              {item?.icon}
              <h1>{t(`powerfulFeatures.skills.${item?.title.toLowerCase()}`)}</h1>
            </div>
          ))}
        </Visibale>
      </div>
    </div>
  );
};

export default PowerfulFeatures;
