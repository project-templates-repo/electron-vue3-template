module.exports = {
  productName: "electron-vue3-template",
  appId: "com.electron.vue3ts",
  copyright: "Copyright © 2025",
  compression: "maximum",
  asar: true, // Compression of packaging format
  directories: {
    output: "release/${version}", // Package and output directory
    buildResources: "build",
  },
  files: ["dist/**/*", "dist/main/**/*", "dist/preload/**/*"],

  win: {
    icon: "assets/icons/win/app.ico",
    target: [
      {
        target: "nsis",
        arch: ["x64"],
      },
    ],
  },
  nsis: {
    oneClick: false,
    allowElevation: true,
    allowToChangeInstallationDirectory: true,
    createDesktopShortcut: true,
    createStartMenuShortcut: true,
    shortcutName: "electron-vite-vue3-electron-builder",
    runAfterFinish: true,
    uninstallDisplayName: "electron-vite-vue3-electron-builder",
    perMachine: true,
  },
  mac: {
    target: "dmg",
    icon: "src/renderer/public/favicon.icns",
  },
  linux: {
    target: "AppImage",
    icon: "src/renderer/public/favicon.png",
  },
};
