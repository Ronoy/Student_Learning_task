import { motion } from 'motion/react';
import { useState } from 'react';
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
  ArrowLeft,
  Bot,
  Target,
  ChevronDown,
  Network,
  Map,
  MessageSquare,
  Settings2,
  X
} from 'lucide-react';

export default function LearningCenter({ course, onTaskSelect, onBack, onNavigateToGraph, onNavigateToPath }: { course?: any, onTaskSelect: () => void, onBack: () => void, onNavigateToGraph?: () => void, onNavigateToPath?: () => void }) {
  const isChapterBased = course?.type === '章节模式';
  const courseTitle = course?.title || "智能装备机械系统设计";
  
  const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);
  const [goalName, setGoalName] = useState('期末冲刺优秀');
  const [goalDescription, setGoalDescription] = useState('熟练掌握所有核心知识点，能够独立完成综合性项目设计。');

  const projects = [
    {
      id: 1,
      title: "项目一：减速箱设计",
      description: "掌握典型机械传动装置的设计与建模全流程。",
      progress: 0,
      tasks: [
        { 
          title: "减速箱三维建模与装配", 
          status: "in-progress", 
          duration: "45分钟", 
          isLastLearned: true,
          skill: "三维建模能力",
          agents: ["装配助手", "干涉检查", "标准件库", "工程图生成", "渲染引擎", "其他辅助工具"]
        },
        { 
          title: "减速箱工程图导出", 
          status: "pending", 
          duration: "30分钟",
          skill: "工程图绘制能力",
          agents: ["制图规范检查", "尺寸标注助手", "BOM表生成"]
        }
      ]
    },
    {
      id: 2,
      title: "项目二：机械臂设计",
      description: "学习多轴联动工业机器人的结构设计与运动仿真。",
      progress: 100,
      tasks: [
        { 
          title: "机械臂底座建模", 
          status: "completed", 
          duration: "60分钟",
          skill: "复杂曲面建模",
          agents: ["曲面分析", "拓扑优化", "材料库"]
        },
        { 
          title: "关节运动学仿真", 
          status: "completed", 
          duration: "45分钟",
          skill: "运动学仿真分析",
          agents: ["运动轨迹规划", "干涉检查", "受力分析", "动画生成"]
        }
      ]
    }
  ];

  const chapters = [
    {
      id: 1,
      title: "第8章 空间解析几何",
      tags: ["含作业、讨论"],
      resourceCount: 17,
      sections: [
        { title: "8.1 空间直角坐标系", tags: ["含作业、测验、讨论"], status: "completed", resourceCount: 35 },
        { title: "8.2 向量及其线性运算", tags: ["含作业"], status: "in-progress", resourceCount: 7, isLastLearned: true },
        { title: "8.3 平面与空间直线", tags: ["含作业"], status: "pending", resourceCount: 11 },
        { title: "8.4 曲面与空间曲线", tags: [], status: "pending", resourceCount: 10 },
        { title: "阶段测试1（第8章）", tags: [], status: "completed", resourceCount: 1 }
      ]
    },
    {
      id: 2,
      title: "第9章 多元函数微分学",
      tags: ["含讨论"],
      resourceCount: 3,
      sections: [
        { title: "9.1 二元函数的极限与连续", tags: ["含作业"], status: "pending", resourceCount: 7 },
        { title: "9.2 偏导数与全微分", tags: [], status: "pending", resourceCount: 9 }
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
              <h1 className="text-2xl font-bold text-gray-900">{courseTitle}</h1>
              <p className="text-gray-500 mt-1 text-sm">欢迎回来，赵老师同学，今天想学习什么？</p>
            </div>
          </div>
          <div className="flex gap-4">
            {isChapterBased && (
              <div className="flex items-center gap-2 mr-4 border-r border-gray-200 pr-6">
                <button 
                  onClick={onNavigateToGraph}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
                >
                  <Network className="w-4 h-4" />
                  知识图谱
                </button>
                <button 
                  onClick={onNavigateToPath}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Map className="w-4 h-4" />
                  推荐路径
                </button>
                <div className="w-px h-4 bg-gray-200 mx-2" />
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  话题讨论
                </button>
              </div>
            )}
            <div className="bg-indigo-50 px-4 py-2 rounded-xl flex items-center gap-3 border border-indigo-100">
              <div className="p-1.5 bg-indigo-100 rounded-lg text-indigo-600">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-indigo-400 font-bold uppercase">正在学习</div>
                <div className="text-sm font-bold text-indigo-700">{isChapterBased ? '2 个章节' : '2 个项目'}</div>
              </div>
            </div>
            <div className="bg-emerald-50 px-4 py-2 rounded-xl flex items-center gap-3 border border-emerald-100">
              <div className="p-1.5 bg-emerald-100 rounded-lg text-emerald-600">
                <Trophy className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-emerald-400 font-bold uppercase">已完成</div>
                <div className="text-sm font-bold text-emerald-700">{isChapterBased ? '7 个章节' : '1 个项目'}</div>
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
              <h2 className="text-2xl font-bold">
                {isChapterBased ? '8.2 向量及其线性运算' : '减速箱三维建模与装配'}
              </h2>
              <p className="text-indigo-100/80 text-sm">
                {isChapterBased ? '第8章 空间解析几何' : '项目一：减速箱设计 · 任务 1/2'}
              </p>
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
          {/* Left: Projects/Chapters List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              {isChapterBased ? '课程章节' : '我的项目'}
              <span className="text-xs font-normal text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">共 {isChapterBased ? chapters.length : projects.length} 个</span>
            </h2>
            
            {isChapterBased ? (
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                {chapters.map((chapter) => (
                  <div key={chapter.id} className="border-b border-gray-100 last:border-0">
                    {/* Chapter Header */}
                    <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="flex items-center gap-3">
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                        <BookOpen className="w-4 h-4 text-indigo-500" />
                        <span className="font-bold text-gray-900">{chapter.title}</span>
                        {chapter.tags.length > 0 && (
                          <div className="flex gap-1 ml-2">
                            {chapter.tags.map(tag => (
                              <span key={tag} className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{tag}</span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                        <span className="text-xs text-gray-400 w-20 text-right">{chapter.resourceCount} 个资源活动</span>
                      </div>
                    </div>
                    {/* Sections */}
                    <div className="bg-gray-50/50 py-2">
                      {chapter.sections.map((section, sIdx) => (
                        <div key={sIdx} onClick={onTaskSelect} className="flex items-center justify-between py-3 pl-12 pr-4 hover:bg-white cursor-pointer group transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-indigo-400 transition-colors" />
                            <span className="text-sm text-gray-700 group-hover:text-indigo-600 transition-colors">{section.title}</span>
                            {section.tags.length > 0 && (
                              <div className="flex gap-1 ml-2">
                                {section.tags.map(tag => (
                                  <span key={tag} className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{tag}</span>
                                ))}
                              </div>
                            )}
                            {section.isLastLearned && (
                              <span className="text-[10px] text-indigo-500 font-bold flex items-center gap-1 ml-2">
                                <div className="w-1 h-1 rounded-full bg-indigo-500 animate-pulse" />
                                上次学习
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-4">
                            {section.status === 'completed' ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            ) : section.status === 'in-progress' ? (
                              <div className="w-4 h-4 rounded-full border-2 border-indigo-500 relative flex items-center justify-center">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                              </div>
                            ) : (
                              <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                            )}
                            <span className="text-xs text-gray-400 w-20 text-right">{section.resourceCount} 个资源活动</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
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
                          onClick={onTaskSelect}
                          className="flex flex-col p-3 rounded-xl transition-colors cursor-pointer hover:bg-white hover:shadow-sm group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              {task.status === 'completed' ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                              ) : task.status === 'in-progress' ? (
                                <PlayCircle className="w-5 h-5 text-indigo-500 group-hover:scale-110 transition-transform" />
                              ) : (
                                <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                              )}
                              <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                  <span className={`text-sm font-medium ${task.status === 'completed' ? 'text-gray-500' : 'text-gray-900'}`}>
                                    {task.title}
                                  </span>
                                  {task.status === 'completed' && <span className="text-[10px] bg-emerald-100 text-emerald-600 px-1.5 py-0.5 rounded">学习完成</span>}
                                  {task.status === 'in-progress' && <span className="text-[10px] bg-indigo-100 text-indigo-600 px-1.5 py-0.5 rounded">进行中</span>}
                                  {task.status === 'pending' && <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">未学习</span>}
                                </div>
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

                          {/* Skills and Agents Row */}
                          <div className="flex items-center gap-3 mt-3 ml-8">
                            {task.skill && (
                              <div className="flex items-center gap-1 text-[10px] bg-blue-50 text-blue-600 border border-blue-100 px-2 py-1 rounded-md">
                                <Target className="w-3 h-3" />
                                {task.skill}
                              </div>
                            )}
                            {task.agents && task.agents.length > 0 && (
                              <div className="flex items-center gap-1.5">
                                <Bot className="w-3 h-3 text-purple-500" />
                                <div className="flex items-center gap-1">
                                  {task.agents.slice(0, 5).map((agent, i) => (
                                    <span key={i} className="text-[10px] bg-purple-50 text-purple-600 border border-purple-100 px-2 py-1 rounded-md">
                                      {agent}
                                    </span>
                                  ))}
                                  {task.agents.length > 5 && (
                                    <span className="text-[10px] text-gray-400 px-1">...</span>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Stats & Todo */}
          <div className="space-y-8">
            {/* Course Mastery */}
            <section className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm relative">
              <h3 className="text-sm font-bold text-gray-900 mb-6 flex items-center justify-between">
                课程掌握度
                <button 
                  onClick={() => setIsGoalModalOpen(true)}
                  className="text-[10px] text-indigo-600 hover:bg-indigo-50 px-2 py-1 rounded-md transition-colors flex items-center gap-1"
                >
                  <Settings2 className="w-3 h-3" />
                  设置学习目标
                </button>
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
                  <span className="absolute text-2xl font-bold text-gray-900">{isChapterBased ? '18%' : '0%'}</span>
                </div>
                <div className="text-center mt-2">
                  <p className="text-xs text-indigo-500 font-medium mb-1">当前目标：{goalName}</p>
                  <p className="text-[10px] text-gray-400">系统将根据目标统计掌握度</p>
                </div>
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
                <span className="text-lg font-bold text-gray-900">{isChapterBased ? '24' : '0'}</span>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm flex items-center justify-between group cursor-pointer hover:border-rose-200 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600">
                    <FileQuestion className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">错题集</span>
                </div>
                <span className="text-lg font-bold text-gray-900">{isChapterBased ? '30' : '0'}</span>
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

      {/* Goal Setting Modal */}
      {isGoalModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 w-[400px] shadow-xl relative"
          >
            <button 
              onClick={() => setIsGoalModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-600" />
              自定义学习目标
            </h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-bold text-gray-700">目标名称</label>
                  <span className="text-xs text-gray-400">{goalName.length}/50</span>
                </div>
                <input 
                  type="text" 
                  maxLength={50}
                  value={goalName}
                  onChange={(e) => setGoalName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm"
                  placeholder="例如：期末冲刺、掌握核心技能"
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-bold text-gray-700">目标描述与需求</label>
                  <span className="text-xs text-gray-400">{goalDescription.length}/200</span>
                </div>
                <textarea 
                  maxLength={200}
                  value={goalDescription}
                  onChange={(e) => setGoalDescription(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm h-24 resize-none"
                  placeholder="描述您的学习兴趣和具体需求..."
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">系统将根据您设定的目标，动态调整推荐路径并统计课程掌握度。</p>
            </div>
            
            <div className="mt-8 flex justify-end gap-3">
              <button 
                onClick={() => setIsGoalModalOpen(false)} 
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
              >
                取消
              </button>
              <button 
                onClick={() => setIsGoalModalOpen(false)} 
                className="px-6 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors shadow-sm"
              >
                保存目标
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
