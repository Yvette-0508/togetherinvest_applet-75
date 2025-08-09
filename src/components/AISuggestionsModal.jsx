// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui';
// @ts-ignore;
import { Lightbulb, TrendingUp, AlertTriangle, CheckCircle, X } from 'lucide-react';

const unifiedSuggestions = [{
  id: 1,
  type: 'allocation',
  title: '科技板块配置',
  description: '当前科技配置15%，建议关注科技ETF机会',
  risk: 'medium',
  icon: TrendingUp
}, {
  id: 2,
  type: 'warning',
  title: '加密货币占比',
  description: '加密货币35%超出建议比例，注意风险控制',
  risk: 'high',
  icon: AlertTriangle
}, {
  id: 3,
  type: 'opportunity',
  title: '债券收益',
  description: '10年期国债收益率4.5%，具备配置价值',
  risk: 'low',
  icon: CheckCircle
}, {
  id: 4,
  type: 'diversification',
  title: '国际市场',
  description: '建议增加5-10%国际配置分散风险',
  risk: 'low',
  icon: Lightbulb
}];
export function AISuggestionsModal({
  open,
  onOpenChange
}) {
  return <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#1a1a1b] border-[#42c2cf]/30 max-w-md w-[90vw] max-h-[80vh] overflow-hidden">
        <DialogHeader className="relative">
          <DialogTitle className="text-[#42c2cf] text-xl font-bold">投资建议</DialogTitle>
          <DialogDescription className="text-[#42c2cf]/70 mt-1">
            基于当前持仓的概要建议
          </DialogDescription>
          <button onClick={() => onOpenChange(false)} className="absolute -top-2 -right-2 p-2 text-[#42c2cf]/70 hover:text-[#42c2cf]">
            <X className="h-5 w-5" />
          </button>
        </DialogHeader>
        
        <div className="space-y-3 mt-4 overflow-y-auto max-h-[60vh]">
          {unifiedSuggestions.map(suggestion => {
          const Icon = suggestion.icon;
          return <div key={suggestion.id} className="p-4 bg-[#42c2cf]/10 rounded-lg border border-[#42c2cf]/20">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#42c2cf]/10 rounded-lg">
                  <Icon className="h-5 w-5 text-[#42c2cf]" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-[#42c2cf] font-medium text-sm">{suggestion.title}</h4>
                    <span className="text-xs text-[#42c2cf]/80">
                      {suggestion.risk === 'low' ? '低风险' : suggestion.risk === 'medium' ? '中风险' : '高风险'}
                    </span>
                  </div>
                  <p className="text-[#42c2cf]/90 text-sm leading-relaxed">{suggestion.description}</p>
                </div>
              </div>
            </div>;
        })}
        </div>
        
        <div className="mt-4 pt-4 border-t border-[#42c2cf]/20">
          <p className="text-xs text-[#42c2cf]/60 text-center">
            建议仅供参考，投资有风险，决策需谨慎
          </p>
        </div>
      </DialogContent>
    </Dialog>;
}