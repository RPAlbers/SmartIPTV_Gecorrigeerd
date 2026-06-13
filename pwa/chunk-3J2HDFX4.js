import {
  Language,
  STORE_KEY,
  StorageMap,
  Theme,
  VideoPlayer
} from "./chunk-WLQZSEEB.js";
import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState
} from "./chunk-PZD5NHA7.js";
import {
  __async,
  __spreadValues,
  firstValueFrom,
  inject
} from "./chunk-L3GV7X4D.js";

// src/app/services/settings-store.service.ts
var DEFAULT_SETTINGS = {
  player: VideoPlayer.VideoJs,
  language: Language.ENGLISH,
  showCaptions: false,
  theme: Theme.LightTheme,
  mpvPlayerPath: "",
  vlcPlayerPath: "",
  remoteControl: false,
  remoteControlPort: 3e3,
  epgUrl: []
};
var SettingsStore = signalStore({ providedIn: "root" }, withState(DEFAULT_SETTINGS), withMethods((store, storage = inject(StorageMap)) => ({
  loadSettings() {
    return __async(this, null, function* () {
      const stored = yield firstValueFrom(storage.get(STORE_KEY.Settings));
      if (stored) {
        patchState(store, __spreadValues(__spreadValues({}, DEFAULT_SETTINGS), stored));
      }
    });
  },
  updateSettings(settings) {
    return __async(this, null, function* () {
      patchState(store, settings);
      yield firstValueFrom(storage.set(STORE_KEY.Settings, settings));
    });
  },
  getSettings() {
    return {
      player: store.player(),
      language: store.language(),
      showCaptions: store.showCaptions(),
      theme: store.theme(),
      mpvPlayerPath: store.mpvPlayerPath(),
      vlcPlayerPath: store.vlcPlayerPath(),
      remoteControl: store.remoteControl(),
      remoteControlPort: store.remoteControlPort(),
      epgUrl: store.epgUrl()
    };
  }
})), withHooks({
  onInit(store) {
    store.loadSettings();
  }
}));

export {
  SettingsStore
};
