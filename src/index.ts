import { getNativeBridge, isAndroidBridgeAvailable } from "./bridge.js";

export { getNativeBridge, isAndroidBridgeAvailable };
export type { NativeAndroidHelperBridge } from "./bridge.js";

export const Network = {
  isConnected(): boolean {
    const bridge = getNativeBridge();
    if (bridge) return bridge.isConnected();
    return typeof navigator !== "undefined" ? navigator.onLine : true;
  },

  activeTransport(): string {
    const bridge = getNativeBridge();
    if (bridge) return bridge.activeTransport();
    return typeof navigator !== "undefined" && navigator.onLine ? "WIFI" : "NONE";
  }
};

export const Vibration = {
  vibrate(ms: number = 500): void {
    const bridge = getNativeBridge();
    if (bridge) {
      bridge.vibrate(ms);
    } else if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(ms);
    }
  }
};

export const Clipboard = {
  copyText(text: string): void {
    const bridge = getNativeBridge();
    if (bridge) {
      bridge.copyText(text);
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
  },

  getCopiedText(): string | null {
    const bridge = getNativeBridge();
    if (bridge) return bridge.getCopiedText();
    return null;
  }
};

export const Audio = {
  playClickSound(): void {
    const bridge = getNativeBridge();
    if (bridge) bridge.playClickSound();
  }
};

export const Battery = {
  getBatteryLevel(): number {
    const bridge = getNativeBridge();
    if (bridge) return bridge.getBatteryLevel();
    return 100;
  },

  isCharging(): boolean {
    const bridge = getNativeBridge();
    if (bridge) return bridge.isCharging();
    return false;
  }
};

export const Device = {
  getDeviceName(): string {
    const bridge = getNativeBridge();
    if (bridge) return bridge.getDeviceName();
    return typeof navigator !== "undefined" ? navigator.platform || "Web" : "Web";
  },

  isDarkMode(): boolean {
    const bridge = getNativeBridge();
    if (bridge) return bridge.isDarkMode();
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  }
};

export const Encryption = {
  sha256(text: string): string {
    const bridge = getNativeBridge();
    if (bridge) return bridge.sha256(text);
    return "";
  },

  base64Encode(text: string): string {
    const bridge = getNativeBridge();
    if (bridge) return bridge.base64Encode(text);
    return typeof btoa !== "undefined" ? btoa(text) : "";
  },

  base64Decode(encodedText: string): string {
    const bridge = getNativeBridge();
    if (bridge) return bridge.base64Decode(encodedText);
    return typeof atob !== "undefined" ? atob(encodedText) : "";
  }
};

export const Storage = {
  formatBytes(bytes: number): string {
    const bridge = getNativeBridge();
    if (bridge) return bridge.formatBytes(bytes);

    if (bytes <= 0) return "0 B";
    const units = ["B", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    const val = bytes / Math.pow(1024, i);
    return `${val.toFixed(2)} ${units[i] || "B"}`;
  }
};
