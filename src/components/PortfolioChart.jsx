// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Card, CardContent, CardHeader, CardTitle, ToggleGroup, ToggleGroupItem } from '@/components/ui';

import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const accountData = {
  total: [{
    date: '01-01',
    value: 100000,
    growth: 0
  }, {
    date: '01-02',
    value: 102500,
    growth: 2.5
  }, {
    date: '01-03',
    value: 101200,
    growth: -1.3
  }, {
    date: '01-04',
    value: 105800,
    growth: 4.5
  }, {
    date: '01-05',
    value: 108200,
    growth: 2.3
  }, {
    date: '01-06',
    value: 112500,
    growth: 4.0
  }, {
    date: '01-07',
    value: 115600,
    growth: 2.8
  }],
  platform1: [{
    date: '01-01',
    value: 45000,
    growth: 0
  }, {
    date: '01-02',
    value: 46200,
    growth: 2.7
  }, {
    date: '01-03',
    value: 45800,
    growth: -0.9
  }, {
    date: '01-04',
    value: 47500,
    growth: 3.7
  }, {
    date: '01-05',
    value: 48200,
    growth: 1.5
  }, {
    date: '01-06',
    value: 49500,
    growth: 2.7
  }, {
    date: '01-07',
    value: 50800,
    growth: 2.6
  }],
  platform2: [{
    date: '01-01',
    value: 35000,
    growth: 0
  }, {
    date: '01-02',
    value: 35800,
    growth: 2.3
  }, {
    date: '01-03',
    value: 35200,
    growth: -1.7
  }, {
    date: '01-04',
    value: 36800,
    growth: 4.5
  }, {
    date: '01-05',
    value: 37500,
    growth: 1.9
  }, {
    date: '01-06',
    value: 38500,
    growth: 2.7
  }, {
    date: '01-07',
    value: 39200,
    growth: 1.8
  }],
  crypto: [{
    date: '01-01',
    value: 20000,
    growth: 0
  }, {
    date: '01-02',
    value: 20500,
    growth: 2.5
  }, {
    date: '01-03',
    value: 20200,
    growth: -1.5
  }, {
    date: '01-04',
    value: 21500,
    growth: 6.4
  }, {
    date: '01-05',
    value: 22500,
    growth: 4.7
  }, {
    date: '01-06',
    value: 24500,
    growth: 8.9
  }, {
    date: '01-07',
    value: 25600,
    growth: 4.5
  }]
};
export function PortfolioChart({
  displayMode,
  timeRange,
  setTimeRange,
  setDisplayMode,
  selectedAccount
}) {
  const currentData = accountData[selectedAccount] || accountData.total;
  return <div className="space-y-4">
      <Card className="bg-[#1a1a1b] border-gray-800">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-[#42c2cf]">增长趋势 Growth Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={currentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" fontSize={12} tickFormatter={value => displayMode === 'amount' ? `$${(value / 1000).toFixed(0)}k` : `${value}%`} />
              <Tooltip contentStyle={{
              backgroundColor: '#1a1a1b',
              border: '1px solid #374151',
              borderRadius: '8px'
            }} labelStyle={{
              color: '#42c2cf'
            }} />
              <Area type="monotone" dataKey={displayMode === 'amount' ? 'value' : 'growth'} stroke="#42c2cf" fill="#42c2cf" fillOpacity={0.2} />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <ToggleGroup type="single" value={timeRange} onValueChange={setTimeRange} className="bg-[#1a1a1b] rounded-lg p-1">
          <ToggleGroupItem value="day" className="text-sm text-gray-400 data-[state=on]:text-[#42c2cf] data-[state=on]:bg-[#42c2cf]/20">
            Day
          </ToggleGroupItem>
          <ToggleGroupItem value="week" className="text-sm text-gray-400 data-[state=on]:text-[#42c2cf] data-[state=on]:bg-[#42c2cf]/20">
            Week
          </ToggleGroupItem>
          <ToggleGroupItem value="month" className="text-sm text-gray-400 data-[state=on]:text-[#42c2cf] data-[state=on]:bg-[#42c2cf]/20">
            Month
          </ToggleGroupItem>
          <ToggleGroupItem value="year" className="text-sm text-gray-400 data-[state=on]:text-[#42c2cf] data-[state=on]:bg-[#42c2cf]/20">
            Year
          </ToggleGroupItem>
        </ToggleGroup>
        
        <ToggleGroup type="single" value={displayMode} onValueChange={setDisplayMode} className="bg-[#1a1a1b] rounded-lg p-1">
          <ToggleGroupItem value="amount" className="text-sm text-gray-400 data-[state=on]:text-[#42c2cf] data-[state=on]:bg-[#42c2cf]/20">
            Amount
          </ToggleGroupItem>
          <ToggleGroupItem value="percentage" className="text-sm text-gray-400 data-[state=on]:text-[#42c2cf] data-[state=on]:bg-[#42c2cf]/20">
            Percentage
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>;
}