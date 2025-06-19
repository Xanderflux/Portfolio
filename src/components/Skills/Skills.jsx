import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import Section from '../UI/Section';
import skillsData from '../../data/skills.json';
import { FaCode, FaDatabase, FaTools, FaLayerGroup, FaUsers, FaChartBar, FaPlug } from 'react-icons/fa';

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const getSkillIcon = (category) => {
    switch (category) {
      case 'programming_languages':
        return <FaCode size={24} className="text-blue-500" />;
      case 'frameworks_libraries':
        return <FaLayerGroup size={24} className="text-green-500" />;
      case 'databases':
        return <FaDatabase size={24} className="text-purple-500" />;
      case 'tools_platforms':
        return <FaTools size={24} className="text-orange-500" />;
      case 'soft_skills':
        return <FaUsers size={24} className="text-red-500" />;
      case 'data_analysis':
        return <FaChartBar size={24} className="text-teal-500" />;
      case 'apis_integrations':
        return <FaPlug size={24} className="text-yellow-500" />;
      default:
        return <FaCode size={24} className="text-blue-500" />;
    }
  };

  const getCategoryTitle = (category) => {
    switch (category) {
      case 'programming_languages':
        return 'Programming Languages';
      case 'frameworks_libraries':
        return 'Frameworks & Libraries';
      case 'databases':
        return 'Databases';
      case 'tools_platforms':
        return 'Tools & Platforms';
      case 'soft_skills':
        return 'Soft Skills';
      case 'data_analysis':
        return 'Data Analysis';
      case 'apis_integrations':
        return 'APIs & Integrations';
      default:
        return category;
    }
  };

  const renderProgressBar = (level) => {
    let percentage;
    switch (level) {
      case 'Expert':
        percentage = '90%';
        break;
      case 'Advanced':
        percentage = '75%';
        break;
      case 'Intermediate':
        percentage = '60%';
        break;
      default:
        percentage = '40%';
    }

    return (
      <div className={`w-full h-2 bg-gray-200 ${theme === 'dark' ? 'bg-opacity-20' : ''} rounded-full`}>
        <motion.div 
          className={`h-full rounded-full ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'}`}
          initial={{ width: 0 }}
          whileInView={{ width: percentage }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    );
  };

  // Filter out the soft skills which have a different structure
  const technicalCategories = Object.keys(skillsData).filter(cat => cat !== 'soft_skills');
  const softSkills = skillsData.soft_skills || [];

  return (
    <Section id="skills" title="Skills & Expertise">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Technical Skills */}
        {technicalCategories.map(category => (
          <motion.div
            key={category}
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-3">
              {getSkillIcon(category)}
              <h3 className={`text-xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {getCategoryTitle(category)}
              </h3>
            </div>

            <div className="space-y-4">
              {skillsData[category].map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between">
                    <span className={`font-medium ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {skill.name}
                    </span>
                    <span className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {skill.level} • {skill.years} {skill.years === 1 ? 'year' : 'years'}
                    </span>
                  </div>
                  {renderProgressBar(skill.level)}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
        
        {/* Soft Skills */}
        <motion.div
          className="md:col-span-2"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-3 mb-6">
            <FaUsers size={24} className="text-red-500" />
            <h3 className={`text-xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Soft Skills
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <motion.div 
                key={index}
                className={`px-4 py-2 rounded-full ${
                  theme === 'dark' 
                    ? 'bg-gray-800 text-gray-200 border border-gray-700' 
                    : 'bg-gray-100 text-gray-800 border border-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Skills;