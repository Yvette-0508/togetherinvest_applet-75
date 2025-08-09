// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, Button, Progress, DialogFooter } from '@/components/ui';
// @ts-ignore;
import { Download, FileText, TrendingUp, Clock, X } from 'lucide-react';

const simplifiedReportTypes = [{
  id: 'balance',
  title: '资产负债表',
  description: '资产、负债和净资产状况',
  icon: FileText
}, {
  id: 'income',
  title: '营收表',
  description: '投资收益和费用分析',
  icon: TrendingUp
}];
export function ExportPDFModal({
  open,
  onOpenChange,
  selectedAccount
}) {
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedReport, setSelectedReport] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const handleGeneratePDF = async reportType => {
    setGenerating(true);
    setProgress(0);
    setSelectedReport(reportType);
    setDownloadUrl(null);
    for (let i = 0; i <= 100; i += 10) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    setGenerating(false);
    setDownloadUrl(`portfolio-${reportType}-${Date.now()}.pdf`);
  };
  const handleClose = () => {
    if (!generating) {
      setGenerating(false);
      setProgress(0);
      setSelectedReport(null);
      setDownloadUrl(null);
      onOpenChange(false);
    }
  };
  const formatProgress = progress => {
    if (progress < 25) return '正在收集数据...';
    if (progress < 50) return '生成图表中...';
    if (progress < 75) return '格式化报告...';
    if (progress < 100) return '准备下载...';
    return '完成！';
  };
  return <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-[#1a1a1b] border-[#42c2cf]/30 max-w-lg w-[90vw] max-h-[80vh] overflow-hidden">
        <DialogHeader className="relative">
          <DialogTitle className="text-[#42c2cf] text-xl font-bold">导出投资报告</DialogTitle>
          <DialogDescription className="text-[#42c2cf]/70 mt-1">
            选择报告类型，生成专业 PDF 报告
          </DialogDescription>
          <button onClick={handleClose} className="absolute -top-2 -right-2 p-2 text-[#42c2cf]/70 hover:text-[#42c2cf]">
            <X className="h-5 w-5" />
          </button>
        </DialogHeader>
        
        {generating ? <div className="py-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#42c2cf]/10 rounded-full mb-3">
                <Clock className="h-6 w-6 text-[#42c2cf] animate-spin" />
              </div>
              <h3 className="text-[#42c2cf] font-medium mb-2">
                正在生成 {simplifiedReportTypes.find(r => r.id === selectedReport)?.title}
              </h3>
              <p className="text-sm text-[#42c2cf]/70 mb-3">{formatProgress(progress)}</p>
              <Progress value={progress} className="w-full max-w-xs mx-auto bg-[#42c2cf]/10" />
              <p className="text-xs text-[#42c2cf]/60 mt-2">{progress}%</p>
            </div>
          </div> : downloadUrl ? <div className="py-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#42c2cf]/10 rounded-full mb-3">
              <Download className="h-6 w-6 text-[#42c2cf]" />
            </div>
            <h3 className="text-[#42c2cf] font-medium mb-2">报告已生成！</h3>
            <p className="text-sm text-[#42c2cf]/70 mb-4">
              您的报告已准备就绪
            </p>
            <Button onClick={handleClose} className="bg-[#42c2cf] hover:bg-[#42c2cf]/80 text-white">
              完成
            </Button>
          </div> : <div className="space-y-3 mt-4">
            <div className="grid grid-cols-1 gap-3">
              {simplifiedReportTypes.map(report => {
            const Icon = report.icon;
            return <div key={report.id} className="p-4 bg-[#42c2cf]/10 rounded-lg border border-[#42c2cf]/20 transition-all hover:bg-[#42c2cf]/15 cursor-pointer" onClick={() => handleGeneratePDF(report.id)}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#42c2cf]/10 rounded-lg">
                      <Icon className="h-5 w-5 text-[#42c2cf]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#42c2cf] font-medium text-sm">{report.title}</h4>
                      <p className="text-[#42c2cf]/70 text-xs">{report.description}</p>
                    </div>
                    <Download className="h-4 w-4 text-[#42c2cf]/60" />
                  </div>
                </div>;
          })}
            </div>
            
            <div className="mt-4 p-3 bg-[#42c2cf]/5 rounded-lg">
              <p className="text-xs text-[#42c2cf]/70 text-center">
                报告包含实时数据、图表分析和投资建议
              </p>
            </div>
          </div>}
        
        <DialogFooter className="border-t border-[#42c2cf]/20 pt-4">
          <Button variant="outline" onClick={handleClose} disabled={generating} className="border-[#42c2cf]/30 text-[#42c2cf] hover:bg-[#42c2cf]/10">
            {generating ? '生成中...' : '取消'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>;
}