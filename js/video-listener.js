document.querySelector('.video-btn').addEventListener('click', ()=> {
    document.querySelector('.video-container').classList.add('active');
    document.getElementById('shader').classList.add('active');
})
document.querySelector('.video-close').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.video-container').classList.remove('active')
    document.getElementById('shader').classList.remove('active');
    stopVideo();
})

function stopVideo() {
    $('video').trigger('pause');
    $('video').get(0).load();
}