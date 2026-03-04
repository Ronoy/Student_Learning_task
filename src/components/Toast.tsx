import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

let toastCount = 0;

type ToastType = {
  id: number;
  message: string;
};

let addToastListener: ((message: string) => void) | null = null;

export const toast = (message: string) => {
  if (addToastListener) {
    addToastListener(message);
  }
};

export function ToastContainer() {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  useEffect(() => {
    addToastListener = (message: string) => {
      const id = ++toastCount;
      setToasts((prev) => [...prev, { id, message }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3000);
    };
    return () => {
      addToastListener = null;
    };
  }, []);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium"
          >
            {t.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
