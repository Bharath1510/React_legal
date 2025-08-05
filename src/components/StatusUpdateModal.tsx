import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';

interface StatusUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentId: string;
  customerName: string;
  docType: string;
  requester: string;
  currentStatus: string;
}

const StatusUpdateModal: React.FC<StatusUpdateModalProps> = ({
  isOpen,
  onClose,
  documentId,
  customerName,
  docType,
  requester,
  currentStatus
}) => {
  const [selectedStatus, setSelectedStatus] = useState('');
  const [reason, setReason] = useState('');

  if (!isOpen) return null;

  const statusOptions = [
    'Received',
    'AI Review',
    'Pending Experitec Legal Review',
    'Pending Outside Counsel Review',
    'Pending Customer Response',
    'Pending Internal Experitec Response',
    'Signed by Experitec',
    'Fully Executed'
  ];

  const handleUpdate = () => {
    // Handle status update logic here
    console.log('Updating status to:', selectedStatus, 'Reason:', reason);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-blue-600">Update Document Status</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Document Info Table */}
          <div className="bg-blue-50 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">ID/Ref #</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Customer Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Doc Type</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Requester</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Received</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Due Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Received</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Priority</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Assigned To</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{documentId}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{customerName}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{docType}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{requester}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">Mar 1, 2023</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">Mar 15, 2023</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">Apr 3, 2025</td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded">
                      Urgent
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">Legal Team</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Status Update Form */}
          <div className="grid grid-cols-2 gap-6">
            {/* Current Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Status</label>
              <div className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700">
                pendingLegalReview
              </div>
            </div>

            {/* Change Status To */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Change Status To</label>
              <div className="relative">
                <select 
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm appearance-none pr-8 text-gray-500"
                >
                  <option value="">Select New Status</option>
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Reason for Status Change */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Status Change</label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Explain why this status change is needed..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm resize-none h-32"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdate}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusUpdateModal;