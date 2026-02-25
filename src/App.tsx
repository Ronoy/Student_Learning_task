/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import { TaskData } from './types';

const MOCK_DATA: TaskData = {
  title: "减速箱三维建模与装配",
  progress: 0,
  description: "某机电设备制造企业需要设计一款小型减速箱，要求使用SolidWorks完成三维建模并生成工程图",
  goal: "独立完成减速箱箱体、齿轮轴等核心零件的建模与装配，输出符合GB的工程图纸",
  knowledgePoints: ["5.1 工业搬运", "1.1.1.3.1 电子数字"],
  professionalSkills: [],
  generalSkills: ["4.1.1 基本操作"],
  competencyPoints: ["2.1 核心部件", "2.1.1 机械臂"],
  steps: [
    {
      id: '1',
      title: "完成箱体基础特征建模",
      description: "",
      tags: ["2.1 核心部件", "2.1.1 机械臂", "2.1.1.1 关节类型", "5.1 工业搬运", "1.1.1.3.1 电子数字计算机的基本概念1", "1.2.1.2 运算器"],
      requirement: "根据二维草图尺寸，使用拉伸/切除命令完成箱体主体结构"
    },
    {
      id: '2',
      title: "添加轴承孔与定位孔",
      description: "",
      tags: [],
      requirement: "通过异形孔向导功能生成标准轴承孔，定位孔需标注形位公差"
    }
  ],
  activities: [
    {
      id: 'a1',
      type: 'quiz',
      title: "减速箱三维建模与装配",
      status: 'not_started'
    },
    {
      id: 'a2',
      type: 'ppt',
      title: "PLC控制系统电源故障排查实训...",
      status: 'not_started'
    }
  ]
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <ContentArea data={MOCK_DATA} />
        <Sidebar data={MOCK_DATA} />
      </div>
      
      {/* Floating AI Assistant Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-12 h-12 bg-indigo-600 text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group">
          <span className="text-[10px] font-bold writing-vertical-rl rotate-180">AI 助学</span>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
        </button>
      </div>
    </div>
  );
}
