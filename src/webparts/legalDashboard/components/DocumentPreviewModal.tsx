import * as React from 'react';
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
    { 
      icon: '📄', 
      label: 'View Reference Document', 
      bgColor: '#eff6ff', 
      iconColor: '#2563eb', 
      onClick: () => {} 
    },
    { 
      icon: '💻', 
      label: 'View/Edit AI Generated Document', 
      bgColor: '#ecfeff', 
      iconColor: '#06b6d4', 
      onClick: () => setDocumentViewerOpen(true) 
    },
    { 
      icon: '✏️', 
      label: 'Update Status', 
      bgColor: '#f9fafb', 
      iconColor: '#6b7280', 
      onClick: () => setStatusUpdateOpen(true) 
    },
    { 
      icon: '🔄', 
      label: 'Highlighted Terms', 
      bgColor: '#f0fdf4', 
      iconColor: '#22c55e' 
    },
    { 
      icon: '⏰', 
      label: 'Activity History', 
      bgColor: '#fed7aa', 
      iconColor: '#ea580c' 
    },
    { 
      icon: '🔄', 
      label: 'Version History', 
      bgColor: '#f3e8ff', 
      iconColor: '#8b5cf6' 
    }
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50,
      padding: '16px'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        maxWidth: '1024px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', margin: 0 }}>Related References</h2>
          <button
            onClick={onClose}
            style={{
              color: '#9ca3af',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '24px',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#6b7280'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#9ca3af'; }}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Related References Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ backgroundColor: '#f9fafb' }}>
                <tr>
                  <th style={{
                    padding: '12px 16px',
                    textAlign: 'left',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#6b7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Related Ref ID#
                  </th>
                  <th style={{
                    padding: '12px 16px',
                    textAlign: 'left',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#6b7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Requester
                  </th>
                  <th style={{
                    padding: '12px 16px',
                    textAlign: 'left',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#6b7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Received
                  </th>
                  <th style={{
                    padding: '12px 16px',
                    textAlign: 'left',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#6b7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Priority
                  </th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: 'white' }}>
                {relatedReferences.map((ref, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid #e5e7eb' }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f9fafb'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; }}>
                    <td style={{ padding: '16px', whiteSpace: 'nowrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '14px', fontWeight: '500', color: '#2563eb' }}>{ref.id}</span>
                        {ref.hasAttachment && (
                          <span style={{
                            marginLeft: '8px',
                            padding: '4px 8px',
                            fontSize: '12px',
                            fontWeight: '500',
                            backgroundColor: '#fed7aa',
                            color: '#ea580c',
                            borderRadius: '4px'
                          }}>
                            Attachment
                          </span>
                        )}
                      </div>
                    </td>
                    <td style={{ padding: '16px', whiteSpace: 'nowrap', fontSize: '14px', color: '#111827' }}>
                      {ref.requester}
                    </td>
                    <td style={{ padding: '16px', whiteSpace: 'nowrap', fontSize: '14px', color: '#111827' }}>
                      {ref.received}
                    </td>
                    <td style={{ padding: '16px', whiteSpace: 'nowrap' }}>
                      <span style={{
                        padding: '4px 8px',
                        fontSize: '12px',
                        fontWeight: '500',
                        borderRadius: '4px',
                        backgroundColor: ref.priority === 'Urgent' ? '#fecaca' : '#dbeafe',
                        color: ref.priority === 'Urgent' ? '#dc2626' : '#2563eb'
                      }}>
                        {ref.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Status Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {statusSteps.map((step, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                  {/* Circle */}
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: step.completed 
                      ? '#22c55e' 
                      : step.active 
                        ? '#f97316' 
                        : '#d1d5db',
                    color: 'white'
                  }}>
                    {step.completed && (
                      <span style={{ fontSize: '16px' }}>✓</span>
                    )}
                  </div>
                  
                  {/* Line to next step */}
                  {index < statusSteps.length - 1 && (
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      left: '32px',
                      width: '64px',
                      height: '2px',
                      backgroundColor: step.completed ? '#22c55e' : '#d1d5db'
                    }} />
                  )}
                  
                  {/* Label */}
                  <div style={{ marginTop: '8px', textAlign: 'center', maxWidth: '80px' }}>
                    <div style={{
                      fontSize: '12px',
                      fontWeight: '500',
                      color: step.completed 
                        ? '#22c55e' 
                        : step.active 
                          ? '#f97316' 
                          : '#6b7280'
                    }}>
                      {step.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {actionButtons.map((button, index) => (
              <button
                key={index}
                onClick={button.onClick}
                style={{
                  backgroundColor: button.bgColor,
                  padding: '16px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '24px', color: button.iconColor }}>
                    {button.icon}
                  </span>
                  <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>
                    {button.label}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Complexity Score */}
          <div style={{ backgroundColor: '#ecfeff', padding: '16px', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>Complexity Score:</span>
              <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#2563eb' }}>85%</span>
            </div>
            <div style={{ width: '100%', backgroundColor: '#e5e7eb', borderRadius: '9999px', height: '8px' }}>
              <div style={{ backgroundColor: '#2563eb', height: '8px', borderRadius: '9999px', width: '85%' }}></div>
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