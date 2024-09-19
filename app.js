const adjectives = [
    'Amazing.',
    'Beautiful.',
    'Radiant.',
    'Lovely.',
    'Elegant.',
    'Adorable.',
    'Magical.',
    'Serene.',
    'Gorgeous.', 
    'Breathtaking.',
    'Graceful.',
    'Luminous.',
    'Gentle.',
    'Caring.',
    'Sweet.',
    'Heartwarming.',
    'Consistent.',
    'Kind.',
    'Soothing.',
    'Cute.',
    'Patient.',
    'Sincere.'
];

function displayAdjectives(callback) {
    const adjectiveTag = document.getElementById('adjective');
    let index = 0;

    function updateAdjective() {
        if (index < adjectives.length) {
            adjectiveTag.textContent = adjectives[index];
            index++;

            setTimeout(updateAdjective, 1000);
        } else {
            if (callback) callback();
        }
    }

    updateAdjective();
}

function createHearts() {
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        heart.innerText = '❤️';
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);
}

document.body.addEventListener('click', function() {
    
    document.body.style.pointerEvents = 'none';

    const stack1 = document.getElementById('stack-1');
    const stack2 = document.getElementById('stack-2');
    const stack3 = document.getElementById('stack-3');
    const prompt = document.querySelector('.prompt');

    prompt.classList.remove('blink');

    stack1.style.opacity = 0;
    prompt.style.opacity = 0;

    setTimeout(function() {
        stack2.style.opacity = 1;

        displayAdjectives(function() {
            setTimeout(function() {
                stack2.style.opacity = 0;

                setTimeout(function() {
                    stack3.style.opacity = 1;
                    createHearts();
                }, 500);
            }, 500);
        });
    }, 500);
});