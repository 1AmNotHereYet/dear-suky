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

function displayAdjectives() {
    const adjectiveTag = document.getElementById('adjective');
    let index = 0;

    function updateAdjective() {
        if (index < adjectives.length) {
            adjectiveTag.textContent = adjectives[index];
            index++;

            setTimeout(updateAdjective, 1000);
        }
    }

    updateAdjective();
}

document.body.addEventListener('click', function() {

    const stack1 = document.getElementById('stack-1');
    const stack2 = document.getElementById('stack-2');
    
    stack1.style.opacity = 0;

    setTimeout(function() {
        stack2.style.opacity = 1;
        displayAdjectives();
    }, 500);
});
