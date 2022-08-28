import { useNavigate } from 'react-router-dom';
import { useUserContext } from 'contexts/UserContext';

export const useLogout = () => {
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogOut = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      setUser(null);
      sessionStorage.removeItem('user');
      navigate('/');
      window.location.reload();
    }
  };

  return { handleLogOut };
};
