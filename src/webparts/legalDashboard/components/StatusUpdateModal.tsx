import * as React from 'react';
import { useState } from 'react';

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
      zIndex: 60,
      padding: '16px'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        maxWidth: '1024px',
        width: '100%'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#2563eb', margin: 0 }}>Update Document Status</h2>
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
          {/* Document Info Table */}
          <div style={{ backgroundColor: '#eff6ff', borderRadius: '8px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ backgroundColor: '#dbeafe' }}>
                <tr>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ID/Ref #</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Customer Name</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Doc Type</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Requester</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Received</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Due Date</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Received</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Priority</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Assigned To</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: 'white' }}>
                <tr>
                  <td style={{ padding: '16px', whiteSpace: 'nowrap', fontSize: '14px', fontWeight: '500', color: '#111827' }}>{documentId}</td>
                  <td style={{ padding: '16px', whiteSpace: 'nowrap', fontSize: '14px', color: '#111827' }}>{customerName}</td>
                  <td style={{ padding: '16px', whiteSpace: 'nowrap', fontSize: '14px', color: '#111827' }}>{docType}</td>
                  <td style={{ padding: '16px', whiteSpace: 'nowrap', fontSize: '14px', color: '#111827' }}>{requester}</td>
                  <td style={{ padding: '16px', whiteSpace: 'nowrap', fontSize: '14px', color: '#111827' }}>Mar 1, 2023</td>
                  <td style={{ padding: '16px', whiteSpace: 'nowrap', fontSize: '14px', color: '#111827' }}>Mar 15, 2023</td>
                  <td style={{ padding: '16px', whiteSpace: 'nowrap', fontSize: '14px', color: '#111827' }}>Apr 3, 2025</td>
                  <td style={{ padding: '16px', whiteSpace: 'nowrap' }}>
                    <span style={{
                      padding: '4px 8px',
                      fontSize: '12px',
                      fontWeight: '500',
                      backgroundColor: '#fecaca',
                      color: '#dc2626',
                      borderRadius: '4px'
                    }}>
                      Urgent
                    </span>
                  </td>
                  <td style={{ padding: '16px', whiteSpace: 'nowrap', fontSize: '14px', color: '#111827' }}>Legal Team</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Status Update Form */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {/* Current Status */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Current Status</label>
              <div style={{
                backgroundColor: '#f3f4f6',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                padding: '12px 16px',
                fontSize: '14px',
                color: '#374151'
              }}>
                pendingLegalReview
              </div>
            </div>

            {/* Change Status To */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Change Status To</label>
              <div style={{ position: 'relative' }}>
                <select 
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: 'white',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    fontSize: '14px',
                    appearance: 'none',
                    paddingRight: '32px',
                    color: '#6b7280'
                  }}
                >
                  <option value="">Select New Status</option>
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>{status}</option>
                  ))}
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

          {/* Reason for Status Change */}
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Reason for Status Change</label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Explain why this status change is needed..."
              style={{
                width: '100%',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                padding: '12px 16px',
                fontSize: '14px',
                resize: 'none',
                height: '128px',
                fontFamily: 'inherit'
              }}
            />
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
            <button
              onClick={onClose}
              style={{
                padding: '8px 24px',
                backgroundColor: '#6b7280',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#4b5563'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#6b7280'; }}
            >
              Cancel
            </button>
            <button
              onClick={handleUpdate}
              style={{
                padding: '8px 24px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#2563eb'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#3b82f6'; }}
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