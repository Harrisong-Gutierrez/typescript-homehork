export function validateName(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const newName: string = args[0].name;
        if (newName.length < 5) {
            throw new Error("Name must be at least 5 characters long.");
        } else {
            return originalMethod.apply(this, args);
        }
    };

    return descriptor;
}
