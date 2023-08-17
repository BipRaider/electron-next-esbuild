import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('myAPI', {
  updateTitle: async (arg: number): Promise<void> => {
    void ipcRenderer.invoke('update-title', arg);
  },
  openExternal: async (arg: string): Promise<void> => {
    void ipcRenderer.invoke('open-external', arg);
  },
});
