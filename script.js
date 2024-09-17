const labels = document.querySelectorAll('.form-control label')

labels.forEach(Label => {
    Label.innerHTML = Label.innerText
        .split('')
        .map((Letter, idx) => `<span style="transition-delay:${idx * 50}ms">${Letter}</span>`)
        .join('')
})
const fadeOut= () => {
    const loaderWrapper =
    document.querySelector('.wrapper');
    loaderWrapper.classList.add('fade');
}

window.addEventListener('load',fadeOut);