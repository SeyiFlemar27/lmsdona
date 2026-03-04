"use client";

import { useState } from "react";

// Dummy Data for Projects
const initialProjects = [
    { id: 1, name: "School Website Redesign", team: "Tech Club", deadline: "2024-06-30", status: "In Progress", progress: 60 },
    { id: 2, name: "Science Fair Organization", team: "Science Dept", deadline: "2024-03-01", status: "Completed", progress: 100 },
    { id: 3, name: "Library Digitalization", team: "Librarians", deadline: "2024-08-15", status: "In Progress", progress: 25 },
    { id: 4, name: "Annual Sports Meet", team: "PE Dept", deadline: "2024-05-10", status: "Pending", progress: 0 },
];

export default function ProjectManagementPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [projects, setProjects] = useState(initialProjects);
    const [viewMode, setViewMode] = useState<'list' | 'board'>('list');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newProject, setNewProject] = useState({ name: "", team: "", deadline: "", status: "Pending", progress: 0 });

    const handleAddProject = () => {
        if (newProject.name && newProject.team) {
            setProjects([...projects, { ...newProject, id: Date.now(), progress: 0 }]);
            setIsModalOpen(false);
            setNewProject({ name: "", team: "", deadline: "", status: "Pending", progress: 0 });
        }
    };

    const handleDeleteProject = (id: number) => {
        if (confirm("Are you sure you want to delete this project?")) {
            setProjects(projects.filter(p => p.id !== id));
        }
    };

    // Filter Logic
    const filteredProjects = projects.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.team.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col gap-8 font-roboto animate-fade-in">
            {/* Header Section */}
            <div className="bg-[#FFBD3E] rounded-[20px] p-8 shadow-sm flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-medium text-black tracking-tight">Project Management</h1>
                    <div className="flex gap-3">
                        <div className="bg-white p-1 rounded-lg flex shadow-sm">
                            <button onClick={() => setViewMode('list')} className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-orange-100 text-orange-600' : 'text-gray-400 hover:text-black'}`}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
                            </button>
                            <button onClick={() => setViewMode('board')} className={`p-2 rounded-md ${viewMode === 'board' ? 'bg-orange-100 text-orange-600' : 'text-gray-400 hover:text-black'}`}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="9" /><rect x="14" y="3" width="7" height="5" /><rect x="14" y="12" width="7" height="9" /><rect x="3" y="16" width="7" height="5" /></svg>
                            </button>
                        </div>
                        <button onClick={() => setIsModalOpen(true)} className="bg-white hover:bg-gray-50 text-black px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 shadow-sm transition-all active:scale-95">
                            <span className="text-xl leading-none">+</span> New Project
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative w-full">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                    </span>
                    <input
                        type="text"
                        placeholder="Search projects..."
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-none focus:ring-0 text-gray-700 placeholder-gray-500 font-normal shadow-sm bg-white"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Projects Content */}
            {viewMode === 'list' ? (
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#F7961F] text-black uppercase text-xs font-bold tracking-wider">
                                <th className="p-4 w-[30%] border-r border-[#E0891B]">PROJECT NAME</th>
                                <th className="p-4 w-[20%] border-r border-[#E0891B]">ASSIGNED TEAM</th>
                                <th className="p-4 w-[15%] border-r border-[#E0891B]">DEADLINE</th>
                                <th className="p-4 w-[20%] border-r border-[#E0891B]">STATUS</th>
                                <th className="p-4 w-[15%]">ACTION</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-700">
                            {filteredProjects.map((project) => (
                                <tr key={project.id} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                                    <td className="p-4 border-r border-gray-200 font-medium">{project.name}</td>
                                    <td className="p-4 border-r border-gray-200">{project.team}</td>
                                    <td className="p-4 border-r border-gray-200">{project.deadline}</td>
                                    <td className="p-4 border-r border-gray-200">
                                        <div className="flex flex-col gap-1">
                                            <span className={`px-2 py-0.5 w-fit rounded text-xs font-bold ${project.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                                project.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                                                }`}>
                                                {project.status}
                                            </span>
                                            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                                <div className={`bg-black h-1.5 rounded-full`} style={{ width: `${project.progress}%` }}></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-4">
                                            <button className="text-black hover:text-gray-600 transition-colors">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                            </button>
                                            <button onClick={() => handleDeleteProject(project.id)} className="text-black hover:text-red-600 transition-colors">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {filteredProjects.length === 0 && (
                        <div className="p-8 text-center text-gray-400">No projects found.</div>
                    )}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['Pending', 'In Progress', 'Completed'].map(status => (
                        <div key={status} className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-col gap-4">
                            <h3 className="font-bold text-gray-700 flex justify-between items-center">
                                {status}
                                <span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full text-xs">
                                    {filteredProjects.filter(p => p.status === status).length}
                                </span>
                            </h3>
                            {filteredProjects.filter(p => p.status === status).map(project => (
                                <div key={project.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-sm text-black">{project.name}</h4>
                                        <button onClick={() => handleDeleteProject(project.id)} className="text-gray-400 hover:text-red-500"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></button>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-3">{project.team}</p>
                                    <div className="flex items-center justify-between text-[10px] text-gray-400">
                                        <span>Deadline: {project.deadline}</span>
                                        <span>{project.progress}%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-1 mt-1">
                                        <div className={`bg-orange-500 h-1 rounded-full`} style={{ width: `${project.progress}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl transform transition-all scale-100">
                        <h2 className="text-xl font-bold mb-4">Add New Project</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-orange-500"
                                    value={newProject.name}
                                    onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Team</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-orange-500"
                                    value={newProject.team}
                                    onChange={(e) => setNewProject({ ...newProject, team: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
                                <input
                                    type="date"
                                    className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-orange-500"
                                    value={newProject.deadline}
                                    onChange={(e) => setNewProject({ ...newProject, deadline: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                <select
                                    className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-orange-500"
                                    value={newProject.status}
                                    onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
                                >
                                    <option>Pending</option>
                                    <option>In Progress</option>
                                    <option>Completed</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-end gap-3 mt-6">
                            <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg">Cancel</button>
                            <button onClick={handleAddProject} className="px-4 py-2 bg-orange-500 text-white font-medium hover:bg-orange-600 rounded-lg shadow-sm">Add Project</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
