import React, { useState } from 'react';
import { 
  Users, FileText, CheckCircle, Search, History, Image as ImageIcon
} from 'lucide-react';
import { GlassCard, StatCard, Button, Input, Select } from '../components/Shared';
import { UserRole } from '../types';

interface ProfessionalProps {
    role: UserRole;
}

// --- COACH/TRAINER DASHBOARD ---
export const ProfessionalDashboard: React.FC<ProfessionalProps> = ({ role }) => {
    const isTrainer = role === 'trainer';
    const expertType = isTrainer ? 'Trainer' : 'Diet Expert';
    const reviewType = isTrainer ? 'Workout Logs' : 'Diet Logs';

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">{expertType} Dashboard</h1>
                    <p className="text-slate-500">Manage members and review {reviewType.toLowerCase()}.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard label="Assigned Members" value="12" icon={<Users size={24}/>} colorClass="text-brand-blue"/>
                <StatCard label="Pending Reviews" value="8" trend="up" trendValue="3" icon={<FileText size={24}/>} colorClass="text-brand-orange"/>
                <StatCard label="Avg. Adherence" value="85%" icon={<CheckCircle size={24}/>} colorClass="text-brand-green"/>
            </div>

            {/* Member Status Table */}
            <GlassCard>
                <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
                    <h3 className="text-lg font-bold text-slate-800">Member Status</h3>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <div className="relative flex-1 sm:flex-none">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16}/>
                            <input 
                                className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm w-full" 
                                placeholder="Search member..."
                            />
                        </div>
                        <select className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm">
                            <option>All Status</option>
                            <option>Pending Review</option>
                            <option>Flagged</option>
                        </select>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                            <tr>
                                <th className="px-6 py-3">Member</th>
                                <th className="px-6 py-3">Last Log Date</th>
                                <th className="px-6 py-3">Log Status</th>
                                <th className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm">
                            <tr className="hover:bg-slate-50">
                                <td className="px-6 py-4 font-medium">Jane Doe</td>
                                <td className="px-6 py-4">Oct 24, 2024</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-100 text-yellow-700">
                                        Pending Review
                                    </span>
                                </td>
                                <td className="px-6 py-4"><Button variant="ghost" className="!p-2 text-xs">Review</Button></td>
                            </tr>
                            <tr className="hover:bg-slate-50">
                                <td className="px-6 py-4 font-medium">Mike Ross</td>
                                <td className="px-6 py-4">Oct 23, 2024</td>
                                <td className="px-6 py-4">
                                    {!isTrainer && <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-700">Deviation Flag</span>}
                                    {isTrainer && <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">Reviewed</span>}
                                </td>
                                <td className="px-6 py-4"><Button variant="ghost" className="!p-2 text-xs">View Log</Button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </GlassCard>
        </div>
    );
};

// --- PLAN MANAGER (Creates diet_plans or workout_plans) ---
export const PlanManager = ({ role }: { role: UserRole }) => {
    const isTrainer = role === 'trainer';
    const planType = isTrainer ? 'Workout Plan' : 'Diet Plan';

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Builder Area */}
            <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">Create {planType}</h2>
                <GlassCard>
                    <form className="space-y-6">
                        <Select 
                            label="Select Member" 
                            options={[{label: 'Jane Doe', value: '1'}, {label: 'Mike Ross', value: '2'}]}
                        />

                        <div className="grid grid-cols-2 gap-6">
                            <Input label="Valid From" type="date" />
                            <Input label="Valid To" type="date" />
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="block text-sm font-medium text-slate-700">
                                    {planType} Details
                                </label>
                                <span className="text-xs text-brand-blue font-bold">Autosave on</span>
                            </div>
                            <div className="border border-slate-200 rounded-xl overflow-hidden">
                                <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex gap-2 overflow-x-auto">
                                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                        <button key={day} type="button" className="px-3 py-1 text-xs font-bold text-slate-600 hover:text-brand-blue hover:bg-white rounded-md transition-colors">
                                            {day}
                                        </button>
                                    ))}
                                </div>
                                <textarea 
                                    className="w-full h-96 p-4 bg-white focus:outline-none resize-none font-mono text-sm"
                                    placeholder={isTrainer 
                                        ? "Focus: Chest & Triceps\n\n1. Bench Press: 4 sets x 8-10 reps\n2. Incline DB Press: 3 sets x 12 reps..." 
                                        : "Meal 1 (08:00): \n- 2 Whole Eggs\n- 1 Slice Whole Wheat Toast\n\nMeal 2 (13:00):..."}
                                ></textarea>
                            </div>
                            <p className="text-xs text-slate-400 mt-2">Format this text clearly as it appears directly to the member.</p>
                        </div>

                        <Button className="w-full py-3">Publish Plan</Button>
                    </form>
                </GlassCard>
            </div>

            {/* Sidebar: History */}
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900">Plan History</h3>
                <GlassCard className="h-full max-h-[600px] overflow-y-auto">
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="p-3 rounded-lg border border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors group">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="font-bold text-sm text-slate-700">Sep 0{i} - Sep 1{i}</span>
                                    <History size={14} className="text-slate-400 group-hover:text-brand-blue"/>
                                </div>
                                <p className="text-xs text-slate-500 line-clamp-2">
                                    {isTrainer ? "Hypertrophy Block A..." : "High Carb Cycling..."}
                                </p>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

// --- LOG REVIEW (Diet or Workout) ---
export const LogReview = ({ role }: { role: UserRole }) => {
    const isTrainer = role === 'trainer';
    const title = isTrainer ? 'Review Workout Logs' : 'Review Diet Logs';

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
            
            <GlassCard>
                <div className="flex justify-between items-start mb-6 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue font-bold">JD</div>
                        <div>
                            <h3 className="font-bold text-lg">Jane Doe</h3>
                            <p className="text-sm text-slate-500">Log Date: 2024-10-24</p>
                        </div>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">Pending Review</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Log Content */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-sm text-slate-500 uppercase">Member Entry</h4>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            {isTrainer ? (
                                <div className="space-y-4">
                                    <div className="flex justify-between border-b border-slate-200 pb-2">
                                        <span className="text-slate-500">Energy Level</span>
                                        <span className="font-bold text-brand-blue">8/10</span>
                                    </div>
                                    <div className="flex justify-between border-b border-slate-200 pb-2">
                                        <span className="text-slate-500">Completed</span>
                                        <span className="font-bold text-green-600">Yes</span>
                                    </div>
                                    <div>
                                        <span className="block text-slate-500 mb-1">Injury Report</span>
                                        <p className="text-sm">"Left shoulder felt a bit tight during overhead press."</p>
                                    </div>
                                    <div>
                                        <span className="block text-slate-500 mb-2">Media</span>
                                        <div className="grid grid-cols-3 gap-2">
                                            {/* Mock Media Placeholders */}
                                            <div className="aspect-square bg-slate-200 rounded-lg flex items-center justify-center"><ImageIcon className="text-slate-400"/></div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                     <div>
                                        <span className="block text-slate-500 mb-2">Meals Logged</span>
                                        <div className="space-y-2">
                                            <div className="bg-white p-2 rounded border border-slate-100 text-sm">
                                                <span className="font-bold text-brand-blue">Breakfast (08:00)</span>
                                                <p>Oatmeal, Whey Protein, Banana</p>
                                            </div>
                                            <div className="bg-white p-2 rounded border border-slate-100 text-sm">
                                                <span className="font-bold text-brand-blue">Lunch (13:00)</span>
                                                <p>Chicken Breast, Rice, Broccoli</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-2">
                                        <span className="text-slate-500">Deviation Flag</span>
                                        <span className="font-bold text-slate-400">No</span>
                                    </div>
                                    <div>
                                        <span className="block text-slate-500 mb-2">Photo Attachment</span>
                                        <div className="w-full h-32 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-sm">
                                            <ImageIcon size={16} className="mr-2"/> No Image
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Review Form */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-sm text-slate-500 uppercase">Expert Action</h4>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <Input label="Points Awarded" type="number" defaultValue="10" />
                            
                            {!isTrainer && <Input label="Nutrition Score (1-10)" type="number" className="mt-4" />}
                            
                            <div className="mt-4">
                                <label className="block text-sm font-medium text-slate-700 mb-2">Comments</label>
                                <textarea 
                                    className="w-full h-32 p-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none resize-none"
                                    placeholder="Provide feedback..."
                                ></textarea>
                            </div>

                            <Button className="w-full mt-6">Submit Review</Button>
                        </div>
                    </div>
                </div>
            </GlassCard>
        </div>
    );
}

// --- EXPERT FEEDBACK FORM (Matches expert_feedback) ---
export const ExpertFeedbackForm = () => {
    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Weekly Expert Feedback</h2>
            <GlassCard>
                <form className="space-y-6">
                    <Select 
                        label="Select Member" 
                        options={[{label: 'Jane Doe', value: '1'}, {label: 'Mike Ross', value: '2'}]}
                    />
                    
                    <div className="grid grid-cols-2 gap-6">
                        <Input label="Week Number" type="number" />
                        <Input label="Adherence Score (0-100)" type="number" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">General Comments</label>
                        <textarea 
                            className="w-full h-32 p-4 rounded-xl bg-slate-50 border border-slate-200 resize-none outline-none focus:ring-2 focus:ring-brand-blue/20"
                            placeholder="Overall performance feedback..."
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Recommended Actions</label>
                        <textarea 
                            className="w-full h-32 p-4 rounded-xl bg-slate-50 border border-slate-200 resize-none outline-none focus:ring-2 focus:ring-brand-blue/20"
                            placeholder="Specific changes for next week..."
                        ></textarea>
                    </div>

                    <Button className="w-full py-3">Submit Feedback</Button>
                </form>
            </GlassCard>
        </div>
    );
};