import React from 'react';
import { X, FileText, Download, Edit, RefreshCw, Clock, RotateCcw } from 'lucide-react';
import DocumentViewerModal from './DocumentViewerModal';
import StatusUpdateModal from './StatusUpdateModal';

interface DocumentPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentId: string;
  customerName: string;
  docType: string;
}

const DocumentPreviewModal: React.FC<DocumentPreviewModalProps> = ({
  isOpen,
  onClose,
  documentId,
  customerName,
  docType
}) => {
  if (!isOpen) return null;

  const [documentViewerOpen, setDocumentViewerOpen] = React.useState(false);
  const [statusUpdateOpen, setStatusUpdateOpen] = React.useState(false);

  const relatedReferences = [
    {
      id: 'LR-001_001',
      requester: 'Jane Cooper',
      received: 'Apr 3, 2025 - 11:36 AM',
      priority: 'Urgent',
      hasAttachment: true
    },
    {
      id: 'LR-001_002',
      requester: 'Robert Johnson',
      received: 'Apr 4, 2025 - 10:10 AM',
      priority: 'Normal',
      hasAttachment: false
    },
    {
      id: 'LR-001_003',
      requester: 'Michael Chen',
      received: 'Apr 5, 2025 - 1:58 PM',
      priority: 'Normal',
      hasAttachment: false
    }
  ];

  const statusSteps = [
    { label: 'Received', completed: true },
    { label: 'AI Review', completed: true },
    { label: 'Pending Experitec Legal Review', completed: true },
    { label: 'Pending Outside Counsel Review', completed: true },
    { label: 'Pending Customer Response', completed: true },
    { label: 'Pending Internal Experitec Response', active: true },
    { label: 'Signed by Experitec', completed: false },
    { label: 'Fully Executed', completed: false }
  ];

  const actionButtons = [
    { icon: FileText, label: 'View Reference Document', bgColor: 'bg-blue-50', iconColor: 'text-blue-600', onClick: () => {} },
    { icon: Download, label: 'View/Edit AI Generated Document', bgColor: 'bg-cyan-50', iconColor: 'text-cyan-600', onClick: () => setDocumentViewerOpen(true) },
    { icon: Edit, label: 'Update Status', bgColor: 'bg-gray-50', iconColor: 'text-gray-600', onClick: () => setStatusUpdateOpen(true) },
    { icon: RefreshCw, label: 'Highlighted Terms', bgColor: 'bg-green-50', iconColor: 'text-green-600' },
    { icon: Clock, label: 'Activity History', bgColor: 'bg-orange-50', iconColor: 'text-orange-600' },
    { icon: RotateCcw, label: 'Version History', bgColor: 'bg-purple-50', iconColor: 'text-purple-600' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Related References</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Related References Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Related Ref ID#
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Requester
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Received
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {relatedReferences.map((ref, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-blue-600">{ref.id}</span>
                        {ref.hasAttachment && (
                          <span className="ml-2 px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded">
                            Attachment
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ref.requester}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ref.received}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        ref.priority === 'Urgent' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {ref.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Status Timeline */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              {statusSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center relative">
                  {/* Circle */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step.completed 
                      ? 'bg-green-500 text-white' 
                      : step.active 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-300 text-gray-500'
                  }`}>
                    {step.completed && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  
                  {/* Line to next step */}
                  {index < statusSteps.length - 1 && (
                    <div className={`absolute top-4 left-8 w-16 h-0.5 ${
                      step.completed ? 'bg-green-500' : 'bg-gray-300'
                    }`} />
                  )}
                  
                  {/* Label */}
                  <div className="mt-2 text-xs text-center max-w-20">
                    <div className={`font-medium ${
                      step.completed 
                        ? 'text-green-600' 
                        : step.active 
                          ? 'text-orange-600' 
                          : 'text-gray-500'
                    }`}>
                      {step.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {actionButtons.map((button, index) => (
              <button
                key={index}
                onClick={button.onClick}
                className={`${button.bgColor} p-4 rounded-lg hover:opacity-80 transition-opacity`}
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <button.icon className={`w-6 h-6 ${button.iconColor}`} />
                  <span className="text-sm font-medium text-gray-700">
                    {button.label}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Complexity Score */}
          <div className="bg-cyan-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Complexity Score:</span>
              <span className="text-lg font-bold text-blue-600">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Document Viewer Modal */}
      <DocumentViewerModal
        isOpen={documentViewerOpen}
        onClose={() => setDocumentViewerOpen(false)}
        documentId={documentId}
        customerName={customerName}
        docType={docType}
      />

      {/* Status Update Modal */}
      <StatusUpdateModal
        isOpen={statusUpdateOpen}
        onClose={() => setStatusUpdateOpen(false)}
        documentId={documentId}
        customerName={customerName}
        docType={docType}
        requester="John Smith"
        currentStatus="pendingLegalReview"
      />
    </div>
  );
};

export default DocumentPreviewModal;