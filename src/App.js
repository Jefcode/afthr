import { useState } from 'react';

// Data
import DISHES from './data/dishes';

// Images
import LogoImg from './Images/logo.svg';
import DishImg from './Images/dish.png';

// Icons
import ProfileIcon from './Images/Icons/profile.svg';
import ArrowBottomIcon from './Images/Icons/arrow-bottom.svg';
import CallIcon from './Images/Icons/call-calling.svg';
import MenuIcon from './Images/Icons/menu.svg';
import DeleteIcon from './Images/Icons/trash.svg';
import EditIcon from './Images/Icons/edit.svg';

function App() {
  const [dishes, setDishes] = useState(DISHES);

  return (
    <div className='w-full min-h-screen overflow-hidden'>
      {/* Header */}
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
      {/* Navigation */}
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

      {/* Sample Menu / Add Dish Button Flex Container */}
      <div className='container flex items-start gap-5 px-6 mx-auto mt-5 mb-8'>
        {/* Sample Menu */}
        <div className='w-full max-w-4xl'>
          {/* Heading */}
          <h3 className='mb-2 text-lg font-semibold text-primary'>
            Sample Menu
          </h3>

          {/* Description */}
          <p className='text-darkGray'>
            Please use this field to add, modify or delete your menu items. We
            suggest for you to use this section to introduce a few items from
            various sections of your menu together with professionally taken
            photos. Need help to take photos of your menu items? Contact us to
            schedule a professional (and free) photoshoot!
          </p>
        </div>

        {/* Add a Dish Button */}
        <button className='px-6 py-4 ml-auto font-semibold text-white bg-primary rounded-2xl'>
          Add a Dish
        </button>
      </div>

      {/* Dishes Container */}
      <div className='container px-6 mx-auto mb-10'>
        {/* Dishes List */}
        <ul className='flex flex-col space-y-2.5 text-darkGray'>
          {dishes.map((dish, idx) => (
            <li
              key={dish.id}
              className='flex items-center justify-between px-6 py-4 space-x-10 duration-200 bg-lightGray rounded-3xl hover:bg-neutral-50'
            >
              {/* Drag Button + Number */}
              <div className='flex items-center space-x-5'>
                {/* Drag Button */}
                <img
                  src={MenuIcon}
                  className='w-5 cursor-grab'
                  alt='Menu Icon'
                />

                {/* Number */}
                <span className='align-middle'>{idx + 1}</span>
              </div>

              {/* Dish Image */}
              <img
                src={DishImg}
                alt='Dish'
                className='object-cover w-16 h-16 rounded-2xl'
              />

              {/* Dish Title Container */}
              <div>
                <p className='w-28'>Empanadas</p>
              </div>

              {/* Dish Description */}
              <div>
                <p className='w-full max-w-2xl'>
                  Original Argentine patties (2) from the oven with a choice of
                  caprese, blue cheese/spinach, corn/cheese or beef
                </p>
              </div>

              {/* Price */}
              <div>
                <p className='whitespace-nowrap'>€ 48</p>
              </div>

              {/* CTA => Delete/Edit Container */}
              <div className='flex space-x-4'>
                <button className='flex items-center justify-center w-10 h-10 p-2.5 bg-secondary rounded-xl'>
                  <img src={DeleteIcon} className='w-full' alt='Delete Icon' />
                </button>
                <button className='flex items-center justify-center w-10 h-10 p-2.5 bg-secondary rounded-xl'>
                  <img src={EditIcon} className='w-full' alt='Delete Icon' />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
