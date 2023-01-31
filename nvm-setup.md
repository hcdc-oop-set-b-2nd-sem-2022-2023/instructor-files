## Setting up NodeJS in Windows using NVM

1. Download and latest `nvm-setup.exe` from https://github.com/coreybutler/nvm-windows/releases
2. After installation, open `terminal` or `git bash` and enter:
   ```
   $ nvm --version
   $ nvm install 16.16.0
   ```
3. Switch to this version by entering:
   ```
   $ nvm use 16.16.0
   ```
4. Verify `node` and `npm` version by:
   ```
   $ npm --version
   $ node --version
   ```
5. If it shows error, close terminal/git bash, open again and re-issue commands.