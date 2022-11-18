import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import ReserveIcon from '../Images/Icons/reserve.svg';
import PriceIcon from '../Images/Icons/dollar-circle.svg';
import EditIcon from '../Images/Icons/edit.svg';
import ExportIcon from '../Images/Icons/export.svg';
import CloseIcond from '../Images/Icons/close-square.svg';
import { addDishSchema } from './formSchemas';
import { useState } from 'react';

const modalVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
};

export const MAX_DESC_LENGTH = 200;

const AddDishModal = ({ onClose, onAdd }) => {
  const [remainingLetters, setRemainingLetters] = useState(MAX_DESC_LENGTH);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addDishSchema),
  });

  // Update Remaning Letters count on change in description
  const changeDescriptionHandler = (event) => {
    const length = event.target.value.length;
    setRemainingLetters(MAX_DESC_LENGTH - Number(length));
  };

  // Handle Form Submition
  const submitHandler = (data) => {
    // Assign an id (Not Totaly the right way)
    const dish = {
      id: Math.random(),
      ...data,
    };

    onAdd(dish);
    onClose();
  };

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
        <form onSubmit={handleSubmit(submitHandler)} className='text-darkGray'>
          {/* Dish name/Dish Price flex Container */}
          <div className='flex items-start justify-between gap-3 mb-3'>
            {/* Reserve Dish */}
            <div className='flex-1'>
              {/* Input Control */}
              <div className='relative'>
                <img
                  src={ReserveIcon}
                  className='absolute w-5 top-50% -translate-y-50% left-4'
                  alt='Reserve dish icon'
                />

                <input
                  type='text'
                  {...register('name')}
                  className={`w-full font-medium outline-none text-stone-800 placeholder:text-darkGray px-5 pl-12 py-3.5 border rounded-2xl focus:border-stone-600 transition ${
                    errors.name ? '!border-red-500' : 'border-stone-300/80'
                  }`}
                  placeholder='Dish name'
                />
              </div>

              {/* Potential Error Message */}
              <p className='mt-1 text-sm font-medium text-red-500'>
                {errors.name?.message}
              </p>
            </div>

            {/* Dish Price */}
            <div className='flex-1'>
              {/* Input Control */}
              <div className='relative'>
                <img
                  src={PriceIcon}
                  className='absolute w-5 top-50% -translate-y-50% left-4'
                  alt='Reserve dish icon'
                />

                <input
                  type='text'
                  {...register('price')}
                  className={`w-full font-medium outline-none text-stone-800 placeholder:text-darkGray px-5 pl-12 py-3.5 border rounded-2xl focus:border-stone-600 transition ${
                    errors.price ? '!border-red-500' : 'border-stone-300/80'
                  }`}
                  placeholder='Dish price'
                />
              </div>

              {/* Potential Error Message */}
              <p className='mt-1 text-sm font-medium text-red-500'>
                {errors.price?.message}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className='mb-2.5'>
            {/* Form Control */}
            <div className='relative'>
              <textarea
                type='text'
                {...register('description', {
                  onChange: changeDescriptionHandler,
                })}
                maxLength={MAX_DESC_LENGTH}
                className={`w-full h-40 p-6 font-medium transition border outline-none resize-none pr-14 text-stone-800 placeholder:text-darkGray border-stone-300/80 rounded-2xl focus:border-stone-600 ${
                  errors.description ? '!border-red-500' : 'border-stone-300/80'
                }`}
                placeholder='Describe your dish and it’s Ingredients here.'
              ></textarea>

              {/* Remaining Characters */}
              <span className='absolute text-primary bottom-6 right-6'>
                {remainingLetters} letters reamining
              </span>

              {/* Edit Button */}
              <button className='absolute flex items-center justify-center w-10 h-10 p-2.5 top-6 right-6 bg-secondary rounded-xl'>
                <img src={EditIcon} className='w-full' alt='Edit Icon' />
              </button>
            </div>

            {/* Potential Error Message */}
            <p className='text-sm font-medium text-red-500'>
              {errors.description?.message}
            </p>
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
