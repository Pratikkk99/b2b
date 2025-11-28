
import React, { useState } from 'react';
import { 
  Users, UserPlus, MoreVertical, Search, Filter, Mail, Phone, Shield, X
} from 'lucide-react';
import { GlassCard, StatCard, Button, Input, Select } from '../components/Shared';
import { B2BUser } from '../types';

// Mock Data for User Management List
const MOCK_USERS: B2BUser[] = [
    { user_id: '1', user_full_name: 'Alex Jordan', user_email: 'alex@example.com', user_phone: '+1 555-0101', user_role: 'member', user_status: 'active' },
    { user_id: '2', user_full_name: 'Sarah Connor', user_email: 'sarah.c@born2build.com', user_phone: '+1 555-0102', user_role: 'coach', user_status: 'active' },
    { user_id: '3', user_full_name: 'Mike Ross', user_email: 'mike.ross@example.com', user_phone: '+1 555-0103', user_role: 'member', user_status: 'inactive' },
    { user_id: '4', user_full_name: 'John Admin', user_email: 'admin@born2build.com', user_phone: '+1 555-0100', user_role: 'admin', user_status: 'active' },
    { user_id: '5', user_full_name: 'Tom Trainer', user_email: 'tom.t@born2build.com', user_phone: '+1 555-0104', user_role: 'trainer', user_status: 'active' },
    { user_id: '6', user_full_name: 'Emily Blunt', user_email: 'emily.b@example.com', user_phone: '+1 555-0105', user_role: 'member', user_status: 'active' },
];

export const AdminDashboard = () => (
    <div className="space-y-8">
        <div className="flex justify-between items-end">
             <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Admin Dashboard</h1>
                <p className="text-slate-500">Manage B2B Users.</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard label="Total Users" value="150" icon={<Users size={24} />} colorClass="text-brand-blue" />
            <StatCard label="Active" value="142" icon={<Users size={24} />} colorClass="text-brand-green" />
        </div>

        {/* Create User Form (Matches b2b_users) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GlassCard>
                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                    <div className="p-2 bg-brand-blue/10 rounded-lg text-brand-blue">
                        <UserPlus size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">Create New User</h3>
                </div>
                
                <form className="space-y-6">
                    <Input label="Full Name" placeholder="John Doe" />
                    <Input label="Email Address" type="email" placeholder="john@example.com" />
                    <Input label="Phone Number" type="tel" placeholder="+1234567890" />
                    
                    <div className="grid grid-cols-2 gap-6">
                        <Select 
                            label="Role" 
                            options={[
                                {label: 'Member', value: 'member'},
                                {label: 'Coach', value: 'coach'},
                                {label: 'Trainer', value: 'trainer'},
                                {label: 'Admin', value: 'admin'}
                            ]} 
                        />
                        <Select 
                            label="Status" 
                            options={[
                                {label: 'Active', value: 'active'},
                                {label: 'Inactive', value: 'inactive'}
                            ]} 
                        />
                    </div>
                    
                    <Input label="Password" type="password" />

                    <div className="flex gap-4 pt-2">
                        <Button className="w-full">Create User</Button>
                    </div>
                </form>
            </GlassCard>
        </div>
    </div>
);

export const UserManagement = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterRole, setFilterRole] = useState('all');

    // Filter logic
    const filteredUsers = MOCK_USERS.filter(user => {
        const matchesSearch = user.user_full_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              user.user_email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = filterRole === 'all' || user.user_role === filterRole;
        return matchesSearch && matchesRole;
    });

    const getRoleBadgeColor = (role: string) => {
        switch(role) {
            case 'admin': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
            case 'coach': return 'bg-brand-orange/10 text-brand-orange dark:bg-brand-orange/20';
            case 'trainer': return 'bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/20 dark:text-blue-300';
            default: return 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400';
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">All Members</h1>
                    <p className="text-slate-500">View and manage all registered users.</p>
                </div>
                <Button>
                    <UserPlus size={18} /> Add New Member
                </Button>
            </div>

            <GlassCard noPadding className="overflow-hidden">
                {/* Search and Filters */}
                <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-4 bg-slate-50/50 dark:bg-slate-900/50">
                    <div className="relative flex-1 group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-blue transition-colors" size={18} />
                        <input 
                            type="text" 
                            placeholder="Search users by name or email..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all shadow-sm"
                        />
                        {searchTerm && (
                            <button 
                                onClick={() => setSearchTerm('')} 
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                            >
                                <X size={16} />
                            </button>
                        )}
                    </div>
                    <div className="w-full sm:w-48">
                        <div className="relative">
                            <select 
                                className="w-full pl-4 pr-10 py-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none appearance-none shadow-sm cursor-pointer"
                                value={filterRole}
                                onChange={(e) => setFilterRole(e.target.value)}
                            >
                                <option value="all">All Roles</option>
                                <option value="member">Members</option>
                                <option value="coach">Coaches</option>
                                <option value="trainer">Trainers</option>
                                <option value="admin">Admins</option>
                            </select>
                            <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50 dark:bg-slate-900/50 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 dark:border-slate-800">
                            <tr>
                                <th className="px-6 py-4">User Details</th>
                                <th className="px-6 py-4">Role</th>
                                <th className="px-6 py-4">Contact Info</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                            {filteredUsers.map((user) => (
                                <tr key={user.user_id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 font-bold text-xs ring-2 ring-white dark:ring-slate-800">
                                                {user.user_full_name.split(' ').map(n => n[0]).join('').substring(0,2)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900 dark:text-white">{user.user_full_name}</p>
                                                <p className="text-xs text-slate-500">ID: #{user.user_id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase ${getRoleBadgeColor(user.user_role)}`}>
                                            <Shield size={12} />
                                            {user.user_role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col gap-1 text-slate-600 dark:text-slate-400">
                                            <div className="flex items-center gap-2 text-xs">
                                                <Mail size={12} />
                                                {user.user_email}
                                            </div>
                                            <div className="flex items-center gap-2 text-xs">
                                                <Phone size={12} />
                                                {user.user_phone}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.user_status === 'active' ? (
                                            <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs font-bold border border-green-100 dark:border-green-900/30">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                Active
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-bold border border-slate-200 dark:border-slate-700">
                                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                                                Inactive
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 rounded-lg text-slate-400 hover:text-brand-blue hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                                            <MoreVertical size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                    {filteredUsers.length === 0 && (
                        <div className="py-12 px-6 text-center">
                            <div className="mx-auto w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 text-slate-400">
                                <Search size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">No users found</h3>
                            <p className="text-slate-500 text-sm mt-1">
                                We couldn't find any users matching "{searchTerm}" with the selected filter.
                            </p>
                            <button 
                                onClick={() => { setSearchTerm(''); setFilterRole('all'); }}
                                className="mt-4 text-sm font-bold text-brand-blue hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
                
                {filteredUsers.length > 0 && (
                    <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 flex justify-between items-center text-xs text-slate-500">
                        <span>Showing {filteredUsers.length} entries</span>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 disabled:opacity-50" disabled>Previous</button>
                            <button className="px-3 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 disabled:opacity-50" disabled>Next</button>
                        </div>
                    </div>
                )}
            </GlassCard>
        </div>
    );
};
