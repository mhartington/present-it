/*! Built with http://stenciljs.com */
PresentIt.loadBundle("./chunk2.js", ["exports"], function (n) { function e(n) { return n.replace(/^[\s\uFEFF\xA0]+/g, ""); } window.PresentIt.h, n.trimCode = function (n) { var t = function (e) { for (var t = n.split("\n"), r = 0; r < t.length && "" === t[r].trim(); r++)
    t.splice(r--, 1); for (r = t.length - 1; r >= 0 && "" === t[r].trim(); r--)
    t.splice(r, 1); return t.join("\n"); }().split("\n"), r = t.reduce(function (n, t) { return t.length > 0 && e(t).length > 0 && n > t.length - e(t).length ? t.length - e(t).length : n; }, Number.POSITIVE_INFINITY); return t.map(function (n) { return n.slice(r); }).join("\n"); }, n.isLightColor = function (n) { return Math.round((299 * parseInt(n[0]) + 587 * parseInt(n[1]) + 114 * parseInt(n[2])) / 1e3) > 125; }, n.hexToRgb = function (n) { var e = n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (n, e, t) { return n + n + e + e + t + t; }), t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e); return t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : null; }; });