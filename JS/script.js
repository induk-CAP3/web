// Leaflet을 사용하여 지도를 표시하는 코드
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('나의 위치')
    .openPopup();
    
    // 지도 크기를 조정합니다.
map.invalidateSize();


//반응형 메뉴 햄버거 버튼
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbarToggle');
    const menu = document.getElementById('menu');

    navbarToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
        if (menu.classList.contains('active')) {
            navbarToggle.innerHTML = '&#10005;'; // x 모양으로 변경
        } else {
            navbarToggle.innerHTML = '&#9776;'; // 햄버거 모양으로 변경
        }
    });
});

