import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  min-height: 200px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 15px 20px;
`;

const Title = styled.span`
  color: #333;
`;

const DeleteAll = styled.span`
  color: #a7a7a7;
`;

const RecentList = styled.ul``;

const EmptyList = styled.div`
  width: 100%;
  height: 200px;
  line-height: 200px;
  text-align: center;
`;

function History({ keywords }) {
  if (keywords.length === 0) {
    return (
      <Container>
        <EmptyList>최근 검색어 내역이 없습니다.</EmptyList>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Title>최근 검색어</Title>
        <DeleteAll>Clear</DeleteAll>
      </Header>
      <RecentList></RecentList>
    </Container>
  );
}

export default History;
