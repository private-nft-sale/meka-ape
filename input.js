document.querySelector('.minus').addEventListener('click', () => {
    const input = document.querySelector('.input');
    let count = parseInt(input.value) - 1;
    count = count < 1 ? 1 : count;
    input.value = count;
    return false;
});
document.querySelector('.plus').addEventListener('click', () => {
    const input = document.querySelector('.input');
    let count = parseInt(input.value) + 1;
    count = count > 5 ? 5 : count;
    input.value = count;
    return false;
});