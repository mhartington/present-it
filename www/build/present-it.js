/*! Built with http://stenciljs.com */
(function(win, doc, namespace, fsNamespace, resourcesUrl, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components) {

function init(win, doc, namespace, fsNamespace, resourcesUrl, appCore, appCorePolyfilled, hydratedCssClass, components, x, y, scriptElm) {
    // create global namespace if it doesn't already exist
    (win[namespace] = win[namespace] || {}).components = components;
    if (!win.customElements) {
        // temporary customElements polyfill only for "whenDefined"
        // this is incase customElements.whenDefined('my-tag') is
        // used before the polyfill is downloaded
        win.$whenDefined = [];
        win.customElements = {
            whenDefined: function (tag) {
                return {
                    then: function (cb) {
                        win.$whenDefined.push([tag, cb]);
                    }
                };
            }
        };
    }
    y = components.filter(function (c) { return c[2]; }).map(function (c) { return c[0]; });
    if (y.length) {
        // auto hide components until they been fully hydrated
        // reusing the "x" and "i" variables from the args for funzies
        x = doc.createElement('style');
        x.innerHTML = y.join() + '{visibility:hidden}.' + hydratedCssClass + '{visibility:inherit}';
        x.setAttribute('data-styles', '');
        doc.head.insertBefore(x, doc.head.firstChild);
    }
    // figure out the script element for this current script
    y = doc.querySelectorAll('script');
    for (x = y.length - 1; x >= 0; x--) {
        scriptElm = y[x];
        if (scriptElm.src || scriptElm.hasAttribute('data-resources-url')) {
            break;
        }
    }
    // get the resource path attribute on this script element
    y = scriptElm.getAttribute('data-resources-url');
    if (y) {
        // the script element has a data-resources-url attribute, always use that
        resourcesUrl = y;
    }
    if (!resourcesUrl && scriptElm.src) {
        // we don't have an exact resourcesUrl, so let's
        // figure it out relative to this script's src and app's filesystem namespace
        y = scriptElm.src.split('/').slice(0, -1);
        resourcesUrl = (y.join('/')) + (y.length ? '/' : '') + fsNamespace + '/';
    }
    // request the core this browser needs
    // test for native support of custom elements and fetch
    // if either of those are not supported, then use the core w/ polyfills
    // also check if the page was build with ssr or not
    x = doc.createElement('script');
    if (usePolyfills(win, win.location, x, 'import("")')) {
        x.src = resourcesUrl + appCorePolyfilled;
    }
    else {
        x.src = resourcesUrl + appCore;
        x.setAttribute('type', 'module');
        x.setAttribute('crossorigin', true);
    }
    x.setAttribute('data-resources-url', resourcesUrl);
    x.setAttribute('data-namespace', fsNamespace);
    doc.head.appendChild(x);
}
function usePolyfills(win, location, scriptElm, dynamicImportTest) {
    // fyi, dev mode has verbose if/return statements
    // but it minifies to a nice 'lil one-liner ;)
    if (location.search.indexOf('core=esm') > 0) {
        // force es2015 build
        return false;
    }
    if ((location.search.indexOf('core=es5') > 0) ||
        (location.protocol === 'file:') ||
        // Need to look for define specifically because we polyfill customElements
        // above to support whenDefined.
        (!(win.customElements && win.customElements.define)) ||
        (!win.fetch) ||
        (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) ||
        (!('noModule' in scriptElm))) {
        // force es5 build w/ polyfills
        return true;
    }
    return doesNotSupportsDynamicImports(dynamicImportTest);
}
function doesNotSupportsDynamicImports(dynamicImportTest) {
    try {
        new Function(dynamicImportTest);
        return false;
    }
    catch (e) { }
    return true;
}


init(win, doc, namespace, fsNamespace, resourcesUrl, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components);

})(window, document, "PresentIt","present-it",0,"present-it.core.js","es5-build-disabled.js","hydrated",[["present-code","present-code",1,[["el",7],["lang",1,0,1,2]],1],["present-deck","present-deck",1,[["activeIndex",5],["backgroundColor",5],["backgroundImage",5],["deck",7],["showCount",1,0,"show-count",1],["showProgress",1,0,"show-progress",1]],0,[["slideDidChange","slideDidChangeHandler"],["window:keydown.right","next"],["window:keydown.left","prev"],["window:keyup","fullScreen"]]],["present-fragment","present-fragment",1,[["active",1,1,1,3]]],["present-md","present-md",1,[["el",7]],1],["present-slide","present-slide",1,[["active",1,1,1,3],["animation",1,0,1,1],["backgroundColor",1,0,"background-color",2],["backgroundImage",1,0,"background-image",2],["el",7]],0,[["window:keydown.right","onNext",0,0,1],["window:keydown.left","onPrev",0,0,1]]]]);