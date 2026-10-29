# Vault Secure

Hide a file inside songs, pictures, memes, videos or documents, locked with a 256-bit QR key and a timer.

One shared app in `www/` is wrapped for every platform:

| Platform | Shell | You get |
|---|---|---|
| Windows 10/11 | Electron | installer `.exe` (x64 + ARM64) and portable `.exe` |
| macOS (Intel + Apple Silicon) | Electron | universal `.dmg` and `.zip` |
| Linux | Electron | `.AppImage` and `.deb` |
| Raspberry Pi (64-bit and 32-bit) | Electron | arm64 / armv7l `.AppImage` and `.deb` |
| Android | Capacitor | `.apk` |
| iPhone / iPad | Capacitor | simulator build and unsigned `.ipa` |
| Web | GitHub Pages | https://YOUR-NAME.github.io/REPO/ |

## Build everything (no setup on your computer)

1. Put this folder in a GitHub repository (include the hidden `.github` folder).
2. **Actions → Build Vault Secure → Run workflow.** About 15 minutes later, download each platform from the run's **Artifacts**.
3. Push a tag such as `v1.0.0` to also attach every installer to a GitHub Release.
4. For the website: **Settings → Pages → Source: GitHub Actions**. The **Publish website** workflow then updates it on every push to main.

## Build on your own computer (Node.js 20+)

```bash
npm install
npm run vendor        # copies the QR and ZIP libraries into www/vendor
npm start             # run the desktop app
npm run dist:win      # or dist:mac, dist:linux, dist:pi
npm run android:add && npm run android:apk
```

## Installing

- **Windows:** unsigned, so SmartScreen warns. Choose **More info → Run anyway**.
- **macOS:** right-click the app → **Open** the first time. If it says the app is damaged: `xattr -cr "/Applications/Vault Secure.app"`.
- **Raspberry Pi:** `sudo apt install ./Vault-Secure-1.0.0-linux-arm64.deb`. Add `--no-gpu` if the window stays blank.
- **Android:** open the `.apk` and allow "install unknown apps".
- **iPhone:** Apple requires signing. Open the project in Xcode with your Apple ID, or re-sign the `.ipa` with AltStore or Sideloadly.

## Phone extras

- **Saving files** opens the share sheet so carriers and QR keys go to Files, Drive, email or a USB stick.
- **Check-ins** for long-term vaults are scheduled as system notifications with sound, so the phone alerts you even when Vault Secure is closed.
