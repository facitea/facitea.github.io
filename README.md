# Animall / 호스팅을 위해 Animall->facitea.github.io로 repo 
파이어베이스 연동 crud 프로젝트

https://velog.io/@chchaeun/Firebase%EC%99%80-Javascript%EB%A1%9C-To-do-list-%EB%A7%8C%EB%93%A4%EA%B8%B0

참고.

## 22/10/05
forEach를 사용하여 데이터를 배열에 담아서 table에 출력하려는데 쉽지가 않다.
공부가 더욱 필요할 것으로 보인다.

## 22/10/11
- 전체적인 구상은 다음과 같다.

- 메인페이지
ㄴ메뉴, 배너, 타이틀, 섹션, 푸터

- 회원가입/로그인

- 게시판
ㄴ질문게시판(질문게시판/사진가능/글로만 제목보임)
ㄴ중고장터(일반리스트게시판/썸네일목록/사진가능)/신상품 판매에 주력.
ㄴSNS(제목없음 어그로방지 무한스크롤,글쓰기,글수정,글삭제 /해시태그 구현) - 강아지 사진 올리는 게시판. 추천 수 많으면 그 주의 메인화면에 걸림. 강아지가 아닌 사진은 선정되지 않음. 한 번 올리면 일주일간 지울 수 없음. / 메인에 올라가기 싫어요 체크박스 있음.

- 쇼핑몰(개발 3순위/훈련사 장터와 통합.)
ㄴ훈련사장터(결제시스템 구현 필요)
ㄴ카테고리
ㄴ훈련사목록
ㄴ훈련사

- 여행지(동반가능한곳)
지도api 활용 / 프론트로 그려야할듯? 백엔드 구현 시 같이 사용해야하나..

★짜임새보다는 기능구현에 초점을 맞추자★

## 2022 이내 구현할 것.
- SNS(인스타그램형식)
- 무한스크롤
- CRUD
- 클라우드 사진저장
- #해시태그 - 검색에도움될듯

## 그 다음 수순(2023 이내 구현할 것.)
- 질문/중고 게시판
- 회원가입/로그인
=================================================취업절취선기대
## 그 다음 수순
- 백엔드 구현
- 쇼핑몰 구현
- 결제시스템 구현
- 여행지 지도 API


# 22/10/11
- Mypage삽입 및 모달창으로 로그인, 회원가입 구현 중. firebase 인증 유지 기능 구현 필요.

- 10/12~15 / 제주도 여행 갔다와서 나머지 구현해봅시다.

- 휴가기간동안 개인프로젝트를 다듬을 수 있어서 행복했다.

# 22/10/17
- 휴가에서 복귀했다. 휴가 가기 전, 오늘 해야할 것들을 적어놓아서 과거의 나에게 너무 고맙다.

- https://mateeth.tistory.com/m/6 firebase와 세션

# 22/10/18
- 오늘은 세션에 대해 공부하고 적용해야한다.

-https://beomseok95.tistory.com/m/108 회원정보 관련 메소드 

- 파이어베이스에 의존하여 백엔드 서버 없이 구축하다보니 애로사항이 꽃 핀다.
- 세션 유지 메소드 활용법을 아무리 찾아도 모르겠다.
- 처음 로그인 시 세션에 회원 id값을 대입하고, 서버로부터 전체 회원 id값과 세션에 저장된 id값을 대조하는 식으로 하는 방법이 있겠지만 보안상 분명 문제가 있을 것이다.

-https://firebase.google.com/docs/auth/web/manage-users?hl=ko Firebase에서 사용자 관리하기

- 커스텀 토큰을 만드는 방법이 있다 JWT 그러나 그것까지 공부하면 나는 백엔드 개발자(?)
- 집에 가서 todolist 최고의 예제를 참고해봐야겠다.

- https://firebase.google.com/docs/auth/admin/verify-id-tokens?hl=ko#web 이건가

- https://codingapple.com/unit/firebase-authentication-register/?id=9822 코딩애플강의 돈주고 

- https://ldevlog.tistory.com/m/28 간편하게 구현하려면 이걸 보자. 이후에 리팩토링 해도 되잖아~

# 파이어베이스 로그아웃은 왜 있지?

## https://mateeth.tistory.com/m/6 돌고 돌아 이것이 근본

- firebase 토큰에 대해서도 찾아보자

- https://firebase.google.com/docs/auth/web/manage-users?hl=ko 로그인한 유저 있는지 확인가능

### 로그인 버튼 누르는 순간 이미 세션에는 임의의 세션값이 입력돼있다. 크롬 개발자 도구로 보면 됨.
- 고로 이제 페이지가 열렸을 때 세션이 있는지 확인하면 될 듯?

일단은 간편하게 세션이 있으면 그냥 로그인된걸로 치게 할까?

- 회원가입시 개인정보를 추가로 DB에 작성하게 하는게 나을듯. 글 작성 시 닉네임 등 개인정보도 로딩을 해야함;

- displayName:null
- email:"yjhws2011@naver.com"
- phoneNumber: null
- photoURL:null
- providerId:"password"
- uid:"yjhws2011@naver.com"

- 세션에는 위와 같은 값이 들어간다.

https://firebase.google.com/docs/auth/web/manage-users#web-version-8_2
- 위 주소를 통해 프로필 업데이트가 가능하다.

- 세션 key값을 받아서 그 값으로 value값을 얻고 거기서 사용자 정보를 확인하여
- 로그인 당시 uid값과 세션의 uid값을 대조하여 일치하면 진행하면 어떨까!

- 결론, 자바스크립트 파일을  auth 분야로 추가 분리했다. 세션에 자동으로 firebase가 값을 넣어주지만 이를 활용하는데에는 아직 연구가 필요하다. 지금 당장은 허접하게 not null인 경우 인증된 것으로 쳐서 인증 회원인 경우만 서비스 이용가능하게 만들 것이다. 그리고 그 것을 함수로 만들어서 매순간 체크하게 만들자.

# stsTokenManager 세션에 보면 위 항목이 있다.
- 이것을 활용하는게 진짜 포인트일텐데 어떻게 해야할지 

- https://firebase.google.com/docs/auth/admin/verify-id-tokens?hl=ko#node.js 혹시라도 node.js express 서버로 돌리게 되면 참고하면 좋을 부분. 토큰.

# 22/10/19 카카오 사태에 대해
- 기업은 처음엔 혁신적인 아이디어로 시장에 진입한다.
- 이후 후발주자들과 경쟁한다.
- 안정적 체제가 되면 새로운 혁신이 계속되어야한다.

# 22/10/20 학습방향정립
- 프론트엔드 면접 CS지식
- 알고리즘 공부
- 애니몰 개발
- vue 학습

기능개발vs외관개발
회원가입시 새로운 Table 생성.
환경설정 - 개인정보수정. 고민해볼것

# 22/10/24 마이페이지 구현
- 마이페이지에 정사각형 이미지를 GRID를 통해 반응형으로 삽입하려다가 문제가 생겼다.
- 사진을 업로드하기 전 정사각형으로 만든 다음, 서버에 저장해두고, 저장된 이미지를 불러올 때 grid로 자연스럽게 저장되게 해야겠다
- # 그렇다면 firebase 이미지 업로드를 공부해야한다.

강아지 사료
강아지 간식
강아지 영양제
강아지 용품

고양이 사료
고양이 간식
고양이 영양제
고양이 용품

펫티켓 산책용품
shop 카테고리. 

- https://codingapple.com/unit/firebase-upload-image-to-storage/ 코딩애플이 도움이 많이 된다.
- Board를 Q&A로 바꿔야겠다.
- Sns형 게시판에 태그까지 넣으면 DB를 어떻게 관리해야하냐

### 잘 생각해보니 firebase db, storage는 고유적으로 권한 설정이 있다. 권한이 허용만 돼있다면 알아서 firebase가 세션체크해서 권한 체크해주는거 아닐까? 지금까지 뻘짓한거임?!

- 집에 와서 전체적인 그림을 생각해보다가.
- firebase로 기본적인 틀 만드는 것이 v1.0
- node.js로 api server 연동하는 게  v2.0
- 완전 자체 백엔드 연동 + vue 전환 + 쇼핑몰오픈 v3.0

-위와 같이 흘러가면 좋겠다는 생각을 했다.
![image](https://user-images.githubusercontent.com/89388117/197523790-c880eb05-1fc2-4ad9-9176-04d81a2ff3ce.png)

# 22/10/25
- ![image](https://user-images.githubusercontent.com/89388117/197651608-9c6634a5-f3ba-4757-b0bc-0b13046e8c12.png)
- DB구조를 설계하는 ㄳ이 오늘 목표다.
- https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=l1523&logNo=221796663248 참고자료

- axios, fetch, ajax 등 서버 통신을 교양 수준으로 공부하다가 
- https://bentist.tistory.com/35
- https://velog.io/@eunbinn/Axios-vs-Fetch
- http와 socket 통신까지 보게 되었다.

# 22/10/26
- https://velog.io/@se030/SSR-CSR-with-JS-express
- SSR / CSR 차이

# 22/10/31
- 25일에 계획하고 실행하지 못했던 DB구조를 코딩을 못해도 어느정도 짜놓는 것이 좋겠다
- myPage 이미지 정사각형으로 만들기를 구글링 끝에 성공했으나, ::after를 왜 쓰는지 모르겠다. -> 지워도 됨 해결
- 빨리 얼른 개인 프로젝트를 만들고, next.js로 리팩토링하자.
- css position에 대한 공부를 더 해야한다.
- DB 구조 설계는 미뤄두고 writingPage에서 storage에 이미지 업로드 하는 법을 익혔다.
- 사진을 업로드 하는 방법 클리어. DB에 정보를 연동해서 프로필/게시글에 연결하기. 그리고 로딩하면서 가져오기까지가 목표다.

# 22/11/1
- https://firebase.google.com/docs/auth/cpp/manage-users?hl=ko
- 위 내용을 보면 사용자가 로그인하지 않은 경우 current_user 는 nullptr을 반환합니다.

- 해야 할 것이 많다. 지금 당장은 가입, 정보수정, 글 쓰기, 글 수정, 글 읽기, 글 삭제, 회원탈퇴에만 신경쓰자.
- 회원가입 리팩토링, 회원정보 수정 기능, 글쓰기, 글 수정, 글 읽기
- 차차 할것 - shop(진열,결제) + training(문답,진열,결제)

- 글쓰기는 무리하지 말고 모달창 띄워서 쓰자.

# 개인정보
- 이메일
- 비밀번호
- 닉네임
- 권한
- 최근로그인
- 가입날짜
- 비밀번호 변경 일시
- 프로필사진 식별번호
- 아이디 식별 번호(링크)

# 게시글
- 게시글 번호
- 게시글 내용
- 작성자 ID
- 작성일시
- 수정일시
- 조회수
- 댓글가능여부
- 사진 식별번호(링크)

# 첨부파일
- 식별번호

# 댓글
- 게시글 번호
- 작성일시
- 수정일시
- 작성자 ID
- 댓글 내용

## 구현하면 구현할 수록 firebase의 비용 문제가 상당하다는 생각이 든다.
- 글 리스트를 쭉 불러올 경우 비용이 엄청나게 든다. 
- 쿼리가 가능한 것도 아니기 때문에 이렇게 되면 api 서버를 만드는 것이 합당하다는 생각이 든다.
=> 장기적 운영으로 갈 경우 이 방법이 합당하다.

- firebase 게시판 페이징 을 구글링하여
- https://lightcode.tistory.com/32 링크를 얻었다. 

- 무한 스크롤 구현시 데이터를 어떻게 받아올 지 고민해보자.
- https://firebase.google.com/docs/firestore/query-data/query-cursors?hl=ko 페이지네이션 정보가 있다!!!!!!!!!!!!!!!!

- https://velog.io/@dbk03053/Firestore-Paging-%EA%B2%8C%EC%8B%9C%EA%B8%80-%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EC%AA%BC%EA%B0%9C%EC%84%9C-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0

# 파이어베이스 쿼리문 검색해서 더 알아보자

### 게시글의 순서를 1부터 차례대로 달도록 하면 좋을 것 같다.
- 복합색인이라는 항목이 firestore에 있다 공부하면 좋을 듯
### 아니면 timestamp 최신순으로 ..

- https://firebase.google.com/docs/firestore/query-data/index-overview?authuser=1&hl=ko#single-field-indexes

# 22/11/2
- https://console.cloud.google.com/firestore/data/panel/?authuser=0&hl=ko&project=hawktalk-b0a71 구글 클라우드에서 파이어스토어 
- https://simplevue.gitbook.io/intro/ vue 입문자 

- https://hellose7.tistory.com/109
- https://firebase.google.com/docs/firestore/query-data/index-overview?hl=ko
- https://firebase.google.com/docs/firestore/query-data/indexing?hl=ko

# 파이어베이스 
- count 갯수만 알려준다
- limit 갯수만큼만 보여준다.
- orderby 속성만큼 오름차순, 내림차순으로 보여준다.
- where 조건에 맞는 쿼리문을 반환한다.

count 갯수만 알려준다
limit 갯수만큼만 보여준다.
orderby 속성만큼 오름차순, 내림차순으로 보여준다.
where 조건에 맞는 쿼리문을 반환한다.

일에 맞게 게시글을 뽑아 오고 그 게시물이 5개 미만시 추

1. 기준일 -> 가져온 문서 갯수 판별 -> 5개 미만 -> 추가 기준일만큼 더 가져옴
=> 5개 가져오면 그대로 보여주기 -> 그 다음 기준일로 다시 
=> 6~9개 가져오면 가져온 데이터를 5개 보여줌 -> 4개 남았으니 추가로딩

null일 경우, 
날짜 +1까지는 괜찮지만 월+1하는 경우..

> 2022-10-09 00:00:00 
<= 2022-10-09 23:59:99


count 갯수만 알려준다
limit 갯수만큼만 보여준다.
orderby 속성만큼 오름차순, 내림차순으로 보여준다.
where 조건에 맞는 쿼리문을 반환한다.

일에 맞게 게시글을 뽑아 오고 그 게시물이 5개 미만시 추

1. 기준일 -> 가져온 문서 갯수 판별 -> 5개 미만 -> 추가 기준일만큼 더 가져옴
=> 5개 가져오면 그대로 보여주기 -> 그 다음 기준일로 다시 
=> 6~9개 가져오면 가져온 데이터를 5개 보여줌 -> 4개 남았으니 추가로딩

null일 경우, 
날짜 +1까지는 괜찮지만 월+1하는 경우..

> 2022-10-09 00:00:00 
<= 2022-10-09 23:59:99

반복문으로 

아오 너무 복잡해 그냥 인덱스가 있으면 좋겠는걸

인덱스가 필요해서 그냥 20221102000000 식으로 날짜를 고유번호로 만들었다.
startAt으로 id값 입력하면 필요한 부분이 들어온다.
parseInt를 통해 숫자형을 바꿔주니 자동 형변환으로 firestore에 저장돼서 좋네.
이래서 type을 중요시하는군.

등록 직전 쿼리 보내서 DB에 몇개 있는지 확인해서 게시글 ID 생성하면 어떨까?

등록 직전 가장 최근 게시글 하나만 딱 불러와서 id값이 몇인지 확인 후 +1 하면 어떨까?
-> 좋아좋아

프사는 회원 uid와 일치시키자.

피드 사진은 storage에 저장되는데 자동생성된 게시글의 문서명을 참조하면 되겠다.
내가 만든 id값을 참조하면 꼬일 가능성이 있기 때문
.then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
docRef가 그 문서의 이름이다.

### 3시간동안 삽질하다가 알아낸 사실. firebase 통신이 순차적으로 이루어지기 위해서는 비동기 프로그래밍이 필요하다.
- 아마도 모든 통신 관련 프로그래밍은 비동기가 핵심일 것이다.
- 왜 그동안 비동기프로그래밍을 사람들이 강조했는지 깨닫게 된 3시간이었다.
- 일단 writingPage에 임시로 setTimeOut 메소드를 사용해 게시물 id를 자동으로 생성하게 만들었다.
# 앞으로 할것 : setTimeOut 꼼수가 아닌 정식 비동기 처리방식으로 전환하자 / 파이어베이스는 참 느리다..
# 게시글 ID를 마지막 글을 참조해서 +1 하여 새로 만드는 아이디어와 비동기 프로그래밍의 중요성을 알게 된 하루다.
# 이제 게시글의 갯수를 대략적으로 파악하여 필요한 범위만큼 읽기 가능해졌다 -> 

# 22/11/3
- rest api에 대한 공부가 하고싶어졌다. node.js 서버와 postman으로 간단한 학습부터 시작해야겠다.
- 게시글을 쓸 때 비동기형식으로 일단 글 게시 후 나오는 feedId(1~)를 쓰면 나중에 DB 꼬였을 때 사진이 난장판이 될 것 같다.
- 게시글이 쓰인 후 생성된 documentid를 찾아서 사진 id를 만들고, 그 
- 아니지 사진을 등록하면 나오는 url을 게시판 db에 같이 올려야 한다. 파일 이름이 같으면 storage에서 덮여쓰이니 사진 이름도 규칙을 만들어야 한다.

이 모든 일련의 과정이 끝나야 창이 닫히게 해야 오류가 안난다.

# 22/11/4
- 게시 버튼을 누르면 사진첨부여부, 글 내용 여부 null check.
- 사진을 storage에 올린다. 사진의 이름은 20221104143600과 같은 날짜 id로 올린다. / 올리기 전 해당 파일이 있는지 경로를 통해 확인 해보자/이미지여부 check도 해야함
- 날짜 id가 문제 없으면 DB에 사진url, 내용, 날짜, (작성자) 를 넣자.
- 글 불러오기는 더 골때릴듯. 
- 게시글을 불러와서 html에 어떻게 뿌려줄지 찾아봐야겠다.

- https://velog.io/@cyongchoi/Firebase-%EB%A1%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-1 뜬금없지만 로그인유지에 관해.
- https://velog.io/@zo2kim/%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%9C%A0%EC%A7%80%ED%95%98%EA%B8%B0
- 지금 당장은 내가 구현한 방식이 최선이다. 결론!!!

## https://velog.io/@js2_11/05-02-Express.js%EC%99%80-REST-API rest api 관련해서 굉장히 잘 정리된 글. 일독하자.

firebase.auth().signOut().then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

위는 로그아웃 코드다.

# 오늘의 결과물
- 글쓰기 대략적인 기능 구현 성공. 코드 정리, 사진 용량 제한, null 체크 등 아직 디테일을 살려야 할 부분이 있다.
# 내일부터 해야할 것
- 글 읽기 기능을 구현해야 한다. 대략적인 마크업도 해두어야 쉬울 것 같은데.. 데이터를 가져오는 방법, 데이터를 정제하는 방법, 데이터를 뿌리는 방법을 고민해야한다. 
- 동적으로 게시글 리스트를 어떻게 만들지 고민해야한다.

# 22/11/6
- 하루동안 백엔드 서버도 직접 만들어볼까 했지만 포기하기로 했다. 너무 방대해진다.
- 그냥 firebase와 깃헙페이지로만 포트폴리오를 작성하자
- 구글 클라우드를 쓴다면 어떨까?
- 리액트or뷰 작업도 시작하자.

- 프론트단에서 api요청을 보내면
- 서버에서 DB를 참조하여 응답한다.
- 응답받은 데이터를 프론트단에서 보여준다.

- 프론트 서버따로
- 백엔드 서버따로 돌려야 하나.

- https://codingapple.com/unit/nodejs-react-integration/
- 리액트 노드 연결

- 백엔드까지 시도해보려했으나 너무 방대해진다.

- 그냥 firebase와 내 사이트정도로만 포트폴리오를 작성하자
- 구글 클라우드를 쓴다면 어떨까?

- 공유기 설정에서 포트포워딩을 할 때에는
- 꼭 ip주소는 내부로 해야한다. //내부포트, 외부포트에 대한 공부 필요
- 윈도우에 고급 쳐서 인바운드 포트 설정하고
- 아웃바운드는 설정후 속성들어가서 로컬포트 적고, 원격포트를 모든포트로 설정.
- DMZ IP는 내부 주소 고정(?)

- http://192.168.35.167:3300/ 내부ip
- http://219.255.57.35:3300/ 외부ip
- -> 가비아는 80포트만 가능하다고 하니 나중에 생각하고
- -> express서버에서 그냥 80으로 열어버렸다. 문제 있을시 다시 3300으로 옮기면 된다.

- 로컬 api서버는 219.255.57.35:3300 형태로 운영하자..

# express mysql rest api 앞으로의 검색 키워드이다.

api 서버는 사실상
DB와의 연동을 위해 쓰는 것이다.

- https://hasiki.tistory.com/18
- mySQL 기본 사용법을 보여준다.
- 세미콜론을 안 붙이면 말을 안듣는다.

# 22/11/7
- https://duckgugong.tistory.com/208
- firestore 유용한 내용.

// 글 올리기
- db.collection('게시판').doc("0FpIjdsLCgPHgxukTlfV")
.update({ name: 'hello' });

- 필드에 name:'duck2'를 추가하는 코드
- 이미 존재하는 필드에 사용하면 내용이 바뀐다.
- 수정시 작성일을 제외한 모든 내용을 다 업데이트하는 식으로 해야할듯

작성시간, 수정시간(null), id, 이미지링크, 내용, 작성자ID, 작성당시닉네임
-> 회원 가입시 닉네임은 중복확인 하면 데이터를 너무 많이 쓰니 하지말까 고민이 된다.
-> 회원가입 DB 구축도 이참에 해버리자.

- serverTimestamp() // 타임스탬프 자체 메소드가 있다.
- 자체타임스탬프를 이용한 get 메소드 옵션이 있는듯.

# 글 읽기에 대해 고민해야한다.
- 가장 마지막 게시글 id 값을 찾아와서 limit(5) --로 읽어내기 ex)99가 마지막이면 99 98 97 96 95 이런 식
- 정제해서 

- Microsoft 서피스 고3 코어i3 10세대 가지고싶다..

![image](https://user-images.githubusercontent.com/89388117/200442608-d9c42c70-caa2-465b-8d14-26096d4ae000.png)
- 스냅샷에 대한 고찰

![image](https://user-images.githubusercontent.com/89388117/200448000-cba77797-784c-4c31-ad79-ebc18020cd36.png)
- 함수에 


## 22/11/8
# 오늘의 궁금증
- 쿼리페이지화라는 항목이 있다.
- https://cloud.google.com/firestore/docs/query-data/query-cursors?hl=ko#web-version-8_3
- 가장 마지막 글의 feedId를 받는다.
- 100을 변수에 저장->endAt(100).limit(5) 방식으로 100~95를 가져온다.->변수 -5를 한다->마지막 스크롤 감지될때까지 대기.
- db.collection()

# 오늘의 패치노트

# 내일의 패치계획


html에 어떻게 뿌릴것이냐
패런트 차일드

아놔 생각해보니 상호작용되는 페이지를 만들려면 html엘리먼트를 만드는것만으로는 부족하다
클라이언트 사이드 렌더링 시 어떻게 바인딩 할 것인가.
vue 동적 컴포넌트
함수 return 관련 궁금증

이름 누르면 해당 아이디의 프로필로 넘어가기.
트위터를 보니 a태그로 '/아이디'하면 그 페이지가 나타난다->백엔드 서버가 있어야 되는거 아니냐(?)/url애
게시판 버튼 구현
백틱으로 html을 뿌릴 순 있으나,,, a태그로 회원정보를 불러오려면 SSR이 필요하지 않나..
-개인 프로필로 들어가기는 구현하지 말자.
-비용 신경쓰지 말고 일단 만들어보자 그냥!!!

# 22/11/16
- ///인덱스 -5 해서 모든 걸 진행하게 합시다.
/

//이제 사진을 어떻게 가쟈올지 판단해보자

처음 다섯개는 그냥 정적으로 생성하자. dom조작으로
이후 다섯개부터는 index - 5x 씩 해서 매번 동적생성.
한 턴 지날 때마다 +1씩?!

# 22/11/18
- 글 작성시 DB에 작성자 uid, 닉네임을 같이 넣자.
- ${}표현법으로 사진 주소도 가져와야 한다.

# 22/11/21
메인 - 기본적인 사이트 소개, 이달의 사진, 
피드 - 인스타 벤치마킹

글쓰기 - 작성완료 되면 피드로 새로고침
글읽기 - 무한스크롤 구현필요. 5개씩 게시글 불러오기
글수정 - 작성완료 되면 피드로 새로고침

내정보-사용자프로필
-권한 있으면 회원정보수정,설정권한 부여
로그인 - 
회원가입
회원정보수정
관리자 페이지

DB 구조에 신경써야한다.

추가할 것)
게시글 : uid, 수정날짜.
회원정보 : 이메일, 닉네임(사실상자기소개), 권한, 가입일시, 비밀번호변경일시, (최근로그인일시), 프로필사진경로, 전화번호, uid, 견종+이름(최대5마리-견종마다 기본 프사 다르게 하면 좋을 듯)

내 정보
- 프로필사진
- 자기소개(닉네임)

회원가입/로그인/회원정보수정 분리
회원가입-회원정보수정 유사성 있으나 분리시켜서 회원가입을 더 쉽게 만드는게 좋을 것 같다.
회원가입
- 아이디
- 비밀번호
- 비밀번호확인
- 반려 견종+이름(예비견주 : null)

회원정보수정(비밀번호 입력 후 진행)
- 비밀번호
- 비밀번호확인
- 반려 견종+이름(예비견주 : null) 변경

댓글
- 게시글과 동일한 id로 새로운 테이블 생성(feedId-개발하기쉬움.. or 암호화된 document id-데이터불일치확률낮아짐)
- 게시글이 로딩되고 비동기적으로 댓글을 

★생각해볼점★
- 왜 feed에서 닉네임만 세로 정렬 될까. 폭이 제한돼서 그럴까?
