
import React, { useState } from 'react';
import { UserRole } from '../types';
import { Button, Input } from '../components/Shared';
import { Mail, ArrowRight } from 'lucide-react';
import { Logo } from '../components/Logo';

interface AuthProps {
  onLogin: (role: UserRole) => void;
}

export const LoginScreen: React.FC<AuthProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  
  // Simulation of role detection based on login
  const [selectedRole, setSelectedRole] = useState<UserRole>('member');

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 relative overflow-hidden font-sans">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-brand-lightblue/10 rounded-full blur-[120px] animate-pulse-slow"></div>
            <div className="absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[120px]"></div>
            <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-brand-pink/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-8 md:p-10 relative z-10 transform hover:scale-[1.01] transition-transform duration-500">
            <div className="text-center mb-8 flex flex-col items-center">
                 <Logo size="xl" className="mb-4" />
                 <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-4">Welcome Back</h2>
                 <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Your Journey Starts Here.</p>
            </div>

            <div className="space-y-3 mb-8">
                <button 
                  onClick={() => onLogin('member')} 
                  className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-semibold text-slate-700 dark:text-slate-300 group"
                >
                   <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 group-hover:scale-110 transition-transform" />
                   Continue with Gmail
                </button>
            </div>

            <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
                    <span className="px-4 bg-white dark:bg-slate-900 text-slate-400">Or sign in with email</span>
                </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(selectedRole); }}>
                <Input 
                   label="Email Address"
                   type="email" 
                   placeholder="name@example.com" 
                   value={email}
                   onChange={(e: any) => setEmail(e.target.value)}
                />
                
                {/* Role Selector for Prototype */}
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Select Demo Role</label>
                    <div className="grid grid-cols-2 gap-2">
                        {(['member', 'coach', 'trainer', 'admin'] as UserRole[]).map(role => (
                            <button 
                                key={role}
                                type="button"
                                onClick={() => setSelectedRole(role)}
                                className={`text-xs font-bold py-2.5 px-2 rounded-lg border transition-all uppercase ${selectedRole === role ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/20' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-brand-blue/50'}`}
                            >
                                {role}
                            </button>
                        ))}
                    </div>
                </div>

                <Button type="submit" className="w-full py-4 text-base rounded-xl font-bold shadow-xl shadow-brand-blue/20">
                    Sign In <ArrowRight size={18}/>
                </Button>
            </form>
        </div>
    </div>
  );
};