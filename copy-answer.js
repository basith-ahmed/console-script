// 1: Custom div class
function copyDivText(divSelector) {
    const div = document.querySelector(divSelector);
    const text = div ? div.innerText : '';
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    console.log('Text copied to clipboard:', text);
}

copyDivText('.ace_copy');

// 2: Pre defined div class
function copyDivText(divSelector) {
    const div = document.querySelector(divSelector);
    const text = div ? div.innerText : '';
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    console.log('Text copied to clipboard:', text);
}

copyDivText('.ace_text-layer');

// 3: Updated pre defined div class
function copyDivText(divSelector) {
    const divs = document.querySelectorAll(divSelector);
    const div = divs[1];
    const text = div ? div.innerText : '';
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    console.log('Text copied to clipboard:', text);
}

copyDivText('.ace_text-layer');
