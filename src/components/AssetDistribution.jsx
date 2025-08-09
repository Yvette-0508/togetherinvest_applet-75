// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
const accountDistributionData = {
  total: [{
    name: 'Stocks',
    value: 45000,
    color: '#42c2cf'
  }, {
    name: 'Bonds',
    value: 30000,
    color: '#3B82F6'
  }, {
    name: 'Funds',
    value: 25000,
    color: '#8B5CF6'
  }, {
    name: 'Cash',
    value: 15500,
    color: '#10B981'
  }],
  platform1: [{
    name: 'Stocks',
    value: 25000,
    color: '#42c2cf'
  }, {
    name: 'Bonds',
    value: 12000,
    color: '#3B82F6'
  }, {
    name: 'Funds',
    value: 8000,
    color: '#8B5CF6'
  }],
  platform2: [{
    name: 'Stocks',
    value: 15000,
    color: '#42c2cf'
  }, {
    name: 'Bonds',
    value: 18000,
    color: '#3B82F6'
  }, {
    name: 'Funds',
    value: 12000,
    color: '#8B5CF6'
  }, {
    name: 'Cash',
    value: 5000,
    color: '#10B981'
  }],
  crypto: [{
    name: 'Bitcoin',
    value: 12000,
    color: '#F7931A'
  }, {
    name: 'Ethereum',
    value: 8000,
    color: '#627EEA'
  }, {
    name: 'Altcoins',
    value: 5600,
    color: '#8B5CF6'
  }]
};
export function AssetDistribution({
  displayMode,
  selectedAccount
}) {
  const currentData = accountDistributionData[selectedAccount] || accountDistributionData.total;
  const total = currentData.reduce((sum, item) => sum + item.value, 0);
  return <Card className="bg-[#1a1a1b] border-gray-800">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-[#42c2cf]">资产分布 Asset Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <ResponsiveContainer width="50%" height={150}>
            <PieChart>
              <Pie data={currentData} cx="50%" cy="50%" innerRadius={40} outerRadius={60} paddingAngle={5} dataKey="value">
                {currentData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
              </Pie>
              <Tooltip contentStyle={{
              backgroundColor: '#1a1a1b',
              border: '1px solid #374151',
              borderRadius: '8px'
            }} />
            </PieChart>
          </ResponsiveContainer>
          
          <div className="flex-1 space-y-2">
            {currentData.map(item => <div key={item.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{
                backgroundColor: item.color
              }} />
                  <span className="text-gray-300">{item.name}</span>
                </div>
                <span className="text-[#42c2cf]">
                  {displayMode === 'amount' ? `$${item.value.toLocaleString()}` : `${(item.value / total * 100).toFixed(1)}%`}
                </span>
              </div>)}
          </div>
        </div>
      </CardContent>
    </Card>;
}