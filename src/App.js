import Logo from './Images/logo.svg';
import ProfileIcon from './Images/Icons/profile.svg';
import ArrowBottomIcon from './Images/Icons/arrow-bottom.svg';
import CallIcon from './Images/Icons/call-calling.svg';

function App() {
  return (
    <div className='w-full min-h-screen overflow-hidden'>
      {/* Header */}
      <header className='py-3'>
        {/* Header Flex Container */}
        <div className='container flex justify-between items-center mx-auto px-6'>
          {/* Logo Container */}
          <a href='/' div className='w-32 block'>
            <img className='w-full' src={Logo} alt='Afthr Logo' />
          </a>

          {/* Menu Flex Container */}
          <div className='flex items-center justify-between space-x-12'>
            <a
              className='block px-8 py-4 rounded-2xl text-stone-500 hover:bg-stone-100 transition font-semibold '
              href='/'
            >
              Bookings
            </a>
            <a
              className='block px-8 py-4 rounded-2xl text-stone-500 hover:bg-stone-100 transition font-semibold '
              href='/'
            >
              Calendar
            </a>
            {/* Active State */}
            <a
              className='block px-8 py-4 rounded-2xl transition font-semibold bg-secondary text-primary'
              href='/'
            >
              Settings
            </a>
          </div>

          {/* User Access/Calls Container */}
          <div className='flex items-center space-x-3'>
            {/* User Access Container */}
            <div className='cursor-pointer bg-lightGray rounded-2xl px-3 py-4 text-stone-900 flex'>
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
            <button className='bg-lightGray cursor py-4 px-4 flex items-center justify-center rounded-2xl w-'>
              <img src={CallIcon} className='w-5' alt='Call Icon' />
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className='bg-lightGray py-7'>
        {/* Navigation Flex Container */}
        <div className='container mx-auto px-6 flex justify-around text-darkGray font-semibold'>
          {/* Item */}
          <a href='/' className='hover:text-primary duration-200'>
            Basic Details
          </a>
          <a href='/' className='hover:text-primary duration-200'>
            Contact Details
          </a>
          <a href='/' className='hover:text-primary duration-200'>
            Social Profile
          </a>
          {/* Active */}
          <a href='/' className='text-primary duration-200'>
            Menu Items
          </a>
          <a href='/' className='hover:text-primary duration-200'>
            Calendar Setting
          </a>
          <a href='/' className='hover:text-primary duration-200'>
            Invoice
          </a>
        </div>
      </nav>
    </div>
  );
}

export default App;
