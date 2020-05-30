
<h1>💻MOVIE SEARCH APP</h1>
<h2>DEMO : https://sunhwa508.github.io/moflix/</h2>

![content2](https://user-images.githubusercontent.com/61695175/83228634-a2c80900-a1c1-11ea-8334-6a71dbf4cffb.png)
## 



## Getting Started


### ✔Prerequisites
npx create-react-app moflix "Moflix"라는 이름의 리액트 프로젝트 앱 생성하기<br/>
AJAX통신을 용이하게 도와줄 axios라이브러리 사용<br/>
https://www.omdbapi.com 회원가입후 개인 apikey 생성<br/>

### ✔Installing
react환경구축
npm버전 : npm i react-router-dom <br />
yarn버전 : yarn add react-router-dom



 SPA구현을 위한 react route설정으로 "react-router-dom": "^5.2.0" 버전 설치<br/>
"gh-pages" 를 이용해 github.io 무료 호스팅 사용



## ✔AJAX 데이터 통신 테스트 실행

const [loading, setLoading] = useState(true);<br/>
  const [error, setError] = useState(false);<br/>
  const [hasMore, setHasMore] = useState(false);<br/>
  const [movies, setMovies] = useState([]);<br/>

로딩중관리, 에러처리, infinite Scroll구현을 위해 마지막 쿼리인지에 필요한 bool변수, 
데이터를 담을 movies로 useState훅을 사용해 state 구성 
<pre><code>
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
</code></pre>
axios를 통한 데이터 통신은 useEffect를 이용해 동기로 처리하였으며, query(검색어), pageNumber이 바뀔때마다
데이터를 받아오도록 구현하였다.



## ✔Deployment
"homepage": "https://sunhwa508.github.io/moflix/",

   "predeploy": "npm run-script build",
    "deploy": "gh-pages -d build"

npm i gh-pages 설치 후
package.json에 위와같이 홈페이지와 ""scripts" 의 predeploy, deploy 설정 후
npm run deploy를 통해 deploy해준다.


## ✔Built With

*  const apiurl = "https://www.omdbapi.com/?apikey=MY_API&"; - The API was provided
* (https://sunhwa508.github.io/moflix/) - Used to generate RSS Feeds


## ✔Versioning
<ul>
<li>"react": "^16.13.1",</li>
<li>"react-dom": "^16.13.1",</li>
<li>"react-router-dom": "^5.2.0",</li>
<li>"react-scripts": "3.4.1",</li>
<li>"scss": "^0.2.4"</li>
<li>"gh-pages": "^2.2.0"</li>
</ul>


## ✔Acknowledgments

* facebook 뉴스피드를 시작으로 많은 앱, 웹에서 다양하게 사용되고있는 infinite scroll을 직접 한번 구현해 보고싶어 
이번 movieAPI data를 이용해 useRef기능을 사용하여 inifitescroll app 을 사이드 프로젝트로 진행해보았다.
처음 axios를 사용하지 않고 직접 자바스크립트 fetch 로만 AJAX통신을 구현하려하니, 코드가 복잡해지고, pageNumber구분이 쉽지 않던 중유튜브에 올라온 AJAX통신 관련 튜토리얼 중 axios라는 라이브러리에 대해 공부하게 되었다.
복잡한 JS fetch를 구현법을 간단하게 만들어줄 라이브러리, axios를 사용해 json keywords들을 관리하니 너무너무 간편하고 보기 쉽게 코드를 나열 할 수 있어, 큰 어려움 없이 프로젝트를 마칠 수 있었다. 
