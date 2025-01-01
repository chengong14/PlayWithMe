// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 点赞功能
document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', function() {
        const span = this.querySelector('span');
        let likes = parseInt(span.textContent);
        span.textContent = likes + 1;
        this.style.color = '#fd79a8';
    });
});

// 社交分享功能
document.querySelectorAll('.share-button').forEach(button => {
    button.addEventListener('click', function() {
        const text = encodeURIComponent('Come play this amazing game with me! #PlayWithMe #MultipleEndings #Surprise');
        const url = encodeURIComponent(window.location.href);
        
        let shareUrl = '';
        if (this.classList.contains('twitter')) {
            shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        } else if (this.classList.contains('facebook')) {
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        } else if (this.classList.contains('reddit')) {
            shareUrl = `https://reddit.com/submit?url=${url}&title=${text}`;
        }
        
        window.open(shareUrl, '_blank');
    });
});

// 导航栏滚动效果
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 80) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// 游戏框架响应式调整
function adjustGameFrame() {
    const frame = document.querySelector('.game-frame');
    if (frame) {
        const width = frame.offsetWidth;
        frame.style.height = `${width * 9 / 16}px`;
    }
}

window.addEventListener('load', adjustGameFrame);
window.addEventListener('resize', adjustGameFrame);

// 页面加载动画
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
}); 