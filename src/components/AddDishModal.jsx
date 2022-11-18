import { motion } from 'framer-motion';

import ReserveIcon from '../Images/Icons/reserve.svg';
import PriceIcon from '../Images/Icons/dollar-circle.svg';
import EditIcon from '../Images/Icons/edit.svg';
import ExportIcon from '../Images/Icons/export.svg';
import CloseIcond from '../Images/Icons/close-square.svg';

const modalVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
};

const AddDishModal = ({ onClose }) => {
  return (
    <motion.div
      variants={modalVariants}
      initial='closed'
      animate='open'
      exit='closed'
      transition={{ duration: 0.4 }}
    >
      {/* Backdrop */}
      <div
        onClick={() => onClose()}
        className='fixed top-0 right-0 z-30 w-full h-full bg-black/75'
      ></div>

      {/* Modal */}
      <div className='fixed top-10 right-50% translate-x-50% z-40 w-full max-w-2xl rounded-3xl bg-white px-14 py-8'>
        {/* Form Title + Form Descriptio container */}
        <div className='relative mb-8'>
          <h3 className='mb-2 text-lg font-semibold text-primary'>
            Add a Dish
          </h3>
          <p className='text-darkGray'>
            Please use the fields below to edit your dish information.
          </p>

          {/* Close Button (absolute) */}
          <button
            onClick={onClose}
            className='absolute top-0 right-0 outline-none'
          >
            <img src={CloseIcond} alt='' />
          </button>
        </div>

        {/* Add Dish Form */}
        <form className='text-darkGray'>
          {/* Dish name/Dish Price flex Container */}
          <div className='flex items-center justify-between gap-3 mb-3'>
            {/* Reserve Dish - Input Control + potential error Message */}
            <div className='relative flex-1'>
              <img
                src={ReserveIcon}
                className='absolute w-5 top-50% -translate-y-50% left-4'
                alt='Reserve dish icon'
              />

              <input
                type='text'
                className='w-full font-medium outline-none text-stone-800 placeholder:text-darkGray px-5 pl-12 py-3.5 border border-stone-300/80 rounded-2xl focus:border-stone-600 transition'
                placeholder='Dish name'
              />
            </div>

            {/* Dish Price - Input Control + potential error Message */}
            <div className='relative flex-1'>
              <img
                src={PriceIcon}
                className='absolute w-5 top-50% -translate-y-50% left-4'
                alt='Reserve dish icon'
              />

              <input
                type='text'
                className='w-full font-medium outline-none text-stone-800 placeholder:text-darkGray px-5 pl-12 py-3.5 border border-stone-300/80 rounded-2xl focus:border-stone-600 transition'
                placeholder='Dish price'
              />
            </div>
          </div>
          {/* Description */}
          <div className='relative h-40 mb-3'>
            <textarea
              type='text'
              maxLength={200}
              className='w-full h-full p-6 font-medium transition border outline-none resize-none pr-14 text-stone-800 placeholder:text-darkGray border-stone-300/80 rounded-2xl focus:border-stone-600'
              placeholder='Describe your dish and it’s Ingredients here.'
            ></textarea>

            {/* Remaining Characters */}
            <span className='absolute text-primary bottom-6 right-6'>
              200 letters reamining
            </span>

            {/* Edit Button */}
            <button className='absolute flex items-center justify-center w-10 h-10 p-2.5 top-6 right-6 bg-secondary rounded-xl'>
              <img src={EditIcon} className='w-full' alt='Edit Icon' />
            </button>
          </div>
          {/* Upload Image */}
          <div className='w-full p-6 mb-10 space-y-2 font-medium text-center transition border outline-none resize-none text-stone-800 border-stone-300/80 rounded-2xl'>
            {/* Export Icon */}
            <img src={ExportIcon} className='mx-auto w-7' alt='Export Icon' />

            {/* Upload Title */}
            <p className='font-semibold leading-loose text-primary'>
              Upload Image
            </p>

            {/* Image Size paragraph */}
            <p className='text-sm text-darkGray'>
              Image must be <span className='font-semibold'>square shaped</span>{' '}
              and less that{' '}
              <span className='font-semibold text-primary'>1 MB</span>
            </p>

            {/* Image Format paragraph */}
            <p className='text-sm text-darkGray'>
              Allowed Formats{' '}
              <span className='font-semibold uppercase text-primary'>
                png, jpg, jpeg
              </span>
            </p>
          </div>
          {/* Buttons (Cancel Button + Submit Changes button) */}
          <div className='flex items-stretch gap-3'>
            {/* Cancel Button */}
            <button
              className='flex-1 px-5 py-4 font-semibold text-center bg-secondary text-primary rounded-2xl'
              onClick={onClose}
              type='button'
            >
              Cancel
            </button>

            {/* Submit Button */}
            <button className='flex-1 px-5 py-4 font-medium text-center text-white bg-primary rounded-2xl'>
              Submit Changes
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default AddDishModal;
