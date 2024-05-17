import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const MainVisual = styled.div`
  width: 100%;
  height: 300px;
  background-image: url('https://source.unsplash.com/random');
  background-size: cover;
  background-position: center;
`;

const RecentPostsContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const PostCard = styled.div`
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
`;

const PostImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
`;

const PostContent = styled.div`
  padding: 10px;
`;

const PostTitle = styled.h3`
  margin: 0;
  color: #333;
`;

const PostBody = styled.p`
  color: #666;
`;

const BlogListSection = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
`;

const BlogList = styled.div`
  flex: 3;
`;

const TagBox = styled.div`
  flex: 1;
  margin-left: 20px;
  border: 1px solid #ccc;
  padding: 10px;
`;
interface Post {
    id: number;
    title: string;
    body: string;
    imageUrl: string;
}
const HomePage = () => {
    
    const [recentPosts, setRecentPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch recent posts logic here
    setRecentPosts([
      {
        id: 1,
        title: 'Recent Post 1',
        body: 'This is a summary of the recent post 1...',
        imageUrl: 'https://source.unsplash.com/random/1'
      },
      {
        id: 2,
        title: 'Recent Post 2',
        body: 'This is a summary of the recent post 2...',
        imageUrl: 'https://source.unsplash.com/random/2'
      }
    ]);
  }, []);

  return (
    <HomePageContainer>
      <MainVisual />
      <RecentPostsContainer>
        {recentPosts.map(post => (
          <PostCard key={post.id}>
            <PostImage src={post.imageUrl} alt={post.title} />
            <PostContent>
              <PostTitle>{post.title}</PostTitle>
              <PostBody>{post.body}</PostBody>
            </PostContent>
          </PostCard>
        ))}
      </RecentPostsContainer>
      <BlogListSection>
        <BlogList>
          {/* Blog list items would be rendered here */}
        </BlogList>
        <TagBox>
          {/* Tag box items would be rendered here */}
        </TagBox>
      </BlogListSection>
    </HomePageContainer>
  );
};

export default HomePage;


