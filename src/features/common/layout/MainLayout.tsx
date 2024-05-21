import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div>
      <Header/>
      <main>
        <Outlet />  {/* 중첩된 라우트의 컴포넌트가 여기에 렌더링됩니다 */}
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;