function isBrowserSupported() {
    // Simple example of browser and version check
    var ua = navigator.userAgent;
    var temp;
    var match = ua.match(/(chrome|safari|firefox|edge|opera|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(match[1])) {
        temp = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return { browser: 'IE', version: (temp[1] || '') };
    }
    if (match[1] === 'Chrome') {
        temp = ua.match(/\bOPR|Edge\/(\d+)/);
        if (temp != null) {
            return { browser: 'Opera', version: temp[1] };
        }
    }
    match = match[2] ? [match[1], match[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((temp = ua.match(/version\/(\d+)/i)) != null) {
        match.splice(1, 1, temp[1]);
    }
    return {
        browser: match[0],
        version: match[1]
    };
}

function checkBrowserCompatibility() {
    var browserInfo = isBrowserSupported();
    var browserName = browserInfo.browser;
    var browserVersion = parseInt(browserInfo.version);
    var unsupported = true;

    // Add your own conditions for unsupported browsers/versions
    if ((browserName === 'Chrome' && browserVersion > 95) ||
        (browserName === 'Firefox' && browserVersion > 98) ||
        (browserName === 'Safari' && browserVersion > 15.5) ||
        (browserName === 'Edge' && browserVersion > 95)) {
        unsupported = false;
    }

    return unsupported;
}

if (checkBrowserCompatibility()) {
    alert('Please update your browser to the latest version or use another one to see the page content. If you already see it, ignore this message.');
}
