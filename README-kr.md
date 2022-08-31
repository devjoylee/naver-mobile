<!-- PROJECT LOGO -->
<div align="center">
  <img src="./src/images/logo01.png" alt="Logo" width="60" height="60">
  <h1>Naver Mobile Clone Project</h1>
  <p>
    <a href="https://navermobile.netlify.app/" target="_blank">배포 주소 바로가기</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details align="right">
  <summary>Table of Contents</summary>
    <div><a href="#프로젝트-소개">프로젝트 소개</a></div>
    <div><a href="#기술-스택">기술 스택</a></div>
    <div><a href="#프로젝트-실행">프로젝트 실행</a></div>
    <div><a href="#프로젝트-구현-사항">프로젝트 구현 사항</a></div>
    <div><a href="#커밋-컨벤션">커밋 컨벤션</a></div>
</details>

## 프로젝트 소개

> React를 사용해 single page application으로 네이버 모바일 페이지를 클론 개발한 프로젝트입니다. json-server로 MOCK 서버를 만들어 회원가입한 유저값과 웹툰 데이터를 관리할 수 있도록 하였습니다.

- 제작 기간 : 2020.12 - 2021.03

 <br/>

## 기술 스택

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">&nbsp;&nbsp;<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

<br/>

## 프로그램 실행

1. Json-server 실행

```bash
npm start
```

2. 클라이언트 실행

```bash
npm run dev
```

<br/>

## 프로젝트 구현사항

### 메인 페이지 : `/`

- 메인창은 Header, Sections, Footer로 구성되어 있습니다.
- Header의 상단 왼쪽 아이콘을 클릭하면 로그인, 마이페이지 창으로 이동합니다.
- Header의 검색바를 클릭하면 검색페이지로 이동합니다.
- `json-server`에 저장된 웹툰 목록을 `useSWR`로 가져와 오늘의 추천웹툰 섹션에 출력합니다
- 일정 높이 이상 스크롤을 하면 상단에 Fixed Header가 나타납니다.
- Fixed Header의 메뉴창은 좌우 스와이프가 가능합니다.

### 로그인 페이지 : `/login`

- 회원가입 버튼을 클릭하면 회원가입 페이지로 이동합니다.
- 유효한 ID와 비밀번호를 입력하면 메인페이지로 이동합니다.

### 회원가입 페이지 : `/join`

- Id, 비밀번호, 이름, Email을 입력하여 회원가입합니다.

### 검색 페이지 : `/search`

- 입력한 키위드는 하단의 최신 검색 목록에 저장됩니다
- 삭제 아이콘 또는 전체삭제 버튼으로 검색 기록을 삭제합니다.

### 내 정보 페이지 : `/mypage`

<br/>

## 커밋 컨벤션

commit 메세지에 깃모지를 추가하여 어떤 작업을 수행했는지 한 눈에 확인할 수 있도록 직관성을 높였습니다.

| 깃모지 | 사용 예시               |
| ------ | ----------------------- |
| 🎉     | init                    |
| 🚚     | 디렉토리 또는 파일 이동 |
| ✨     | 기능 구현               |
| 💄     | CSS 스타일링            |
| ♻️     | 리팩토링                |
| 📝     | Readme 수정             |
| ➕     | 모듈 추가               |
| 🐛     | 버그 해결               |
| 🚑️    | 치명적인 오류 해결      |

출처 : 깃모지(http://gitmoji.dev/)

<br/>

<p align="right">(<a href="#top">back to top</a>)</p>
