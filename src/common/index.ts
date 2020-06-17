/**
 * The following are common environment variables and functions
 */

export enum RuntimeEnvironment {
    WEB,
    ANDROID,
    IOS,
}
export const WEB_ENV = [RuntimeEnvironment.WEB];
// const MOBILE_ENV = [RuntimeEnvironment.ANDROID, RuntimeEnvironment.IOS];

// Set default
let RUNTIME_ENV = RuntimeEnvironment.WEB;

/**
 *
 * @param env
 */
export const setRuntimeEnvironment = (env: RuntimeEnvironment): void => {
    RUNTIME_ENV = env;
};
/**
 * This function will return the appropriate environemnt that this is operating in
 */
export const getRuntimeEnvironment = (): RuntimeEnvironment => {
    return RUNTIME_ENV;
};

export enum Environment {
    TEST,
    PROD,
}

let ENV = Environment.PROD;

export const getEnvironment = (): Environment => ENV;

export const setEnvironment = (env: Environment): void => {
    ENV = env;
};
