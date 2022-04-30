https://stevenklambert.com/writing/comprehensive-guide-building-packaging-electron-app/

```js
    contextBridge.exposeInMainWorld(
      'api', {
        send: (channel, data) => {
          // allow only specific channels
          const validChannels = ['toMain', 'foo-bar'];
          if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
          }
        },
        receive: (channel, func) => {
          const validChannels = ['fromMain', 'bar-baz'];
          if (validChannels.includes(channel)) {
            // Deliberately strip event as it includes `sender` 
            ipcRenderer.on(channel, (event, ...args) => func(...args));
          }
        }
      }
    );
```