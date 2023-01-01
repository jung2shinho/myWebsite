import React from 'react'
import * as AiIcons from "react-icons/ai"

export const SidebarData = 
   [
      {
         title: 'About',
         path: '/About',
         icon: <AiIcons.AiOutlineBook />,
         cName: 'nav-text'
      },
      {
         title: 'Projects',
         path: '/Projects',
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
         cName: 'nav-text'
      },
      {
         title: 'Github',
         path: 'https://github.com/jshinhoxp',
         icon: <AiIcons.AiOutlineGithub />,
         cName: 'nav-text'
      },
      {
         title: 'Contact',
         path: '/Contact',
         icon: <AiIcons.AiOutlineContacts />,
         cName: 'nav-text'
      }
   ]