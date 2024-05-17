import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '../features/common/layout/MainLayout';

const HomePage = lazy(() => import('../pages/post/HomePage'));
const PostPage = lazy(() => import('../pages/post/PostPage'));
const EditorPage = lazy(() => import('../pages/post/EditorPage'));
const NotFoundPage = lazy(() => import('../pages/utils/NotFoundPage'));

const RoutesComponent = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="posts" element={<PostPage />} />
            <Route path="editor" element={<EditorPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default RoutesComponent;