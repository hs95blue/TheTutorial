import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <header>Header Content</header>
      <main>
        <Outlet />  {/* 중첩된 라우트의 컴포넌트가 여기에 렌더링됩니다 */}
      </main>
      <footer>Footer Content</footer>
    </div>
  );
};

export default MainLayout;