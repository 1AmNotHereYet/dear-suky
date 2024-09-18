document.body.addEventListener('click', function() {

    const stack1 = document.getElementById('stack-1');
    const stack2 = document.getElementById('stack-2');
    
    stack1.style.opacity = 0;

    setTimeout(function() {
        stack2.style.opacity = 1;
    }, 500);
});
