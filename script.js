document.getElementById('daily').addEventListener('click', function() {
    updateContent('daily');
    setActiveButton(this);
});

document.getElementById('weekly').addEventListener('click', function() {
    updateContent('weekly');
    setActiveButton(this);
});

document.getElementById('monthly').addEventListener('click', function() {
    updateContent('monthly');
    setActiveButton(this);
});

function updateContent(period) {
    const work1 = document.querySelector('.work1');
    const work2 = document.querySelector('.work2');

    const play1 = document.querySelector('.play1');
    const play2 = document.querySelector('.play2');

    const study1 = document.querySelector('.study1');
    const study2 = document.querySelector('.study2');

    const exercise1 = document.querySelector('.exercise1');
    const exercise2 = document.querySelector('.exercise2');

    const social1 = document.querySelector('.social1');
    const social2 = document.querySelector('.social2');

    const selfcare1 = document.querySelector('.selfcare1');
    const selfcare2 = document.querySelector('.selfcare2');

    if (period === 'daily') {
        work1.textContent = '5hrs';
        work2.textContent = 'Yesterday - 7hr';

        play1.textContent = '1hrs';
        play2.textContent = 'Yesterday - 2hrs';

        study1.textContent = '0hrs';
        study2.textContent = 'Yesterday - 1hrs';

        exercise1.textContent = '1hrs';
        exercise2.textContent = 'Yesterday - 1hrs';

        social1.textContent = '1hrs';
        social2.textContent = 'Yesterday - 3hrs';

        selfcare1.textContent = '0hrs';
        selfcare2.textContent = 'Yesterday - 1hrs';


    } else if (period === 'weekly') {
        work1.textContent = '32hrs';
        work2.textContent = 'Last week - 36hrs';

        play1.textContent = '10hrs';
        play2.textContent = 'Last week - 8hrs';

        study1.textContent = '4hrs';
        study2.textContent = 'Last week - 7hrs';

        exercise1.textContent = '4hrs';
        exercise2.textContent = 'Last week - 5hrs';

        social1.textContent = '5hrs';
        social2.textContent = 'Last week - 10hrs';

        selfcare1.textContent = '2hrs';
        selfcare2.textContent = 'Last week - 2hrs';

    } else if (period === 'monthly') {
        work1.textContent = '103hrs';
        work2.textContent = 'Last month - 128hrs';

        play1.textContent = '23hrs';
        play2.textContent = 'Last month - 29hrs';

        study1.textContent = '13hrs';
        study2.textContent = 'Last month - 19hrs';

        exercise1.textContent = '11hrs';
        exercise2.textContent = 'Last month - 18hrs';

        social1.textContent = '21hrs';
        social2.textContent = 'Last month - 23hrs';

        selfcare1.textContent = '7hrs';
        selfcare2.textContent = 'Last month - 11hrs';
    }
}

function setActiveButton(activeButton) {
    const buttons = document.querySelectorAll('.time-interval button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}
