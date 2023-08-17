import { build } from 'electron-builder';

build({
  config: {
    appId: 'something.com',
    productName: 'electron next',
    copyright: 'Copyright © 2023 ${author}',
    publish: null,
    npmRebuild: true,
    appImage: {
      artifactName: '${name}-${version}.${ext}',
    },
    asar: true,
    asarUnpack: ['**/*.{node,dll}'],
    afterSign: 'resources/configs/notarize.js',
    artifactName: '${productName}-${version}-${platform}-${arch}.${ext}',
    // Where getting of files for build.
    files: [{ from: '.', filter: ['./apps', './package.json', '.env'] }],
    // There needs to put of the build application.
    directories: {
      output: 'release/${version}',
      buildResources: 'resources',
    },
    // Add something files into application
    // extraFiles: ['.env'],
    // Windows configuration
    win: {
      artifactName: '${productName}-Windows-${version}-Setup.${ext}',
      target: ['zip', 'nsis'],
      icon: 'resources/icon.ico',
    },
    // Config for the windows installer
    nsis: {
      artifactName: '${productName}-nsis-${version}-setup.${ext}',
      installerIcon: 'resources/icon.ico',
      shortcutName: '${productName}',
      uninstallDisplayName: '${productName}',
      createDesktopShortcut: 'always',
      oneClick: false,
      perMachine: false,
      allowToChangeInstallationDirectory: true,
      deleteAppDataOnUninstall: false,
    },
    // Mac OS configuration
    mac: {
      identity: null,
      artifactName: '${productName}-Mac-${version}-Installer.${ext}',
      entitlementsInherit: 'resources/entitlements.mac.plist',
      target: ['default'],
      icon: 'resources/icon.icns',
      extendInfo: [
        { NSCameraUsageDescription: "Application requests access to the device's camera." },
        { NSMicrophoneUsageDescription: "Application requests access to the device's microphone." },
        { NSDocumentsFolderUsageDescription: "Application requests access to the user's Documents folder." },
        { NSDownloadsFolderUsageDescription: "Application requests access to the user's Downloads folder." },
      ],
    },
    //  Linux configuration
    linux: {
      artifactName: '${productName}-Linux-${version}.${ext}',
      icon: 'resources/logo.ico',
      category: 'Development',
      maintainer: '${appId}',
      target: ['AppImage', 'deb', 'rpm', 'snap'],
    },
    // Config for OSX dmg
    dmg: {
      artifactName: '${productName}-dmg-${version}.${ext}',
      contents: [
        { x: 130, y: 220 },
        { x: 410, y: 220, type: 'link', path: '/Applications' },
      ],
    },
    deb: {
      depends: ['gconf2', 'gconf-service', 'libnotify4', 'libappindicator1', 'libxtst6', 'libnss3', 'libsecret-1-0'],
    },
  },
});
