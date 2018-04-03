/*! Built with http://stenciljs.com */
const { h } = window.PresentIt;

function trimCode(snippet) {
    var content = trimLineBreaks(snippet);
    var lines = content.split('\n');
    var pad = lines.reduce(function (acc, line) {
        if (line.length > 0 &&
            trimLeft(line).length > 0 &&
            acc > line.length - trimLeft(line).length) {
            return line.length - trimLeft(line).length;
        }
        return acc;
    }, Number.POSITIVE_INFINITY);
    // Slice each line with this amount
    return lines
        .map(function (line) {
        return line.slice(pad);
    })
        .join('\n');
}
function trimLeft(val) {
    return val.replace(/^[\s\uFEFF\xA0]+/g, '');
}
function trimLineBreaks(input) {
    var lines = input.split('\n');
    // Trim line-breaks from the beginning
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].trim() === '') {
            lines.splice(i--, 1);
        }
        else
            break;
    }
    // Trim line-breaks from the end
    for (var i = lines.length - 1; i >= 0; i--) {
        if (lines[i].trim() === '') {
            lines.splice(i, 1);
        }
        else
            break;
    }
    return lines.join('\n');
}
function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    let cleanedHex = hex.replace(shorthandRegex, (r, g, b) => r + r + g + g + b + b);
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(cleanedHex);
    if (result) {
        return [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
        ];
    }
    return null;
}
function isLightColor(rgb) {
    let o = Math.round((rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000);
    if (o > 125) {
        return true;
    }
    else {
        return false;
    }
}

export { trimCode, isLightColor, hexToRgb };
