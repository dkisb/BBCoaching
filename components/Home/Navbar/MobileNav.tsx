import React from 'react'
import { NavLinks } from '../../../constant/constants'
import { Link as ScrollLink } from "react-scroll"
import { CgClose } from 'react-icons/cg'


type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {

  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[100%]';


  return (
    <div>
      <div className={`fixed inset-0 ${navOpen} transform transition-all duration-500 z-[100002] bg-black opacity-70
      w-full h-screen`}>
        {/* navlinks */}
        <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-800 bg-opacity-0 space-y-6 z-[100005] right-0`}>
          {NavLinks.map((link) => (
            <ScrollLink
              to={link.url.replace('#', '')}
              key={link.id}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={closeNav}
              className='cursor-pointer'
            >
              <p className='text-white w-fit text-xl ml-12 border-b-[1.5px] border-white sm:text-[30px]'>{link.lable}</p>
            </ScrollLink>
          ))}
          {/* cross icon */}
          <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6' />
        </div>
      </div>
    </div>
  )
}

export default MobileNav