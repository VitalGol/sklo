'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function ShakingPhone() {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShake(true);
    }, 5000); // 5 секунд задержки

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex ">
      <div className="relative py-2 px-6   rounded-2xl shadow-xl">
        {/* Анимация разводящихся кругов */}
        {shake && (
          <>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0, opacity: 0.6 }}
              animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            >
              <div className="w-16 h-16  rounded-full border-2  border-neutral-600 dark:border-neutral-300" />
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0, opacity: 0.6 }}
              animate={{ scale: [1, 3], opacity: [0.6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeOut',
                delay: 1,
              }}
            >
              <div className="w-20 h-20 rounded-full border-2 border-neutral-600 dark:border-neutral-300" />
            </motion.div>
          </>
        )}

        {/* Телефон с дрожанием */}
        <motion.div
          animate={shake ? { rotate: [0, -10, 10, -10, 0] } : {}}
          transition={{
            duration: 0.5,
            repeat: shake ? Infinity : 0,
            repeatDelay: 0.2,
          }}
          className="relative z-10"
        >
          <Phone size={32} className="text-neutral-600 dark:text-neutral-300" />
        </motion.div>
      </div>
    </div>
  );
}
