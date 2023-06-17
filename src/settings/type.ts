export interface Blog {
  title: string;
  content_text: string;
  id: number;
  photo_url: string;
  created_at: Date;
  updated_at: Date;
  user_id: number;
  description: string;
  content_html: string;
  category: string;
}

export interface Response {
  success: boolean;
  message: string;
  offset: number;
  limit: number;
  blogs: Blog[];
}

export interface Task {
  id: number;
  title: string;
}

export interface Transaction {
  reason: string;
  amount: string;
  type: 'Credit' | 'Debit';
  timestamp: string;
}

export interface BlogCardProps {
  post: Blog;
}

export interface Emoji {
  name: string;
  symbol: string;
  keywords: string;
}
