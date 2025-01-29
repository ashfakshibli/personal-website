// src/types/timeline.ts

export interface Institution {
    name: string;
    logo: string;
  }
  
  export interface MainContent {
    role: string;
    description: string;
    institutions: Institution[];
  }
  
  export interface ExtraContent {
    logo: string;
    title: string;
    subtitle: string;
  }
  
  export interface BaseTimelineItem {
    year: string;
  }
  
  export interface StandardTimelineItem extends BaseTimelineItem {
    role: string;
    description: string;
    company: string;
    logo: string;
    mainContent?: never;
    extraContent?: never;
  }
  
  export interface EducationTimelineItem extends BaseTimelineItem {
    role?: never;
    description?: never;
    company?: never;
    logo?: never;
    mainContent: MainContent;
    extraContent?: ExtraContent;
  }
  
  export type TimelineItem = StandardTimelineItem | EducationTimelineItem;
  
  export interface TimelineItemProps {
    item: TimelineItem;
    index: number;
  }