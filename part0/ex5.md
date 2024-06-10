```mermaid
sequenceDiagram
    participant browser
    participant server

    server->>browser: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server->>browser: spa.html
    deactivate browser

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server->>browser: main.css
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server->>browser: spa.js
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server->>browser: data.json
    deactivate server