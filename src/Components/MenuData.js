import React from 'react'
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"

export const MenuData = 
   [
      {
         title: 'About',
         path: 'About',
         icon: <AiIcons.AiOutlineBook />,
         cName: 'nav-text'
      },
      {
         title: 'Projects',
         path: 'Projects',
         icon: <AiIcons.AiOutlineProject />,
         cName: 'nav-text'
      },
      {
         title: 'Resume',
         path: '/Resume',
         icon: <AiIcons.AiOutlineProfile />,
         cName: 'nav-text'
      },
      {
         title: 'LinkedIn',
         path: 'https://linkedin.com/in/jungshinho',
         icon: <AiIcons.AiOutlineLinkedin />,
         target: '_blank',
         cName: 'nav-text'
      },
      {
         title: 'ML/AI',
         path: '/ML',
         icon: <AiIcons.AiOutlineRobot/>,
         cName: 'nav-text'
      },
      {
         title: 'Github',
         path: 'https://github.com/jshinhoxp',
         icon: <AiIcons.AiOutlineGithub />,
         target: '_blank',
         cName: 'nav-text'
      },
      {
         title: 'Support',
         path: '/Contact',
         icon: <FaIcons.FaHandsHelping />,
         cName: 'nav-text'
      },
   ]