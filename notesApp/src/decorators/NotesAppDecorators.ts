import { Log } from "../models/Log";


export function logAction(_target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
        const log = new Log(`Action: ${propertyName}`);
        console.log(`Logging action: ${log.action} at ${log.timestamp}`);
        const result = await originalMethod.apply(this, args);
        return result;
    };
}

