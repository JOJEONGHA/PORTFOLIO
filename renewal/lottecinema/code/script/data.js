// data storage
let data =
{
    "movie_amount": 17,  // The number of total movie
    "pop_menu": [
        {
            "name": "ticketing",
            "kor_name" : "예매",
            "menu": ["예매하기", "상영시간표", "확인안내"]
        }, {
            "name": "movies",
            "kor_name" : "영화",
            "menu": ["홈", "현재상영작", "상영예정작","아르떼","오페라"]
        }, {
            "name": "cinema",
            "kor_name" : "영화관",
            "menu": ["스페셜관", "경기/인천", "춘천/대전","전라/광주","경북/대구","경남/부산/울산"]
        },{
            "name": "event",
            "kor_name" : "이벤트",
            "menu": ["홈", "영화", "시사회/무대인사","HOT","제휴할인","우리동네영화관"]
        },{
            "name": "store",
            "kor_name" : "스토어",
            "menu": ["베스트", "관람권", "스낵음료","SALE"]
        },{
            "name": "vod",
            "kor_name" : "VOD",
            "menu": []
        },{
            "name": "vip",
            "kor_name" : "VIP",
            "menu": ["할인안내","포인트","브라보클럽","틴틴클럽","VIP"]
        }],
    "movie": [
        {
            "no": "0", "name": "지푸라기라도 잡고 싶은 짐승들",
            "info": "사라진 애인 때문에 사채 빚에 시달리며\
            한 탕을 꿈꾸는 태영. 아르바이트로 가족의 생계를 이어가는 가장 중만.과거를 지우고 새 인생을\
            살기 위해 남의 것을 탐하는 연희.라진 애인 때문에 사채 빚에 시달리며 한 탕을 꿈꾸는 태영.\
            아르바이트로 가족의 생계를 이어가는 가장 중만.과거를 지우고 새 인생을 살기 위해 남의 것을 \
            하는 연희.<br><br> 벼랑 끝에 몰린 그들 앞에 거액의 돈 가방이 나타나고." },
        {
            "no": "1", "name": "님은먼곳에",
            "info": "adbc2"
        },
        {
            "no": "2", "name": "그노목소리",
            "info": "adbc3"
        },
        {
            "no": "3", "name": "그노목소리",
            "info": "adbc3"
        },
        {
            "no": "4", "name": "그노목소리",
            "info": "adbc3"
        },
        {
            "no": "5", "name": "그노목소리",
            "info": "adbc3"
        },
        {
            "no": "6", "name": "그노목소리",
            "info": "adbc3"
        },
        {
            "no": "7", "name": "그노목소리",
            "info": "adbc3"
        },
        {
            "no": "8", "name": "그노목소리",
            "info": "adbc3"
        },
        {
            "no": "9", "name": "그노목소리",
            "info": "adbc3"
        },
        {
            "no": "10", "name": "그노목소리",
            "info": "adbc3"
        },
        {
            "no": "11", "name": "그노목소리",
            "info": "adbc3"
        },
        {
            "no": "12", "name": "그노목소리",
            "info": "adbc3"
        },
        {
            "no": "13", "name": "그노목소리",
            "info": "adbc3"
        },
        {
            "no": "14", "name": "그노목소리",
            "info": "adbc3"
        },
        {
            "no": "15", "name": "그노목소리",
            "info": "adbc3"
        },
        {
            "no": "16", "name": "그노목소리",
            "info": "adbc3"
        },
        {
            "no": "17", "name": "그노목소리",
            "info": "adbc3"
        },
    ]
}

jsonParsing(data);

// data load
let law_json = localStorage.getItem("data");
let obj = JSON.parse(law_json);

// json parsing operation
function jsonParsing(data) {
    let dataJSON = JSON.stringify(data);
    localStorage.setItem("data", dataJSON);
}