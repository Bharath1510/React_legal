import * as React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  return (
    <div style={{ 
      height: '100vh', 
      width: '100vw',
      backgroundColor: '#f9fafb',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
      overflow: 'hidden'
    }}>
      {/* Header */}
      <header style={{ 
        backgroundColor: 'white', 
        borderBottom: '1px solid #e5e7eb', 
        padding: '1rem 1.5rem',
        height: '80px',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1001
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ 
              width: '32px', 
              height: '32px', 
              backgroundColor: '#2563eb', 
              borderRadius: '4px', 
              marginRight: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>E</div>
            </div>
            <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#2563eb' }}>EXPERITEC</span>
          </div>

          {/* Center Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              backgroundColor: 'white', 
              border: '1px solid #d1d5db', 
              borderRadius: '8px', 
              padding: '8px 16px',
              cursor: 'pointer'
            }}>
              <span style={{ color: '#374151', marginRight: '8px' }}>Legal Team</span>
              <span style={{ color: '#6b7280' }}>▼</span>
            </div>
          </div>

          {/* User Profile */}
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <div style={{ 
              width: '32px', 
              height: '32px', 
              backgroundColor: '#3b82f6', 
              borderRadius: '50%', 
              marginRight: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ color: 'white', fontSize: '14px' }}>👤</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '14px', fontWeight: '500', color: '#111827' }}>David Writer</div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Admin</div>
            </div>
            <span style={{ color: '#6b7280', marginLeft: '8px' }}>▼</span>
          </div>
        </div>
      </header>

      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <aside style={{ 
          width: '192px', 
          backgroundColor: 'white', 
          height: 'calc(100vh - 80px)',
          borderRight: '1px solid #e5e7eb', 
          padding: '1rem',
          position: 'fixed',
          top: '80px',
          left: 0,
          overflowY: 'auto',
          zIndex: 1000
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button
              onClick={() => onNavigate('dashboard')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                borderRadius: '8px',
                textAlign: 'left',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: currentPage === 'dashboard' ? '#2563eb' : 'transparent',
                color: currentPage === 'dashboard' ? 'white' : '#374151',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 'dashboard') {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== 'dashboard') {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <div style={{ 
                width: '24px', 
                height: '24px', 
                marginRight: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ 
                  width: '16px', 
                  height: '16px', 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr',
                  gap: '2px'
                }}>
                  <div style={{ backgroundColor: 'currentColor', borderRadius: '2px' }}></div>
                  <div style={{ backgroundColor: 'currentColor', borderRadius: '2px' }}></div>
                  <div style={{ backgroundColor: 'currentColor', borderRadius: '2px' }}></div>
                  <div style={{ backgroundColor: 'currentColor', borderRadius: '2px' }}></div>
                </div>
              </div>
              Dashboard
            </button>

            <button style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              padding: '12px 16px',
              color: '#374151',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '8px',
              textAlign: 'left',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f4f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                marginRight: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                📊
              </div>
              Analytics
            </button>

            <button style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              padding: '12px 16px',
              color: '#374151',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '8px',
              textAlign: 'left',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f4f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                marginRight: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                📁
              </div>
              Archived
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main style={{ 
          marginLeft: '192px',
          marginTop: '80px',
          padding: '1.5rem',
          height: 'calc(100vh - 80px)',
          overflowY: 'auto',
          width: 'calc(100vw - 192px)'
        }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;