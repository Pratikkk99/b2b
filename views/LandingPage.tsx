
import React from 'react';
import { ArrowRight, Activity, Shield, Zap, ChevronRight, Star, Calendar } from 'lucide-react';
import { Button, GlassCard } from '../components/Shared';
import { Logo } from '../components/Logo';

interface LandingPageProps {
  onLoginClick: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onLoginClick }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-white selection:bg-brand-orange selection:text-white overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
             <Logo size="sm" showText={true} className="!flex-row gap-3" variant="icon"/>
             <span className="text-xl font-extrabold tracking-tight text-brand-blue dark:text-white hidden md:block">
               Born<span className="text-brand-orange">2</span>Build
             </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600 dark:text-slate-400">
             {['Features', 'Programs', 'Success Stories', 'Coaches'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="relative group py-2 transition-colors hover:text-brand-blue"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
                </a>
             ))}
          </div>
          <div className="flex items-center gap-4">
            <button onClick={onLoginClick} className="hidden md:block text-sm font-bold text-slate-600 hover:text-brand-blue transition-colors">Log In</button>
            <Button onClick={onLoginClick} className="!px-6 !py-2.5 !rounded-full shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40 transform hover:-translate-y-0.5 transition-all">
                Join Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-brand-lightblue/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left animate-in slide-in-from-left-10 duration-1000 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/5 border border-brand-blue/10 text-brand-blue rounded-full text-sm font-bold backdrop-blur-sm shadow-sm hover:shadow-md transition-all cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green"></span>
              </span>
              #1 Fitness Platform 2024
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-brand-dark dark:text-white">
              Forge Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-green animate-gradient-x">Ultimate Self.</span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Join the platform where <span className="text-brand-orange font-bold">Strength</span>, <span className="text-brand-pink font-bold">Endurance</span>, and <span className="text-brand-blue font-bold">Flexibility</span> converge. Personalized plans, expert coaching, and real results.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button 
                onClick={onLoginClick}
                className="w-full sm:w-auto px-8 py-4 bg-brand-blue text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-brand-blue/30 flex items-center justify-center gap-2 transform hover:-translate-y-1 hover:scale-105 active:scale-95"
              >
                Start Free Trial <ArrowRight size={20}/>
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-white rounded-2xl font-bold border border-slate-200 dark:border-slate-700 hover:border-brand-orange hover:text-brand-orange transition-all flex items-center justify-center gap-2 group">
                <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <Calendar size={14} fill="currentColor" />
                </div>
                Explore Programs
              </button>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-slate-500 border-t border-slate-200 dark:border-slate-800/50 mt-4">
               <div className="text-center lg:text-left">
                   <p className="text-3xl font-black text-brand-dark dark:text-white">15k+</p>
                   <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Members</p>
               </div>
               <div className="h-10 w-px bg-slate-200 dark:bg-slate-800"></div>
               <div className="text-center lg:text-left">
                   <p className="text-3xl font-black text-brand-dark dark:text-white">500+</p>
                   <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Expert Coaches</p>
               </div>
               <div className="h-10 w-px bg-slate-200 dark:bg-slate-800"></div>
               <div className="text-center lg:text-left">
                   <p className="text-3xl font-black text-brand-dark dark:text-white">4.9</p>
                   <div className="flex text-brand-yellow">
                       <Star size={12} fill="currentColor"/>
                       <Star size={12} fill="currentColor"/>
                       <Star size={12} fill="currentColor"/>
                       <Star size={12} fill="currentColor"/>
                       <Star size={12} fill="currentColor"/>
                   </div>
               </div>
            </div>
          </div>

          {/* Right Visuals */}
          <div className="relative animate-in slide-in-from-right-10 duration-1000 fade-in hidden lg:block">
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-pink/20 rounded-[3rem] blur-3xl transform rotate-6 animate-pulse-slow"></div>
             
             {/* Main App Preview Card */}
             <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-4 shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-all duration-500 group">
                 <div className="relative overflow-hidden rounded-[2rem] shadow-inner bg-slate-100 dark:bg-slate-800 aspect-[4/3]">
                     <img 
                       src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop" 
                       alt="Fitness" 
                       className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                         <div className="flex items-center gap-3 mb-2">
                             <div className="p-2 bg-brand-green rounded-lg text-white"><Activity size={24}/></div>
                             <span className="text-white font-bold text-lg">Daily Goal Reached</span>
                         </div>
                         <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden backdrop-blur-sm">
                             <div className="bg-brand-green h-full w-[85%]"></div>
                         </div>
                     </div>
                 </div>
                 
                 {/* Floating Element 1: Heart Rate */}
                 <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-4 animate-float z-20">
                    <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center text-red-500">
                       <Activity size={24}/>
                    </div>
                    <div>
                       <p className="text-xs text-slate-500 font-bold uppercase">Heart Rate</p>
                       <p className="text-xl font-black text-slate-900 dark:text-white">128 <span className="text-sm font-normal text-slate-400">bpm</span></p>
                    </div>
                 </div>

                 {/* Floating Element 2: Calories */}
                 <div className="absolute -bottom-10 -left-6 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col gap-2 animate-float z-20" style={{animationDelay: '1s'}}>
                    <div className="flex items-center justify-between gap-8">
                        <div>
                            <p className="text-xs text-slate-500 font-bold uppercase">Calories</p>
                            <p className="text-xl font-black text-brand-orange">840 <span className="text-sm font-normal text-slate-400">kcal</span></p>
                        </div>
                        <div className="w-10 h-10 rounded-full border-4 border-brand-orange border-t-transparent animate-spin"></div>
                    </div>
                 </div>
             </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Banner */}
      <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { icon: <Shield size={32}/>, title: 'Verified Experts', desc: 'Connect with certified trainers and nutritionists vetted by our team.', color: 'text-brand-blue', bg: 'bg-brand-blue/10' },
                { icon: <Zap size={32}/>, title: 'AI Powered', desc: 'Smart algorithms adapt your plan in real-time based on your progress.', color: 'text-brand-orange', bg: 'bg-brand-orange/10' },
                { icon: <Activity size={32}/>, title: 'Holistic Approach', desc: 'Balancing strength, endurance, and flexibility for total health.', color: 'text-brand-pink', bg: 'bg-brand-pink/10' },
            ].map((feature, idx) => (
                <div key={idx} className="group p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 transition-all duration-300">
                    <div className={`w-16 h-16 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};