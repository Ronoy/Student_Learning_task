import { motion } from 'motion/react';
import { 
  BookOpen, 
  Sparkles, 
  Plus, 
  User,
  Headset,
  HelpCircle,
  LogOut,
  ChevronDown,
  ChevronRight,
  Archive
} from 'lucide-react';

export default function CourseList({ onCourseSelect }: { onCourseSelect: (course: any) => void }) {
  const courses = [
    {
      id: 1,
      title: "智能装备机械系统设计",
      image: "https://picsum.photos/seed/smart_manufacturing/800/400",
      progress: 13,
      type: "项目任务式"
    },
    {
      id: 2,
      title: "机械原理",
      image: "https://picsum.photos/seed/mechanics/800/400",
      progress: 0,
      type: "章节式"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex font-sans w-full">
      {/* Left Sidebar */}
      <aside className="w-[240px] bg-[#F8FAFC] border-r border-gray-200 flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            东
          </div>
          <span className="font-bold text-gray-800 tracking-wider">东莞职业技术学院</span>
        </div>
        
        <nav className="flex-1 px-4 py-2 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-200/50 text-gray-900 rounded-xl font-medium">
            <BookOpen className="w-5 h-5" />
            学习中心
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium transition-colors">
            <Sparkles className="w-5 h-5" />
            AI创新中心
          </button>
        </nav>

        <div className="p-4 border-t border-gray-200 space-y-4">
          <div className="flex items-center justify-between px-2 text-gray-400">
            <button className="hover:text-gray-600 transition-colors"><User className="w-5 h-5" /></button>
            <button className="hover:text-gray-600 transition-colors"><Headset className="w-5 h-5" /></button>
            <button className="hover:text-gray-600 transition-colors"><HelpCircle className="w-5 h-5" /></button>
            <button className="hover:text-gray-600 transition-colors"><LogOut className="w-5 h-5" /></button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6 flex gap-6">
          {/* Center Column */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 relative overflow-hidden border border-blue-100 h-[160px] flex items-center">
              <div className="relative z-10">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Hi 小刘同学，欢迎来到职教平台学习中心</h1>
                <p className="text-gray-600">选择一门课程，开启今天的学习吧~</p>
              </div>
              {/* Decorative elements */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[url('https://picsum.photos/seed/abstract/800/400')] bg-cover bg-center opacity-20 mix-blend-overlay" />
              <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-80">
                <div className="w-32 h-32 bg-blue-200/50 rounded-2xl rotate-12 blur-xl absolute" />
                <div className="w-24 h-24 bg-white/40 backdrop-blur-md border border-white/60 rounded-xl flex items-center justify-center relative z-10 shadow-xl rotate-12">
                  <span className="text-4xl font-bold text-blue-600">职</span>
                </div>
              </div>
            </div>

            {/* Course List Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                <div className="flex items-center gap-6">
                  <button className="text-xl font-bold text-gray-900 relative">
                    我学的课
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-600 rounded-full" />
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
                    2025学年-第二学期
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm shadow-blue-200">
                    <Plus className="w-4 h-4" />
                    加入课程
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 text-sm">
                <span className="text-gray-500">共 <strong className="text-gray-900">2</strong> 门课程</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <motion.div 
                    key={course.id}
                    whileHover={{ y: -4 }}
                    onClick={() => onCourseSelect(course)}
                    className="group cursor-pointer flex flex-col"
                  >
                    <div className="relative aspect-[2/1] rounded-xl overflow-hidden mb-4 border border-gray-100 shadow-sm">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className={`absolute top-2 left-2 px-2 py-1 rounded text-[10px] font-bold text-white backdrop-blur-sm ${course.type === '项目任务式' ? 'bg-blue-500/80' : 'bg-amber-500/80'}`}>
                        {course.type}
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3">{course.title}</h3>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-gray-400">学习进度</span>
                        <span className="font-bold text-gray-900 text-sm">{course.progress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-[320px] flex flex-col gap-6 shrink-0">
            {/* Skills Radar */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900">岗位技能分析</h3>
                <button className="text-xs text-gray-400 hover:text-gray-600 flex items-center">
                  查看信息 <ChevronRight className="w-3 h-3" />
                </button>
              </div>
              <div className="relative w-full aspect-square flex items-center justify-center">
                {/* Simplified Radar Chart Placeholder */}
                <svg viewBox="0 0 100 100" className="w-full h-full max-w-[200px]">
                  <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="1" />
                  <polygon points="50,20 80,38 80,62 50,80 20,62 20,38" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1" />
                  <polygon points="50,30 70,45 70,55 50,70 30,55 30,45" fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="1" />
                  
                  {/* Data Polygon */}
                  <polygon points="50,15 85,35 75,65 50,85 25,60 15,35" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" strokeWidth="2" />
                  
                  {/* Center Text */}
                  <text x="50" y="48" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="bold">80%</text>
                  <text x="50" y="60" textAnchor="middle" fill="#6B7280" fontSize="8">适岗度</text>
                </svg>
                
                {/* Labels */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 whitespace-nowrap">工程实践能力 <span className="text-blue-600 font-bold">86</span></div>
                <div className="absolute top-1/4 right-0 text-[10px] text-gray-500 whitespace-nowrap">质量管控能力 <span className="text-blue-600 font-bold">76</span></div>
                <div className="absolute bottom-1/4 right-0 text-[10px] text-gray-500 whitespace-nowrap">安全合规意识 <span className="text-blue-600 font-bold">76</span></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 whitespace-nowrap">工具应用能力 <span className="text-blue-600 font-bold">53</span></div>
                <div className="absolute bottom-1/4 left-0 text-[10px] text-gray-500 whitespace-nowrap">核心技术能力 <span className="text-blue-600 font-bold">78</span></div>
                <div className="absolute top-1/4 left-0 text-[10px] text-gray-500 whitespace-nowrap">综合软实力 <span className="text-blue-600 font-bold">78</span></div>
              </div>
            </div>

            {/* Portfolio */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-bold text-gray-900 mb-2">成长档案袋</h3>
                <button className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-md hover:bg-gray-200 transition-colors">
                  查看详情
                </button>
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 rotate-12">
                  <Archive className="w-8 h-8" />
                </div>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-blue-50 to-transparent" />
            </div>

            {/* Todo List */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-gray-900">我的任务</h3>
                <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-md font-medium">0</span>
              </div>
              <p className="text-xs text-gray-400 mb-6">在这里，查看本学期的所有任务</p>
              
              <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
                <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center mb-4 relative">
                  <div className="absolute w-16 h-16 bg-white shadow-sm rounded-xl rotate-12 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-gray-200 rounded-md" />
                  </div>
                  <Sparkles className="w-6 h-6 absolute top-4 right-4 text-gray-300" />
                </div>
                <p className="text-sm">暂无作业任务</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
