import { motion } from 'framer-motion';
import { Shield, Scan, LogIn, LogOut, Thermometer, UserCheck } from 'lucide-react';

const accessLogs = [
    { id: 1, name: 'Azamat Rasulov', time: '08:30:12', type: 'entrance', temp: '36.5°C', status: 'verified', device: 'Main Gate Cam 1' },
    { id: 2, name: 'Sherzod Munirov', time: '08:45:05', type: 'entrance', temp: '36.4°C', status: 'verified', device: 'Main Gate Cam 2' },
    { id: 3, name: 'Umid Bekov', time: '09:12:44', type: 'exit', temp: '36.6°C', status: 'verified', device: 'Parking Exit 1' },
    { id: 4, name: 'Ilyos Tojirov', time: '09:15:30', type: 'entrance', temp: '37.8°C', status: 'flagged', device: 'Main Gate Cam 1' },
    { id: 5, name: 'Jasur Bekov', time: '09:20:11', type: 'entrance', temp: '36.5°C', status: 'verified', device: 'Main Gate Cam 1' },
];

export const AccessControlManager = () => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-panel p-6 rounded-2xl flex items-center gap-4 border-l-4 border-l-blue-500">
                    <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl"><Scan size={24} /></div>
                    <div>
                        <p className="text-xs text-slate-500 font-bold uppercase">Bugungi kirishlar</p>
                        <p className="text-2xl font-bold">142 ta</p>
                    </div>
                </div>
                <div className="glass-panel p-6 rounded-2xl flex items-center gap-4 border-l-4 border-l-orange-500">
                    <div className="p-3 bg-orange-500/10 text-orange-400 rounded-xl"><UserCheck size={24} /></div>
                    <div>
                        <p className="text-xs text-slate-500 font-bold uppercase">Shubhali (Flagged)</p>
                        <p className="text-2xl font-bold">1 ta</p>
                    </div>
                </div>
                <div className="glass-panel p-6 rounded-2xl flex items-center gap-4 border-l-4 border-l-slate-500">
                    <div className="p-3 bg-slate-500/10 text-slate-400 rounded-xl"><Shield size={24} /></div>
                    <div>
                        <p className="text-xs text-slate-500 font-bold uppercase">Tizim holati</p>
                        <p className="text-2xl font-bold text-emerald-400">FAOL (ONLINE)</p>
                    </div>
                </div>
            </div>

            <div className="glass-panel rounded-2xl overflow-hidden border border-slate-700/50">
                <div className="p-6 border-b border-slate-700/50 flex justify-between items-center bg-slate-800/20">
                    <h3 className="font-bold flex items-center gap-2 text-lg">
                        <LogIn size={20} className="text-blue-400" />
                        Face ID Jurnali (Hikvision)
                    </h3>
                    <span className="text-xs text-blue-400 font-medium bg-blue-500/10 px-3 py-1 rounded-full animate-pulse">
                        Real vaqt rejimi
                    </span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-900/50 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                                <th className="px-6 py-4">Xodim / Haydovchi</th>
                                <th className="px-6 py-4">Vaqt</th>
                                <th className="px-6 py-4">Harakat</th>
                                <th className="px-6 py-4">Harorat</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Qurilma</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-700/30">
                            {accessLogs.map((log) => (
                                <motion.tr
                                    key={log.id}
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                    className="hover:bg-slate-800/40 transition-all text-sm group"
                                >
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-slate-200 group-hover:text-blue-400 transition-colors uppercase">{log.name}</div>
                                    </td>
                                    <td className="px-6 py-4 font-mono text-xs text-slate-400">{log.time}</td>
                                    <td className="px-6 py-4">
                                        {log.type === 'entrance' ? (
                                            <span className="text-emerald-400 flex items-center gap-1.5"><LogIn size={14} /> Kirish</span>
                                        ) : (
                                            <span className="text-slate-400 flex items-center gap-1.5"><LogOut size={14} /> Chiqish</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1 text-slate-300">
                                            <Thermometer size={14} className={log.status === 'flagged' ? 'text-red-400' : 'text-emerald-400'} />
                                            <span className={log.status === 'flagged' ? 'font-bold text-red-400' : ''}>{log.temp}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${log.status === 'verified' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-red-500/10 text-red-500 border-red-500/20'
                                            }`}>
                                            {log.status === 'verified' ? 'Tasdiqlandi' : 'XAVF'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-[10px] text-slate-500 italic">{log.device}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
