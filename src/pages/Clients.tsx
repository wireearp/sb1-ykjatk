import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Clients() {
  const clients = [
    {
      id: 1,
      name: 'Johnson Residence',
      contact: 'Robert Johnson',
      email: 'robert@example.com',
      phone: '(555) 123-4567',
      address: '123 Oak Street',
      status: 'Active',
    },
    {
      id: 2,
      name: 'City Park Department',
      contact: 'Sarah Williams',
      email: 'sarah@citypark.gov',
      phone: '(555) 987-6543',
      address: '456 Park Avenue',
      status: 'Active',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Clients</h1>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
          Add Client
        </button>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="p-6">
          <div className="grid gap-6">
            {clients.map((client) => (
              <div
                key={client.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{client.name}</h3>
                    <p className="text-sm text-gray-500">{client.contact}</p>
                  </div>
                  <span className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-green-100 text-green-800">
                    {client.status}
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Phone className="h-4 w-4 mr-2" />
                    {client.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Mail className="h-4 w-4 mr-2" />
                    {client.email}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {client.address}
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