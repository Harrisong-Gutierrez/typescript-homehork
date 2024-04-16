export function ValidateEmail(target: any, key: string) {
    let val = target[key];

    // Getter
    const getter = function () {
        return val;
    };

    // Setter
    const setter = function (newVal: string) {
        const emailRegex = /\S+@\S+\.\S+/;
        if (emailRegex.test(newVal)) {
            val = newVal;
        } else {
            throw new Error(`Invalid email format for property ${key}`);
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
