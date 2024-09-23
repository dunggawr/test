'use client'

import React from 'react';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux';
import { queryClient } from '@/app/query';
import { store } from '../lib/stores';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <NextThemesProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </NextThemesProvider>
            </QueryClientProvider>
        </Provider>
    )
}
