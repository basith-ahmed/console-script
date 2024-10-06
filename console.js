// copy and paste
document.addEventListener('copy', (event) => { event.stopPropagation(); }, true);
document.addEventListener('cut', (event) => { event.stopPropagation(); }, true);
document.addEventListener('paste', (event) => { event.stopPropagation(); }, true);

// switch tabs
Object.defineProperty(document, 'visibilityState', {value: 'visible', writable: false});
Object.defineProperty(document, 'hidden', {value: false, writable: false});

// full screen
Object.defineProperty(document, 'fullscreenElement', { get: () => null });
Object.defineProperty(document, 'fullscreenEnabled', { get: () => true });
Object.defineProperty(document, 'webkitFullscreenElement', { get: () => null });
Object.defineProperty(document, 'webkitIsFullScreen', { get: () => false });
