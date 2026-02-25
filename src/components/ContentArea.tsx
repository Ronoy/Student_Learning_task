import { TaskData } from '../types';
import { motion } from 'motion/react';
import { useState } from 'react';
import PreviewModal from './PreviewModal';
import Markdown from 'react-markdown';
import { FileText, Presentation } from 'lucide-react';

export default function ContentArea({ data }: { data: TaskData }) {
  const [preview, setPreview] = useState<{
    isOpen: boolean;
    type: 'image' | 'video';
    src: string;
    title: string;
  }>({
    isOpen: false,
    type: 'image',
    src: '',
    title: ''
  });

  const openPreview = (type: 'image' | 'video', src: string, title: string) => {
    setPreview({ isOpen: true, type, src, title });
  };

  return (
    <main className="flex-1 overflow-y-auto p-8 bg-white relative">
      <div className="max-w-4xl mx-auto space-y-16 pb-32">
        {/* Section: Scenario */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-indigo-500 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-900">任务情景描述</h2>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">{data.title}</h3>
            <div className="text-gray-600 leading-relaxed prose prose-indigo prose-a:text-indigo-600 hover:prose-a:text-indigo-800 prose-a:no-underline hover:prose-a:underline max-w-none">
              <Markdown>{data.description}</Markdown>
            </div>
            
            {/* Multimedia Content Example */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => openPreview('video', 'https://picsum.photos/seed/mechanical/1920/1080', '任务演示：减速箱装配全过程')}
                className="aspect-video rounded-2xl overflow-hidden bg-gray-900 border border-gray-200 group relative cursor-pointer shadow-lg"
              >
                <img 
                  src="https://picsum.photos/seed/mechanical/800/450" 
                  alt="Mechanical Design" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
                      <svg className="w-6 h-6 text-indigo-600 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold text-white bg-indigo-600 px-2 py-1 rounded shadow-sm">VIDEO</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-xs font-medium">任务演示：减速箱装配全过程</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-indigo-500" />
                    </div>
                    <span className="text-[10px] text-white/70">04:20 / 12:45</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                onClick={() => openPreview('image', 'https://picsum.photos/seed/blueprint/1920/1080', '设计工程图参考：箱体剖视图')}
                className="aspect-video rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 group cursor-pointer shadow-md relative"
              >
                <img 
                  src="https://picsum.photos/seed/blueprint/800/450" 
                  alt="Blueprint" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold text-white bg-emerald-600 px-2 py-1 rounded shadow-sm">IMAGE</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xs font-medium">设计工程图参考：箱体剖视图</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => openPreview('image', 'https://picsum.photos/seed/ppt/1920/1080', '项目启动汇报PPT')}
                className="aspect-video rounded-2xl overflow-hidden bg-orange-50 border border-orange-100 group cursor-pointer shadow-sm relative flex flex-col items-center justify-center hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 bg-white text-orange-500 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                  <Presentation className="w-8 h-8" />
                </div>
                <h4 className="font-medium text-gray-800">项目启动汇报</h4>
                <p className="text-xs text-gray-500 mt-1">PPTX · 2.4 MB</p>
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded shadow-sm">PPT</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => openPreview('image', 'https://picsum.photos/seed/doc/1920/1080', '减速箱设计规范文档')}
                className="aspect-video rounded-2xl overflow-hidden bg-blue-50 border border-blue-100 group cursor-pointer shadow-sm relative flex flex-col items-center justify-center hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 bg-white text-blue-500 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                  <FileText className="w-8 h-8" />
                </div>
                <h4 className="font-medium text-gray-800">减速箱设计规范</h4>
                <p className="text-xs text-gray-500 mt-1">PDF · 1.8 MB</p>
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded shadow-sm">DOC</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section: Goal */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-indigo-500 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-900">任务目标</h2>
          </div>
          <div className="text-gray-600 leading-relaxed space-y-2 prose prose-indigo prose-a:text-indigo-600 hover:prose-a:text-indigo-800 prose-a:no-underline hover:prose-a:underline max-w-none">
            {data.goal.split('\n').map((line, i) => (
              <div key={i}>
                <Markdown>{line}</Markdown>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Steps */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-indigo-500 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-900">任务步骤</h2>
          </div>
          
          <div className="space-y-10">
            {data.steps.map((step, index) => (
              <div key={step.id} className="relative pl-8">
                {/* Connector Line */}
                {index !== data.steps.length - 1 && (
                  <div className="absolute left-[11px] top-8 bottom-[-40px] w-0.5 bg-gray-100" />
                )}
                
                <div className="flex items-start gap-4">
                  <div className="absolute left-0 top-1 flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center border-2 border-indigo-500 z-10">
                      <div className="w-2 h-2 rounded-full bg-indigo-500" />
                    </div>
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-indigo-600 font-bold">步骤{index + 1}</span>
                      <h4 className="text-lg font-bold text-gray-900">{step.title}</h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs text-gray-400 mr-2">能力项</span>
                      {step.tags.map(tag => {
                        // Determine color based on tag content matching the arrays in MOCK_DATA
                        let colorClass = "bg-gray-50 text-gray-500 border-gray-100";
                        if (data.knowledgePoints.includes(tag)) {
                          colorClass = "bg-blue-50 text-blue-600 border-blue-100";
                        } else if (data.professionalSkills.includes(tag)) {
                          colorClass = "bg-emerald-50 text-emerald-600 border-emerald-100";
                        } else if (data.generalSkills.includes(tag)) {
                          colorClass = "bg-amber-50 text-amber-600 border-amber-100";
                        } else if (data.competencyPoints.includes(tag)) {
                          colorClass = "bg-purple-50 text-purple-600 border-purple-100";
                        }
                        
                        return (
                          <span key={tag} className={`px-2 py-1 rounded text-[10px] border ${colorClass}`}>
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-xs text-gray-400 mt-1 shrink-0">步骤要求</span>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.requirement}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Preview Modal */}
      <PreviewModal 
        isOpen={preview.isOpen}
        onClose={() => setPreview(prev => ({ ...prev, isOpen: false }))}
        type={preview.type}
        src={preview.src}
        title={preview.title}
      />
    </main>
  );
}
