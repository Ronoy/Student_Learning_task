/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import LearningCenter from './components/LearningCenter';
import CourseList from './components/CourseList';
import KnowledgeGraph from './components/KnowledgeGraph';
import RecommendedPath from './components/RecommendedPath';
import { ToastContainer } from './components/Toast';
import { TaskData } from './types';
import { useState } from 'react';

const MOCK_DATA: TaskData = {
  title: "减速箱三维建模与装配",
  progress: 0,
  description: "某机电设备制造企业需要设计一款小型单级圆柱齿轮减速箱，用于工业传送带的驱动系统。该减速箱需满足结构紧凑、传动平稳、承载能力强的要求。作为机械设计工程师，你需要根据已有的二维装配图和零件草图，使用SolidWorks软件完成减速箱所有核心零部件（包括上盖、下箱体、输入轴、输出轴、齿轮、轴承端盖等）的三维实体建模，并进行虚拟装配。装配完成后，需进行干涉检查，确保各部件配合无误，最终输出符合[国家标准（GB/T 4458.1-2002 机械制图 图样画法）](http://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=8A146F9733D41AB6C6B7B4B270A18A0E)的工程图纸，为后续的数控加工和实际装配提供准确的制造依据。",
  goal: "1. 熟练掌握SolidWorks草图绘制、特征建模（拉伸、旋转、切除、扫描等）功能，独立完成减速箱箱体、齿轮、轴类等15个以上核心零件的三维建模。\n2. 掌握自下而上的装配体设计方法，运用标准配合（重合、平行、同轴心等）和高级配合（齿轮配合、对称配合等）完成减速箱的虚拟装配。\n3. 能够使用干涉检查工具分析装配体，并根据检查结果修改零件尺寸，消除干涉。\n4. 掌握工程图模块的使用，能够由三维模型生成符合[GB/T 131-2006 表面结构表示法](http://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=1C661D79E78E6B1D21D0E0E6C58B1C8E)和[GB/T 1182-2018 几何公差](http://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=7A4F0D421B2D8E3845A8B428A25F8B8E)标准的零件图和装配图，正确标注尺寸、公差、表面粗糙度及技术要求。",
  knowledgePoints: ["5.1 机械制图国家标准", "1.1 三维建模基础理论", "3.2 齿轮传动原理", "4.1 公差与配合", "5.2 表面粗糙度", "6.1 材料力学基础", "7.2 机械加工工艺", "8.1 机械原理"],
  professionalSkills: ["3.1.1 复杂零件特征建模", "3.1.2 装配体约束与配合", "3.1.3 干涉检查与分析", "3.1.4 工程图生成与标注", "3.2.1 钣金设计基础", "3.3.1 焊件设计基础", "4.1.1 运动仿真分析"],
  generalSkills: ["4.1.1 计算机基本操作", "4.2.1 空间想象能力", "4.3.1 工程图纸识读", "5.1.1 团队协作能力", "5.2.1 沟通表达能力", "6.1.1 创新思维能力"],
  competencyPoints: ["2.1 严谨的工程态度", "2.2 规范的设计习惯", "2.3 解决复杂工程问题的能力", "3.1 持续学习的意愿", "3.2 职业道德与规范", "4.1 环保与安全意识"],
  steps: [
    {
      id: '1',
      title: "完成箱体基础特征建模",
      description: "根据二维草图尺寸，使用拉伸、切除、圆角等命令完成下箱体和上盖的主体结构建模，注意壁厚均匀和拔模斜度的设置。",
      tags: ["3.1.1 复杂零件特征建模", "4.2.1 空间想象能力", "1.1 三维建模基础理论", "2.2 规范的设计习惯"],
      requirement: "根据二维草图尺寸，使用拉伸、切除、圆角等命令完成下箱体和上盖的主体结构建模，注意壁厚均匀和拔模斜度的设置。",
      imageUrls: [
        "https://picsum.photos/seed/gearbox1/800/600",
        "https://picsum.photos/seed/gearbox1_detail/800/600",
        "https://picsum.photos/seed/gearbox1_sketch/800/600"
      ]
    },
    {
      id: '2',
      title: "添加轴承孔与定位孔",
      description: "通过异形孔向导功能生成标准轴承孔、螺纹孔和销钉孔。定位孔需严格按照图纸标注形位公差，确保装配精度。",
      tags: ["3.1.1 复杂零件特征建模", "4.1 公差与配合"],
      requirement: "通过异形孔向导功能生成标准轴承孔、螺纹孔和销钉孔。定位孔需严格按照图纸标注形位公差，确保装配精度。",
      imageUrl: "https://picsum.photos/seed/gearbox2/800/600"
    },
    {
      id: '3',
      title: "齿轮与轴类零件建模",
      description: "使用旋转特征生成齿轮毛坯和阶梯轴，利用方程式或齿轮生成工具创建渐开线齿廓，完成键槽的切除特征。",
      tags: ["3.1.1 复杂零件特征建模", "3.2 齿轮传动原理"],
      requirement: "使用旋转特征生成齿轮毛坯和阶梯轴，利用方程式或齿轮生成工具创建渐开线齿廓，完成键槽的切除特征。",
      imageUrl: "https://picsum.photos/seed/gearbox3/800/600"
    },
    {
      id: '4',
      title: "减速箱虚拟装配与干涉检查",
      description: "将所有零件导入装配体，添加同轴心、重合、齿轮等配合关系。运行干涉检查，确保齿轮啮合正确且无实体干涉。",
      tags: ["3.1.2 装配体约束与配合", "3.1.3 干涉检查与分析", "2.1 严谨的工程态度"],
      requirement: "将所有零件导入装配体，添加同轴心、重合、齿轮等配合关系。运行干涉检查，确保齿轮啮合正确且无实体干涉。",
      imageUrl: "https://picsum.photos/seed/gearbox4/800/600"
    }
  ],
  activities: [
    {
      id: 'a1',
      type: 'quiz',
      title: "减速箱三维建模前置知识测验",
      status: 'not_started'
    },
    {
      id: 'a2',
      type: 'ppt',
      title: "SolidWorks装配体设计规范",
      status: 'not_started'
    },
    {
      id: 'a3',
      type: 'video',
      title: "齿轮参数化建模实操演示",
      status: 'not_started'
    }
  ]
};

export default function App() {
  const [currentView, setCurrentView] = useState<'courseList' | 'learningCenter' | 'task' | 'knowledgeGraph' | 'recommendedPath'>('courseList');
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <ToastContainer />
      {currentView === 'task' ? (
        <>
          <Header data={MOCK_DATA} onNavigateHome={() => setCurrentView('learningCenter')} />
          <div className="flex flex-1 overflow-hidden">
            <ContentArea data={MOCK_DATA} />
            <Sidebar data={MOCK_DATA} />
          </div>
        </>
      ) : currentView === 'learningCenter' ? (
        <LearningCenter 
          course={selectedCourse} 
          onTaskSelect={() => setCurrentView('task')} 
          onBack={() => setCurrentView('courseList')} 
          onNavigateToGraph={() => setCurrentView('knowledgeGraph')}
          onNavigateToPath={() => setCurrentView('recommendedPath')}
        />
      ) : currentView === 'knowledgeGraph' ? (
        <KnowledgeGraph 
          course={selectedCourse}
          onBack={() => setCurrentView('learningCenter')}
        />
      ) : currentView === 'recommendedPath' ? (
        <RecommendedPath 
          course={selectedCourse}
          onBack={() => setCurrentView('learningCenter')}
        />
      ) : (
        <CourseList onCourseSelect={(course) => { setSelectedCourse(course); setCurrentView('learningCenter'); }} />
      )}
      
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
