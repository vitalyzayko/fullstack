# Part 0.6: New note in Single page app diagram

```mermaid
sequenceDiagram
participant browser
participant server

    Note right of browser: The user types in some text message into the input field of the form and presses "Save" button
    
    Note right of browser: The browser executes the redrawNotes() function that renders the notes
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    
    Note right of browser: The POST request contains JSON data (application/json; charset=utf-8) - example, {content: "new note text spa", date: "2025-11-12T12:54:33.868Z"}

    activate server
    server-->>browser: response from server "Status Code: 201 Created" and JSON data note {"message":"note created"}
    deactivate server

    
```