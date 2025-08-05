import * as React from 'react';

interface DocumentViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentId: string;
  customerName: string;
  docType: string;
}

const DocumentViewerModal: React.FC<DocumentViewerModalProps> = ({
  isOpen,
  onClose,
  documentId,
  customerName,
  docType
}) => {
  if (!isOpen) return null;

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
        maxWidth: '1280px',
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
          <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#2563eb', margin: 0 }}>View/Edit AI Generated Document</h2>
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

        {/* Document Content */}
        <div style={{ padding: '24px' }}>
          {/* Company Header */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              backgroundColor: '#22c55e',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '16px'
            }}>
              <div style={{ color: 'white', fontSize: '12px', fontWeight: 'bold' }}>
                <div style={{ width: '32px', height: '4px', backgroundColor: 'white', marginBottom: '4px' }}></div>
                <div style={{ width: '32px', height: '4px', backgroundColor: 'white', marginBottom: '4px' }}></div>
                <div style={{ width: '32px', height: '4px', backgroundColor: 'white' }}></div>
              </div>
            </div>
            <div>
              <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', margin: 0 }}>ARKANSAS ELECTRIC</h1>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', margin: 0 }}>COOPERATIVE CORPORATION</h2>
              <p style={{ color: '#6b7280', marginTop: '4px', margin: 0 }}>Reliable | Affordable | Responsible</p>
            </div>
          </div>

          {/* Document Title */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', margin: 0 }}>STANDARD AGREEMENT FOR ENGINEERING SERVICES</h3>
          </div>

          {/* Document Body */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '14px', lineHeight: '1.6' }}>
            <p>
              This Standard Agreement for Engineering Services ("Agreement") is entered into on this{' '}
              <span style={{ backgroundColor: '#fef3c7', padding: '2px 4px' }}>[INSERT DAY]</span> day of{' '}
              <span style={{ backgroundColor: '#fef3c7', padding: '2px 4px' }}>[INSERT MONTH]</span>,{' '}
              <span style={{ backgroundColor: '#fef3c7', padding: '2px 4px' }}>[INSERT YEAR]</span> ("Effective Date"), by and between Arkansas Electric Cooperative Corporation (hereinafter referred to as "AECC," "us," "we," "our" or "Owner"), whose address is 1 Cooperative Way, Little Rock, AR 72209 and Experitec, Inc. (hereinafter referred to as "you," "your" or "Engineer"), whose address is{' '}
              <span style={{ color: '#2563eb', fontWeight: '500' }}>504 Trade Center Blvd., Chesterfield, MO 63005 8380 Wolf Lake Dr, Memphis TN 38133</span>{' '}
              and is effective as of <span style={{ backgroundColor: '#fef3c7', padding: '2px 4px' }}>[INSERT EFFECTIVE DATE]</span>.
            </p>

            <p>
              In consideration of the mutual agreements and covenants contained herein, and for other good and valuable consideration, the receipt and sufficiency of which hereby are acknowledged, it is mutually agreed and covenanted by and between the Parties, under seal, as follows:
            </p>

            <div style={{ marginTop: '32px' }}>
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>ARTICLE I FORMATION</h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <p><span style={{ fontWeight: 'bold' }}>1.1 Offer.</span> This Agreement, along with any subsequently issued Authorization of Services and the Attachments listed in Article I, Section 1.4 (collectively referred to as the "Services Agreement"), constitutes our offer, and is strictly limited to the terms and conditions herein, and therein provided.</p>
                  
                  <div style={{ marginTop: '8px', display: 'inline-block' }}>
                    <span style={{
                      backgroundColor: '#f97316',
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      Document Discrepancies (Internal)
                    </span>
                  </div>
                </div>

                <div>
                  <p><span style={{ fontWeight: 'bold' }}>1.2 Acceptance.</span> Acceptance by you of our offer may be expressed,{' '}
                  <span style={{ backgroundColor: '#fef3c7', padding: '2px 4px' }}>or implied from any conduct by you recognizing the existence of the Services Agreement</span>, including but not limited to any compliance by you with any term and/or condition of the Services Agreement. Your acceptance of an Authorization of Services will constitute your acceptance of the Services Agreement, in its entirety, without modification.</p>
                </div>

                <div>
                  <p><span style={{ fontWeight: 'bold' }}>1.3 Counter-offers.</span> We do not accept counter-offers. Any terms or conditions proposed in your acceptance that add to, vary from or conflict with the Services Agreement are deemed material and are hereby rejected. If our conduct is ever deemed an acceptance of your counter-offer, then our conduct will constitute an acceptance of such counter-offer subject to the express condition that you agree to the provisions of the Services Agreement that are additional to or different from any terms and conditions in your counter-offer.</p>
                </div>

                <div>
                  <p><span style={{ fontWeight: 'bold' }}>2.4 Compliance with Laws and Regulations, and Policies, Procedures, and Programs.</span> In providing the Services, you shall comply with applicable laws and regulations, as well as any applicable policies, procedures, and programs (collectively "Rules") we provide to you, or that are otherwise available on our website at https://www.aecc.com/AECC-AECI-Terms ("Website"). These Rules may hereafter be revised, from time to time, by us, by posting revisions on the Website without notice to you, and such revisions shall be binding on both you and us upon posting. You agree that you will check the Website for any revisions to these Rules. No change,</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentViewerModal;