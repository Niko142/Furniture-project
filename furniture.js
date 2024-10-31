const advantageElement = document.querySelectorAll('.advantage.col.p-0');
const lastClild = document.querySelector('.advantage.col.p-0:last-child');
const card = document.querySelector('.position-relative');

function clearMaxWidth() {
    return advantageElement.forEach(elem => elem.classList.remove('max'))
}

function addMaxWidth() {
    return advantageElement.forEach(elem => elem.classList.add('max'))
}

document.addEventListener('DOMContentLoaded', function() {

    function handleResize() {
        let width = document.documentElement.clientWidth;
        (width <= 1075) ? clearMaxWidth() : addMaxWidth();

        ((width >= 741 && width <= 1075) ? 
            (lastClild.style.justifyContent = 'center', lastClild.style.display = 'flex') : 
            (lastClild.style = '')
        );
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // вызываем функцию сразу после ее объявления
})