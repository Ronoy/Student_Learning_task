import { ArrowLeft, ChevronDown, CheckCircle2 } from 'lucide-react';
import { TaskData } from '../types';
import { useState, useRef, useEffect } from 'react';

export default function Header({ data }: { data: TaskData }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 模拟的项目-任务列表
  const mockTasks = [
    { project: "项目一：减速箱设计", task: "减速箱三维建模与装配", active: true, progress: 0 },
    { project: "项目一：减速箱设计", task: "减速箱工程图导出", active: false, progress: 0 },
    { project: "项目二：机械臂设计", task: "机械臂底座建模", active: false, progress: 100 },
  ];

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between h-14 px-6 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-30">
      <div className="flex items-center">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors mr-4">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <nav className="flex items-center text-sm text-gray-500">
          <span className="hover:text-gray-900 cursor-pointer">学习中心</span>
          <span className="mx-2">/</span>
          
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 font-medium text-gray-900 hover:bg-gray-100 px-2 py-1.5 rounded-md transition-colors"
            >
              {data.title}
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-72 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
                <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  切换任务
                </div>
                {mockTasks.map((t, i) => (
                  <button 
                    key={i}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center justify-between ${t.active ? 'text-indigo-600 bg-indigo-50/50' : 'text-gray-700'}`}
                  >
                    <div>
                      <div className="text-[10px] text-gray-400 mb-0.5">{t.project}</div>
                      <div className="font-medium">{t.task}</div>
                    </div>
                    {t.active && <CheckCircle2 className="w-4 h-4 text-indigo-600" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Progress Display */}
      <div className="flex items-center gap-3">
        <div className="text-xs text-gray-500">
          当前任务进度
        </div>
        <div className="flex items-center gap-2">
          <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 rounded-full transition-all duration-500" 
              style={{ width: `${data.progress}%` }} 
            />
          </div>
          <span className="text-xs font-bold text-gray-700">{data.progress}%</span>
        </div>
      </div>
    </header>
  );
}
