# @zaitxcode/web-helper

> Enterprise-grade web & Next.js utility library with native Android WebBridge & Web Standard fallbacks.

## Installation

```bash
npm install @zaitxcode/web-helper
```

## Usage in Next.js / React / JavaScript

```typescript
import { Network, Battery, Vibration, Encryption } from '@zaitxcode/web-helper';

// Works seamlessly both inside Android App (via WebBridge) and standard Web Browsers!
const isOnline = Network.isConnected();
const batteryLevel = Battery.getBatteryLevel();
Vibration.vibrate(200);
const sha256Hash = Encryption.sha256("MySecretKey");
```

## License

Apache-2.0 © ZaitXCode
