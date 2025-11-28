
import React, { useState } from 'react';
import { 
  Menu, X, Sun, Moon, LogOut, Bell, Search, User as UserIcon
} from 'lucide-react';
import { User, NavItem } from '../types';
import { Logo } from './Logo';

interface LayoutProps {
  children: React.ReactNode;
  user: User;
  navItems: NavItem[];
  activePath: string;
  onNavigate: (path: string) => void;
  onLogout: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, user, navItems, activePath, onNavigate, onLogout 
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex font-sans">
      
      {/* Sidebar - Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-dark/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-50 
          w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800
          transform transition-transform duration-300 lg:transform-none
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          flex flex-col
        `}
      >
        <div className="p-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 h-20">
          <div className="flex items-center gap-3">
            {/* New Logo Component */}
            <Logo size="sm" showText={false} className="w-10 h-10" />
            <div>
              <h1 className="font-extrabold text-xl tracking-tight text-brand-blue dark:text-white leading-none">
                Born<span className="text-brand-orange">2</span>Build
              </h1>
              <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mt-1">Fitness Portal</p>
            </div>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-slate-500 hover:text-brand-orange transition-colors">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = activePath === item.path;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.path);
                  setIsSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                  ${isActive 
                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20 font-semibold' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-brand-blue'
                  }
                `}
              >
                {React.cloneElement(item.icon, { 
                  size: 20, 
                  className: isActive ? 'text-white' : 'text-slate-400 group-hover:text-brand-blue transition-colors' 
                })}
                <span className="text-sm">{item.label}</span>
                {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white"></div>}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
             <div className="flex items-center gap-3 mb-4 px-2 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                 <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300">
                    <UserIcon size={20} />
                 </div>
                 <div className="overflow-hidden">
                     <p className="font-bold text-sm truncate text-slate-800 dark:text-slate-100">{user.user_full_name}</p>
                     <p className="text-xs text-slate-500 truncate capitalize font-medium">{user.user_role.replace('_', ' ').toLowerCase()}</p>
                 </div>
             </div>

            <div className="grid grid-cols-2 gap-2">
                <button 
                    onClick={toggleTheme}
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-700"
                    title="Toggle Theme"
                >
                    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button 
                    onClick={onLogout}
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors border border-transparent hover:border-red-100"
                    title="Sign Out"
                >
                    <LogOut size={18} />
                </button>
            </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Header */}
        <header className="h-20 px-6 lg:px-10 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-between z-10 sticky top-0">
            <div className="flex items-center gap-4">
                <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-slate-500 hover:text-brand-blue">
                    <Menu size={24} />
                </button>
                <h2 className="text-xl font-bold text-slate-800 dark:text-white hidden sm:block">
                    {navItems.find(i => i.path === activePath)?.label || 'Dashboard'}
                </h2>
            </div>
            
            <div className="flex items-center gap-4">
                <div className="relative hidden sm:block group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-brand-blue transition-colors" size={18} />
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="pl-10 pr-4 py-2.5 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 w-64 transition-all hover:bg-white dark:hover:bg-slate-900 focus:w-72 shadow-sm"
                    />
                </div>
                <button className="relative p-2.5 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition-colors hover:text-brand-blue">
                    <Bell size={22} />
                    <span className="absolute top-2 right-2.5 w-2.5 h-2.5 bg-brand-orange rounded-full border-2 border-white dark:border-slate-900"></span>
                </button>
            </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8 pb-20 bg-slate-50 dark:bg-slate-950 scroll-smooth">
            <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {children}
            </div>
        </div>
      </main>
    </div>
  );
};