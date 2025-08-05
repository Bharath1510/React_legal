import * as React from 'react';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const pieChartData = [
    { label: 'Contracts', value: 38, color: '#1e40af' },
    { label: "CO's", value: 24, color: '#f97316' },
    { label: 'Forms', value: 20, color: '#10b981' },
    { label: 'Misc', value: 10, color: '#8b5cf6' },
    { label: 'Need Review', value: 9, color: '#ef4444' }
  ];

  const cards = [
    {
      title: 'Needs Review',
      value: 28,
      icon: '👁️',
      bgColor: '#fef2f2',
      iconColor: '#ef4444',
      iconBg: '#ef4444'
    },
    {
      title: 'AI Review',
      value: 24,
      icon: '📊',
      bgColor: '#eff6ff',
      iconColor: '#3b82f6',
      iconBg: '#3b82f6',
      onClick: () => onNavigate('ai-review')
    },
    {
      title: 'Pending Experitec Legal Review',
      value: 7,
      icon: '📄',
      bgColor: '#f3e8ff',
      iconColor: '#8b5cf6',
      iconBg: '#8b5cf6'
    },
    {
      title: 'Pending Outside Counsel Review',
      value: 15,
      icon: '⏰',
      bgColor: '#fefce8',
      iconColor: '#eab308',
      iconBg: '#eab308'
    },
    {
      title: 'Pending Customer Response',
      value: 15,
      icon: '⚙️',
      bgColor: '#ecfeff',
      iconColor: '#06b6d4',
      iconBg: '#06b6d4'
    },
    {
      title: 'Pending Internal Experitec Response',
      value: 11,
      icon: '👥',
      bgColor: '#f9fafb',
      iconColor: '#6b7280',
      iconBg: '#6b7280'
    },
    {
      title: 'Signed by Experitec',
      value: 8,
      icon: '📅',
      bgColor: '#eff6ff',
      iconColor: '#3b82f6',
      iconBg: '#3b82f6'
    },
    {
      title: 'Fully Executed',
      value: 32,
      icon: '✅',
      bgColor: '#f0fdf4',
      iconColor: '#22c55e',
      iconBg: '#22c55e'
    }
  ];

  const createPieChart = () => {
    const total = pieChartData.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = 0;
    const radius = 80;
    const centerX = 120;
    const centerY = 120;

    return pieChartData.map((item, index) => {
      const percentage = (item.value / total) * 100;
      const angle = (item.value / total) * 360;
      const largeArcFlag = angle > 180 ? 1 : 0;

      const x1 = centerX + radius * Math.cos((currentAngle * Math.PI) / 180);
      const y1 = centerY + radius * Math.sin((currentAngle * Math.PI) / 180);
      
      currentAngle += angle;
      
      const x2 = centerX + radius * Math.cos((currentAngle * Math.PI) / 180);
      const y2 = centerY + radius * Math.sin((currentAngle * Math.PI) / 180);

      const pathData = `
        M ${centerX} ${centerY}
        L ${x1} ${y1}
        A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
        Z
      `;

      return (
        <path
          key={index}
          d={pathData}
          fill={item.color}
          style={{ opacity: 0.8, transition: 'opacity 0.2s' }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.8'; }}
        />
      );
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', margin: 0 }}>Legal Requests Dashboard</h1>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            backgroundColor: 'white', 
            border: '1px solid #d1d5db', 
            borderRadius: '8px', 
            padding: '8px 16px' 
          }}>
            <span style={{ fontSize: '14px', color: '#374151', marginRight: '8px' }}>◀</span>
            <span style={{ fontSize: '14px', color: '#374151' }}>Apr 19, 2025</span>
            <span style={{ margin: '0 8px', color: '#6b7280' }}>-</span>
            <span style={{ fontSize: '14px', color: '#374151' }}>May 19, 2025</span>
            <span style={{ fontSize: '14px', color: '#374151', marginLeft: '8px' }}>▶</span>
          </div>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            backgroundColor: 'white', 
            border: '1px solid #d1d5db', 
            borderRadius: '8px', 
            padding: '8px 16px' 
          }}>
            <span style={{ fontSize: '14px', color: '#374151', marginRight: '8px' }}>Last Month</span>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>▼</span>
          </div>
        </div>
      </div>

      {/* Main Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {/* Total Request */}
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '8px', 
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', 
          border: '1px solid #e5e7eb', 
          padding: '24px' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: 0 }}>Total Request</h3>
            <span style={{ fontSize: '16px', color: '#9ca3af' }}>ℹ️</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              backgroundColor: '#dbeafe', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ fontSize: '24px', color: '#2563eb' }}>💼</span>
            </div>
            <div>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#2563eb' }}>96</div>
              <div style={{ fontSize: '14px', color: '#8b5cf6', fontWeight: '500' }}>New: 68</div>
            </div>
          </div>
        </div>

        {/* Total Request Distribution */}
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '8px', 
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', 
          border: '1px solid #e5e7eb', 
          padding: '24px' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: 0 }}>Total Request Distribution</h3>
            <span style={{ fontSize: '16px', color: '#9ca3af' }}>ℹ️</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '24px' }}>
              <svg width="240" height="240" style={{ transform: 'rotate(-90deg)' }}>
                {createPieChart()}
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {pieChartData.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div 
                    style={{ 
                      width: '12px', 
                      height: '12px', 
                      borderRadius: '2px',
                      backgroundColor: item.color
                    }}
                  ></div>
                  <span style={{ fontSize: '14px', color: '#6b7280' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* High Priority Items */}
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '8px', 
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', 
          border: '1px solid #e5e7eb', 
          padding: '24px' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: 0 }}>High Priority Items</h3>
            <span style={{ fontSize: '16px', color: '#9ca3af' }}>ℹ️</span>
          </div>
          <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#ef4444', marginBottom: '16px' }}>12</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              backgroundColor: '#ef4444', 
              color: 'white', 
              padding: '8px 12px', 
              borderRadius: '4px' 
            }}>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>Action Required</span>
              <span style={{ fontSize: '14px', fontWeight: 'bold' }}>7</span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              backgroundColor: '#f97316', 
              color: 'white', 
              padding: '8px 12px', 
              borderRadius: '4px' 
            }}>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>Overdue</span>
              <span style={{ fontSize: '14px', fontWeight: 'bold' }}>5</span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              backgroundColor: '#6b7280', 
              color: 'white', 
              padding: '8px 12px', 
              borderRadius: '4px' 
            }}>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>Approaching Deadline</span>
              <span style={{ fontSize: '14px', fontWeight: 'bold' }}>9</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              backgroundColor: card.bgColor,
              borderRadius: '8px',
              padding: '24px',
              cursor: card.onClick ? 'pointer' : 'default',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onClick={card.onClick}
            onMouseEnter={(e) => {
              if (card.onClick) {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 25px -3px rgba(0, 0, 0, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (card.onClick) {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                backgroundColor: card.iconBg, 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '20px', color: 'white' }}>{card.icon}</span>
              </div>
              <span style={{ fontSize: '16px', color: '#9ca3af' }}>ℹ️</span>
            </div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#2563eb', marginBottom: '8px' }}>{card.value}</div>
            <div style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;