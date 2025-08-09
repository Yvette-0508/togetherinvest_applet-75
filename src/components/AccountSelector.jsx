// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui';

export function AccountSelector({
  selectedAccount,
  setSelectedAccount
}) {
  return <div className="px-4 pb-4">
      <Select value={selectedAccount} onValueChange={setSelectedAccount}>
        <SelectTrigger className="w-full bg-[#1a1a1b] border-gray-700 text-gray-300">
          <SelectValue placeholder="Select Account" />
        </SelectTrigger>
        <SelectContent className="bg-[#1a1a1b] border-gray-700">
          <SelectItem value="total" className="text-sm text-gray-300 hover:text-[#42c2cf]">
            总账户 Total Account
          </SelectItem>
          <SelectItem value="platform1" className="text-sm text-gray-300 hover:text-[#42c2cf]">
            平台A账户 Platform A
          </SelectItem>
          <SelectItem value="platform2" className="text-sm text-gray-300 hover:text-[#42c2cf]">
            平台B账户 Platform B
          </SelectItem>
          <SelectItem value="crypto" className="text-sm text-gray-300 hover:text-[#42c2cf]">
            加密货币账户 Crypto Account
          </SelectItem>
        </SelectContent>
      </Select>
    </div>;
}