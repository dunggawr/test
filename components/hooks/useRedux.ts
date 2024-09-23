import { useDispatch, useSelector } from 'react-redux';
import { PersistPartial } from 'redux-persist/es/persistReducer';

import type { TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from '@/lib/stores';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState & PersistPartial> = useSelector;
