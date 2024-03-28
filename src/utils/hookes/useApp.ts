import { useContext } from 'react';

import { AppContext } from '@/utils/context/AuthProvider';

export const useApp = () => useContext(AppContext);
