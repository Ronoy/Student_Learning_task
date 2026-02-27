import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, Wand2, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'image' | 'video';
  src: string;
  title?: string;
}

export default function PreviewModal({ isOpen, onClose, type, src, title }: PreviewModalProps) {
  const [prompt, setPrompt] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleEdit = async () => {
    if (!prompt.trim()) return;
    
    setIsEditing(true);
    setError(null);
    
    try {
      // 1. Fetch the image and convert to base64
      const currentSrc = editedImage || src;
      const response = await fetch(currentSrc);
      const blob = await response.blob();
      
      const reader = new FileReader();
      const base64Promise = new Promise<string>((resolve, reject) => {
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
      });
      
      reader.readAsDataURL(blob);
      const base64String = await base64Promise;
      const base64Data = base64String.split(',')[1];
      const mimeType = blob.type || 'image/jpeg';

      // 2. Call Gemini API
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const aiResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              inlineData: {
                data: base64Data,
                mimeType: mimeType,
              },
            },
            {
              text: prompt,
            },
          ],
        },
      });

      // 3. Extract the edited image
      let newImageUrl = null;
      for (const part of aiResponse.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          newImageUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
          break;
        }
      }

      if (newImageUrl) {
        setEditedImage(newImageUrl);
        setPrompt('');
      } else {
        setError('未能生成图片，请重试。');
      }
    } catch (err) {
      console.error('Image editing failed:', err);
      setError('图片编辑失败，请检查网络或稍后重试。');
    } finally {
      setIsEditing(false);
    }
  };

  const handleClose = () => {
    setEditedImage(null);
    setPrompt('');
    setError(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 flex flex-col"
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent z-10">
              <div className="flex items-center gap-2">
                <Maximize2 className="w-4 h-4 text-white/70" />
                <span className="text-white text-sm font-medium">{title || '预览'}</span>
              </div>
              <button 
                onClick={handleClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col md:flex-row min-h-[50vh] max-h-[85vh]">
              <div className="flex-1 flex items-center justify-center bg-black/50 relative p-4 mt-12 md:mt-0">
                {type === 'image' ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src={editedImage || src} 
                      alt={title} 
                      className={`max-w-full max-h-[70vh] object-contain transition-opacity duration-300 ${isEditing ? 'opacity-50 blur-sm' : 'opacity-100'}`}
                      referrerPolicy="no-referrer"
                      crossOrigin="anonymous"
                    />
                    {isEditing && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <Loader2 className="w-10 h-10 animate-spin text-indigo-500 mb-4" />
                        <p className="text-sm font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">AI 正在施展魔法...</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-full aspect-video bg-black flex items-center justify-center">
                    <video 
                      src={src} 
                      controls 
                      autoPlay 
                      className="w-full h-full"
                    />
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

              {/* AI Image Editor Sidebar */}
              {type === 'image' && (
                <div className="w-full md:w-80 bg-gray-900 border-t md:border-t-0 md:border-l border-white/10 p-6 flex flex-col shrink-0">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 bg-indigo-500/20 rounded-lg">
                      <Wand2 className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h3 className="text-white font-medium">AI 图像编辑</h3>
                  </div>
                  
                  <div className="flex-1 flex flex-col gap-4">
                    <p className="text-sm text-gray-400">
                      输入您的修改指令，AI 将为您重新生成图像。例如："添加复古滤镜"、"将背景换成赛博朋克风格"。
                    </p>
                    
                    <div className="flex flex-col gap-2 mt-auto">
                      {error && (
                        <div className="text-xs text-rose-400 bg-rose-400/10 p-3 rounded-lg border border-rose-400/20">
                          {error}
                        </div>
                      )}
                      <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="输入编辑指令..."
                        className="w-full h-24 bg-black/50 border border-white/10 rounded-xl p-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                        disabled={isEditing}
                      />
                      <button
                        onClick={handleEdit}
                        disabled={!prompt.trim() || isEditing}
                        className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-600/50 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                      >
                        {isEditing ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            生成中...
                          </>
                        ) : (
                          <>
                            <Wand2 className="w-4 h-4" />
                            开始编辑
                          </>
                        )}
                      </button>
                      
                      {editedImage && (
                        <button
                          onClick={() => setEditedImage(null)}
                          disabled={isEditing}
                          className="w-full py-2 text-sm text-gray-400 hover:text-white transition-colors mt-2"
                        >
                          撤销修改
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
