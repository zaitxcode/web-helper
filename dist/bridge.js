export function getNativeBridge() {
    if (typeof window !== "undefined" && window.AndroidHelper) {
        return window.AndroidHelper;
    }
    return null;
}
export function isAndroidBridgeAvailable() {
    return getNativeBridge() !== null;
}
