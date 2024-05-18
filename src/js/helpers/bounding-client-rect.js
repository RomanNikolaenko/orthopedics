function reportWindowSize() {
    const width = document.querySelector('html').getBoundingClientRect().width.toFixed(2);
    const height = document.querySelector('html').getBoundingClientRect().height.toFixed(2);
    
    document.documentElement.style.setProperty('--vw', `${width}px`);
    document.documentElement.style.setProperty('--vh', `${height}px`);
}

reportWindowSize();

window.onresize = reportWindowSize;