
## **[landing page template](https://www.figma.com/file/hveoPOAwl5L5qFEI1qXO2q/Exadel-Landing-Page?node-id=0%3A1)**

---

### **Fonts**

1. fotn-family: [Crete Round](https://fonts.google.com/specimen/Crete+Round?subset=latin&preview.text_type=custom#standard-styles);

2. main font-size: 22px; (all fonts are multiples of 22)

*use in rem*
~~~
html { font-size: 62.5%; }

body {
  font-family: 'Crete Round', serif;
  font-size: 100%;
}

/* 1rem === 10px */
div { font-size: 2.2rem; } /* 2.2rem === 22px */
~~~

---

### **Geometry**

3. border-radius: 22px; (everywhere)

4. layout is divided into "Screen";
"Screen" === 100vh;
min-height, of course!

---

### **Color theme**

5. ![Main color theme](https://imgur.com/9a27G0m)

```
/* Color Theme Swatches in Hex */
.Main-Color-Theme-1-hex { color: #1E5A70; }
.Main-Color-Theme-2-hex { color: #8AD6F2; }
.Main-Color-Theme-3-hex { color: #41C1F0; }
.Main-Color-Theme-4-hex { color: #406370; }
.Main-Color-Theme-5-hex { color: #3398BD; }

/* Color Theme Swatches in RGBA */
.Main-Color-Theme-1-rgba { color: rgba(30, 90, 112, 1); }
.Main-Color-Theme-2-rgba { color: rgba(138, 214, 242, 1); }
.Main-Color-Theme-3-rgba { color: rgba(65, 193, 240, 1); }
.Main-Color-Theme-4-rgba { color: rgba(64, 99, 112, 1); }
.Main-Color-Theme-5-rgba { color: rgba(51, 152, 189, 1); }

/* Color Theme Swatches in HSLA */
.Main-Color-Theme-1-hsla { color: hsla(196, 57, 27, 1); }
.Main-Color-Theme-2-hsla { color: hsla(196, 79, 74, 1); }
.Main-Color-Theme-3-hsla { color: hsla(196, 85, 59, 1); }
.Main-Color-Theme-4-hsla { color: hsla(196, 27, 34, 1); }
.Main-Color-Theme-5-hsla { color: hsla(196, 57, 47, 1); }
```

6. ![Optional color theme](https://imgur.com/0muhSrY)

```
/* Color Theme Swatches in Hex */
.Optional-Color-Theme-1-hex { color: #6CA7BD; }
.Optional-Color-Theme-2-hex { color: #768388; }
.Optional-Color-Theme-3-hex { color: #406370; }
.Optional-Color-Theme-4-hex { color: #A4B6BD; }
.Optional-Color-Theme-5-hex { color: #23363D; }

/* Color Theme Swatches in RGBA */
.Optional-Color-Theme-1-rgba { color: rgba(108, 167, 189, 1); }
.Optional-Color-Theme-2-rgba { color: rgba(118, 131, 136, 1); }
.Optional-Color-Theme-3-rgba { color: rgba(64, 99, 112, 1); }
.Optional-Color-Theme-4-rgba { color: rgba(164, 182, 189, 1); }
.Optional-Color-Theme-5-rgba { color: rgba(35, 54, 61, 1); }

/* Color Theme Swatches in HSLA */
.Optional-Color-Theme-1-hsla { color: hsla(196, 38, 58, 1); }
.Optional-Color-Theme-2-hsla { color: hsla(196, 7, 49, 1); }
.Optional-Color-Theme-3-hsla { color: hsla(196, 27, 34, 1); }
.Optional-Color-Theme-4-hsla { color: hsla(196, 15, 69, 1); }
.Optional-Color-Theme-5-hsla { color: hsla(196, 27, 18, 1); }
```

