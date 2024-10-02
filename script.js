const containerPlayStation = document.querySelector('.play-station');
const containerXbox = document.querySelector('.xbox');

containerPlayStation.addEventListener('mouseenter', () => {
    containerPlayStation.style.width = '75%'
    containerXbox.style.width = '25%'
    containerPlayStation.style.transition = '1s'
})

containerXbox.addEventListener('mouseenter', () => {
    containerXbox.style.width = '75%'
    containerPlayStation.style.width = '25%'
    containerXbox.style.transition = '1s'
})