# color_palette_generator
Simple color palette generator built using Kiro
This is a small web project that generates random color palettes.  
I built it as part of the “AI for Bharat – Micro Tools” week.  
The idea was to make a single-purpose tool that solves a simple problem.

The website shows five random colors, and each one displays its hex code.  
You can copy any color by clicking the copy button.

---

## How it works
The project uses plain HTML, CSS and JavaScript.  
JavaScript generates random hex colors using a simple function and updates the boxes on the page.

Example:

```javascript
"#" + Math.floor(Math.random() * 16777215).toString(16)
```
# Folder structure
index.html
style.css
script.js
.kiro/
   kiro.json

# Running the project
There is nothing to install.
Just open index.html in a browser and it works.

# Notes
I used Kiro mainly for code suggestions and quick improvements while writing the project.
The rest of the code and styling was done manually.