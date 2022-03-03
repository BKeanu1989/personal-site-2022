build process on windows
https://stackoverflow.com/questions/23243353/how-to-set-shell-for-npm-run-scripts-in-windows

Since npm 5.1
```
npm config set script-shell "C:\\Program Files (x86)\\git\\bin\\bash.exe"  
or (64bit installation)

```
```
npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"
Note that you need to have git for windows installed.

```
```
You can revert it by running:
npm config delete script-shell
```