interface NativeAndroidHelperBridge {
    isConnected(): boolean;
    activeTransport(): string;
    vibrate(ms: number): void;
    playClickSound(): void;
    copyText(text: string): void;
    getCopiedText(): string | null;
    getBatteryLevel(): number;
    isCharging(): boolean;
    getDeviceName(): string;
    getManufacturer(): string;
    getModel(): string;
    isDarkMode(): boolean;
    isTablet(): boolean;
    isEmulator(): boolean;
    sha256(text: string): string;
    base64Encode(text: string): string;
    base64Decode(encodedText: string): string;
    isNativeEngineAvailable(): boolean;
    getPackageName(): string;
    getVersionName(): string;
    isAppInForeground(): boolean;
    canAuthenticateBiometric(): boolean;
    isValidEmail(email: string): boolean;
    getTimeAgo(millis: number): string;
    formatBytes(bytes: number): string;
}
declare global {
    interface Window {
        AndroidHelper?: NativeAndroidHelperBridge;
    }
}
declare function getNativeBridge(): NativeAndroidHelperBridge | null;
declare function isAndroidBridgeAvailable(): boolean;

declare const Network: {
    isConnected(): boolean;
    activeTransport(): string;
};
declare const Vibration: {
    vibrate(ms?: number): void;
};
declare const Clipboard: {
    copyText(text: string): void;
    getCopiedText(): string | null;
};
declare const Audio: {
    playClickSound(): void;
};
declare const Battery: {
    getBatteryLevel(): number;
    isCharging(): boolean;
};
declare const Device: {
    getDeviceName(): string;
    isDarkMode(): boolean;
};
declare const Encryption: {
    sha256(text: string): string;
    base64Encode(text: string): string;
    base64Decode(encodedText: string): string;
};
declare const Storage: {
    formatBytes(bytes: number): string;
};

export { Audio, Battery, Clipboard, Device, Encryption, type NativeAndroidHelperBridge, Network, Storage, Vibration, getNativeBridge, isAndroidBridgeAvailable };
