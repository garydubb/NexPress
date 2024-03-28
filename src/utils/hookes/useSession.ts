import { useContext } from 'react';

import { SessionContext } from '@/utils/context/SessionProvider';

export function useSession() {
  return useContext(SessionContext);
}
