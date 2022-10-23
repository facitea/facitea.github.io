function submitSignup(){
    const email = document.getElementById("loginEmail").value;
    const pwd = document.getElementById("loginPwd").value;

    if (!email || !pwd){
        alert("모든 항목 기재해야합니다");
        return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, pwd)
    .then((userCredential) => {
        // 가입
        var user = userCredential.user;
        alert("가입 성공");
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("가입 실패");
        // 제주도 여행가기전에 급하게 구현하는거니까 로그인폼에 회원가입시켜보자
    });
}

var uid; //급하게 작업하여 부득이하게 아래함수의 uid값을  전역변수로 저장
function submitLogin(){
    const email = document.getElementById("loginEmail").value;
    const pwd = document.getElementById("loginPwd").value;


    if (!email || !pwd){
        alert("모든 항목 기재해야합니다");
        return;
    }
    firebase.auth().signInWithEmailAndPassword(email, pwd)
    .then((userCredential) => {
        // 로그인
        var user = userCredential.user;

        firebase.auth().onAuthStateChanged((user) => {
            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;
            uid = user.uid;//로그인하면 사용자정보를 변수에 넣어줌

            console.log(uid);
        }); //로그인을 하면 uid정보를 mySession세션 key값에 저장하는 함수.
        //근데 로그인 버튼 누르는 순간 이미 세션에는 임의의 세션값이 입력돼있다. 크롬 개발자 도구로 보면 됨. 
    
        /*
        //페이지를 불러올 때마다 세션 확인을 하는 건 너무 원시적이지 않나
        세션확인 방법을 알아보자
        */

        alert("로그인 성공");
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("로그인 실패");
    });

}
//회원가입을 하면 그대로 로그인이 되게 만들자. 이건 쉽다.


    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
        return firebase.auth().signInWithEmailAndPassword(email, pwd);
        alert("로그인 유지 중");
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("로그인이 필요합니다.");
    })//오류가 있다. 이 코드는 로그인을 검증하는 코드로 추정되나, 아직 작동하지 않는다. 아마도 로그인시 세선에 id값을 넘겨주고 onload시 그 세션과 비교하여 맞다면 계속 진행하게 만들어야하지않나 싶다.
    //sessionStorage.setItem("MY_SESSION", "here"); 세션을 설정하고 가져오는 작업이 필요

function getUserData(){
    const user = firebase.auth().currentUser;
    if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getIdToken() instead.
    const uid = user.uid;
    }
}//내가 만든 함수. 유저의 data를 user 객체에 담음.

function updateUsetData(updateName, personalImage){
    const user = firebase.auth().currentUser;

    user.updateProfile({
    displayName: updateName,
    photoURL: personalImage
    }).then(() => {
    // Update successful
    // ...
    }).catch((error) => {
    // An error occurred
    // ...
    });  
}//내가 만든 함수, 유저의 data를 수정할 수 있다. 프로퍼티가 적용되도록 함수형으로 만들어놨다.


/*
function userSessionCheck() {

//로그인이 되어있으면 - 유저가 있으면, user를 인자값으로 넘겨준다.
firebaseEmailAuth.onAuthStateChanged(function (user) {
    
    if (user) {
    //조회 - 데이터 베이스에 저장된 닉네임을 현재 접속되어 있는 user의 pk key 값을 이용해서 가져오기
    firebaseDatabase.ref("users/" + user.uid).once('value').then(function (snapshot) {
        
        //자바스크립트 dom 선택자를 통해서 네비게이션 메뉴의 엘리먼트 변경해주기
        document.getElementById("loginmenu").textContent = "로그아웃";
        document.getElementById("loginmenu").href = "/logout.html";
        document.getElementById("joinmenu").textContent = "반가워요! " + snapshot.val().name + " 님";
        document.getElementById("joinmenu").href = "#";

        name = snapshot.val().name;   //유저 닉네임은 계속 쓸거기 때문에 전역변수로 할당
        loginUserKey = snapshot.key;  //로그인한 유저의 key도 계속 쓸 것이기 때문에 전역변수로 할당
        userInfo = snapshot.val(); //snapshot.val()에 user 테이블에 있는 해당 개체 정보가 넘어온다. userInfo에 대입!
        

        //alert(userInfo.userid);  //uid는 db에서 user 테이블의 각 개체들의 pk 인데, 이 값은 인증에서 생성된 아이디의 pk 값과 같다. *중요!

        return true
    });

    } else {
            $('#comment').val("로그인 하시면 사람들의 감사 리스트를 보실 수 있습니다. 로그인 해주실꺼죠^^?");
    return false
    }
});
}

출처 : https://mateeth.tistory.com/m/6


*/
function sessionCheck(){
    for (let i=0; i<=sessionStorage.length -1; i++){
        if (sessionStorage.key(i).includes('firebase:authUser') == true){
            var whatisUidinSession = JSON.parse(sessionStorage.getItem(sessionStorage.key(i))).uid;
            //세션값을 가져오는 메소드..를 JSON화해서 uid값을 가져온다. 클로저(?) 학습이 미흡해 var를 쓴다... 리팩토링 필요.
        }
    }
    
    if(whatisUidinSession !== undefined || null){
        alert("본인인증 완료상태입니다.");
    }else{
        alert("본인인증 실패상태입니다.");
        window.location.href='#' //링크 뒤에 #이 붙으면 인증되지 않은 상태
    }//개허접하지만 일단 세션값을 쭉 읽어내서 'firebase:authUser' 키값을 찾고 해당 value값이 있으면 인증된걸로 치자 하..
    //인증을 해서 갖다 쓰자. 인증 안되면 아무것도 못하게 하자. 함수로 만들어서 매 순간 끼워넣어야한다.
}

window.onload = sessionCheck(); //auth.js를 로딩한 모든 페이지는 로그인 여부부터 확인하게 된다.