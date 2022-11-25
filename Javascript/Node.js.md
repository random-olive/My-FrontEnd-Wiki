## 1. Node.js
* V8 JS 엔진으로 빌드된 런타임 환경 중 하나
* 런타임 : 프로그래밍 언어가 구동되는 환경
* 런타임 : 프로그램이 동작할 때, 프로그램이 동작하는 환경
* JS를 브라우저 이외의 환경에서도 동작할 수 있도록 엔진을 브라우저에서 독립시킴
* 주로 서버사이드 애플리케이션 개발에 이용되며, 내장 API를 제공한다.
* 단일 스레드 이벤트 루프 기반으로 동작하고 비동기 I/O를 지원해서 Single Page Application 에 적합하다.

* npm : node package manager: JS 패키지 매니저
* CLI (Common Line Interface) 제공 -> 패키지화된 Node.js 모듈 저장소, 패키지 설치 및 관리
/user/local/bin/node에 설치된다

* Node.js REPL 를 사용하면 JS 실행, 결과뷰 가능
* 실행방법 : 터미널에 node 친 후 명령어를 쓰거나 node 파일이름을 실행한다. (.js는 생략 가능) / process.exit() 혹은 Ctrl+C 두번 -> 나가짐
* node version manager : 다양한 버전의 node.js 설치, 버전 변경
* 명령어
nvm --version
node -v
node 파일이름 -> 실행
---------
nvm ls
nvm install
nvm use


* Xcommon-line->HomeBrew깔고 (macOS의 패키지 매니저) 거기서 -wget 깔고 거기서 "url"로 nvm 설치


* package.json 생성하기
* 만든 폴더 내부로 접근, npm init, package.json 파일에 들어갈 정보 입력 + enter
* npm init -y

* package.json : npm 모듈에 대한 정보를 담은 파일, JSON 형식
* node.js 환경에서 외부 라이브러리 다운받기 위한 방법
* node_modules !
* devDependencies : 프로그램 "실행"과 관계없는 오로지 개발을 위한 의존성 모듈 -> lint, testing 모듈 ,... -> --save-dev
* dependencies : 프로젝트 실행시 필요한 모듈
* 이런 내용은 다른사람과의 협업에서 중요하기 때문에 기술함.
* 특별히 개발이나 실행에 해당 모듈을 의존한다고 해서 의존성

* sciprts 항목 (npm script)
* npm run 스크립트 이름 으로 실행
* npm run start, test, lint

## 2. SPA (Single Page Application)
* 배경 : 모던 웹 애플리케이션에서 데스크톱 애플리케이션같은 성능과 UX 제공이 중요해지자 개발 규모, 복잡도 상승 -> 패턴, 라이브러리, 프레임워크 등장
* CBD(Component based developement) 방법론을 기반으로 함
