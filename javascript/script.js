jQuery(document).ready(function(){
    // .navi 의 li 태그에 mouseover 이벤트 설정
    $('.navi > li').mouseover(function(){
        // $(this) : 현재 선택된 태그(요소)
        // find('.submenu') : 선택된 태그의 자식 태그 중 .submenu와 일치하는
        // 태그를 찾아서 반환함. 만약에, children()를 사용할 경우 직계 자식
        // 태그를 반환함
        // stop() : 현재 동작하고 있는 애니메이션 동작을 즉시 중단함
        // slideDown(), slideUp() : jQuery 라이브러리에서 제공하는 함수로
        // 슬라이딩 애니메이션과 함께 보여주거나 숨김 구현함. 선택한 요소의
        // height값을 낮추거나 높혀가며 슬라이드 업 또는 다운 전환되게 함.
        // 매개변수값(인수) 500은 0.5초를 의미함
        $(this).find('.submenu').stop().fadeIn(400);
    }).mouseout(function(){
        $(this).find('.submenu').stop().fadeOut(400);
    });

// .imgslide a:gt(0) : gt(index)은 index 값보다 더 큰 값(Greater)을
// 가진 요소를 선택함. 0번째부터 계수하여 index 값보다 큰 값을 가져옴.
// 여기서는 gt(0)이므로 1, 2, 3이 됨.
    $('.imgslide a:gt(0)').hide();
    // setInterval(function(){}), 3000 : 일정시간마다 반복적으로
    // 동작을 실행하게 함. 3000은 3000ms(3초)는 3초마다 반복 실행함.
     setInterval(function(){
        // 가상클래스 선택자로 부모 요소가 가지고 있는 자식 요소 중 첫번째를
        // 선택함. imgslide의 자식요소 <a>태그에서 첫번째 선택하여
        // 페이드아웃을 실행함.
        $('.imgslide a:first-child').fadeOut()
        // 다음 태그를 선택하여 페이드인 실행함
        .next('a').fadeIn()
        // end() 메서드로 끝에다 appendTo() 함수 내용을 붙여줌
        // 즉, 선택한 태그를 .imgslide 선택자 요소의 자식 요소로 추가해줌
        .end().appendTo('.imgslide');}, 2500);


    
});