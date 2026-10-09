import { getNativeBridge, isAndroidBridgeAvailable } from "./bridge.js";
export { getNativeBridge, isAndroidBridgeAvailable };
export type { NativeAndroidHelperBridge } from "./bridge.js";
export declare const Network: {
    isConnected(): boolean;
    activeTransport(): string;
};
export declare const Vibration: {
    vibrate(ms?: number): void;
};
export declare const Clipboard: {
    copyText(text: string): void;
    getCopiedText(): string | null;
};
export declare const Audio: {
    playClickSound(): void;
};
export declare const Battery: {
    getBatteryLevel(): number;
    isCharging(): boolean;
};
export declare const Device: {
    getDeviceName(): string;
    isDarkMode(): boolean;
};
export declare const Encryption: {
    sha256(text: string): string;
    base64Encode(text: string): string;
    base64Decode(encodedText: string): string;
};
export declare const Storage: {
    formatBytes(bytes: number): string;
};
//# sourceMappingURL=index.d.ts.map