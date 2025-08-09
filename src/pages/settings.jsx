// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Card, CardContent, CardHeader, CardTitle, Switch, Avatar, AvatarFallback, AvatarImage, Badge } from '@/components/ui';
// @ts-ignore;
import { Shield, Share2, CheckCircle } from 'lucide-react';

const wechatSharedMembers = [{
  id: 1,
  name: '妈妈',
  email: 'mom@family.com',
  role: 'admin',
  avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
  sharedAt: '2024-08-10',
  permissions: {
    view: true,
    edit: true,
    export: true,
    invite: true
  }
}, {
  id: 2,
  name: '爸爸',
  email: 'dad@family.com',
  role: 'admin',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
  sharedAt: '2024-08-09',
  permissions: {
    view: true,
    edit: true,
    export: true,
    invite: true
  }
}, {
  id: 3,
  name: '姐姐',
  email: 'sister@family.com',
  role: 'editor',
  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
  sharedAt: '2024-08-08',
  permissions: {
    view: true,
    edit: true,
    export: false,
    invite: false
  }
}];
export default function SettingsPage(props) {
  const {
    $w
  } = props;
  const [sharedMembers, setSharedMembers] = useState(wechatSharedMembers);
  const handleNavigateBack = () => {
    $w.utils.navigateBack();
  };
  const handlePermissionChange = (memberId, permissionType, value) => {
    setSharedMembers(sharedMembers.map(member => {
      if (member.id === memberId) {
        return {
          ...member,
          permissions: {
            ...member.permissions,
            [permissionType]: value
          }
        };
      }
      return member;
    }));
  };
  return <div className="min-h-screen bg-[#050506]">
      <header className="flex items-center justify-between px-4 py-3 bg-[#050506] border-b border-[#42c2cf]/20">
        <h1 className="text-lg font-bold text-[#42c2cf]">微信分享权限</h1>
        <button onClick={handleNavigateBack} className="text-[#42c2cf] hover:text-[#42c2cf]/80">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </header>

      <div className="max-w-md mx-auto px-4 py-4">
        <Card className="bg-[#1a1a1b] border-[#42c2cf]/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold text-[#42c2cf] flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              已分享成员
            </CardTitle>
            <p className="text-xs text-[#42c2cf]/70 mt-1">通过微信分享的家庭成员</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {sharedMembers.map(member => <div key={member.id} className="flex items-center justify-between p-3 bg-[#050506] rounded-lg border border-[#42c2cf]/20">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback className="text-[#42c2cf] bg-[#42c2cf]/10">{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-[#42c2cf] text-sm font-medium">{member.name}</p>
                    <p className="text-[#42c2cf]/70 text-xs">{member.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge className={`text-xs px-2 py-0.5 ${member.role === 'admin' ? 'bg-[#42c2cf]/20 text-[#42c2cf]' : member.role === 'editor' ? 'bg-[#42c2cf]/15 text-[#42c2cf]/90' : 'bg-[#42c2cf]/10 text-[#42c2cf]/80'}`}>
                    {member.role === 'admin' ? '管理员' : member.role === 'editor' ? '编辑' : '查看'}
                  </Badge>
                </div>
              </div>)}
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1b] border-[#42c2cf]/30 mt-3">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold text-[#42c2cf]">权限设置</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {sharedMembers.map(member => <div key={member.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[#42c2cf] text-sm">{member.name}</span>
                  <span className="text-[#42c2cf]/70 text-xs">分享于 {member.sharedAt}</span>
                </div>
                <div className="space-y-1 pl-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[#42c2cf]/80 text-xs">查看数据</span>
                    <Switch checked={member.permissions.view} onCheckedChange={checked => handlePermissionChange(member.id, 'view', checked)} className="scale-75" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#42c2cf]/80 text-xs">编辑数据</span>
                    <Switch checked={member.permissions.edit} onCheckedChange={checked => handlePermissionChange(member.id, 'edit', checked)} className="scale-75" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#42c2cf]/80 text-xs">导出报告</span>
                    <Switch checked={member.permissions.export} onCheckedChange={checked => handlePermissionChange(member.id, 'export', checked)} className="scale-75" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#42c2cf]/80 text-xs">邀请成员</span>
                    <Switch checked={member.permissions.invite} onCheckedChange={checked => handlePermissionChange(member.id, 'invite', checked)} className="scale-75" />
                  </div>
                </div>
              </div>)}
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1b] border-[#42c2cf]/30 mt-3">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold text-[#42c2cf] flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              权限说明
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-[#42c2cf]/80">查看数据</span>
              <span className="text-[#42c2cf]">所有成员</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#42c2cf]/80">编辑数据</span>
              <span className="text-[#42c2cf]">管理员/编辑</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#42c2cf]/80">导出报告</span>
              <span className="text-[#42c2cf]">管理员/编辑</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#42c2cf]/80">邀请成员</span>
              <span className="text-[#42c2cf]">仅管理员</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
}