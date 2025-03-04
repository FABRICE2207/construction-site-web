import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'

const About = () => {
  return (
    <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col
    justify-between items-start gap-[50px]' id="about">
       {/* Partie gauche */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'
      >
        <motion.h1
          variants={slideUpVariants}
          className='text-yellow-500 text-2xl'
        >
          WELCOME TO
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className='text-white uppercase text-[40px] font-bold'
        >
           Prime Construction
        </motion.h1>
        <div className='w-[120px] h-[6px] bg-yellow-500'></div>

        <p className='text-3xl italic text-gray-50 mt-[60px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam animi id repellendus facilis, 
          inventore dolorem possimus beatae illo adipisci praesentium!
        </p>
      </motion.div>

      {/* Partie droite */}
      <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'
        >
          <p className='text-white text-lg text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Rem eius nemo veritatis molestiae expedita minus voluptas 
            suscipit possimus numquam qui commodi libero aliquam, quas, 
            veniam, nobis doloribus porro excepturi eum. Aliquam doloremque 
            totam harum ipsum fugit in odit quisquam atque blanditiis magnam 
            magni sequi repudiandae numquam reprehenderit et qui quaerat aperiam, 
            quod, beatae accusamus ut architecto modi voluptate? Et, molestiae 
            aperiam voluptate hic maxime provident facilis quaerat nihil nobis dolores 
            commodi deleniti aliquid a voluptatem eum alias impedit autem dolorum fuga 
            cupiditate quisquam ipsam! Ab, neque inventore sapiente veniam officia 
            laudantium nobis ea reprehenderit sequi unde, placeat consequuntur omnis libero?
          </p>
          <motion.button
            variants={zoomInVariants}
            className='bg-yellow-500 hover:bg-white hover:text-black px-10 py-3
              rounded-lg font-bold text-black
            '
          >
              READ MORE
          </motion.button>
      </motion.div>
    </div>
  )
}

export default About