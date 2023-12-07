const spans = document.querySelectorAll('.Progress-bar span');


spans.forEach(span => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
});