// Images
import LogoImg from '../Images/logo.svg';

// Icons
import ProfileIcon from '../Images/Icons/profile.svg';
import ArrowBottomIcon from '../Images/Icons/arrow-bottom.svg';
import CallIcon from '../Images/Icons/call-calling.svg';

const Header = () => {
  return (
    <header className='py-3'>
      {/* Header Flex Container */}
      <div className='container flex items-center justify-between px-6 mx-auto'>
        {/* Logo Container */}
        <a href='/' className='block w-32'>
          <img className='w-full' src={LogoImg} alt='Afthr Logo' />
        </a>

        {/* Menu Flex Container */}
        <div className='flex items-center justify-between space-x-12'>
          <a
            className='block px-8 py-4 font-semibold transition rounded-2xl text-stone-500 hover:bg-stone-100 '
            href='/'
          >
            Bookings
          </a>
          <a
            className='block px-8 py-4 font-semibold transition rounded-2xl text-stone-500 hover:bg-stone-100 '
            href='/'
          >
            Calendar
          </a>
          {/* Active State */}
          <a
            className='block px-8 py-4 font-semibold transition rounded-2xl bg-secondary text-primary'
            href='/'
          >
            Settings
          </a>
        </div>

        {/* User Access/Calls Container */}
        <div className='flex items-center space-x-3'>
          {/* User Access Container */}
          <div className='flex px-3 py-4 cursor-pointer bg-lightGray rounded-2xl text-stone-900'>
            <img src={ProfileIcon} className='w-5' alt='Profile Icon' />
            {/* User name */}
            <span className='ml-1 font-semibold'>The Gardens</span>

            {/* Arrow */}
            <img
              src={ArrowBottomIcon}
              className='w-5 ml-7'
              alt='arrow bottom icon'
            />
          </div>

          {/* Call Btn */}
          <button className='flex items-center justify-center px-4 py-4 bg-lightGray cursor rounded-2xl w-'>
            <img src={CallIcon} className='w-5' alt='Call Icon' />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
