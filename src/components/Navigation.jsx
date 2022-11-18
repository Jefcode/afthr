const Navigation = () => {
  return (
    <nav className='bg-lightGray py-7'>
      {/* Navigation Flex Container */}
      <div className='container flex justify-around px-6 mx-auto font-semibold text-darkGray'>
        {/* Item */}
        <a href='/' className='duration-200 hover:text-primary'>
          Basic Details
        </a>
        <a href='/' className='duration-200 hover:text-primary'>
          Contact Details
        </a>
        <a href='/' className='duration-200 hover:text-primary'>
          Social Profile
        </a>
        {/* Active */}
        <a href='/' className='duration-200 text-primary'>
          Menu Items
        </a>
        <a href='/' className='duration-200 hover:text-primary'>
          Calendar Setting
        </a>
        <a href='/' className='duration-200 hover:text-primary'>
          Invoice
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
