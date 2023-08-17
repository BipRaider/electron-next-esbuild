import path from 'node:path';
import { BrowserWindow, app, ipcMain, shell } from 'electron';
import serve from 'electron-serve';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import isDev from 'electron-is-dev';

import { createWindow } from './helpers';

class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    void this.init();
  }

  init = async () => {
    await autoUpdater.checkForUpdatesAndNotify();
  };
}

if (!isDev) {
  serve({ directory: __dirname });
}
if (isDev) {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

const init = async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
    minHeight: 600,
    minWidth: 1000,
    // frame: false,
    // autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      preload: path.resolve(__dirname, 'preload.js'),
    },
  });

  if (isDev) {
    await mainWindow.loadURL(`http://localhost:3000`);
    mainWindow.webContents.openDevTools();
  } else {
    await mainWindow.loadURL('app:// ./index.html');
  }

  ipcMain.handle('update-title', (_e, arg: string) => {
    mainWindow.setTitle(`Electron App: ${arg}`);
  });

  ipcMain.handle('open-external', async (_e, arg: string) => {
    await shell.openExternal(arg);
  });
};

app.on('ready', async () => {
  new AppUpdater();
  await init();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('second-instance', () => {
  console.dir('-->>: second-instance');
});

app.on('activate', () => {
  const t = BrowserWindow.getAllWindows();
  console.log('-->>: activate', t);
});
