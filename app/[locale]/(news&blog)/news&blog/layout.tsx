'use client'

import React from 'react';
import { TabsBar } from '@/components/layout/Tabsbar';
import { ReactNode } from 'react';

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <TabsBar />
      {children}
    </React.Fragment>
  );
}
