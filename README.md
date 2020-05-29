# Project Title
<h1>MOVIE SEARCH APP</h1>


![content2](https://user-images.githubusercontent.com/61695175/83228634-a2c80900-a1c1-11ea-8334-6a71dbf4cffb.png)
## 



## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
npx create-react-app moflix Moflix라는 명의 리액트 프로젝트 앱 생성하기
AJAX통신을 용이하게 도와줄 axios라이브러리 사용
https://www.omdbapi.com 회원가입후 개인 apikey 생성

### Installing
npm버전 : npm i react-router-dom
yarn버전 : yarn add react-router-dom



 SPA구현을 위한 react route설정으로 "react-router-dom": "^5.2.0" 버전 설치
"gh-pages" 를 이용해 github.io 무료 호스팅 사용



## AJAX 데이터 통신 테스트 실행

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [movies, setMovies] = useState([]);

로딩중관리, 에러처리, infinite Scroll구현을 위해 마지막 쿼리인지에 필요한 bool변수, 
데이터를 담을 movies로 useState훅을 사용해 state 구성 

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios({
      method: "GET",
      url: apiurl,
      params: { s: query, page: pageNumber },
    }).then((res) => {
      if (res.data.Response !== "False") {
        setMovies((prevMovies) => [...prevMovies, ...res.data.Search]);
      //스프레드 연산자를 사용하여, 모든 데이터가 setMovies 배열안에 담길수 있도록 하였다. 
        console.log("hasMore hook", res.data.Search.length > 0);
        setHasMore(res.data.Search.length > 0);
      //data 배열의 길이값을 가져와 데이터가 더 남아있는지, 더이상 찾을 수 없는지 구분 할 수 있도록 설정하였다.
        setLoading(false);
      //로딩중 페이지 출력여부 true/false를 구분하기 위함.
      }
    });
  }, [query, pageNumber]);

axios를 통한 데이터 통신은 useEffect를 이용해 동기로 처리하였으며, query(검색어), pageNumber이 바뀔때마다
데이터를 받아오도록 구현하였다.



## Deployment
"homepage": "https://sunhwa508.github.io/moflix/",

   "predeploy": "npm run-script build",
    "deploy": "gh-pages -d build"

npm i gh-pages 설치 후
package.json에 위와같이 홈페이지와 ""scripts" 의 predeploy, deploy 설정 후
npm run deploy를 통해 deploy해준다.


## Built With

*  const apiurl = "https://www.omdbapi.com/?apikey=MY_API&"; - The API was provided
* (https://sunhwa508.github.io/moflix/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

 "dependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "3.4.1",
    "scss": "^0.2.4"
  },

"devDependencies": {
    "gh-pages": "^2.2.0"
  },

## Authors


## Acknowledgments

* 처음으로 
