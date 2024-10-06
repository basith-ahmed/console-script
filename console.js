document.addEventListener('copy', (event) => { event.stopPropagation(); }, true);
document.addEventListener('cut', (event) => { event.stopPropagation(); }, true);
document.addEventListener('paste', (event) => { event.stopPropagation(); }, true);
Object.defineProperty(document, 'visibilityState', {value: 'visible', writable: false});
Object.defineProperty(document, 'hidden', {value: false, writable: false});
