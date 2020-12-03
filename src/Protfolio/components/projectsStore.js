import movie from '../projects_images/movieMain.png';
import kanbanboard from '../projects_images/KanbanBoard.png';
// import mapProject from '../projects_images/mapProject.png';
import movie_search from '../projects_images/movie_search.png';

let projects_store = [
  {
    name: 'Movie Reservation App',
    image: movie,
    url: 'https://github.com/jinwoo6531/nomfilx',
    catagory: ['react.js', 'node.js'],
    intro:
      '영화 소개와 예매를 동시에 이룰 수 있는 프로젝트입니다. React의 함수형 컴포넌트를 사용했으며, 컴포넌트의 Lifecycle을 명시적으로 알 수 있는 메서드를 활용하며 동작원리를 익히기 위한 목적이 컸습니다.  Nodejs + MongoDB를 활용한 백엔드와 RestAPI를 활용한 데이터 저장과 조회를 구현한 프로젝트입니다. ',
    disc1: 'Open API로 영화 데이터 사용',
    disc2: 'React Hooks, Styled Components 적용',
    disc3: 'Redux를 활용한 로그인 및 예매/매점구매 상태관리',
    disc4: 'Github을 활용한 버전 관리 및 협업 진행',
    disc5: 'Node.js를 활용하여 REST API 사용',
    disc6: 'MongoDB로 데이터 관리',
  },
  {
    name: 'KanbanBoard',
    image: kanbanboard,
    deploy: 'https://jinwoo6531.github.io/KanbanBoard/',
    url: 'https://github.com/jinwoo6531/KanbanBoard',
    catagory: ['react.js'],
    intro:
      'Trello Clone 개인 프로젝트입니다. Redux를 활용한 State관리를 주 목적으로 공부한 프로젝트입니다.',
    disc1: 'React Hooks, Styled Components 적용',
    disc2: 'Redux를 활용한 Card 내용 관리',
    disc3: 'React-beautiful-dnd 모듈을 활용한 드래그 기능 활용',
    disc4: 'Github을 활용한 버전 관리',
  },
  // {
  //   name: 'NaverMap App',
  //   image: mapProject,
  //   url: 'https://jinwoo6531.github.io/mapTest/',
  //   catagory: ['node.js', 'vanila'],
  // },
  {
    name: 'Movie_search(Typescript version)',
    image: movie_search,
    deploy: 'https://jinwoo6531.github.io/typescript_movie_search/',
    url: 'https://github.com/jinwoo6531/typescript_movie_search',
    catagory: ['react.js', 'typescript'],
    intro:
      'React에 Typescript를 사용하는것이 주 목적인 개인 프로젝트입니다. React Hooks의 useReducer를 활용한 state 관리를 사용 하였습니다.',
    disc1: 'OMDB API로 영화 데이터 사용',
    disc2: 'React Hooks 적용',
    disc3: 'useReducer 활용한 state 상태관리',
    disc4: 'Typescript를 활용한 Type지정',
    disc5: 'Github을 활용한 버전 관리  진행',
  },
];
export default projects_store;
