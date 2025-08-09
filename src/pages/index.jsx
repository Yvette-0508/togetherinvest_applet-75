// @ts-ignore;
import React, { useState } from 'react';

// @ts-ignore;
import { AISuggestionsModal } from '@/components/AISuggestionsModal';
// @ts-ignore;
import { ExportPDFModal } from '@/components/ExportPDFModal';
import { Header } from '@/components/Header';
import { AccountSelector } from '@/components/AccountSelector';
import { AssetDistribution } from '@/components/AssetDistribution';
import { PortfolioChart } from '@/components/PortfolioChart';
import { FamilyComments } from '@/components/FamilyComments';
export default function HomePage(props) {
  const {
    $w
  } = props;
  const [timeRange, setTimeRange] = useState('week');
  const [displayMode, setDisplayMode] = useState('amount');
  const [selectedAccount, setSelectedAccount] = useState('total');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showAISuggestions, setShowAISuggestions] = useState(false);
  const [showExportPDF, setShowExportPDF] = useState(false);
  const handleRefreshData = async () => {
    setIsRefreshing(true);
    // 模拟API调用
    setTimeout(() => {
      setIsRefreshing(false);
      console.log('Data refreshed successfully');
    }, 1500);
  };
  const handleNavigateToSettings = () => {
    $w.utils.navigateTo({
      pageId: 'settings',
      params: {}
    });
  };
  return <div className="min-h-screen bg-[#050506]">
      <Header onRefreshData={handleRefreshData} onOpenAISuggestions={() => setShowAISuggestions(true)} onOpenExportPDF={() => setShowExportPDF(true)} onNavigateToSettings={handleNavigateToSettings} />
      
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {isRefreshing && <div className="text-center py-4">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#42c2cf]"></div>
            <p className="text-[#42c2cf] mt-2">Refreshing data...</p>
          </div>}
        
        <AccountSelector selectedAccount={selectedAccount} setSelectedAccount={setSelectedAccount} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AssetDistribution displayMode={displayMode} selectedAccount={selectedAccount} />
          <PortfolioChart timeRange={timeRange} setTimeRange={setTimeRange} displayMode={displayMode} setDisplayMode={setDisplayMode} selectedAccount={selectedAccount} />
        </div>
        
        <FamilyComments />
      </div>
      
      <AISuggestionsModal open={showAISuggestions} onOpenChange={setShowAISuggestions} />
      <ExportPDFModal open={showExportPDF} onOpenChange={setShowExportPDF} />
    </div>;
}