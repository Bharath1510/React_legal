import React from 'react';
import { X } from 'lucide-react';

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-blue-600">View/Edit AI Generated Document</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Document Content */}
        <div className="p-6">
          {/* Company Header */}
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
              <div className="text-white text-xs font-bold">
                <div className="w-8 h-1 bg-white mb-1"></div>
                <div className="w-8 h-1 bg-white mb-1"></div>
                <div className="w-8 h-1 bg-white"></div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ARKANSAS ELECTRIC</h1>
              <h2 className="text-2xl font-bold text-gray-900">COOPERATIVE CORPORATION</h2>
              <p className="text-gray-600 mt-1">Reliable | Affordable | Responsible</p>
            </div>
          </div>

          {/* Document Title */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-900">STANDARD AGREEMENT FOR ENGINEERING SERVICES</h3>
          </div>

          {/* Document Body */}
          <div className="space-y-6 text-sm leading-relaxed">
            <p>
              This Standard Agreement for Engineering Services ("Agreement") is entered into on this{' '}
              <span className="bg-yellow-200 px-1">[INSERT DAY]</span> day of{' '}
              <span className="bg-yellow-200 px-1">[INSERT MONTH]</span>,{' '}
              <span className="bg-yellow-200 px-1">[INSERT YEAR]</span> ("Effective Date"), by and between Arkansas Electric Cooperative Corporation (hereinafter referred to as "AECC," "us," "we," "our" or "Owner"), whose address is 1 Cooperative Way, Little Rock, AR 72209 and Experitec, Inc. (hereinafter referred to as "you," "your" or "Engineer"), whose address is{' '}
              <span className="text-blue-600 font-medium">504 Trade Center Blvd., Chesterfield, MO 63005 8380 Wolf Lake Dr, Memphis TN 38133</span>{' '}
              and is effective as of <span className="bg-yellow-200 px-1">[INSERT EFFECTIVE DATE]</span>.
            </p>

            <p>
              In consideration of the mutual agreements and covenants contained herein, and for other good and valuable consideration, the receipt and sufficiency of which hereby are acknowledged, it is mutually agreed and covenanted by and between the Parties, under seal, as follows:
            </p>

            <div className="mt-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">ARTICLE I FORMATION</h4>
              
              <div className="space-y-4">
                <div>
                  <p><span className="font-bold">1.1 Offer.</span> This Agreement, along with any subsequently issued Authorization of Services and the Attachments listed in Article I, Section 1.4 (collectively referred to as the "Services Agreement"), constitutes our offer, and is strictly limited to the terms and conditions herein, and therein provided.</p>
                  
                  <div className="mt-2 inline-block">
                    <span className="bg-orange-400 text-white px-3 py-1 rounded text-xs font-medium">
                      Document Discrepancies (Internal)
                    </span>
                  </div>
                </div>

                <div>
                  <p><span className="font-bold">1.2 Acceptance.</span> Acceptance by you of our offer may be expressed,{' '}
                  <span className="bg-yellow-200 px-1">or implied from any conduct by you recognizing the existence of the Services Agreement</span>, including but not limited to any compliance by you with any term and/or condition of the Services Agreement. Your acceptance of an Authorization of Services will constitute your acceptance of the Services Agreement, in its entirety, without modification.</p>
                </div>

                <div>
                  <p><span className="font-bold">1.3 Counter-offers.</span> We do not accept counter-offers. Any terms or conditions proposed in your acceptance that add to, vary from or conflict with the Services Agreement are deemed material and are hereby rejected. If our conduct is ever deemed an acceptance of your counter-offer, then our conduct will constitute an acceptance of such counter-offer subject to the express condition that you agree to the provisions of the Services Agreement that are additional to or different from any terms and conditions in your counter-offer.</p>
                </div>

                <div>
                  <p><span className="font-bold">2.4 Compliance with Laws and Regulations, and Policies, Procedures, and Programs.</span> In providing the Services, you shall comply with applicable laws and regulations, as well as any applicable policies, procedures, and programs (collectively "Rules") we provide to you, or that are otherwise available on our website at https://www.aecc.com/AECC-AECI-Terms ("Website"). These Rules may hereafter be revised, from time to time, by us, by posting revisions on the Website without notice to you, and such revisions shall be binding on both you and us upon posting. You agree that you will check the Website for any revisions to these Rules. No change,</p>
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