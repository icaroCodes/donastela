import { LucideIcon } from 'lucide-react';

export interface LinkItem {
  id: string;
  title: string;
  subtitle?: string;
  url: string;
  icon: LucideIcon;
  highlight?: boolean;
}

export interface SocialLink {
  id: string;
  url: string;
  icon: LucideIcon;
  label: string;
}
