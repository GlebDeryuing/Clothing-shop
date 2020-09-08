let right_block = document.getElementsByClassName('left-block')[0];
right_block.style.right = document.documentElement.clientWidth * 0.05 + 'px';

let content_header = document.getElementsByClassName('content')[0];
let main_block = document.getElementsByTagName('main')[0];
let onScroll_flag = false;

window.addEventListener('scroll', function() {

    if (pageYOffset > 800 && !onScroll_flag) {
        content_header.style.width = document.documentElement.clientWidth;
        content_header.id = "onScroll_content";
        main_block.style.padding = content_header.offsetHeight + 'px 0 0 0';
        onScroll_flag = true;
        content_header.style.top = "-60px";
    } else if (pageYOffset > 800 && onScroll_flag) {
        content_header.style.top = "0";
    } else if (pageYOffset < 800 && onScroll_flag) {
        content_header.style.top = "-60px";
        setTimeout(() => {
            content_header.id = " ";
            main_block.style.padding = 0;
        }, 200);

        onScroll_flag = false;
    }
});