import { motion } from 'framer-motion';

// Images
import DishImg from '../Images/dish.png';

// Icons
import MenuIcon from '../Images/Icons/menu.svg';
import DeleteIcon from '../Images/Icons/trash.svg';
import EditIcon from '../Images/Icons/edit.svg';

const dishVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const DishItem = ({ dish, num, onRemove }) => {
  return (
    <motion.li
      key={dish.id}
      variants={dishVariants}
      initial='hidden'
      animate='visible'
      exit='hidden'
      className='flex items-center justify-between px-6 py-4 space-x-10 transition-colors duration-200 bg-lightGray rounded-3xl hover:bg-neutral-50'
    >
      {/* Drag Button + Number */}
      <div className='flex items-center space-x-5'>
        {/* Drag Button */}
        <img src={MenuIcon} className='w-5 cursor-grab' alt='Menu Icon' />

        {/* Number */}
        <span className='align-middle'>{num}</span>
      </div>

      {/* Dish Image */}
      <img
        src={DishImg}
        alt='Dish'
        className='object-cover w-16 h-16 rounded-2xl'
      />

      {/* Dish Title Container */}
      <div>
        <p className='w-28'>{dish.name}</p>
      </div>

      {/* Dish Description */}
      <div className='w-[50%]'>
        <p className='max-w-2xl'>{dish.description}</p>
      </div>

      {/* Price */}
      <div>
        <p className='whitespace-nowrap'>€ {dish.price}</p>
      </div>

      {/* CTA => Delete/Edit Container */}
      <div className='flex space-x-4'>
        <button
          className='flex items-center justify-center w-10 h-10 p-2.5 bg-secondary rounded-xl'
          onClick={() => onRemove(dish.id)}
        >
          <img src={DeleteIcon} className='w-full' alt='Delete Icon' />
        </button>
        <button className='flex items-center justify-center w-10 h-10 p-2.5 bg-secondary rounded-xl'>
          <img src={EditIcon} className='w-full' alt='Delete Icon' />
        </button>
      </div>
    </motion.li>
  );
};

export default DishItem;
