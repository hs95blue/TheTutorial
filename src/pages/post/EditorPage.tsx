import React, { useState } from 'react';
import styled from 'styled-components';

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const TextArea = styled.textarea`
  width: 80%;
  height: 300px;
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005fa3;
  }
`;

const EditorPage = () => {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    console.log('Content to submit:', content);
    // Implement submission functionality here
  };

  return (
    <EditorContainer>
      <h1>Editor</h1>
      <TextArea
        placeholder="Write your post here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </EditorContainer>
  );
};

export default EditorPage;
