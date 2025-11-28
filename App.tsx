
import React, { useState } from 'react';
import { 
  LayoutDashboard, Dumbbell, Utensils, Users, ClipboardList, 
  Settings, FileText, Activity, CheckCircle, User, TrendingUp
} from 'lucide-react';
import { Layout } from './components/Layout';
import { LandingPage } from './views/LandingPage';
import { LoginScreen } from './views/Auth';
import { 
    MemberDashboard, MemberDietLog, MemberWorkoutLog, MemberCheckIn, MemberProfileSettings, MemberProgress
} from './views/MemberViews';
import { 
    ProfessionalDashboard, LogReview, ExpertFeedbackForm, PlanManager
} from './views/ProfessionalViews';
import { AdminDashboard, UserManagement } from './views/AdminViews';
import { B2BUser, UserRole, NavItem } from './types';

// Mock User Data Helper
const getMockUser = (role: UserRole): B2BUser => ({
  user_id: '1',
  user_full_name: role === 'member' ? 'Alex Jordan' : 'Coach Sarah',
  user_email: 'user@born2build.com',
  user_phone: '1234567890',
  user_role: role,
  user_status: 'active',
  // Avatar removed as per schema
});

const App = () => {
  // Navigation State
  const [currentPage, setCurrentPage] = useState<'landing' | 'login' | 'app'>('landing');
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [currentUser, setCurrentUser] = useState<B2BUser | null>(null);
  const [activePath, setActivePath] = useState('/dashboard');

  // Handlers
  const handleLoginStart = () => setCurrentPage('login');
  
  const handleLoginComplete = (role: UserRole) => {
      setUserRole(role);
      setCurrentUser(getMockUser(role));
      setCurrentPage('app');
      setActivePath('/dashboard');
  };

  const handleLogout = () => {
      setUserRole(null);
      setCurrentUser(null);
      setCurrentPage('landing');
  };

  // Define Navigation based on Role
  const getNavItems = (role: UserRole): NavItem[] => {
    const common = [
        { id: 'settings', label: 'Settings', icon: <Settings />, path: '/settings' },
    ];

    switch (role) {
      case 'member':
        return [
          { id: 'dash', label: 'Dashboard', icon: <LayoutDashboard />, path: '/dashboard' },
          { id: 'progress', label: 'My Progress', icon: <TrendingUp />, path: '/progress' },
          { id: 'log-diet', label: 'Log Diet', icon: <Utensils />, path: '/log-diet' },
          { id: 'log-workout', label: 'Log Workout', icon: <Dumbbell />, path: '/log-workout' },
          { id: 'checkin', label: 'Weekly Check-in', icon: <CheckCircle />, path: '/checkin' },
          { id: 'profile', label: 'My Profile', icon: <User />, path: '/profile' },
          ...common
        ];
      case 'coach': // Handles Diet + Overall Feedback
      case 'trainer': // Handles Workouts
        return [
          { id: 'dash', label: 'Dashboard', icon: <LayoutDashboard />, path: '/dashboard' },
          { id: 'plans', label: 'Manage Plans', icon: <FileText />, path: '/manage-plans' },
          { id: 'reviews', label: 'Review Logs', icon: <ClipboardList />, path: '/reviews' },
          { id: 'feedback', label: 'Weekly Feedback', icon: <Activity />, path: '/feedback' },
          ...common
        ];
      case 'admin':
        return [
          { id: 'dash', label: 'Admin Dashboard', icon: <LayoutDashboard />, path: '/dashboard' },
          { id: 'users', label: 'User Mgmt', icon: <Users />, path: '/users' },
          ...common
        ];
      default:
        return [];
    }
  };

  // Render App Content
  const renderAppContent = () => {
    if (!userRole) return null;

    // 1. ADMIN
    if (userRole === 'admin') {
        switch (activePath) {
          case '/users': return <UserManagement />;
          default: return <AdminDashboard />;
        }
    }

    // 2. MEMBER
    if (userRole === 'member') {
      switch (activePath) {
        case '/dashboard': return <MemberDashboard />;
        case '/progress': return <MemberProgress />;
        case '/profile': return <MemberProfileSettings />;
        case '/log-diet': return <MemberDietLog />;
        case '/log-workout': return <MemberWorkoutLog />;
        case '/checkin': return <MemberCheckIn />;
        default: return <MemberDashboard />;
      }
    }

    // 3. PROFESSIONAL (Coach/Trainer)
    if (userRole === 'coach' || userRole === 'trainer') {
       switch (activePath) {
           case '/dashboard': return <ProfessionalDashboard role={userRole} />;
           case '/manage-plans': return <PlanManager role={userRole} />;
           case '/reviews': return <LogReview role={userRole} />;
           case '/feedback': return <ExpertFeedbackForm />;
           default: return <ProfessionalDashboard role={userRole} />;
       }
    }

    return <div className="p-10 text-center">View Not Implemented</div>;
  };

  // Main Render Switch
  if (currentPage === 'landing') {
      return <LandingPage onLoginClick={handleLoginStart} />;
  }

  if (currentPage === 'login') {
      return <LoginScreen onLogin={handleLoginComplete} />;
  }

  return (
    <Layout 
        user={currentUser!} 
        navItems={getNavItems(userRole!)} 
        activePath={activePath} 
        onNavigate={setActivePath}
        onLogout={handleLogout}
    >
        {renderAppContent()}
    </Layout>
  );
};

export default App;
