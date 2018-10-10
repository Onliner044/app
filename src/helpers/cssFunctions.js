export const addClass = (el, className) => {
    el.className = className;
}

export const delClass = (el, className) => {
    /* ---- */
}

export const clearClass = (...elements) => {
    elements.forEach((el) => {
        el.className = '';
    })
}