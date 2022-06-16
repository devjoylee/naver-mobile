import { useNavigate } from 'react-router-dom';
import { useUserContext } from 'contexts/UserContext';

export const useLogout = () => {
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogOut = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      setUser(null);
      localStorage.removeItem('user');
      navigate('/');
      window.location.reload();
    }
  };

  return { handleLogOut };
};
