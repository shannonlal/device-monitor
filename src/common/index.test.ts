import { setRuntimeEnvironment, getRuntimeEnvironment, RuntimeEnvironment } from './index';

describe('RuntimeEnvironment', () => {
    test('should verify RuntimeEnvironment enum exists', () => {
        expect(RuntimeEnvironment).toBeDefined();
        expect(RuntimeEnvironment.WEB).toBeDefined();
        expect(RuntimeEnvironment.ANDROID).toBeDefined();
        expect(RuntimeEnvironment.IOS).toBeDefined();
    });
});

describe('setRuntimeEnvironment', () => {
    test('should verify setRuntimeEnvironment function exists', () => {
        expect(setRuntimeEnvironment).toBeDefined();
    });

    test('should verify setRuntimeEnvironment function updates env', () => {
        setRuntimeEnvironment(RuntimeEnvironment.ANDROID);
        const env = getRuntimeEnvironment();
        expect(env).toEqual(RuntimeEnvironment.ANDROID);
    });
});

describe('getEnvironment', () => {
    test('should verify getEnvironment function exists', () => {
        expect(getRuntimeEnvironment).toBeDefined();
    });

    test('should verify getEnvironment function returns env', () => {
        setRuntimeEnvironment(RuntimeEnvironment.IOS);
        const env = getRuntimeEnvironment();
        expect(env).toEqual(RuntimeEnvironment.IOS);
    });
});
