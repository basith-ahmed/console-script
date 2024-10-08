(function() {
    Object.defineProperty(document, 'visibilityState', {
        get: () => 'visible',
        configurable: true
    });

    Object.defineProperty(document, 'hidden', {
        get: () => false,
        configurable: true
    });

    const originalAddEventListener = document.addEventListener;
    document.addEventListener = function(type, listener, options) {
        if (type === 'visibilitychange') {
            console.warn('Blocked attempt to add visibilitychange listener');
            return;
        }
        return originalAddEventListener.call(this, type, listener, options);
    };

    Object.defineProperty(document, 'fullscreenElement', {
        get: () => null,
        configurable: true
    });
    Object.defineProperty(document, 'fullscreenEnabled', {
        get: () => true,
        configurable: true
    });
    Object.defineProperty(document, 'webkitFullscreenElement', {
        get: () => null,
        configurable: true
    });
    Object.defineProperty(document, 'webkitIsFullScreen', {
        get: () => false,
        configurable: true
    });

    const originalRequestFullscreen = Element.prototype.requestFullscreen;
    Element.prototype.requestFullscreen = function(...args) {
        console.warn('Blocked attempt to enter fullscreen');
        return Promise.resolve();
    };

    const originalExitFullscreen = Document.prototype.exitFullscreen;
    Document.prototype.exitFullscreen = function(...args) {
        console.warn('Blocked attempt to exit fullscreen');
        return Promise.resolve();
    };

    document.addEventListener = (function(original) {
        return function(type, listener, options) {
            if (type === 'fullscreenchange' || type === 'webkitfullscreenchange') {
                console.warn(`Blocked attempt to add ${type} listener`);
                return;
            }
            return original.call(this, type, listener, options);
        };
    })(document.addEventListener);

    ['copy', 'cut', 'paste'].forEach(eventType => {
        document.addEventListener(eventType, (event) => {
            event.stopPropagation();
        }, true);
    });

    document.addEventListener = (function(original) {
        return function(type, listener, options) {
            if (['copy', 'cut', 'paste'].includes(type)) {
                console.warn(`Blocked attempt to add ${type} listener`);
                return;
            }
            return original.call(this, type, listener, options);
        };
    })(document.addEventListener);

    if (typeof document.visibilityState === 'undefined') {
        Object.defineProperty(document, 'visibilityState', {
            get: () => 'visible',
            configurable: true
        });
    }

    if (typeof document.hidden === 'undefined') {
        Object.defineProperty(document, 'hidden', {
            get: () => false,
            configurable: true
        });
    }

    const originalMutationObserver = window.MutationObserver;
    window.MutationObserver = function(callback) {
        console.warn('Blocked MutationObserver');
        return {
            observe: () => {},
            disconnect: () => {},
            takeRecords: () => []
        };
    };

    const originalIntersectionObserver = window.IntersectionObserver;
    window.IntersectionObserver = function(callback) {
        console.warn('Blocked IntersectionObserver');
        return {
            observe: () => {},
            disconnect: () => {}
        };
    };

    const originalRequestAnimationFrame = window.requestAnimationFrame;
    window.requestAnimationFrame = function(callback) {
        console.warn('Blocked requestAnimationFrame');
        return originalRequestAnimationFrame.call(window, callback);
    };

    console.log('Script loaded: Crack that PAT, all the best.');
})();
