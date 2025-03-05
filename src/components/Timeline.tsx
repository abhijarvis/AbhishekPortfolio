// import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Building } from 'lucide-react';

const experiences = [
  {
    title: "Software Engineer",
    company: "Agnik International Pvt Ltd.",
    period: "Oct'2024 - Nov'2024",
    description: "Led the frontend development of multiple high-impact projects using React and TypeScript."
  },
  {
    title: "Web Developer Intern",
    company: "Agnik International Pvt Ltd.",
    period: "Mar'2024 - Sept'2024",
    description: "Developed responsive web applications and improved performance metrics by 40%."
  },
  {
    title: "Web Developer Intern",
    company: "BasketHunt Pvt Ltd.",
    period: "Nov'2023 - Jan'2023",
    description: "Collaborated on various web projects and learned modern frontend technologies."
  }
];


export const Timeline = () => {
  const gradientVariants = {
    initial: { borderImageSource: 'linear-gradient(90deg, #6ee7b7, #9333ea)' },
    animate: {
      borderImageSource: [
        'linear-gradient(90deg, #6ee7b7, #9333ea)',
        'linear-gradient(90deg, #9333ea, #6ee7b7)',
        'linear-gradient(90deg, #6ee7b7, #9333ea)',
      ],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16 text-gray-900 dark:text-white"
        >
          My Professional Journey
        </motion.h2>
        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              // initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex items-center gap-12 mb-16 flex-col ${
                index % 2 === 0 ? 'lg:flex-row md:flex-row' : 'lg:flex-row-reverse md:flex-row-reverse'
              }`}
            >
              <motion.div
                className="flex flex-col justify-between p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-4 relative group h-full"
                variants={gradientVariants}
                initial="initial"
                animate="animate"
                style={{
                  backgroundClip: 'padding-box',
                  borderImage: 'linear-gradient(90deg, #6ee7b7, #9333ea) 1',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-20 rounded-lg blur-xl transition-all"></div>
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="text-purple-600 dark:text-purple-400" size={24} />
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
                  <Building className="text-purple-600 dark:text-purple-400" size={20} />
                  <span className="text-lg">{exp.company}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                  <Calendar size={18} />
                  <span>{exp.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </motion.div>
              <div className="w-6 h-6 hidden lg:block md:block bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 rounded-full relative">
                <div className="absolute w-1 h-32 bg-gradient-to-b from-purple-200 to-pink-200 dark:from-purple-700 dark:to-pink-700 left-1/2 -translate-x-1/2"></div>
              </div>
              <div className="flex-1"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


// export const Timeline = () => {
//   const gradientVariants = {
//     initial: { borderImageSource: 'linear-gradient(90deg, #6ee7b7, #9333ea)' },
//     animate: {
//       borderImageSource: [
//         'linear-gradient(90deg, #6ee7b7, #9333ea)',
//         'linear-gradient(90deg, #9333ea, #6ee7b7)',
//         'linear-gradient(90deg, #6ee7b7, #9333ea)',
//       ],
//       transition: {
//         duration: 5,
//         repeat: Infinity,
//         repeatType: 'loop',
//       },
//     },
//   };

//   return (
//     <section
//       id="experience"
//       className="py-20 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800"
//     >
//       <div className="container mx-auto px-6">
//         <motion.h2
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-4xl font-extrabold text-center mb-16 text-gray-900 dark:text-white"
//         >
//           My Professional Journey
//         </motion.h2>
//         <div className="flex flex-col lg:flex-row gap-12">
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ x: -100, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="flex flex-col lg:flex-row items-center gap-6"
//             >
//               <motion.div
//                 className="flex-1 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-4 relative group"
//                 variants={gradientVariants}
//                 initial="initial"
//                 animate="animate"
//                 style={{
//                   backgroundClip: 'padding-box',
//                   borderImage: 'linear-gradient(90deg, #6ee7b7, #9333ea) 1',
//                 }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-20 rounded-lg blur-xl transition-all"></div>
//                 <div className="flex items-center gap-2 mb-4">
//                   <Briefcase className="text-purple-600 dark:text-purple-400" size={24} />
//                   <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
//                     {exp.title}
//                   </h3>
//                 </div>
//                 <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
//                   <Building className="text-purple-600 dark:text-purple-400" size={20} />
//                   <span className="text-lg">{exp.company}</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
//                   <Calendar size={18} />
//                   <span>{exp.period}</span>
//                 </div>
//                 <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };



