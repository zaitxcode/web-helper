import { getNativeBridge, isAndroidBridgeAvailable } from "./bridge.js";
export { getNativeBridge, isAndroidBridgeAvailable };
export const Network = {
    isConnected() {
        const bridge = getNativeBridge();
        if (bridge)
            return bridge.isConnected();
        return typeof navigator !== "undefined" ? navigator.onLine : true;
    },
    activeTransport() {
        const bridge = getNativeBridge();
        if (bridge)
            return bridge.activeTransport();
        return typeof navigator !== "undefined" && navigator.onLine ? "WIFI" : "NONE";
    }
};
export const Vibration = {
    vibrate(ms = 500) {
        const bridge = getNativeBridge();
        if (bridge) {
            bridge.vibrate(ms);
        }
        else if (typeof navigator !== "undefined" && navigator.vibrate) {
            navigator.vibrate(ms);
        }
    }
};
export const Clipboard = {
    copyText(text) {
        const bridge = getNativeBridge();
        if (bridge) {
            bridge.copyText(text);
        }
        else if (typeof navigator !== "undefined" && navigator.clipboard) {
            navigator.clipboard.writeText(text);
        }
    },
    getCopiedText() {
        const bridge = getNativeBridge();
        if (bridge)
            return bridge.getCopiedText();
        return null;
    }
};
export const Audio = {
    playClickSound() {
        const bridge = getNativeBridge();
        if (bridge)
            bridge.playClickSound();
    }
};
export const Battery = {
    getBatteryLevel() {
        const bridge = getNativeBridge();
        if (bridge)
            return bridge.getBatteryLevel();
        return 100;
    },
    isCharging() {
        const bridge = getNativeBridge();
        if (bridge)
            return bridge.isCharging();
        return false;
    }
};
export const Device = {
    getDeviceName() {
        const bridge = getNativeBridge();
        if (bridge)
            return bridge.getDeviceName();
        return typeof navigator !== "undefined" ? navigator.platform || "Web" : "Web";
    },
    isDarkMode() {
        const bridge = getNativeBridge();
        if (bridge)
            return bridge.isDarkMode();
        if (typeof window !== "undefined" && window.matchMedia) {
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return false;
    }
};
export const Encryption = {
    sha256(text) {
        const bridge = getNativeBridge();
        if (bridge)
            return bridge.sha256(text);
        return "";
    },
    base64Encode(text) {
        const bridge = getNativeBridge();
        if (bridge)
            return bridge.base64Encode(text);
        return typeof btoa !== "undefined" ? btoa(text) : "";
    },
    base64Decode(encodedText) {
        const bridge = getNativeBridge();
        if (bridge)
            return bridge.base64Decode(encodedText);
        return typeof atob !== "undefined" ? atob(encodedText) : "";
    }
};
export const Storage = {
    formatBytes(bytes) {
        const bridge = getNativeBridge();
        if (bridge)
            return bridge.formatBytes(bytes);
        if (bytes <= 0)
            return "0 B";
        const units = ["B", "KB", "MB", "GB", "TB"];
        const i = Math.floor(Math.log(bytes) / Math.log(1024));
        const val = bytes / Math.pow(1024, i);
        return `${val.toFixed(2)} ${units[i] || "B"}`;
    }
};
