
export function MinLength(minLength: number) {
    return function (target: any, key: string) {
        let val = target[key];

        const getter = function () {
            return val;
        };

        const setter = function (newVal: string) {
            if (newVal && newVal.length >= minLength) {
                val = newVal;
            } else {
                throw new Error(`Property ${key} must have at least ${minLength} characters`);
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}
