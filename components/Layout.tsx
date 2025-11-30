import React, { useState } from 'react';
import { 
  Menu, X, LogOut, Bell, Search, User as UserIcon
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

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      
      {/* Sidebar - Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-50 
          w-72 bg-white border-r border-slate-200
          transform transition-transform duration-300 lg:transform-none
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          flex flex-col
        `}
      >
        <div className="p-6 flex items-center justify-between border-b border-slate-100 h-20">
          <div className="flex items-center gap-3">
            {/* New Logo Component */}
            <Logo size="sm" showText={false} className="w-10 h-10" />
            <div>
              <h1 className="font-extrabold text-xl tracking-tight text-brand-blue leading-none">
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
                    : 'text-slate-600 hover:bg-slate-50 hover:text-brand-blue'
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

        <div className="p-4 border-t border-slate-200">
             <div className="flex items-center gap-3 mb-4 px-2 p-3 bg-slate-50 rounded-xl">
                 <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                    <UserIcon size={20} />
                 </div>
                 <div className="overflow-hidden">
                     <p className="font-bold text-sm truncate text-slate-800">{user.user_full_name}</p>
                     <p className="text-xs text-slate-500 truncate capitalize font-medium">{user.user_role.replace('_', ' ').toLowerCase()}</p>
                 </div>
             </div>

            <div className="grid grid-cols-1 gap-2">
                <button 
                    onClick={onLogout}
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl text-red-600 hover:bg-red-50 transition-colors border border-transparent hover:border-red-100"
                    title="Sign Out"
                >
                    <LogOut size={18} />
                    <span className="text-sm font-medium">Sign Out</span>
                </button>
            </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Header */}
        <header className="h-20 px-6 lg:px-10 border-b border-slate-200 bg-white/80 backdrop-blur-md flex items-center justify-between z-10 sticky top-0">
            <div className="flex items-center gap-4">
                <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-slate-500 hover:text-brand-blue">
                    <Menu size={24} />
                </button>
                <h2 className="text-xl font-bold text-slate-800 hidden sm:block">
                    {navItems.find(i => i.path === activePath)?.label || 'Dashboard'}
                </h2>
            </div>
            
            <div className="flex items-center gap-4">
                <div className="relative hidden sm:block group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-brand-blue transition-colors" size={18} />
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="pl-10 pr-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 w-64 transition-all hover:bg-white focus:w-72 shadow-sm text-slate-900"
                    />
                </div>
                <button className="relative p-2.5 text-slate-500 hover:bg-slate-50 rounded-full transition-colors hover:text-brand-blue">
                    <Bell size={22} />
                    <span className="absolute top-2 right-2.5 w-2.5 h-2.5 bg-brand-orange rounded-full border-2 border-white"></span>
                </button>
            </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8 pb-20 bg-slate-50 scroll-smooth">
            <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {children}
            </div>
        </div>
      </main>
    </div>
  );
};