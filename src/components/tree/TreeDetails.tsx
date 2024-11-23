import React from 'react';
import { TreeData } from '../../types/tree';
import { Calendar, Ruler, TreePine, AlertTriangle, Tag } from 'lucide-react';

interface TreeDetailsProps {
  tree: TreeData;
  onEdit: (tree: TreeData) => void;
}

export function TreeDetails({ tree, onEdit }: TreeDetailsProps) {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Tree Details</h2>
          <button
            onClick={() => onEdit(tree)}
            className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
          >
            Edit Details
          </button>
        </div>
      </div>

      <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h3>
          <dl className="space-y-3">
            <div className="flex items-center">
              <dt className="text-sm font-medium text-gray-500 w-32">Species:</dt>
              <dd className="text-sm text-gray-900">{tree.species}</dd>
            </div>
            <div className="flex items-center">
              <dt className="text-sm font-medium text-gray-500 w-32">Common Name:</dt>
              <dd className="text-sm text-gray-900">{tree.commonName}</dd>
            </div>
            <div className="flex items-center">
              <dt className="text-sm font-medium text-gray-500 w-32">DBH:</dt>
              <dd className="text-sm text-gray-900">{tree.dbh} inches</dd>
            </div>
            <div className="flex items-center">
              <dt className="text-sm font-medium text-gray-500 w-32">Height:</dt>
              <dd className="text-sm text-gray-900">{tree.height} feet</dd>
            </div>
            <div className="flex items-center">
              <dt className="text-sm font-medium text-gray-500 w-32">Crown Spread:</dt>
              <dd className="text-sm text-gray-900">{tree.crownSpread} feet</dd>
            </div>
          </dl>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Status & Condition</h3>
          <dl className="space-y-3">
            <div className="flex items-center">
              <dt className="text-sm font-medium text-gray-500 w-32">Condition:</dt>
              <dd className={`text-sm px-2 py-1 rounded-full ${
                tree.condition === 'Excellent' ? 'bg-green-100 text-green-800' :
                tree.condition === 'Good' ? 'bg-blue-100 text-blue-800' :
                tree.condition === 'Fair' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {tree.condition}
              </dd>
            </div>
            <div className="flex items-center">
              <dt className="text-sm font-medium text-gray-500 w-32">Status:</dt>
              <dd className={`text-sm px-2 py-1 rounded-full ${
                tree.status === 'Healthy' ? 'bg-green-100 text-green-800' :
                tree.status === 'Needs Attention' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {tree.status}
              </dd>
            </div>
            <div className="flex items-center">
              <dt className="text-sm font-medium text-gray-500 w-32">Last Inspection:</dt>
              <dd className="text-sm text-gray-900">{new Date(tree.maintenance.lastInspection).toLocaleDateString()}</dd>
            </div>
            <div className="flex items-center">
              <dt className="text-sm font-medium text-gray-500 w-32">Next Inspection:</dt>
              <dd className="text-sm text-gray-900">{new Date(tree.maintenance.nextInspection).toLocaleDateString()}</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Work History */}
      <div className="px-6 py-4 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Work History</h3>
        <div className="flow-root">
          <ul className="-mb-8">
            {tree.workHistory.map((work, workIdx) => (
              <li key={work.id}>
                <div className="relative pb-8">
                  {workIdx !== tree.workHistory.length - 1 ? (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center ring-8 ring-white">
                        <TreePine className="h-4 w-4 text-white" />
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p className="text-sm text-gray-500">{work.description}</p>
                        <p className="mt-1 text-xs text-gray-500">Crew: {work.crew.join(', ')}</p>
                      </div>
                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                        <time dateTime={work.date}>{new Date(work.date).toLocaleDateString()}</time>
                        <p className="mt-1 font-medium">${work.cost}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Photos */}
      <div className="px-6 py-4 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Photos</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {tree.photos.map((photo) => (
            <div key={photo.id} className="relative group">
              <img
                src={photo.url}
                alt={photo.description}
                className="h-24 w-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white text-xs">{new Date(photo.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}