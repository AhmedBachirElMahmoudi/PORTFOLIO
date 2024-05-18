const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        spans.forEach((span, index) => {
            const percentage = percentages[index];
            if (entry.isIntersecting) {
                span.classList.add('animate');
                percentage.classList.add('animate');
            } else {
                span.classList.remove('animate');
                percentage.classList.remove('animate');
            }
        });
    });
});

const skillContainer = document.querySelector('.skills-container');
const spans = document.querySelectorAll('.bar span');
const percentages = document.querySelectorAll('.percentage');
observer.observe(skillContainer);

function updatePercentagePositions() {
    const barWidth = document.querySelector('.bar').clientWidth;
    percentages.forEach(percentage => {
        const widthPercentage = parseFloat(percentage.textContent) / 100;
        percentage.style.left = `${barWidth * widthPercentage - 12.5}px`;
    });
}

updatePercentagePositions();



$(document).ready(function(){
    $('#communication-progress').circleProgress({
        value: 0.8, // Change this value to set the progress
        size: 100,
        fill: { color: '#1abc9c' },
        emptyFill: '#f2f2f2',
        startAngle: -Math.PI / 4 * 2,
        thickness: 10
    }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').text((stepValue * 100).toFixed(0) + '%');
        $(this).find('p').text((stepValue * 100).toFixed(0) + '%');
    });

    $('#emotional-intelligence-progress').circleProgress({
        value: 0.7,
        size: 100,
        fill: { color: '#3498db' },
        emptyFill: '#f2f2f2',
        startAngle: -Math.PI / 4 * 2,
        thickness: 10
    }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').text((stepValue * 100).toFixed(0) + '%');
        $(this).find('p').text((stepValue * 100).toFixed(0) + '%');
    });

    $('#adaptability-progress').circleProgress({
        value: 0.6,
        size: 100,
        fill: { color: '#e74c3c' },
        emptyFill: '#f2f2f2',
        startAngle: -Math.PI / 4 * 2,
        thickness: 10
    }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').text((stepValue * 100).toFixed(0) + '%');
        $(this).find('p').text((stepValue * 100).toFixed(0) + '%');
    });

    $('#problem-solving-progress').circleProgress({
        value: 0.9,
        size: 100,
        fill: { color: '#f39c12' },
        emptyFill: '#f2f2f2',
        startAngle: -Math.PI / 4 * 2,
        thickness: 10
    }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').text((stepValue * 100).toFixed(0) + '%');
        $(this).find('p').text((stepValue * 100).toFixed(0) + '%');
    });
});
