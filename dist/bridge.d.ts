export interface NativeAndroidHelperBridge {
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
export declare function getNativeBridge(): NativeAndroidHelperBridge | null;
export declare function isAndroidBridgeAvailable(): boolean;
//# sourceMappingURL=bridge.d.ts.map