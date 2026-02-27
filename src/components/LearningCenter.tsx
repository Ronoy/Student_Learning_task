import { motion } from 'motion/react';
import { 
  BookOpen, 
  Clock, 
  Trophy, 
  PlayCircle, 
  CheckCircle2, 
  AlertCircle, 
  FileQuestion, 
  ListTodo,
  ChevronRight,
  ArrowLeft
} from 'lucide-react';

export default function LearningCenter({ onTaskSelect, onBack }: { onTaskSelect: () => void, onBack: () => void }) {
  const projects = [
    {
      id: 1,
      title: "项目一：减速箱设计",
      description: "掌握典型机械传动装置的设计与建模全流程。",
      progress: 0,
      tasks: [
        { title: "减速箱三维建模与装配", status: "in-progress", duration: "45分钟", isLastLearned: true },
        { title: "减速箱工程图导出", status: "pending", duration: "30分钟" }
      ]
    },
    {
      id: 2,
      title: "项目二：机械臂设计",
      description: "学习多轴联动工业机器人的结构设计与运动仿真。",
      progress: 100,
      tasks: [
        { title: "机械臂底座建模", status: "completed", duration: "60分钟" },
        { title: "关节运动学仿真", status: "completed", duration: "45分钟" }
      ]
    }
  ];

  const todoTasks = [
    { title: "提交减速箱装配报告", deadline: "今天 18:00", priority: "high" },
    { title: "预习机械臂控制算法", deadline: "明天", priority: "medium" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col w-full font-sans">
      <header className="bg-white border-b border-gray-200 px-8 py-6 shrink-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">我的学习中心</h1>
              <p className="text-gray-500 mt-1 text-sm">欢迎回来，赵老师同学，今天想学习什么？</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-indigo-50 px-4 py-2 rounded-xl flex items-center gap-3 border border-indigo-100">
              <div className="p-1.5 bg-indigo-100 rounded-lg text-indigo-600">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-indigo-400 font-bold uppercase">正在学习</div>
                <div className="text-sm font-bold text-indigo-700">2 个项目</div>
              </div>
            </div>
            <div className="bg-emerald-50 px-4 py-2 rounded-xl flex items-center gap-3 border border-emerald-100">
              <div className="p-1.5 bg-emerald-100 rounded-lg text-emerald-600">
                <Trophy className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-emerald-400 font-bold uppercase">已完成</div>
                <div className="text-sm font-bold text-emerald-700">1 个项目</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full p-8 overflow-y-auto">
        {/* Hero: Last Learned */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group"
        >
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-indigo-100 text-sm font-medium">
                <Clock className="w-4 h-4" />
                <span>上次学习位置</span>
              </div>
              <h2 className="text-2xl font-bold">减速箱三维建模与装配</h2>
              <p className="text-indigo-100/80 text-sm">项目一：减速箱设计 · 任务 1/2</p>
            </div>
            <button 
              onClick={onTaskSelect}
              className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-lg shadow-indigo-900/20 active:scale-95 flex items-center gap-2"
            >
              继续学习
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Projects List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              我的项目
              <span className="text-xs font-normal text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">共 {projects.length} 个</span>
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {projects.map((project, idx) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{project.description}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md mb-2">
                          {project.progress}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ${project.progress === 100 ? 'bg-emerald-500' : 'bg-indigo-500'}`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="p-2 bg-gray-50/50">
                    {project.tasks.map((task, tIdx) => (
                      <div 
                        key={tIdx}
                        onClick={() => {
                          if (task.title === "减速箱三维建模与装配") onTaskSelect();
                        }}
                        className={`flex items-center justify-between p-3 rounded-xl transition-colors ${task.title === "减速箱三维建模与装配" ? 'cursor-pointer hover:bg-white hover:shadow-sm group' : 'opacity-60 cursor-not-allowed'}`}
                      >
                        <div className="flex items-center gap-3">
                          {task.status === 'completed' ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                          ) : task.status === 'in-progress' ? (
                            <PlayCircle className={`w-5 h-5 ${task.title === "减速箱三维建模与装配" ? 'text-indigo-500 group-hover:scale-110 transition-transform' : 'text-gray-400'}`} />
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                          )}
                          <div className="flex flex-col">
                            <span className={`text-sm font-medium ${task.status === 'completed' ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                              {task.title}
                            </span>
                            {task.isLastLearned && (
                              <span className="text-[10px] text-indigo-500 font-bold flex items-center gap-1 mt-0.5">
                                <div className="w-1 h-1 rounded-full bg-indigo-500 animate-pulse" />
                                上次学习
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          {task.duration}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Stats & Todo */}
          <div className="space-y-8">
            {/* Course Mastery */}
            <section className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-6 flex items-center justify-between">
                课程掌握度
                <button className="text-[10px] text-indigo-600 hover:underline">查看详情</button>
              </h3>
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#F3F4F6" strokeWidth="8" />
                    <circle 
                      cx="50" cy="50" r="45" fill="none" stroke="#6366F1" strokeWidth="8" 
                      strokeDasharray="283" strokeDashoffset="283"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <span className="absolute text-2xl font-bold text-gray-900">0%</span>
                </div>
                <p className="text-xs text-gray-400 text-center">继续加油！您已经开启了学习之旅</p>
              </div>
            </section>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm flex items-center justify-between group cursor-pointer hover:border-indigo-200 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">薄弱能力项</span>
                </div>
                <span className="text-lg font-bold text-gray-900">0</span>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm flex items-center justify-between group cursor-pointer hover:border-rose-200 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600">
                    <FileQuestion className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">错题集</span>
                </div>
                <span className="text-lg font-bold text-gray-900">0</span>
              </div>
            </div>

            {/* Todo List */}
            <section className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ListTodo className="w-4 h-4 text-indigo-500" />
                待办任务列表
              </h3>
              <div className="space-y-3">
                {todoTasks.map((todo, i) => (
                  <div key={i} className="p-3 bg-gray-50 rounded-xl border border-transparent hover:border-gray-200 transition-all">
                    <div className="flex items-start justify-between mb-1">
                      <span className="text-xs font-bold text-gray-800 line-clamp-1">{todo.title}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded uppercase font-bold ${todo.priority === 'high' ? 'bg-rose-100 text-rose-600' : 'bg-amber-100 text-amber-600'}`}>
                        {todo.priority}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400">
                      <Clock className="w-3 h-3" />
                      截止：{todo.deadline}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
