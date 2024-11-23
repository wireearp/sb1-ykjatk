import React from 'react';
import { Calendar, Users, Truck, ClipboardList } from 'lucide-react';

export default function WorkOrders() {
  const workOrders = [
    {
      id: 1,
      client: 'Johnson Residence',
      type: 'Tree Pruning',
      status: 'Scheduled',
      date: '2024-03-20',
      crew: 'Team A',
      priority: 'Medium',
    },
    {
      id: 2,
      client: 'City Park',
      type: 'Health Assessment',
      status: 'In Progress',
      date: '2024-03-19',
      crew: 'Team B',
      priority: 'High',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Work Orders</h1>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
          Create Work Order
        </button>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="p-6">
          <div className="grid gap-6">
            {workOrders.map((order) => (
              <div
                key={order.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{order.client}</h3>
                    <p className="text-sm text-gray-500">{order.type}</p>
                  </div>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      order.status === 'Scheduled'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {order.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    {order.crew}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <ClipboardList className="h-4 w-4 mr-2" />
                    {order.priority} Priority
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}