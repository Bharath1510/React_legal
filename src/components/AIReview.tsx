import React from 'react';
import { ChevronDown, MoreHorizontal, Eye } from 'lucide-react';
import DocumentPreviewModal from './DocumentPreviewModal';

interface AIReviewProps {
  onNavigate: (page: string) => void;
}

const AIReview: React.FC<AIReviewProps> = ({ onNavigate }) => {
  const [selectedDocument, setSelectedDocument] = React.useState<{
    id: string;
    customerName: string;
    docType: string;
  } | null>(null);

  const sampleData = [
    {
      id: 'LR-001',
      customerName: 'ABC Corpo',
      docType: 'MSA',
      requester: 'John Smith',
      received: 'Apr 1, 2025',
      dueDate: 'Apr 15, 2025',
      priority: 'Urgent',
      assignedTo: 'Legal Team',
      status: null
    },
    {
      id: 'LR-002',
      customerName: 'XYZ Industries',
      docType: 'NDA',
      requester: 'Sarah Johnson',
      received: 'Apr 2, 2025',
      dueDate: 'Apr 16, 2025',
      priority: 'Normal',
      assignedTo: 'Legal Team',
      status: null
    },
    {
      id: 'LR-003',
      customerName: 'Acme Solutions',
      docType: 'PO',
      requester: 'Mike Wilson',
      received: 'Apr 3, 2025',
      dueDate: 'Apr 17, 2025',
      priority: 'Urgent',
      assignedTo: 'Legal Team',
      status: 'Service'
    },
    {
      id: 'LR-004',
      customerName: 'Global Tech',
      docType: 'COI',
      requester: 'Lisa Brown',
      received: 'Apr 5, 2025',
      dueDate: 'Apr 12, 2025',
      priority: 'Urgent',
      assignedTo: 'Legal Team',
      status: null
    },
    {
      id: 'LR-005',
      customerName: 'TechStar Inc',
      docType: 'MSA',
      requester: 'Robert Chen',
      received: 'Apr 4, 2025',
      dueDate: 'Apr 18, 2025',
      priority: 'Normal',
      assignedTo: 'Legal Team',
      status: null
    },
    {
      id: 'LR-006',
      customerName: 'Acme Solutions',
      docType: 'PO',
      requester: 'Jacob Jones',
      received: 'Apr 3, 2025',
      dueDate: 'Apr 17, 2025',
      priority: 'Urgent',
      assignedTo: 'Legal Team',
      status: 'Product'
    },
    {
      id: 'LR-007',
      customerName: 'TechStar Inc',
      docType: 'MSA',
      requester: 'Dianne Russell',
      received: 'Apr 4, 2025',
      dueDate: 'Apr 18, 2025',
      priority: 'Normal',
      assignedTo: 'Legal Team',
      status: 'NEW!!!'
    },
    {
      id: 'LR-008',
      customerName: 'ABC Corpo',
      docType: 'MSA',
      requester: 'Darle Robert',
      received: 'Apr 1, 2025',
      dueDate: 'Apr 15, 2025',
      priority: 'Urgent',
      assignedTo: 'Legal Team',
      status: 'Reply Pending'
    },
    {
      id: 'LR-005',
      customerName: 'Acme Solutions',
      docType: 'PO',
      requester: 'Kath Murphy',
      received: 'Apr 1, 2025',
      dueDate: 'Apr 15, 2025',
      priority: 'Normal',
      assignedTo: 'Legal Team',
      status: null
    },
    {
      id: 'LR-005',
      customerName: 'Global Tech',
      docType: 'COI',
      requester: 'Court Henry',
      received: 'Apr 1, 2025',
      dueDate: 'Apr 15, 2025',
      priority: 'Urgent',
      assignedTo: 'Legal Team',
      status: null
    }
  ];

  const getStatusBadge = (status: string | null) => {
    if (!status) return null;
    
    const statusStyles = {
      'Service': 'bg-purple-100 text-purple-800',
      'Product': 'bg-orange-100 text-orange-800',
      'NEW!!!': 'bg-green-100 text-green-800',
      'Reply Pending': 'bg-red-100 text-red-800'
    };

    return (
      <span className={`px-2 py-1 text-xs font-medium rounded ${statusStyles[status as keyof typeof statusStyles] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const isUrgent = priority === 'Urgent';
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded ${
        isUrgent ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
      }`}>
        {priority}
      </span>
    );
  };

  const handlePreviewClick = (row: any) => {
    setSelectedDocument({
      id: row.id,
      customerName: row.customerName,
      docType: row.docType
    });
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500">
        <button 
          onClick={() => onNavigate('dashboard')}
          className="hover:text-blue-600"
        >
          Dashboard
        </button>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-900">AI Review</span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI Review</h1>
          <p className="text-sm text-gray-500 mt-1">8 documents</p>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Status</label>
          <div className="relative">
            <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm appearance-none pr-8">
              <option>All Statuses</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Partner</label>
          <div className="relative">
            <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm appearance-none pr-8">
              <option>All Partners</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Document Type</label>
          <div className="relative">
            <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm appearance-none pr-8">
              <option>All Document Types</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID/Ref #</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doc Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requester</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Received</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned To</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sampleData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">{row.id}</span>
                      {row.status && (
                        <div className="ml-2">
                          {getStatusBadge(row.status)}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{row.customerName}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{row.docType}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-blue-600">{row.requester}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{row.received}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{row.dueDate}</td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    {getPriorityBadge(row.priority)}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{row.assignedTo}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <button className="hover:text-gray-600">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                      <button 
                        className="hover:text-gray-600"
                        onClick={() => handlePreviewClick(row)}
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing: 10 of 60
        </div>
        <div className="flex items-center space-x-2">
          <button className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center text-sm font-medium">
            1
          </button>
          <button className="w-8 h-8 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50 flex items-center justify-center text-sm font-medium">
            2
          </button>
          <span className="text-gray-500">...</span>
          <button className="w-8 h-8 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50 flex items-center justify-center text-sm font-medium">
            5
          </button>
          <button className="w-8 h-8 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50 flex items-center justify-center text-sm font-medium">
            6
          </button>
        </div>
      </div>

      {/* Document Preview Modal */}
      <DocumentPreviewModal
        isOpen={selectedDocument !== null}
        onClose={() => setSelectedDocument(null)}
        documentId={selectedDocument?.id || ''}
        customerName={selectedDocument?.customerName || ''}
        docType={selectedDocument?.docType || ''}
      />
    </div>
  );
};

export default AIReview;