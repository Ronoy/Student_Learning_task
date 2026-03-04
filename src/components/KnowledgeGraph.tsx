import { motion } from 'motion/react';
import { ArrowLeft, Search, LayoutTemplate, Palette, Crosshair, Filter, SunMoon, Download, Network } from 'lucide-react';

export default function KnowledgeGraph({ course, onBack }: { course?: any, onBack: () => void }) {
  const courseTitle = course?.title || "高等数学";

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col w-full font-sans relative overflow-hidden">
      {/* Background concentric circles */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-blue-200" />
        <div className="absolute w-[1000px] h-[1000px] rounded-full border border-blue-100" />
        <div className="absolute w-[1400px] h-[1400px] rounded-full border border-gray-200" />
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 px-6 py-4 flex items-center justify-between pointer-events-none">
        {/* Left */}
        <div className="flex items-center gap-4 pointer-events-auto">
          <button 
            onClick={onBack}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all text-gray-600"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-gray-800">《{courseTitle}》</h1>
        </div>

        {/* Center Tabs */}
        <div className="bg-white rounded-full shadow-sm p-1 flex items-center pointer-events-auto">
          <button className="px-6 py-2 bg-[#3B82F6] text-white rounded-full text-sm font-medium shadow-sm">
            知识图谱
          </button>
          <button className="px-6 py-2 text-gray-600 hover:text-gray-900 rounded-full text-sm font-medium transition-colors">
            能力图谱
          </button>
          <button className="px-6 py-2 text-gray-600 hover:text-gray-900 rounded-full text-sm font-medium transition-colors">
            问题图谱
          </button>
          <button className="px-6 py-2 text-gray-600 hover:text-gray-900 rounded-full text-sm font-medium transition-colors">
            思政图谱
          </button>
        </div>

        {/* Right Search */}
        <div className="pointer-events-auto">
          <div className="relative">
            <input 
              type="text" 
              placeholder="有问题问助学" 
              className="w-64 pl-4 pr-10 py-2.5 bg-white rounded-full shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 border border-transparent"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </header>

      {/* Graph Area (Mock) */}
      <div className="flex-1 relative w-full h-full flex items-center justify-center">
         {/* Mock Nodes */}
         <div className="relative w-full h-full max-w-5xl max-h-[800px] flex items-center justify-center">
           <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-400">
             <Network className="w-16 h-16 mb-4 opacity-20" />
             <p className="opacity-50">知识图谱可视化区域</p>
           </div>
           
           {/* Decorative nodes */}
           <div className="absolute top-[30%] left-[20%] w-12 h-12 bg-emerald-400 rounded-lg rotate-45 opacity-80 shadow-lg shadow-emerald-400/20 flex items-center justify-center"><div className="w-full h-full border border-white/30 rounded-lg" /></div>
           <div className="absolute top-[40%] left-[40%] w-16 h-16 bg-emerald-300 rounded-lg rotate-45 opacity-80 shadow-lg shadow-emerald-300/20 flex items-center justify-center"><div className="w-full h-full border border-white/30 rounded-lg" /></div>
           <div className="absolute top-[20%] left-[50%] w-10 h-10 bg-emerald-500 rounded-lg rotate-45 opacity-80 shadow-lg shadow-emerald-500/20 flex items-center justify-center"><div className="w-full h-full border border-white/30 rounded-lg" /></div>
           
           <div className="absolute top-[50%] right-[30%] w-14 h-14 bg-amber-400 rounded-lg rotate-45 opacity-80 shadow-lg shadow-amber-400/20 flex items-center justify-center"><div className="w-full h-full border border-white/30 rounded-lg" /></div>
           <div className="absolute top-[30%] right-[20%] w-12 h-12 bg-amber-300 rounded-lg rotate-45 opacity-80 shadow-lg shadow-amber-300/20 flex items-center justify-center"><div className="w-full h-full border border-white/30 rounded-lg" /></div>
           
           <div className="absolute bottom-[30%] left-[30%] w-16 h-16 bg-rose-400 rounded-lg rotate-45 opacity-80 shadow-lg shadow-rose-400/20 flex items-center justify-center"><div className="w-full h-full border border-white/30 rounded-lg" /></div>
           <div className="absolute bottom-[20%] left-[40%] w-12 h-12 bg-rose-300 rounded-lg rotate-45 opacity-80 shadow-lg shadow-rose-300/20 flex items-center justify-center"><div className="w-full h-full border border-white/30 rounded-lg" /></div>
           
           <div className="absolute bottom-[40%] right-[40%] w-14 h-14 bg-cyan-400 rounded-lg rotate-45 opacity-80 shadow-lg shadow-cyan-400/20 flex items-center justify-center"><div className="w-full h-full border border-white/30 rounded-lg" /></div>
           <div className="absolute bottom-[20%] right-[30%] w-12 h-12 bg-cyan-300 rounded-lg rotate-45 opacity-80 shadow-lg shadow-cyan-300/20 flex items-center justify-center"><div className="w-full h-full border border-white/30 rounded-lg" /></div>
           
           {/* SVG Lines connecting them */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: -1 }}>
             <line x1="25%" y1="35%" x2="45%" y2="45%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
             <line x1="45%" y1="45%" x2="55%" y2="25%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
             <line x1="45%" y1="45%" x2="65%" y2="55%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
             <line x1="65%" y1="55%" x2="75%" y2="35%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
             <line x1="35%" y1="75%" x2="45%" y2="85%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
             <line x1="35%" y1="75%" x2="55%" y2="65%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
             <line x1="55%" y1="65%" x2="65%" y2="85%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
           </svg>
         </div>
      </div>

      {/* Bottom Toolbar */}
      <div className="absolute bottom-6 left-6 z-10 flex items-end gap-6 pointer-events-none">
        {/* Mastery */}
        <div className="bg-white rounded-2xl p-4 shadow-lg pointer-events-auto flex items-center gap-4">
          <div>
            <div className="text-xs text-gray-500 mb-1 font-medium">课程掌握度</div>
            <div className="flex items-center gap-2">
              <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-[18%] h-full bg-rose-400 rounded-full" />
              </div>
            </div>
          </div>
          <div className="text-2xl font-bold text-rose-500">18%</div>
        </div>

        {/* Tools */}
        <div className="bg-white rounded-2xl shadow-lg p-1.5 flex items-center gap-1 pointer-events-auto">
          <button className="flex flex-col items-center gap-1 p-2 hover:bg-gray-50 rounded-xl min-w-[56px] transition-colors text-gray-600">
            <LayoutTemplate className="w-5 h-5" />
            <span className="text-[10px] font-medium">模式</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 hover:bg-gray-50 rounded-xl min-w-[56px] transition-colors text-gray-600">
            <Palette className="w-5 h-5" />
            <span className="text-[10px] font-medium">配色</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 hover:bg-gray-50 rounded-xl min-w-[56px] transition-colors text-gray-600">
            <Crosshair className="w-5 h-5" />
            <span className="text-[10px] font-medium">定位</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 hover:bg-gray-50 rounded-xl min-w-[56px] transition-colors text-gray-600">
            <Filter className="w-5 h-5" />
            <span className="text-[10px] font-medium">筛选</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 hover:bg-gray-50 rounded-xl min-w-[56px] transition-colors text-gray-600">
            <SunMoon className="w-5 h-5" />
            <span className="text-[10px] font-medium">亮暗</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 hover:bg-gray-50 rounded-xl min-w-[56px] transition-colors text-gray-600">
            <Download className="w-5 h-5" />
            <span className="text-[10px] font-medium">导出</span>
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-6 right-6 z-10 bg-white/90 backdrop-blur-md rounded-full px-4 py-2.5 shadow-sm flex items-center gap-5 text-xs font-medium text-gray-600 pointer-events-auto border border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
          有资源
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rotate-45 border-2 border-[#3B82F6]" />
          无资源
        </div>
      </div>
    </div>
  );
}
