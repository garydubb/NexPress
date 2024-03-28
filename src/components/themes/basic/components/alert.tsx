import { useAuthService } from '@/utils/functions/AuthService/AuthService';
import { useSession } from '@/utils/hookes/useSession';
import Link from 'next/link';
import Container from './container';

//import types
import GeneralSettings from '@/utils/type/settings/generalSettings';

export default function Alert(generalSettings: GeneralSettings) {
  const siteTitle = generalSettings?.title ?? 'NexPress 2';
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const { user } = useSession();
  const { logout } = useAuthService();
  const logoutBtn = async () => {
    try {
      await logout();
      window.location.reload();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <>
      {user != null ? (
        <div className="border-bbg-accent-1 border-accent-2">
          <Container>
            <div className="py-2 text-center text-sm">
              Welcome {user.viewer.name ?? ''} to {siteTitle} Site{' '}
              <a
                href="#;"
                className="mx-3 bg-white hover:bg-black hover:text-white border border-black text-black font-bold py-1 px-4 lg:px-4 duration-200 transition-colors mb-6 "
                onClick={logoutBtn}
              >
                Logout
              </a>
            </div>
          </Container>
        </div>
      ) : (
        <div className="border-bbg-accent-1 border-accent-2">
          <Container>
            <div className="py-2 text-right text-sm">
              <Link href="/login">Login </Link>/
              <Link href="/register"> Register</Link>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
