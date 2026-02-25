export interface TaskStep {
  id: string;
  title: string;
  description: string;
  tags: string[];
  requirement: string;
}

export interface LearningActivity {
  id: string;
  type: 'quiz' | 'ppt' | 'video' | 'document';
  title: string;
  status: 'not_started' | 'in_progress' | 'completed';
}

export interface TaskData {
  title: string;
  progress: number;
  description: string;
  goal: string;
  steps: TaskStep[];
  knowledgePoints: string[];
  professionalSkills: string[];
  generalSkills: string[];
  competencyPoints: string[];
  activities: LearningActivity[];
}
