var quests = document.querySelectorAll('.faq__toggle');

quests.forEach(quest => {
    // quest.parentNode.classList.remove('on')
    quest.addEventListener('click', (e)=>{
        e.target.parentNode.parentNode.classList.toggle('on');
        console.log('c;ickd')
    })
});


