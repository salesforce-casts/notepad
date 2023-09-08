import useAnimation from '@/lib/animation';
import { AnimatePresence, motion } from 'framer-motion';

// #note
export const Loader = () => {
  const [animate, isLoading] = useAnimation((s) => [s.animate, s.isLoading]);

  if (animate)
    return (
      <div className='absolute rounded-xl shadow shadow-text/30 py-4 px-6 inset-x-0 top-2 w-fit mx-auto bg-bg  z-10'>
        <AnimatePresence mode='wait'>
          {isLoading ? (
            <motion.svg
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              key={'spinner'}
              className='w-10 origin-center animate-rotate'
              viewBox='25 25 50 50'
            >
              <circle
                className='animate-dash'
                fill='none'
                stroke='#d4d4d4'
                strokeWidth={4}
                strokeDasharray='1, 200'
                strokeDashoffset={0}
                strokeLinecap='round'
                r='20'
                cy='50'
                cx='50'
              ></circle>
            </motion.svg>
          ) : (
            <motion.div layout className='flex w-fit items-center gap-4'>
              <motion.svg
                key={'done'}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: 'tween', delay: 0.1 }}
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#d4d4d4'
                className='origin-center'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  d='M22 11.08V12a10 10 0 1 1-5.93-9.14'
                />
                <motion.polyline
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  points='  22 4 12 14.01 9 11.01'
                />
              </motion.svg>
              <motion.p
                layout
                initial={{ width: 0, opacity: 0 }}
                animate={{
                  width: 'auto',
                  opacity: 1,
                  display: 'block',
                }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className='text-text hidden origin-left text-xl tracking-wider'
              >
                Saved!
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  return null;
};
