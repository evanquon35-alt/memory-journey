const sections = document.querySelectorAll(".memory");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    });
},{
    threshold:0.15
});

sections.forEach(section => {
    observer.observe(section);
});
