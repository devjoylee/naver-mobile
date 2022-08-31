<!-- PROJECT LOGO -->
<div align="center">
  <img src="./src/images/logo01.png" alt="Logo" width="60" height="60">
  <h1>Naver Mobile Clone Project</h1>
  <p>
    <a href="https://navermobile.netlify.app/" target="_blank">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details align="right">
  <summary>Table of Contents</summary>
    <div><a href="#About-The-Project">About The Project</a></div>
    <div><a href="#Built-With">Built With</a></div>
    <div><a href="#Getting-Started">Getting Started</a></div>
    <div><a href="#Main-Features">Main Features</a></div>
    <div><a href="#Commit-Convention">Commit Convention</a></div>
</details>

## About The Project

> Cloning Naver Website (https://m.naver.com) which the most poular search engine platform in South Korea. <br/> It’s developed mobile friendly, the maximum width is 768px.

- Production Period : 2020.12 - 2021.03

 <br/>

## Built With

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">&nbsp;&nbsp;<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">&nbsp;&nbsp;<img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=storybook&logoColor=white"/>

<br/>

## Getting Started

You are able to start the app by typing the following commands in the command line:

```bash
git clone https://github.com/devjoylee/naver-mobile.git
npm install
npm start
```

<br/>

## Main Features

### 1. Main Page `/`

- It consists of a header, a footer and 3 dropdown sections.
- There are 2 types of headers. One is the original header with icons, and the other is the fixed header only visible when scrolling down with a dropdown animation. It includes a search bar and a swipeable navigation.
- The recommend webtoon section is only visible when logged in.
- You can log out in the footer.

<div align="center">
<img src="https://user-images.githubusercontent.com/68415905/220211040-64c258d9-a875-47bf-8b5a-7d7e5d50b332.JPG" alt="img" width="90%" >
</div><br/>

- Code Preview

```jsx
// components/Main/Header/FixedHeader
export const FixedHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // show the header when the scroll moves down.
    window.addEventListener('scroll', () => {
      let y = window.pageYOffset;
      if (y > 100 && y < 300) setIsVisible(y > 200);
    });
  });

  return <S.HeaderContainer className={isVisible ? 'visible' : 'hidden'}>// ...</S.HeaderContainer>;
};
```

<br/>

### 2. LOGIN PAGE `/login` & JOIN PAGE `/join`

- Go to a login page by clicking the hamburger icon in the upper left of the main page.
- Go to a join page by clicking the ‘Sign-Up’ button in the bottom of the login page.
- Sign-up form includes validation inputs with error message and a submit button.
- Created a custom `useForm` hook to re-use in the login form and the join form.

<div align="center">
<img src="https://user-images.githubusercontent.com/68415905/220211043-3d6fa7a1-4a17-49c2-a845-0c10a14c542b.JPG" alt="img" width="90%" >
</div><br/>

- Code Preview

```jsx
// hooks/useForm.js
export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return { values, handleChange };
};
```

<br/>

### 3. SEARCH PAGE `/search`

- - Go to a search page by clicking the search bar in the main page.
- It has a search history section which shows recent searched keywords. The searched keywords are actually saved in `localStorage` and the history list get recent searches from the storage.
- There is a ‘Clear All’ button which resets all history.

<div align="center">
<img src="https://user-images.githubusercontent.com/68415905/220211037-2be92183-629c-4d20-8d8d-ac27243fc358.JPG" alt="img" width="90%" >
</div><br/>

- Code Preview

```jsx
//
export const SearchPage = () => {
  // load keywords list from localStorage
  const [keywords, setKeywords] = useState(JSON.parse(localStorage.getItem('keywords') || '[]'));

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  // Getting the searched date
  const getDate = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${month}.${day}`;
  };

  const handleAddKeyword = (text) => {
    const newKeyword = {
      id: Date.now(),
      text,
      date: getDate(),
    };
    setKeywords([newKeyword, ...keywords]);
  };

  const handleRemoveKeyword = (id) => {
    setKeywords(
      keywords.filter((keyword) => {
        return keyword.id !== id;
      })
    );
  };

  const handleClearList = () => {
    setKeywords([]);
  };

  return <PageWrapper graybg>// ...</PageWrapper>;
};
```

<br/>

## Commit Convention

The commit message is written with the GITMOJI icons in order to make commit messages more intuitive.

| Gitmoji | Meaning                     |
| ------- | --------------------------- |
| 🎉      | Init or begin a project.    |
| 🚚      | Move or rename resources    |
| ✨      | Introduce new features      |
| 💄      | Add the UI and style files  |
| ♻️      | Refactor code               |
| 📝      | Add or update documentation |
| ➕      | Add a dependency            |
| 🐛      | Fix a bug                   |
| 🚀      | Deploy stuff                |

REFERENCE : Gitmoji (http://gitmoji.dev/)

<br/>

<p align="right">(<a href="#top">back to top</a>)</p>
