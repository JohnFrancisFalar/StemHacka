const content = [
    { 
        type: 'video',
        src: 'STEMIntro.mp4',
        controls: true,
        autoplay: false,
        width: '100%',
        height: 'auto',
        caption: 'Introduction of STEM'
    },
    { 
        type: 'video',
        src: 'Engineering1.mp4',
        controls: true,
        autoplay: false,
        width: '100%',
        height: 'auto'
    },
]

const container = document.querySelector('.content');

content.forEach(item => {
    let element;

    if (item.type === 'image') {
        element = document.createElement('img');
        element.src = item.src;
        element.alt = item.alt || 'Image';
    }
    else if (item.type === 'video') {
        element = document.createElement('video');
        element.src = item.src;
        if (item.controls) element.setAttribute('controls', '');
        if (item.autoplay) element.setAttribute('autoplay', '');
    }
    element.style.width = item.width || '100%';
    element.style.height = item.height || 'auto';
    element.style.maxWidth = '100%';
    element.style.borderRadius = '8px';
    element.style.marginBottom = 'block  ';

    container.appendChild(element);
});