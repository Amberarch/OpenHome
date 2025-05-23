import * as E from 'fp-ts/lib/Either'
import BackendInterface, { BackendListeners } from './backendInterface'

const DummyBackend: BackendInterface = {
  /* past gen identifier lookups */
  loadGen12Lookup: async () => E.left('no backend in use'),
  loadGen345Lookup: async () => E.left('no backend in use'),
  writeGen12Lookup: async () => E.left('no backend in use'),
  writeGen345Lookup: async () => E.left('no backend in use'),

  /* OHPKM management */
  loadHomeMonLookup: async () => E.left('no backend in use'),
  writeHomeMon: async () => E.left('no backend in use'),
  deleteHomeMons: async () => E.left('no backend in use'),

  /* openhome boxes */
  loadHomeBoxes: async () => E.left('no backend in use'),
  writeHomeBoxes: async () => E.left('no backend in use'),

  /* game saves */
  loadSaveFile: async () => E.left('no backend in use'),
  writeSaveFile: async () => E.left('no backend in use'),

  /* game save management */
  getRecentSaves: async () => E.left('no backend in use'),
  addRecentSave: async () => E.left('no backend in use'),
  removeRecentSave: async () => E.left('no backend in use'),
  findSuggestedSaves: async () => E.left('no backend in use'),
  getSaveFolders: async () => E.left('no backend in use'),
  removeSaveFolder: async () => E.left('no backend in use'),
  upsertSaveFolder: async () => E.left('no backend in use'),

  /* transactions */
  startTransaction: async () => E.left('no backend in use'),
  commitTransaction: async () => E.left('no backend in use'),
  rollbackTransaction: async () => E.left('no backend in use'),

  /* application */
  pickFile: async () => E.left('no backend in use'),
  pickFolder: async () => E.left('no backend in use'),
  getResourcesPath: async () => '',
  openDirectory: async () => E.left('no backend in use'),
  getPlatform: () => 'none',
  registerListeners: (_: Partial<BackendListeners>) => () => {},
  getState: async () => E.left('no backend in use'),
  getSettings: async () => E.left('no backend in use'),
  updateSettings: async () => E.left('no backend in use'),
  setTheme: async () => E.left('no backend in use'),
  saveLocalFile: async () => E.left('no backend in use'),
  emitMenuEvent: async () => null,

  /* plugins */
  getImageData: async () => E.left('no backend in use'),
  listInstalledPlugins: async () => E.left('no backend in use'),
  getPluginPath: async () => '',
  downloadPlugin: async () => E.left('no backend in use'),
  loadPluginCode: async () => E.left('no backend in use'),
  deletePlugin: async () => E.left('no backend in use'),
}

export default DummyBackend
