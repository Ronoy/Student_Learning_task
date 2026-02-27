import { motion } from 'motion/react';
import { 
  BookOpen, 
  Briefcase, 
  Sparkles, 
  Plus, 
  ChevronLeft, 
  ChevronRight, 
  FileEdit, 
  FileSearch, 
  FileText, 
  TrendingUp, 
  PenTool, 
  Languages, 
  FlaskConical, 
  CopyCheck,
  User,
  Headset,
  HelpCircle,
  LogOut
} from 'lucide-react';

export default function CourseList({ onCourseSelect }: { onCourseSelect: () => void }) {
  const courses = [
    {
      id: 1,
      title: "智能装备机械系统设计",
      image: "https://picsum.photos/seed/mech1/800/400",
      status: "已发布",
      students: 1,
      teachers: "朱老师、张...",
      isCoop: true
    },
    {
      id: 2,
      title: "机械原理",
      image: "https://picsum.photos/seed/mech2/800/400",
      status: "已发布",
      students: 0,
      teachers: "李老师、陈...",
      isCoop: true
    },
    {
      id: 3,
      title: "机械设计与制造技术",
      image: "https://picsum.photos/seed/mech3/800/400",
      status: "未发布",
      students: null,
      teachers: "张老师",
      isCoop: false
    }
  ];

  const aiTools = [
    { name: "智能批改", icon: FileEdit, color: "text-blue-500", bg: "bg-blue-100" },
    { name: "命题助手", icon: FileSearch, color: "text-orange-500", bg: "bg-orange-100" },
    { name: "论文检索", icon: FileText, color: "text-emerald-500", bg: "bg-emerald-100" },
    { name: "趋势分析", icon: TrendingUp, color: "text-purple-500", bg: "bg-purple-100" },
    { name: "AI 编写", icon: PenTool, color: "text-indigo-500", bg: "bg-indigo-100" },
    { name: "学术翻译", icon: Languages, color: "text-rose-500", bg: "bg-rose-100" },
    { name: "科研分析", icon: FlaskConical, color: "text-amber-500", bg: "bg-amber-100" },
    { name: "论文查重", icon: CopyCheck, color: "text-teal-500", bg: "bg-teal-100" }
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
            课程中心
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium transition-colors">
            <Briefcase className="w-5 h-5" />
            岗位中心
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium transition-colors">
            <Sparkles className="w-5 h-5" />
            AI创新中心
          </button>
        </nav>

        <div className="p-4 border-t border-gray-200 space-y-4">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium">
            <Briefcase className="w-4 h-4" />
            专业建设中心
          </button>
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
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 relative overflow-hidden border border-blue-100">
              <div className="relative z-10">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Hi 赵同学，欢迎来到课程中心</h1>
                <p className="text-gray-600">选择一门课程，开启今天的学习吧~</p>
              </div>
              {/* Decorative elements */}
              <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-80">
                <div className="w-48 h-32 bg-blue-200/50 rounded-2xl rotate-12 blur-xl absolute" />
                <BookOpen className="w-32 h-32 text-blue-300 relative z-10 opacity-50" />
              </div>
            </div>

            {/* Course List Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1">
              <div className="flex items-center gap-6 border-b border-gray-100 pb-4 mb-6">
                <button className="text-lg font-bold text-gray-900 relative">
                  我的课程
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-600 rounded-full" />
                </button>
                <button className="text-lg font-bold text-gray-400 hover:text-gray-600 transition-colors">
                  共建公开课
                </button>
              </div>

              <div className="flex items-center gap-4 mb-6 text-sm">
                <span className="text-gray-500">共 <strong className="text-gray-900">3</strong> 门课程，<strong className="text-gray-900">2</strong> 门已发布，<strong className="text-gray-900">1</strong> 门建设中</span>
                <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium">
                  <Plus className="w-4 h-4" />
                  添加公开课
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <motion.div 
                    key={course.id}
                    whileHover={{ y: -4 }}
                    onClick={onCourseSelect}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-[2/1] rounded-xl overflow-hidden mb-3 border border-gray-100">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className={`absolute top-2 left-2 px-2 py-1 rounded text-[10px] font-bold text-white ${course.status === '已发布' ? 'bg-blue-500/80 backdrop-blur-sm' : 'bg-gray-400/80 backdrop-blur-sm'}`}>
                        {course.status}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900 truncate">{course.title}</h3>
                      {course.isCoop && (
                        <span className="text-[10px] text-blue-500 bg-blue-50 px-1 rounded border border-blue-100 shrink-0">协</span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      {course.students !== null && (
                        <span>报名人数 <strong className="text-gray-900">{course.students}</strong></span>
                      )}
                      {course.students !== null && <span className="w-[1px] h-3 bg-gray-300" />}
                      <span className="truncate">建设人 {course.teachers}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-[320px] flex flex-col gap-6 shrink-0">
            {/* AI Tools */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900">AI 学习工具</h3>
                <div className="flex gap-1">
                  <button className="p-1 rounded bg-gray-50 text-gray-400 hover:text-gray-600"><ChevronLeft className="w-4 h-4" /></button>
                  <button className="p-1 rounded bg-gray-50 text-gray-400 hover:text-gray-600"><ChevronRight className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-y-6 gap-x-2">
                {aiTools.map((tool, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer group">
                    <div className={`w-12 h-12 rounded-2xl ${tool.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <tool.icon className={`w-6 h-6 ${tool.color}`} />
                    </div>
                    <span className="text-xs text-gray-600 text-center">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Todo List */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <h3 className="font-bold text-gray-900">待批阅任务</h3>
                <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-md font-medium">0</span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
                <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center mb-4 relative">
                  <div className="absolute w-16 h-16 bg-white shadow-sm rounded-xl rotate-12 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-gray-200 rounded-md" />
                  </div>
                  <Sparkles className="w-6 h-6 absolute top-4 right-4 text-gray-300" />
                </div>
                <p className="text-sm">暂无待办任务</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
