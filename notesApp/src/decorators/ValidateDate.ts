export function ValidateDate(target: any, key: string) {
    let val = target[key];

    const getter = function () {
        return val;
    };

    const setter = function (newVal: Date) {
        if (newVal instanceof Date && !isNaN(newVal.getTime())) {
            val = newVal;
        } else {
            throw new Error(`Property ${key} must be a valid Date`);
        }
    };

    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
}


