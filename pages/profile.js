import { useSession } from 'next-auth/react';

const Profile = () => {
  const { status } = useSession({
    required: true,
  });

  if (status === 'loading') {
    return 'Loading or not authenticated...';
  }

  return 'User is logged in';
};
export default Profile;
