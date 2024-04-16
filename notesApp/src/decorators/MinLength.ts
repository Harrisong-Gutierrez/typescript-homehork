export function MinLength(minLength: number) {
    return function (target: any, key: string) {
        let val = target[key];

        // Getter
        const getter = function () {
            return val;
        };

        // Setter
        const setter = function (newVal: string) {
            if (newVal && newVal.length >= minLength) {
                val = newVal;
            } else {
                throw new Error(`Property ${key} must have at least ${minLength} characters`);
            }
        };

        // Re-definir la propiedad
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}