const toggles =document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

/*
1. select all the faq-toggle icon in the dom
2. loop through them all ( forEach )
3.add click event listener
4. toggle the active class on the parent node (.parentNode & classList.toggle() )


*/