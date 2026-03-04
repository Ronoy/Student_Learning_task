import { TaskData } from '../types';
import { CheckCircle2, FileText, PlayCircle, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useState, useRef, useEffect } from 'react';
import { toast } from './Toast';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper component for expandable tag lists
function ExpandableTagList({ 
  title, 
  items, 
  colorClass, 
  emptyMessage = "暂无" 
}: { 
  title: string, 
  items: string[], 
  colorClass: string,
  emptyMessage?: string
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        // A typical line height for these tags is around 24px (including gap). 
        // Two lines would be ~48px. We check if scrollHeight exceeds this.
        // 56px gives a bit of buffer for 2 lines + gaps.
        setIsOverflowing(containerRef.current.scrollHeight > 56);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [items]);

  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-gray-400">{title}</span>
      {items.length === 0 ? (
        <span className="text-[10px] text-gray-300 italic">{emptyMessage}</span>
      ) : (
        <div className="relative">
          <div 
            ref={containerRef}
            className={cn(
              "flex flex-wrap gap-2 transition-all duration-300 ease-in-out overflow-hidden",
              !isExpanded && isOverflowing ? "max-h-[52px]" : "max-h-[500px]"
            )}
          >
            {items.map(point => (
              <span key={point} className={cn("px-2 py-1 border rounded text-[10px]", colorClass)}>
                {point}
              </span>
            ))}
          </div>
          
          {isOverflowing && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-[10px] text-indigo-500 hover:text-indigo-700 mt-1.5 transition-colors font-medium"
            >
              {isExpanded ? (
                <>收起 <ChevronUp className="w-3 h-3" /></>
              ) : (
                <>展开 <ChevronDown className="w-3 h-3" /></>
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default function Sidebar({ data }: { data: TaskData }) {
  return (
    <aside className="w-80 flex flex-col gap-4 p-4 h-[calc(100vh-3.5rem)] overflow-y-auto bg-gray-50/50 relative">
      {/* Tags Card */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <h3 className="text-sm font-bold text-gray-900 mb-4">能力目标</h3>
        <div className="space-y-4">
          <ExpandableTagList 
            title="知识点" 
            items={data.knowledgePoints} 
            colorClass="bg-blue-50 text-blue-600 border-blue-100" 
          />
          
          <ExpandableTagList 
            title="专业技能点" 
            items={data.professionalSkills} 
            colorClass="bg-emerald-50 text-emerald-600 border-emerald-100" 
          />

          <ExpandableTagList 
            title="通用技能点" 
            items={data.generalSkills} 
            colorClass="bg-amber-50 text-amber-600 border-amber-100" 
          />

          <ExpandableTagList 
            title="素养点" 
            items={data.competencyPoints} 
            colorClass="bg-purple-50 text-purple-600 border-purple-100" 
          />
        </div>
      </div>

      {/* Activities List */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-gray-900 px-1">任务 ({data.activities.length})</h3>
        {data.activities.map(activity => (
          <div 
            key={activity.id} 
            onClick={() => toast('暂无内容')}
            className="bg-white p-3 rounded-2xl flex items-center gap-3 shadow-sm border border-gray-100 hover:border-indigo-200 transition-all cursor-pointer group"
          >
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

