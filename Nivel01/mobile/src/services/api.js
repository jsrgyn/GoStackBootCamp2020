import axios from "axios";

/**
 * iOS com Emulador: localhost
 * iOS com físico: IP da máquina
 * Android com Emulador: localhost (adb reverse)
 * adb reverse tcp:3333 tcp:3333
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Fonte: https://stackoverflow.com/questions/6760585/accessing-localhostport-from-android-emulator
 * Android com outro Emulador: 10.0.3.2. (Genymotion)
 * Android com físico: Ip da máquina
 */

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;
