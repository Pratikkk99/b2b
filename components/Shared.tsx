import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';
import { ArrowUp, ArrowDown, Upload } from 'lucide-react';

// --- Glassmorphism Card ---
export interface GlassCardProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  noPadding?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick, noPadding = false }) => (
  <div 
    onClick={onClick}
    className={`
      bg-white 
      border border-slate-100
      shadow-sm rounded-xl
      transition-all duration-300
      hover:shadow-md
      ${noPadding ? '' : 'p-6'}
      ${className}
    `}
  >
    {children}
  </div>
);

// --- Stats Card ---
interface StatCardProps {
  label: string;
  value: string | number;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  icon: React.ReactNode;
  colorClass?: string; 
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, trend, trendValue, icon, colorClass = "text-brand-blue" }) => (
  <GlassCard className="relative overflow-hidden group hover:border-brand-blue/30 transition-colors">
    <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity ${colorClass}`}>
      {React.cloneElement(icon as React.ReactElement<any>, { size: 64 })}
    </div>
    <div className="flex items-center gap-4 mb-3">
      <div className={`p-3 rounded-lg bg-slate-50 ${colorClass}`}>
        {icon}
      </div>
      <h3 className="text-sm font-medium text-slate-500">{label}</h3>
    </div>
    <div>
      <div className="text-3xl font-bold text-slate-900">{value}</div>
      {trend && (
        <div className={`flex items-center text-sm mt-1 font-medium ${trend === 'up' ? 'text-green-500' : trend === 'down' ? 'text-red-500' : 'text-slate-400'}`}>
          {trend === 'up' ? <ArrowUp size={16} /> : trend === 'down' ? <ArrowDown size={16} /> : null}
          <span className="ml-1">{trendValue}</span>
          <span className="text-slate-400 font-normal ml-1">vs last week</span>
        </div>
      )}
    </div>
  </GlassCard>
);

// --- Charts ---
export const ActivityChart = ({ data }: { data: any[] }) => (
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart data={data}>
      <defs>
        <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#0057b7" stopOpacity={0.15}/>
          <stop offset="95%" stopColor="#0057b7" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
      <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
      <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
      <Tooltip 
        contentStyle={{ 
          backgroundColor: '#fff', 
          borderRadius: '8px', 
          border: '1px solid #e2e8f0', 
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          color: '#1e293b'
        }} 
      />
      <Area 
        type="monotone" 
        dataKey="value" 
        stroke="#0057b7" 
        strokeWidth={3}
        fillOpacity={1} 
        fill="url(#colorActivity)" 
      />
    </AreaChart>
  </ResponsiveContainer>
);

export const ComplianceChart = ({ data }: { data: any[] }) => (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} barSize={20}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
        <XAxis dataKey="name" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
        <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', color: '#1e293b' }}/>
        <Legend />
        <Bar dataKey="completed" fill="#0057b7" radius={[4, 4, 0, 0]} name="Completed" />
        <Bar dataKey="assigned" fill="#cbd5e1" radius={[4, 4, 0, 0]} name="Assigned" />
      </BarChart>
    </ResponsiveContainer>
);

// --- Button ---
export const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const baseStyle = "px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 text-sm";
  const variants = {
    primary: "bg-brand-blue hover:bg-blue-700 text-white shadow-md shadow-blue-500/20",
    secondary: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50",
    ghost: "text-slate-600 hover:bg-slate-100",
    danger: "bg-red-50 text-red-600 hover:bg-red-100 border border-red-100",
    success: "bg-brand-green text-white hover:bg-lime-600 shadow-md shadow-lime-500/20"
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// --- Form Elements ---
export const Input = ({ label, className = '', ...props }: any) => (
  <div className="w-full">
    {label && <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>}
    <input 
      className={`
        w-full px-4 py-2.5 rounded-lg 
        bg-white 
        border border-slate-200 
        focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 
        outline-none transition-all
        text-slate-900
        placeholder:text-slate-400
        ${className}
      `}
      {...props} 
    />
  </div>
);

export const Select = ({ label, options, className = '', ...props }: any) => (
  <div className="w-full">
    {label && <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>}
    <div className="relative">
      <select 
        className={`
          w-full px-4 py-2.5 rounded-lg appearance-none
          bg-white 
          border border-slate-200 
          focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 
          outline-none transition-all
          text-slate-900
          ${className}
        `}
        {...props}
      >
        {options.map((opt: any) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
        <ArrowDown size={14} />
      </div>
    </div>
  </div>
);

export const FileUpload = ({ label }: { label: string }) => (
  <div className="w-full">
    <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
    <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-brand-blue hover:bg-brand-blue/5 transition-all group">
      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
        <Upload size={20} className="text-slate-500 group-hover:text-brand-blue" />
      </div>
      <p className="text-sm font-medium text-slate-700">Click to upload media</p>
      <p className="text-xs text-slate-500 mt-1">JPG, PNG, MP4 up to 10MB</p>
    </div>
  </div>
);