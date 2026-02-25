import { TaskData } from '../types';
import { CheckCircle2, FileText, PlayCircle, HelpCircle, ChevronDown } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Sidebar({ data }: { data: TaskData }) {
  return (
    <aside className="w-80 flex flex-col gap-4 p-4 h-[calc(100vh-3.5rem)] overflow-y-auto bg-gray-50/50">
      {/* Progress Card */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs text-gray-400">当前学习的任务</span>
          <span className="text-xs text-gray-400">进度 {data.progress}%</span>
        </div>
        <div className="flex items-center justify-between group cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <h2 className="font-bold text-gray-900 line-clamp-1">{data.title}</h2>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-gray-400 w-full mb-1">知识点</span>
            {data.knowledgePoints.map(point => (
              <span key={point} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-[10px]">{point}</span>
            ))}
            <button className="text-[10px] text-gray-400 hover:text-gray-600">展开</button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-gray-400 w-full mb-1">专业技能点</span>
            {data.professionalSkills.length === 0 && <span className="text-[10px] text-gray-300 italic">暂无</span>}
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-gray-400 w-full mb-1">通用技能点</span>
            {data.generalSkills.map(point => (
              <span key={point} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-[10px]">{point}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-gray-400 w-full mb-1">素养点</span>
            {data.competencyPoints.map(point => (
              <span key={point} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-[10px]">{point}</span>
            ))}
            <button className="text-[10px] text-gray-400 hover:text-gray-600">展开</button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        <div className="p-2 space-y-1">
          <button className="w-full text-left px-4 py-3 text-sm font-medium text-indigo-600 bg-indigo-50/50 rounded-xl transition-colors">
            任务情景描述
          </button>
          <button className="w-full text-left px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
            任务目标
          </button>
          <div className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer">
            <span>任务步骤</span>
            <span className="text-[10px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">共 {data.steps.length} 步</span>
          </div>
        </div>
      </div>

      {/* Activities List */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-gray-900 px-1">任务学习活动 ({data.activities.length})</h3>
        {data.activities.map(activity => (
          <div key={activity.id} className="bg-white p-3 rounded-2xl flex items-center gap-3 shadow-sm border border-gray-100 hover:border-indigo-200 transition-all cursor-pointer group">
            <div className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
              activity.type === 'quiz' ? "bg-cyan-50 text-cyan-500 group-hover:bg-cyan-100" : 
              activity.type === 'ppt' ? "bg-orange-50 text-orange-500 group-hover:bg-orange-100" :
              "bg-indigo-50 text-indigo-500 group-hover:bg-indigo-100"
            )}>
              {activity.type === 'quiz' && <HelpCircle className="w-5 h-5" />}
              {activity.type === 'ppt' && <FileText className="w-5 h-5" />}
              {activity.type === 'video' && <PlayCircle className="w-5 h-5" />}
              {activity.type === 'document' && <FileText className="w-5 h-5" />}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold text-gray-900 truncate">{activity.title}</h4>
              <p className="text-[10px] text-gray-400 mt-0.5">
                {activity.type === 'quiz' ? '未作答' : activity.status === 'completed' ? '已完成' : '未开始'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
