'use client';

import { Provider } from 'react-redux';
import { store } from '../rtk-base/store';

export function RTKProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
