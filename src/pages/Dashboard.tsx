import React from 'react';
import { Calendar, Users, Truck, TreePine, Clipboard } from 'lucide-react';

const stats = [
  { name: 'Active Work Orders', value: '12', icon: Clipboard, change: '+2.5%', changeType: 'positive' },
  { name: 'Crew Members Active', value: '3', icon: Users, change: '0%', changeType: 'neutral' },
  { name: 'Equipment in Use', value: '8', icon: Truck, change: '-3%', changeType: 'negative' },
  { name: 'Trees Managed', value: '1,429', icon: TreePine, change: '+12%', changeType: 'positive' },
];

const todaysTasks = [
  {
    id: 1,
    title: 'Oak Tree Pruning - Johnson Residence',
    time: '9:00 AM',
    crew: 'Team A',
    equipment: ['Bucket Truck', 'Chipper'],
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Emergency Storm Cleanup - Main Street',
    time: '11:30 AM',
    crew: 'Team B',
    equipment: ['Chainsaw', 'Dump Truck'],
    status: 'Scheduled',
  },
  {
    id: 3,
    title: 'Tree Health Assessment - City Park',
    time: '2:00 PM',
    crew: 'Team C',
    equipment: ['Diagnostic Tools'],
    status: 'Pending',
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6"
          >
            <dt>
              <div className="absolute rounded-md bg-emerald-500 p-3">
                <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">{stat.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <p
                className={`ml-2 flex items-baseline text-sm font-semibold ${
                  stat.changeType === 'positive' ? 'text-green-600' : 
                  stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-500'
                }`}
              >
                {stat.change}
              </p>
            </dd>
          </div>
        ))}
      </div>

      {/* Today's Tasks */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Today's Tasks</h2>
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <div className="mt-6 flow-root">
              <ul className="-my-5 divide-y divide-gray-200">
                {todaysTasks.map((task) => (
                  <li key={task.id} className="py-5">
                    <div className="relative focus-within:ring-2 focus-within:ring-emerald-500">
                      <h3 className="text-sm font-semibold text-gray-800">
                        <a href="#" className="hover:underline focus:outline-none">
                          {task.title}
                        </a>
                      </h3>
                      <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6">
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <Calendar className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                          {task.time}
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <Users className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                          {task.crew}
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <Truck className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                          {task.equipment.join(', ')}
                        </div>
                        <div className="mt-2 flex items-center text-sm">
                          <span
                            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                              task.status === 'In Progress'
                                ? 'bg-green-100 text-green-800'
                                : task.status === 'Scheduled'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {task.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Calendar Preview */}
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Upcoming Schedule</h2>
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <div className="mt-6">
              {/* Calendar component will go here in future updates */}
              <p className="text-sm text-gray-500">Calendar integration coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}