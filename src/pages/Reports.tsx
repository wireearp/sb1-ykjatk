import React from 'react';
import { BarChart, PieChart, FileText, Download } from 'lucide-react';

export default function Reports() {
  const reports = [
    {
      id: 1,
      name: 'Species Distribution',
      description: 'Overview of tree species diversity in the inventory',
      type: 'Pie Chart',
      icon: PieChart,
    },
    {
      id: 2,
      name: 'Tree Condition Analysis',
      description: 'Analysis of tree health and condition status',
      type: 'Bar Chart',
      icon: BarChart,
    },
    {
      id: 3,
      name: 'Work Order Summary',
      description: 'Summary of completed and pending work orders',
      type: 'Document',
      icon: FileText,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
          Generate New Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-white shadow rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <report.icon className="h-8 w-8 text-emerald-600" />
              <button className="text-gray-400 hover:text-gray-500">
                <Download className="h-5 w-5" />
              </button>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">{report.name}</h3>
            <p className="mt-2 text-sm text-gray-500">{report.description}</p>
            <div className="mt-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                {report.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}