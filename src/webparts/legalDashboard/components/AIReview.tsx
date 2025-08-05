import * as React from 'react';
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
    }
  ];

  const getStatusBadge = (status: string | null) => {
    if (!status) return null;
    
    const statusStyles = {
      'Service': { backgroundColor: '#f3e8ff', color: '#8b5cf6' },
      'Product': { backgroundColor: '#fed7aa', color: '#ea580c' },
      'NEW!!!': { backgroundColor: '#dcfce7', color: '#16a34a' },
      'Reply Pending': { backgroundColor: '#fecaca', color: '#dc2626' }
    };

    const style = statusStyles[status as keyof typeof statusStyles] || { backgroundColor: '#f3f4f6', color: '#374151' };

    return (
      <span style={{
        padding: '4px 8px',
        fontSize: '12px',
        fontWeight: '500',
        borderRadius: '4px',
        ...style
      }}>
        {status}
      </span>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const isUrgent = priority === 'Urgent';
    return (
      <span style={{
        padding: '4px 8px',
        fontSize: '12px',
        fontWeight: '500',
        borderRadius: '4px',
        backgroundColor: isUrgent ? '#fecaca' : '#dbeafe',
        color: isUrgent ? '#dc2626' : '#2563eb'
      }}>
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#6b7280' }}>
        <button 
          onClick={() => onNavigate('dashboard')}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: '#6b7280', 
            cursor: 'pointer',
            fontSize: '14px'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#2563eb'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#6b7280'; }}
        >
          Dashboard
        </button>
        <span style={{ margin: '0 8px' }}>&gt;</span>
        <span style={{ color: '#111827' }}>AI Review</span>
      </div>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', margin: 0 }}>AI Review</h1>
          <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px', margin: 0 }}>8 documents</p>
        </div>
      </div>

      {/* Filters */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Filter by Status</label>
          <div style={{ position: 'relative' }}>
            <select style={{ 
              width: '100%', 
              backgroundColor: 'white', 
              border: '1px solid #d1d5db', 
              borderRadius: '8px', 
              padding: '8px 16px', 
              fontSize: '14px',
              appearance: 'none',
              paddingRight: '32px'
            }}>
              <option>All Statuses</option>
            </select>
            <span style={{ 
              position: 'absolute', 
              right: '12px', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              color: '#9ca3af',
              pointerEvents: 'none'
            }}>▼</span>
          </div>
        </div>
        
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Filter by Partner</label>
          <div style={{ position: 'relative' }}>
            <select style={{ 
              width: '100%', 
              backgroundColor: 'white', 
              border: '1px solid #d1d5db', 
              borderRadius: '8px', 
              padding: '8px 16px', 
              fontSize: '14px',
              appearance: 'none',
              paddingRight: '32px'
            }}>
              <option>All Partners</option>
            </select>
            <span style={{ 
              position: 'absolute', 
              right: '12px', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              color: '#9ca3af',
              pointerEvents: 'none'
            }}>▼</span>
          </div>
        </div>
        
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Filter by Document Type</label>
          <div style={{ position: 'relative' }}>
            <select style={{ 
              width: '100%', 
              backgroundColor: 'white', 
              border: '1px solid #d1d5db', 
              borderRadius: '8px', 
              padding: '8px 16px', 
              fontSize: '14px',
              appearance: 'none',
              paddingRight: '32px'
            }}>
              <option>All Document Types</option>
            </select>
            <span style={{ 
              position: 'absolute', 
              right: '12px', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              color: '#9ca3af',
              pointerEvents: 'none'
            }}>▼</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '8px', 
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', 
        border: '1px solid #e5e7eb',
        overflow: 'hidden'
      }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
              <tr>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ID/Ref #</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Customer Name</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Doc Type</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Requester</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Received</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Due Date</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Priority</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Assigned To</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Actions</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: 'white' }}>
              {sampleData.map((row, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #e5e7eb' }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f9fafb'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; }}>
                  <td style={{ padding: '16px', whiteSpace: 'nowrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '14px', fontWeight: '500', color: '#111827' }}>{row.id}</span>
                      {row.status && (
                        <div style={{ marginLeft: '8px' }}>
                          {getStatusBadge(row.status)}
                        </div>
                      )}
                    </div>
                  </td>
                  <td style={{ padding: '16px', whiteSpace: 'nowrap', fontSize: '14px', color: '#111827' }}>{row.customerName}</td>
                  <td style={{ padding: '16px', whiteSpace: 'nowrap', fontSize: '14px', color: '#111827' }}>{row.docType}</td>
                  <td style={{ padding: '16px', whiteSpace: 'nowrap', fontSize: '14px', color: '#2563eb' }}>{row.requester}</td>
                  <td style={{ padding: '16px', whiteSpace: 'nowrap', fontSize: '14px', color: '#111827' }}>{row.received}</td>
                  <td style={{ padding: '16px', whiteSpace: 'nowrap', fontSize: '14px', color: '#111827' }}>{row.dueDate}</td>
                  <td style={{ padding: '16px', whiteSpace: 'nowrap' }}>
                    {getPriorityBadge(row.priority)}
                  </td>
                  <td style={{ padding: '16px', whiteSpace: 'nowrap', fontSize: '14px', color: '#111827' }}>{row.assignedTo}</td>
                  <td style={{ padding: '16px', whiteSpace: 'nowrap', fontSize: '14px', color: '#9ca3af' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button style={{ 
                        background: 'none', 
                        border: 'none', 
                        cursor: 'pointer', 
                        color: '#9ca3af',
                        fontSize: '16px'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#6b7280'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#9ca3af'; }}>
                        ⋯
                      </button>
                      <button 
                        style={{ 
                          background: 'none', 
                          border: 'none', 
                          cursor: 'pointer', 
                          color: '#9ca3af',
                          fontSize: '16px'
                        }}
                        onClick={() => handlePreviewClick(row)}
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#6b7280'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = '#9ca3af'; }}
                      >
                        👁️
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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: '14px', color: '#374151' }}>
          Showing: 10 of 60
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button style={{ 
            width: '32px', 
            height: '32px', 
            backgroundColor: '#2563eb', 
            color: 'white', 
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            1
          </button>
          <button style={{ 
            width: '32px', 
            height: '32px', 
            backgroundColor: 'white', 
            border: '1px solid #d1d5db', 
            color: '#374151',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f9fafb'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; }}>
            2
          </button>
          <span style={{ color: '#6b7280' }}>...</span>
          <button style={{ 
            width: '32px', 
            height: '32px', 
            backgroundColor: 'white', 
            border: '1px solid #d1d5db', 
            color: '#374151',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f9fafb'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; }}>
            5
          </button>
          <button style={{ 
            width: '32px', 
            height: '32px', 
            backgroundColor: 'white', 
            border: '1px solid #d1d5db', 
            color: '#374151',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f9fafb'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; }}>
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