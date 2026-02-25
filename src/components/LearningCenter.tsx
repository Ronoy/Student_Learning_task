import { motion } from 'motion/react';
import { BookOpen, Clock, Trophy, PlayCircle, CheckCircle2 } from 'lucide-react';

export default function LearningCenter({ onTaskSelect }: { onTaskSelect: () => void }) {
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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col w-full">
      <header className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">我的学习中心</h1>
            <p className="text-gray-500 mt-1 text-sm">欢迎回来，今天想学习什么？</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-indigo-50 px-4 py-2 rounded-xl flex items-center gap-3">
              <div className="p-1.5 bg-indigo-100 rounded-lg text-indigo-600">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-indigo-400 font-medium uppercase">正在学习</div>
                <div className="text-sm font-bold text-indigo-700">2 个项目</div>
              </div>
            </div>
            <div className="bg-emerald-50 px-4 py-2 rounded-xl flex items-center gap-3">
              <div className="p-1.5 bg-emerald-100 rounded-lg text-emerald-600">
                <Trophy className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-emerald-400 font-medium uppercase">已完成</div>
                <div className="text-sm font-bold text-emerald-700">1 个项目</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full p-8">
        {/* Last Learned Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
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
              className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg shadow-indigo-900/20 active:scale-95"
            >
              继续学习
            </button>
          </div>
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-48 h-48 bg-indigo-400/20 rounded-full blur-2xl" />
        </motion.div>

        <h2 className="text-lg font-bold text-gray-900 mb-6">我的项目</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">
                    {project.progress}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${project.progress === 100 ? 'bg-emerald-500' : 'bg-indigo-500'}`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
              <div className="p-2 bg-gray-50/50">
                {project.tasks.map((task, tIdx) => (
                  <div 
                    key={tIdx}
                    onClick={() => {
                      if (task.title === "减速箱三维建模与装配") {
                        onTaskSelect();
                      }
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
      </main>
    </div>
  );
}
