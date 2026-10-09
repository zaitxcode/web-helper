"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Audio: () => Audio,
  Battery: () => Battery,
  Clipboard: () => Clipboard,
  Device: () => Device,
  Encryption: () => Encryption,
  Network: () => Network,
  Storage: () => Storage,
  Vibration: () => Vibration,
  getNativeBridge: () => getNativeBridge,
  isAndroidBridgeAvailable: () => isAndroidBridgeAvailable
});
module.exports = __toCommonJS(index_exports);

// src/bridge.ts
function getNativeBridge() {
  if (typeof window !== "undefined" && window.AndroidHelper) {
    return window.AndroidHelper;
  }
  return null;
}
function isAndroidBridgeAvailable() {
  return getNativeBridge() !== null;
}

// src/index.ts
var Network = {
  isConnected() {
    const bridge = getNativeBridge();
    if (bridge) return bridge.isConnected();
    return typeof navigator !== "undefined" ? navigator.onLine : true;
  },
  activeTransport() {
    const bridge = getNativeBridge();
    if (bridge) return bridge.activeTransport();
    return typeof navigator !== "undefined" && navigator.onLine ? "WIFI" : "NONE";
  }
};
var Vibration = {
  vibrate(ms = 500) {
    const bridge = getNativeBridge();
    if (bridge) {
      bridge.vibrate(ms);
    } else if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(ms);
    }
  }
};
var Clipboard = {
  copyText(text) {
    const bridge = getNativeBridge();
    if (bridge) {
      bridge.copyText(text);
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
  },
  getCopiedText() {
    const bridge = getNativeBridge();
    if (bridge) return bridge.getCopiedText();
    return null;
  }
};
var Audio = {
  playClickSound() {
    const bridge = getNativeBridge();
    if (bridge) bridge.playClickSound();
  }
};
var Battery = {
  getBatteryLevel() {
    const bridge = getNativeBridge();
    if (bridge) return bridge.getBatteryLevel();
    return 100;
  },
  isCharging() {
    const bridge = getNativeBridge();
    if (bridge) return bridge.isCharging();
    return false;
  }
};
var Device = {
  getDeviceName() {
    const bridge = getNativeBridge();
    if (bridge) return bridge.getDeviceName();
    return typeof navigator !== "undefined" ? navigator.platform || "Web" : "Web";
  },
  isDarkMode() {
    const bridge = getNativeBridge();
    if (bridge) return bridge.isDarkMode();
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  }
};
var Encryption = {
  sha256(text) {
    const bridge = getNativeBridge();
    if (bridge) return bridge.sha256(text);
    return "";
  },
  base64Encode(text) {
    const bridge = getNativeBridge();
    if (bridge) return bridge.base64Encode(text);
    return typeof btoa !== "undefined" ? btoa(text) : "";
  },
  base64Decode(encodedText) {
    const bridge = getNativeBridge();
    if (bridge) return bridge.base64Decode(encodedText);
    return typeof atob !== "undefined" ? atob(encodedText) : "";
  }
};
var Storage = {
  formatBytes(bytes) {
    const bridge = getNativeBridge();
    if (bridge) return bridge.formatBytes(bytes);
    if (bytes <= 0) return "0 B";
    const units = ["B", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    const val = bytes / Math.pow(1024, i);
    return `${val.toFixed(2)} ${units[i] || "B"}`;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Audio,
  Battery,
  Clipboard,
  Device,
  Encryption,
  Network,
  Storage,
  Vibration,
  getNativeBridge,
  isAndroidBridgeAvailable
});
