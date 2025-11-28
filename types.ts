
// 1. b2b_users
export type UserRole = 'admin' | 'coach' | 'trainer' | 'member';
export type UserStatus = 'active' | 'inactive';

export interface B2BUser {
  user_id: string; // INT in DB
  user_full_name: string;
  user_email: string;
  user_phone: string;
  user_role: UserRole;
  user_status: UserStatus;
  // REMOVED avatar as it is not in b2b_users schema
}

export type User = B2BUser;

// 2. member_profiles
export interface MemberProfile {
  member_profile_id: string;
  member_id: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  height_cm: number;
  weight_start: number;
  medical_notes: string;
  diet_pref: 'veg' | 'nonveg' | 'vegan' | 'other';
  goal: string;
  program_start_date: string; // DATE
  program_end_date: string; // DATE
  onboarding_completed: boolean; // TINYINT(1)
}

// 3. diet_plans
export interface DietPlan {
  diet_plan_id: string;
  member_id: string;
  valid_from: string;
  valid_to: string;
  notes: string; // TEXT
}

// 4. workout_plans
export interface WorkoutPlan {
  workout_plan_id: string;
  member_id: string;
  valid_from: string;
  valid_to: string;
  notes: string; // TEXT
}

// 5. diet_logs
export interface DietLog {
  diet_log_id: string;
  member_id: string;
  log_date: string;
  meals: { name: string; time: string; items: string[] }[]; // JSON column
  deviation_flag: boolean;
  attachment_url?: string; // VARCHAR column
  dietitian_comments?: string;
  nutrition_score?: number;
  reviewed_by_dietitian: boolean;
  points_awarded: number;
}

// 6. workout_logs
export interface WorkoutLog {
  workout_log_id: string;
  member_id: string;
  log_date: string;
  completed_flag: boolean;
  energy_level: number; // INT
  injury_report?: string;
  attachments?: string[]; // JSON column
  trainer_comments?: string;
  reviewed_by_trainer: boolean;
  points_awarded: number;
}

// 7. expert_feedback
export interface ExpertFeedback {
  expert_feedback_id: string;
  member_id: string;
  week_number: number;
  comments: string;
  adherence_score: number;
  recommended_actions: string;
  last_update_dt: string;
}

// 8. weekly_checkins
export interface WeeklyCheckin {
  weekly_checkin_id: string;
  member_id: string;
  week_number: number;
  weight: number;
  mood_score: number;
  self_rating: number;
  challenges: string;
}

// Navigation Helper
export interface NavItem {
  id: string;
  label: string;
  icon: any;
  path: string;
}
