import React, { useState } from 'react';
import { 
  Activity, Flame, Plus, Trash2, Link as LinkIcon, Camera, Utensils, Dumbbell
} from 'lucide-react';
import { GlassCard, StatCard, Button, Input, Select, ActivityChart, ComplianceChart } from '../components/Shared';

// --- MEMBER DASHBOARD ---
export const MemberDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header & Points */}
      <div className="flex flex-col md:flex-row gap-6 items-start justify-between bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Hello, Alex!</h1>
          <p className="text-slate-500">You're on a <strong>7-day streak</strong>. Keep the momentum!</p>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right hidden sm:block">
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Points</p>
                 <p className="text-3xl font-black text-brand-blue">1,250</p>
             </div>
             <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                 <Flame size={32} fill="currentColor" className="animate-pulse" />
             </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="group relative overflow-hidden bg-brand-blue text-white p-6 rounded-2xl shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 transition-all text-left">
              <div className="relative z-10">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Utensils size={20} />
                  </div>
                  <h3 className="font-bold text-lg">Log Meal</h3>
                  <p className="text-blue-100 text-sm mt-1">Track calories & macros</p>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
          </button>

          <button className="group relative overflow-hidden bg-brand-orange text-white p-6 rounded-2xl shadow-lg shadow-brand-orange/30 hover:shadow-brand-orange/50 transition-all text-left">
              <div className="relative z-10">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Dumbbell size={20} />
                  </div>
                  <h3 className="font-bold text-lg">Log Workout</h3>
                  <p className="text-orange-100 text-sm mt-1">Record sets & reps</p>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
          </button>
          
           <GlassCard className="!p-6 flex flex-col justify-center items-center text-center space-y-2 group hover:border-brand-green/50 cursor-pointer">
              <h3 className="font-bold text-slate-700">Today's Focus</h3>
              <p className="text-brand-green font-bold text-xl">Legs & Core</p>
              <p className="text-xs text-slate-500">Based on your workout plan</p>
          </GlassCard>
      </div>

      {/* Recent Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GlassCard>
              <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                      <Activity size={18} className="text-brand-blue"/> Weekly Compliance
                  </h3>
              </div>
              {/* Mock Data for Compliance Chart */}
              <ComplianceChart data={[
                  {name: 'Mon', completed: 2, assigned: 2},
                  {name: 'Tue', completed: 2, assigned: 2},
                  {name: 'Wed', completed: 1, assigned: 2},
                  {name: 'Thu', completed: 0, assigned: 2},
                  {name: 'Fri', completed: 0, assigned: 2},
              ]} />
          </GlassCard>

          <GlassCard>
              <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg text-slate-800">Expert Feedback</h3>
                  <span className="text-xs font-bold bg-brand-green/10 text-brand-green px-2 py-1 rounded">New</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-sm italic text-slate-600 mb-3">
                      "Great job hitting your protein targets this week, Alex. Let's try to increase the intensity on leg day next week. Your form videos look solid."
                  </p>
                  <div className="flex items-center justify-between border-t border-slate-200 pt-3">
                      <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                          <span className="text-xs font-bold text-slate-700">Coach Sarah</span>
                      </div>
                      <span className="text-xs text-slate-400">Yesterday</span>
                  </div>
              </div>
          </GlassCard>
      </div>
    </div>
  );
};

// --- MEMBER PROGRESS (New View) ---
export const MemberProgress = () => {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-slate-900">My Progress</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard label="Current Weight" value="75.5 kg" trend="down" trendValue="0.5kg" icon={<Activity size={24}/>} colorClass="text-brand-blue"/>
                <StatCard label="Avg Mood Score" value="8.2/10" trend="up" trendValue="0.4" icon={<Flame size={24}/>} colorClass="text-brand-orange"/>
                <StatCard label="Workouts Done" value="14" icon={<Dumbbell size={24}/>} colorClass="text-brand-green"/>
            </div>

            <GlassCard>
                <h3 className="font-bold text-lg mb-6">Weight Trend (Weekly Check-ins)</h3>
                <ActivityChart data={[
                    {name: 'Week 1', value: 78.0},
                    {name: 'Week 2', value: 77.2},
                    {name: 'Week 3', value: 76.5},
                    {name: 'Week 4', value: 76.8},
                    {name: 'Week 5', value: 75.5},
                ]} />
            </GlassCard>
            
            <GlassCard>
                <h3 className="font-bold text-lg mb-6">Adherence Score History</h3>
                 <div className="h-64 flex items-end justify-between gap-2 px-4">
                    {[85, 90, 88, 95, 92, 100].map((score, i) => (
                        <div key={i} className="w-full bg-slate-100 rounded-t-lg relative group">
                            <div 
                                className="absolute bottom-0 w-full bg-brand-blue/80 rounded-t-lg transition-all duration-500 hover:bg-brand-blue"
                                style={{height: `${score}%`}}
                            >
                                <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded">
                                    {score}%
                                </div>
                            </div>
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-400">W{i+1}</div>
                        </div>
                    ))}
                 </div>
            </GlassCard>
        </div>
    );
};

// --- MEMBER PROFILE SETTINGS (Matches member_profiles) ---
export const MemberProfileSettings = () => {
    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">My Profile</h2>
            <p className="text-slate-500">Update your physical stats and preferences.</p>
            
            <GlassCard>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <Input label="Age" type="number" placeholder="e.g. 28" />
                         <Select 
                            label="Gender" 
                            options={[
                                {label: 'Male', value: 'male'}, 
                                {label: 'Female', value: 'female'},
                                {label: 'Other', value: 'other'}
                            ]} 
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <Input label="Height (cm)" type="number" step="0.01" placeholder="175.5" />
                         <Input label="Starting Weight (kg)" type="number" step="0.01" placeholder="70.5" />
                    </div>

                    <Select 
                        label="Dietary Preference" 
                        options={[
                            {label: 'Vegetarian', value: 'veg'}, 
                            {label: 'Non-Vegetarian', value: 'nonveg'},
                            {label: 'Vegan', value: 'vegan'},
                            {label: 'Other', value: 'other'}
                        ]} 
                    />

                    <Input label="Fitness Goal" placeholder="e.g. Lose 5kg and build muscle" />

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Medical Notes / Injuries</label>
                        <textarea 
                            className="w-full h-24 p-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none resize-none"
                            placeholder="List any allergies, past injuries, or medical conditions..."
                        ></textarea>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <h4 className="font-bold text-brand-blue mb-2 text-sm uppercase">Program Status</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                            <div>
                                <span className="text-slate-500">Start Date:</span>
                                <span className="block font-medium">2024-01-01</span>
                            </div>
                            <div>
                                <span className="text-slate-500">End Date:</span>
                                <span className="block font-medium">2024-03-31</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                             <input type="checkbox" id="onboard" className="w-4 h-4 text-brand-blue rounded focus:ring-brand-blue" checked readOnly />
                             <label htmlFor="onboard" className="text-sm font-medium text-slate-700">Onboarding Completed</label>
                        </div>
                    </div>

                    <Button className="w-full py-3">Update Profile</Button>
                </form>
            </GlassCard>
        </div>
    );
};

// --- DIET LOG FORM (Matches diet_logs) ---
export const MemberDietLog = () => {
    const [deviation, setDeviation] = useState(false);
    
    // State to build the JSON for 'meals'
    const [meals, setMeals] = useState<{name: string, time: string, items: string}[]>([
        { name: 'Breakfast', time: '08:00', items: '' }
    ]);

    const addMealRow = () => {
        setMeals([...meals, { name: '', time: '', items: '' }]);
    };

    const removeMealRow = (index: number) => {
        const newMeals = [...meals];
        newMeals.splice(index, 1);
        setMeals(newMeals);
    };

    const updateMeal = (index: number, field: string, value: string) => {
        const newMeals = [...meals];
        (newMeals[index] as any)[field] = value;
        setMeals(newMeals);
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Log Daily Meals</h2>
            <GlassCard>
                <form className="space-y-6">
                    <Input type="date" label="Log Date" />

                    <div>
                        <div className="flex justify-between items-center mb-2">
                             <label className="block text-sm font-medium text-slate-700">Meals Consumed</label>
                             <button type="button" onClick={addMealRow} className="text-xs text-brand-blue font-bold flex items-center gap-1 hover:underline">
                                <Plus size={14} /> Add Meal
                             </button>
                        </div>
                        <div className="space-y-3">
                            {meals.map((meal, idx) => (
                                <div key={idx} className="flex flex-col md:flex-row gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200 relative group">
                                    <div className="flex-1 grid grid-cols-2 gap-3">
                                        <input 
                                            placeholder="Meal Name (e.g. Lunch)" 
                                            value={meal.name}
                                            onChange={(e) => updateMeal(idx, 'name', e.target.value)}
                                            className="bg-white px-3 py-2 rounded-lg border border-slate-200 text-sm outline-none focus:border-brand-blue"
                                        />
                                        <input 
                                            type="time"
                                            value={meal.time}
                                            onChange={(e) => updateMeal(idx, 'time', e.target.value)}
                                            className="bg-white px-3 py-2 rounded-lg border border-slate-200 text-sm outline-none focus:border-brand-blue"
                                        />
                                    </div>
                                    <div className="flex-[2] flex gap-2">
                                        <input 
                                            placeholder="Items (comma separated)" 
                                            value={meal.items}
                                            onChange={(e) => updateMeal(idx, 'items', e.target.value)}
                                            className="w-full bg-white px-3 py-2 rounded-lg border border-slate-200 text-sm outline-none focus:border-brand-blue"
                                        />
                                        <button 
                                            type="button" 
                                            onClick={() => removeMealRow(idx)}
                                            className="text-red-400 hover:text-red-600 p-2"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <input 
                            type="checkbox" 
                            checked={deviation} 
                            onChange={(e) => setDeviation(e.target.checked)}
                            className="w-5 h-5 rounded border-slate-300 text-brand-blue focus:ring-brand-blue"
                        />
                        <div>
                            <p className="font-medium text-slate-900">Diet Deviation?</p>
                            <p className="text-xs text-slate-500">Check if you ate something outside your plan.</p>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <Input label="Attachment URL (Photo)" placeholder="https://example.com/meal-photo.jpg" />
                        <p className="text-xs text-slate-500 mt-2 flex items-center gap-1"><Camera size={12}/> Paste a direct link to your meal photo</p>
                    </div>
                    
                    <Button className="w-full py-3">Save Diet Log</Button>
                </form>
            </GlassCard>
        </div>
    );
}

// --- WORKOUT LOG FORM (Matches workout_logs) ---
export const MemberWorkoutLog = () => {
    const [completed, setCompleted] = useState(false);
    const [energy, setEnergy] = useState(5);
    const [attachmentLinks, setAttachmentLinks] = useState<string[]>(['']);

    const addLink = () => setAttachmentLinks([...attachmentLinks, '']);
    const updateLink = (idx: number, val: string) => {
        const newLinks = [...attachmentLinks];
        newLinks[idx] = val;
        setAttachmentLinks(newLinks);
    }

    return (
        <div className="max-w-2xl mx-auto space-y-6">
             <h2 className="text-2xl font-bold text-slate-900">Log Workout</h2>
            <GlassCard>
                <form className="space-y-6">
                    <Input type="date" label="Log Date" />

                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <div>
                            <h3 className="font-bold text-slate-900">Workout Completed?</h3>
                        </div>
                        <button 
                            type="button"
                            onClick={() => setCompleted(!completed)}
                            className={`w-14 h-8 rounded-full transition-colors relative ${completed ? 'bg-brand-green' : 'bg-slate-300'}`}
                        >
                            <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow transition-transform ${completed ? 'translate-x-6' : ''}`}></div>
                        </button>
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                             <label className="text-sm font-medium text-slate-700">Energy Level (1-10)</label>
                             <span className={`font-bold ${energy > 7 ? 'text-brand-green' : energy < 4 ? 'text-brand-orange' : 'text-brand-blue'}`}>{energy}</span>
                        </div>
                        <input 
                            type="range" min="1" max="10" 
                            value={energy} onChange={(e) => setEnergy(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                        />
                         <div className="flex justify-between text-xs text-slate-400 mt-1">
                            <span>Exhausted</span>
                            <span>Energized</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Injury Report</label>
                        <textarea 
                            className="w-full h-24 p-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none resize-none"
                            placeholder="Describe any pain or injury..."
                        ></textarea>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                             <label className="block text-sm font-medium text-slate-700">Media Attachments (JSON)</label>
                             <button type="button" onClick={addLink} className="text-xs text-brand-blue font-bold flex items-center gap-1 hover:underline">
                                <Plus size={14} /> Add Link
                             </button>
                        </div>
                        <div className="space-y-2">
                            {attachmentLinks.map((link, idx) => (
                                <div key={idx} className="flex gap-2">
                                    <div className="relative flex-1">
                                        <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                        <input 
                                            value={link}
                                            onChange={(e) => updateLink(idx, e.target.value)}
                                            placeholder="https://..."
                                            className="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:border-brand-blue outline-none"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-slate-400 mt-2">Links to form videos or post-workout selfies.</p>
                    </div>

                    <Button className="w-full py-3">Save Workout Log</Button>
                </form>
            </GlassCard>
        </div>
    );
}

// --- WEEKLY CHECKIN (Matches weekly_checkins) ---
export const MemberCheckIn = () => {
    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Weekly Check-in</h2>
            <GlassCard>
                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <Input label="Week Number" type="number" />
                        <Input label="Current Weight (kg/lbs)" type="number" step="0.1" />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <Input label="Mood Score (1-10)" type="number" min="1" max="10" />
                        <Input label="Self Rating (1-10)" type="number" min="1" max="10" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Challenges Faced</label>
                        <textarea 
                            className="w-full h-32 p-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none resize-none"
                            placeholder="What did you struggle with this week?"
                        ></textarea>
                    </div>

                    <Button className="w-full py-3">Submit Weekly Check-in</Button>
                </form>
            </GlassCard>
        </div>
    );
};