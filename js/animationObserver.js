/**
 * for adding the fade in animation on the sections for a bit of interactive feeling
 */
let observer = new IntersectionObserver((entries, observer) =>{
    entries.filter(e => e.isIntersecting).forEach(entry =>{
        entry.target.classList.add("scrolled");
        observer.unobserve(entry.target)
        console.log(entry.target + " animated")
    });

});


document.querySelectorAll('section').forEach(e => {
    observer.observe(e)
});