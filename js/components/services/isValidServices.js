function isValidServices(selector, data) {
    if (typeof selector !== 'string' ||
        selector === '') {
        console.log('ERROR: blogas selectorius');
        return false;
    }

    if (typeof data !== 'object' ||
        Array.isArray(data) ||
        !data.list ||
        !Array.isArray(data.list) ||
        data.list.length === 0) {
        console.log('ERROR: blogi data duomenys');
        return false;
    }

    if (typeof data.maxCount == 'number') {
        if (!isFinite(data.maxCount) ||
            data.maxCount < 1 ||
            data.maxCount % 1 !== 0) {
            console.log('ERROR: blogas maxCount');
            return false;
        }
    }

    return true;
}

export { isValidServices }