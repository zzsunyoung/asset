 // 여러 datepicker 초기화
 $(document).ready(function(){
    // .datepicker 클래스를 가진 모든 input에 대해 datepicker 초기화
    $(".datepicker").datepicker({
        dateFormat: "yy-mm-dd",  // 날짜 형식
        onClose: function(selectedDate) {
            console.log("선택된 날짜:", selectedDate);  // 선택된 날짜 로그 출력
        }
    });
    // 버튼 클릭 시 datepicker 열기 (옵션)
    $(".btn-cal").click(function() {
        $(this).prev(".datepicker").datepicker("show");
    });
});



// 모달 관련 요소들
var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");

// 버튼 클릭 시 모달 열기
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// 닫기 버튼 클릭 시 모달 닫기
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// 모달 외부를 클릭하면 모달 닫기 (배경 클릭 시)
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}