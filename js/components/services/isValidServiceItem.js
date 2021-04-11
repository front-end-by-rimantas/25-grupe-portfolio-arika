function isValidServiceItem(service) {
    if (typeof service !== 'object' ||
        Array.isArray(service)) {
        console.warn('ERROR: service yra netinkamo tipo');
        return false;
    }
    if (service.title === undefined) {
        console.warn('ERROR: neduota title reiksme');
        return false;
    } else if (typeof service.title !== 'string' ||
        service.title === '') {
        console.warn('ERROR: title turi buti ne tuscias tekstas');
        return false;
    }

    if (service.description === undefined) {
        console.warn('ERROR: neduota description reiksme');
        return false;
    } else if (typeof service.description !== 'string' ||
        service.description === '') {
        console.warn('ERROR: description turi buti ne tuscias tekstas');
        return false;
    }

    if (service.link === undefined) {
        console.warn('ERROR: neduota link reiksme');
        return false;
    } else if (typeof service.link !== 'string' ||
        service.link === '') {
        console.warn('ERROR: link turi buti ne tuscias tekstas');
        return false;
    }

    if (service.active === undefined) {
        console.warn('ERROR: neduota active reiksme');
        return false;
    } else if (typeof service.active !== 'boolean') {
        console.warn('ERROR: active netinkamo tipo (turi buti boolean)');
        return false;
    }

    return true;
}

export { isValidServiceItem }