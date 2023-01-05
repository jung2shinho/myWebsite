import React from 'react'
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"

export const MenuData = 
   [
      {
         title: 'About',
         path: 'About',
         icon: <AiIcons.AiOutlineBook />,
      },
      {
         title: 'Projects',
         path: 'Projects',
         icon: <AiIcons.AiOutlineProject />,
      },
      {
         title: 'Resume',
         path: '/Resume',
         icon: <AiIcons.AiOutlineProfile />,
      },
      {
         title: 'LinkedIn',
         path: 'https://linkedin.com/in/jungshinho',
         icon: <AiIcons.AiOutlineLinkedin />,
         target: '_blank',
      },
      {
         title: 'ML/AI',
         path: '/ML',
         icon: <AiIcons.AiOutlineRobot/>,
      },
      {
         title: 'Github',
         path: 'https://github.com/jshinhoxp',
         icon: <AiIcons.AiOutlineGithub />,
         target: '_blank',
      },
      {
         title: 'Support',
         path: '/Contact',
         icon: <FaIcons.FaHandsHelping />,
      },
   ]