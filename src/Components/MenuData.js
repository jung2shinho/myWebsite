import React from 'react'
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"

export const MenuData = 
   [
      {
         title: 'About',
         path: '/About',
         icon: <AiIcons.AiFillHome />,
      },
      {
         title: 'Projects',
         path: '/Projects',
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
         title: 'Github',
         path: 'https://github.com/jung2shinho',
         icon: <AiIcons.AiOutlineGithub />,
         target: '_blank',
      },
      {   
         title: 'Donate',
         path: 'https://donate.stripe.com/test_dR629L0rp67S8es8ww',
         icon: <AiIcons.AiOutlineDollar />,
         target: '_blank'
      }
   ]