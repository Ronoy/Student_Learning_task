import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'image' | 'video';
  src: string;
  title?: string;
}

export default function PreviewModal({ isOpen, onClose, type, src, title }: PreviewModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent z-10">
              <div className="flex items-center gap-2">
                <Maximize2 className="w-4 h-4 text-white/70" />
                <span className="text-white text-sm font-medium">{title || '预览'}</span>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex items-center justify-center min-h-[50vh] max-h-[85vh]">
              {type === 'image' ? (
                <img 
                  src={src} 
                  alt={title} 
                  className="max-w-full max-h-[85vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full aspect-video bg-black flex items-center justify-center">
                  <video 
                    src={src} 
                    controls 
                    autoPlay 
                    className="w-full h-full"
                  />
                  {/* Since we don't have a real video file, we'll show a placeholder for the demo if src is just a placeholder */}
                  {src.includes('picsum') && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-4">
                      <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                        <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                      <p className="text-lg font-medium">正在播放：{title}</p>
                      <p className="text-sm text-white/50">视频流加载中...</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
