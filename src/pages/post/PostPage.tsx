import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PostPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const PostTitle = styled.h1`
  font-size: 24px;
  color: #333;
`;

const PostBody = styled.p`
  font-size: 16px;
  color: #666;
`;

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostPage = () => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    // Fetch post logic here
    setPost({
      id: 1,
      title: 'Example Post Title',
      body: 'This is an example of a post body content...'
    });
  }, []);

  return (
    <PostPageContainer>
      {post ? (
        <>
          <PostTitle>{post.title}</PostTitle>
          <PostBody>{post.body}</PostBody>
        </>
      ) : (
        <p>Loading post...</p>
      )}
    </PostPageContainer>
  );
};

export default PostPage;
