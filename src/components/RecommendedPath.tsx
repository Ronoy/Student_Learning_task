import { motion } from 'motion/react';
import { ArrowLeft, SunMoon } from 'lucide-react';

export default function RecommendedPath({ course, onBack }: { course?: any, onBack: () => void }) {
  const courseTitle = course?.title || "高等数学";

  const nodes = [
    { id: 1, label: "数项级数的概念", x: 20, y: 80, status: "poor" },
    { id: 2, label: "收敛级数的基本性质", x: 22, y: 60, status: "untested" },
    { id: 3, label: "交错级数", x: 28, y: 40, status: "good" },
    { id: 4, label: "绝对收敛与条件收敛", x: 38, y: 25, status: "untested" },
    { id: 5, label: "幂级数的收敛性", x: 50, y: 15, status: "poor" },
    { id: 6, label: "方向余弦、向量在轴上的投影", x: 62, y: 15, status: "poor" },
    { id: 7, label: "向量的数量积与向量积", x: 72, y: 25, status: "untested" },
    { id: 8, label: "平面及其方程", x: 82, y: 40, status: "poor" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'untested': return 'bg-gray-200';
      case 'poor': return 'bg-rose-300';
      case 'fair': return 'bg-amber-400';
      case 'good': return 'bg-blue-100';
      case 'excellent': return 'bg-emerald-400';
      default: return 'bg-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col w-full font-sans relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="absolute w-[1200px] h-[1200px] rounded-full border-[20px] border-blue-50/50" />
        <div className="absolute w-[1200px] h-[1200px] rounded-full border border-blue-100 border-dashed" />
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
        <div className="bg-white rounded-full shadow-sm p-1 flex items-center pointer-events-auto absolute left-1/2 -translate-x-1/2">
          <button className="px-6 py-2 bg-[#3B82F6] text-white rounded-full text-sm font-medium shadow-sm">
            推荐路径
          </button>
          <button className="px-6 py-2 text-gray-600 hover:text-gray-900 rounded-full text-sm font-medium transition-colors">
            路径探索
          </button>
          <button className="px-6 py-2 text-gray-600 hover:text-gray-900 rounded-full text-sm font-medium transition-colors">
            我的路径
          </button>
        </div>
      </header>

      {/* Path Area */}
      <div className="flex-1 relative w-full h-full flex items-center justify-center mt-16">
         <div className="relative w-full max-w-6xl h-[600px]">
           {/* SVG Lines connecting nodes */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
             <defs>
               <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                 <polygon points="0 0, 10 3.5, 0 7" fill="#CBD5E1" />
               </marker>
             </defs>
             {nodes.map((node, index) => {
               if (index === nodes.length - 1) return null;
               const nextNode = nodes[index + 1];
               return (
                 <line 
                   key={`line-${index}`}
                   x1={`${node.x}%`} 
                   y1={`${node.y}%`} 
                   x2={`${nextNode.x}%`} 
                   y2={`${nextNode.y}%`} 
                   stroke="#E2E8F0" 
                   strokeWidth="4" 
                   markerEnd="url(#arrowhead)"
                 />
               );
             })}
           </svg>

           {/* Nodes */}
           {nodes.map((node, index) => (
             <motion.div
               key={node.id}
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: index * 0.1 }}
               className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
               style={{ left: `${node.x}%`, top: `${node.y}%`, zIndex: 10 }}
             >
               <div className={`w-14 h-14 rounded-full ${getStatusColor(node.status)} shadow-lg shadow-black/5 flex items-center justify-center group-hover:scale-110 transition-transform border-4 border-white`} />
               <div className="absolute top-16 whitespace-nowrap text-sm font-medium text-gray-700 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md">
                 {node.label}
               </div>
             </motion.div>
           ))}
         </div>
      </div>

      {/* Bottom Toolbar */}
      <div className="absolute bottom-6 left-6 z-10 flex items-end gap-6 pointer-events-none">
        {/* Mastery */}
        <div className="bg-white rounded-2xl p-4 shadow-lg pointer-events-auto flex items-center gap-6">
          <div>
            <div className="text-xs text-gray-500 mb-1 font-medium flex items-center gap-1">
              课程掌握度
              <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-gray-400" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-[18%] h-full bg-rose-400 rounded-full" />
              </div>
            </div>
          </div>
          <div className="text-2xl font-bold text-rose-500">18%</div>
          <div className="w-px h-8 bg-gray-100" />
          <button className="flex flex-col items-center gap-1 p-2 hover:bg-gray-50 rounded-xl transition-colors text-gray-600">
            <SunMoon className="w-5 h-5" />
            <span className="text-[10px] font-medium">亮暗</span>
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-6 right-6 z-10 bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-sm flex items-center gap-6 text-xs font-medium text-gray-600 pointer-events-auto border border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-400" />
          未检测
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500" />
          不了解
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          了解
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          掌握
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          精通
        </div>
      </div>
    </div>
  );
}
