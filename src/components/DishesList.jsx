import { useState } from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence } from 'framer-motion';

import DishItem from './DishItem';
import DISHES from '../data/dishes';
import AddDishModal from './AddDishModal';

const DishesList = () => {
  const [dishModalOpen, setDishModalOpen] = useState(false);
  const [dishes, setDishes] = useState(DISHES);

  const removeDishHandler = (id) => {
    setDishes((prevDishes) => prevDishes.filter((dish) => dish.id !== id));
  };

  return (
    <>
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
        <button
          className='px-6 py-4 ml-auto font-semibold text-white bg-primary rounded-2xl'
          onClick={() => setDishModalOpen(true)}
        >
          Add a Dish
        </button>
      </div>

      {/* Dishes List Container */}
      <div className='container px-6 mx-auto mb-10'>
        {/* Dishes List */}
        <ul className='flex flex-col space-y-2.5 text-darkGray'>
          {dishes.map((dish, idx) => (
            <DishItem
              onRemove={removeDishHandler}
              key={dish.id}
              num={idx + 1}
              dish={dish}
            />
          ))}
        </ul>
      </div>

      {/* Portal Add Dish Component */}
      {ReactDOM.createPortal(
        <AnimatePresence>
          {dishModalOpen && (
            <AddDishModal onClose={() => setDishModalOpen(false)} />
          )}
        </AnimatePresence>,
        document.getElementById('overlay')
      )}
    </>
  );
};

export default DishesList;
