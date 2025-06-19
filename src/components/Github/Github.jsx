    import React, { useContext } from 'react';
    import { motion } from 'framer-motion';
    import GitHubCalendar from 'react-github-calendar';
    import { ThemeContext } from '../../context/ThemeContext';
    import Section from '../UI/Section';

    const Github = () => {
        const { theme } = useContext(ThemeContext);

        return (
            <Section id="github" title="GitHub Contributions">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className={`flex flex-col items-center gap-10 p-10 rounded-xl shadow-2xl ${
                        theme === 'dark'
                            ? 'bg-gray-800 text-gray-300'
                            : 'bg-white text-gray-900'
                    }`}
                >
                    <div className="w-full flex justify-center">
                        <GitHubCalendar
                            username="xanderflux"
                            colorScheme={theme === 'dark' ? 'dark' : 'light'}
                            hideColorLegend
                            labels={{
                                totalCount: '{{count}} contributions in the last year',
                            }}
                        />
                    </div>
                    {/* Additional GitHub stats/images can be added here */}
                </motion.div>
            </Section>
        );
    };

    export default Github;
