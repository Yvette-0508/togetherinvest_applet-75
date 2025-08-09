// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Plus, Brain, FileText, RefreshCw, Settings } from 'lucide-react';
// @ts-ignore;
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui';

export function Header({
  onRefreshData,
  onOpenAISuggestions,
  onOpenExportPDF,
  onNavigateToSettings
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="flex items-center justify-between px-6 py-4 bg-[#050506] border-b border-gray-800">
      <h1 className="text-2xl font-bold text-[#42c2cf]">TogetherInvest 同盈宝</h1>
      
      <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="text-[#42c2cf] hover:text-[#42c2cf] hover:bg-[#42c2cf]/10 h-12 w-12">
            <Plus className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-[#1a1a1b] border-gray-700 w-48">
          <DropdownMenuItem onClick={onOpenAISuggestions} className="text-gray-300 hover:text-[#42c2cf] hover:bg-[#42c2cf]/10">
            <Brain className="h-4 w-4 mr-2" />
            AI Suggestions
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onOpenExportPDF} className="text-gray-300 hover:text-[#42c2cf] hover:bg-[#42c2cf]/10">
            <FileText className="h-4 w-4 mr-2" />
            Export PDF
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onRefreshData} className="text-gray-300 hover:text-[#42c2cf] hover:bg-[#42c2cf]/10">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh Data
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onNavigateToSettings} className="text-gray-300 hover:text-[#42c2cf] hover:bg-[#42c2cf]/10">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>;
}