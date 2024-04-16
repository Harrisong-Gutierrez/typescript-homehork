export function Required(target: any, key: string) {
    let val = target[key];

    // Getter
    const getter = function () {
        return val;
    };

    // Setter
    const setter = function (newVal: any) {
        if (newVal !== undefined && newVal !== null) {
            val = newVal;
        } else {
            throw new Error(`Property ${key} is required`);
        }
    };

    // Re-definir la propiedad
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
}