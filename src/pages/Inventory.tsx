import React, { useState } from 'react';
import { TreeData } from '../types/tree';
import { TreeDetails } from '../components/tree/TreeDetails';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/Table';
import { Search, Filter, Download } from 'lucide-react';

const mockTrees: TreeData[] = [
  {
    id: '1',
    species: 'Quercus alba',
    commonName: 'White Oak',
    dbh: 24,
    height: 65,
    crownSpread: 45,
    condition: 'Good',
    location: {
      latitude: 40.7128,
      longitude: -74.006,
      address: '123 Main St',
    },
    status: 'Healthy',
    maintenance: {
      lastInspection: '2024-02-15',
      nextInspection: '2024-08-15',
      recommendations: ['Prune dead wood', 'Monitor for pests'],
    },
    details: {
      publicRightOfWay: true,
      tagNumber: 'TO-1234',
      hardscapeDamage: false,
      notes: 'Specimen tree in excellent location',
    },
    photos: [
      {
        id: 'p1',
        url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3',
        date: '2024-02-15',
        description: 'Full tree view',
      },
    ],
    workHistory: [
      {
        id: 'w1',
        date: '2024-01-15',
        type: 'Pruning',
        cost: 450,
        description: 'Crown cleaning and deadwood removal',
        crew: ['John D.', 'Mike S.'],
        attachments: [],
      },
    ],
  },
  // Add more mock trees as needed
];

export default function Inventory() {
  const [selectedTree, setSelectedTree] = useState<TreeData | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleTreeSelect = (tree: TreeData) => {
    setSelectedTree(tree);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Tree Inventory</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
            Add New Tree
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Download className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex space-x-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search trees..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
          <Filter className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tag #</TableHead>
                <TableHead>Species</TableHead>
                <TableHead>DBH</TableHead>
                <TableHead>Condition</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTrees.map((tree) => (
                <TableRow
                  key={tree.id}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() => handleTreeSelect(tree)}
                >
                  <TableCell>{tree.details.tagNumber}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{tree.commonName}</div>
                      <div className="text-sm text-gray-500">{tree.species}</div>
                    </div>
                  </TableCell>
                  <TableCell>{tree.dbh}"</TableCell>
                  <TableCell>
                    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      tree.condition === 'Excellent' ? 'bg-green-100 text-green-800' :
                      tree.condition === 'Good' ? 'bg-blue-100 text-blue-800' :
                      tree.condition === 'Fair' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {tree.condition}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                      tree.status === 'Healthy' ? 'bg-green-100 text-green-800' :
                      tree.status === 'Needs Attention' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {tree.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {selectedTree ? (
          <TreeDetails
            tree={selectedTree}
            onEdit={(tree) => console.log('Edit tree:', tree)}
          />
        ) : (
          <div className="bg-white shadow rounded-lg p-6 flex items-center justify-center text-gray-500">
            Select a tree to view details
          </div>
        )}
      </div>
    </div>
  );
}