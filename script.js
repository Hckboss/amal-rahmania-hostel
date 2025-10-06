/* -------------------- VARIABLES -------------------- */
:root{
  --bg:#fbf9fb;
  --text:#222;
  --h2-color:#333;
  --accent:#D31D60;
  --accent-light:#ffc8d9;
  --muted:#5a5a5a;
  --card:#ffffff;
  --card-shadow:0 10px 30px rgba(0,0,0,0.06);
  --card-border:#f0e4f0;
  --header-grad:linear-gradient(90deg,rgba(211,29,96,0.1),rgba(255,255,255,0.7));
  --chip-bg:#ffeef3;
  --chip-border:rgba(211,29,96,0.3);
  --input-bg:#ffffff;
  --input-color:#222;
  --input-border:#d0d0d0;
  --maxw:1100px;
  font-family:'Inter', sans-serif;
}

@media (prefers-color-scheme: dark){
  :root{
    --bg:#1a1014;
    --text:#f0f0f0;
    --h2-color:#fff;
    --muted:#aaa;
    --card:#2b1d22;
    --card-shadow:0 10px 30px rgba(0,0,0,0.5);
    --card-border:#403035;
    --header-grad:linear-gradient(90deg,rgba(211,29,96,0.2),var(--card) 70%);
    --chip-bg:#502030;
    --chip-border:rgba(255,102,153,0.5);
    --input-bg:#403035;
    --input-color:#f0f0f0;
    --input-border:#604045;
  }
  .hero img, .gallery-img{
    box-shadow: 0 4px 10px rgba(0,0,0,0.6);
  }
}

/* -------------------- GLOBAL STYLES -------------------- */
html{scroll-behavior:smooth;}
*{box-sizing:border-box;}
body{margin:0; background:var(--bg); color:var(--text); line-height:1.6;}
.container{max-width:var(--maxw); margin:0 auto; padding:18px;}
h1{margin:0; font-size:24px; font-weight:800; color:var(--accent);}
p.lead{margin:4px 0 0;color:var(--muted); font-size:14px;}
h2{margin-top:0; color:var(--accent); font-size:20px; border-bottom:2px solid var(--accent-light); padding-bottom:8px; margin-bottom:15px;}

/* -------------------- LAYOUT -------------------- */
header{
  background:var(--header-grad);
  padding:20px 16px;
  border-bottom:1px solid var(--card-border);
  position:sticky;
  top:0;
  z-index:10;
  backdrop-filter: blur(5px);
}
.grid{display:grid;grid-template-columns:1fr 340px;gap:24px;margin-top:24px;}
@media(max-width:880px){
  .grid{grid-template-columns:1fr; gap:18px;}
}

/* -------------------- CARDS -------------------- */
.card{
  background:var(--card);
  padding:24px;
  border-radius:16px;
  box-shadow:var(--card-shadow);
  border:1px solid var(--card-border);
  transition: all 0.3s;
}
.card:hover{
  transform:translateY(-2px);
  box-shadow: var(--card-shadow), 0 15px 40px rgba(211,29,96,0.1);
}

/* -------------------- HERO -------------------- */
.hero{display:flex;gap:20px;align-items:center;}
.hero img{width:300px;max-width:40%;border-radius:12px;object-fit:cover; box-shadow:0 4px 15px rgba(0,0,0,0.1);}

/* -------------------- BUTTONS -------------------- */
.btn{display:inline-block;padding:12px 20px;border-radius:10px;text-decoration:none;font-weight:700; transition: all 0.2s;text-align:center;}
.btn-primary{background:var(--accent);color:white;box-shadow:0 4px 10px rgba(211,29,96,0.3);}
.btn-primary:hover{background:#a9154f;transform:translateY(-1px);box-shadow:0 6px 15px rgba(211,29,96,0.4);}
.btn-outline{border:2px solid var(--accent);color:var(--accent);background:transparent;}
.btn-outline:hover{background:var(--accent);color:white;}

/* -------------------- GALLERY -------------------- */
.gallery{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;}
@media(max-width:880px){.gallery{grid-template-columns:repeat(2,1fr);}}
.gallery-img{width:100%;height:150px;object-fit:cover;border-radius:12px;box-shadow:0 3px 8px rgba(0,0,0,0.1);border:1px solid var(--card-border);transition: transform 0.3s ease;}
.gallery-img:hover{transform:scale(1.05);}

/* -------------------- CHIPS -------------------- */
.facilities{display:flex;flex-wrap:wrap;gap:10px; margin-top: 15px;}
.chip{padding:8px 12px;border-radius:20px;background:var(--chip-bg);border:1px solid var(--chip-border);color:var(--accent);font-weight:600;font-size:12px;}

/* -------------------- FORM -------------------- */
input[type="text"], input[type="tel"], textarea{
  width:100%;padding:10px;margin-bottom:12px;border:1px solid var(--input-border);border-radius:8px;background:var(--input-bg);color:var(--input-color);transition:border-color 0.2s, box-shadow 0.2s;
}
input:focus, textarea:focus{
  border-color: var(--accent);
  box-shadow:0 0 0 2px var(--chip-bg);
  outline:none;
}
input.error{border-color:#ff4d4d;box-shadow:0 0 0 2px #ffeef3;}

/* -------------------- MAP -------------------- */
.map-container{position:relative;width:100%;padding-bottom:75%;height:0;overflow:hidden;border-radius:12px;box-shadow:0 4px 15px rgba(0,0,0,0.1);}
.map-container iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:0;}

/* -------------------- FOOTER -------------------- */
footer{padding:25px;text-align:center;color:white;font-size:13px;background-color:var(--accent);border-top:none;margin-top:24px;border-radius:16px 16px 0 0;}

/* -------------------- SCROLL ANIMATION -------------------- */
.scroll-animate{opacity:0;transform:translateY(20px);transition:opacity 0.8s ease-out, transform 0.8s ease-out;}
.scroll-animate.is-visible{opacity:1;transform:translateY(0);}
