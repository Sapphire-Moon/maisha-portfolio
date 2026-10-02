/* ===== Render cards ===== */
const tray = document.getElementById("tray");
const arrowSvg = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 11L11 5M6 5h5v5"/></svg>';
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
PROJECTS.forEach((p,i) => {
  const a = document.createElement("a");
  a.className = "card"; a.href = p.url; a.target = "_blank"; a.rel = "noopener";
  a.dataset.kind = p.kind;
  a.innerHTML = `
    <div class="plate">${artSvg(p.art)}
      <span class="label kind">${esc(p.tag)}</span>
      <span class="dest ${p.live ? "live" : ""}">${p.live ? "● " : ""}${esc(p.dest)}</span></div>
    <div class="card-body">
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.text)}</p>
      <div class="facts">${p.facts.map(f => `<span>${esc(f)}</span>`).join("")}</div>
      <div class="card-foot"><span class="label">${String(i+1).padStart(2,"0")}</span>
        <span class="go">${p.live ? "Open app" : p.dest === "GitHub" ? "View code" : "Open"} ${arrowSvg}</span></div>
    </div>`;
  tray.appendChild(a);
});

/* ===== Carousel controls ===== */
const prev = document.getElementById("prev"), next = document.getElementById("next");
const counter = document.getElementById("counter"), bar = document.getElementById("bar");
const visibleCards = () => [...tray.querySelectorAll(".card:not([hidden])")];
function step(){ const c = visibleCards()[0]; return c ? c.getBoundingClientRect().width + 18 : 300; }
function update(){
  const cards = visibleCards(), n = cards.length, max = tray.scrollWidth - tray.clientWidth;
  const idx = Math.min(n, Math.round(tray.scrollLeft / step()) + 1);
  counter.textContent = String(n ? idx : 0).padStart(2,"0") + " / " + String(n).padStart(2,"0");
  prev.disabled = tray.scrollLeft <= 2; next.disabled = tray.scrollLeft >= max - 2;
  const w = tray.clientWidth / Math.max(tray.scrollWidth,1);
  bar.style.width = (w*100) + "%"; bar.style.left = (max > 0 ? (tray.scrollLeft/max)*(1-w)*100 : 0) + "%";
}
prev.onclick = () => tray.scrollBy({left:-step(), behavior:"smooth"});
next.onclick = () => tray.scrollBy({left: step(), behavior:"smooth"});
tray.addEventListener("scroll", () => requestAnimationFrame(update), {passive:true});
tray.addEventListener("keydown", e => {
  if (e.key === "ArrowRight"){ e.preventDefault(); next.click(); }
  if (e.key === "ArrowLeft"){ e.preventDefault(); prev.click(); }
});

/* drag to scroll with a mouse; a real click still opens the project */
let down = false, startX = 0, startL = 0, moved = false;
tray.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse") return; down = true; moved = false; startX = e.clientX; startL = tray.scrollLeft; });
window.addEventListener("pointermove", e => { if (!down) return; const dx = e.clientX - startX; if (Math.abs(dx) > 5){ moved = true; tray.classList.add("dragging"); } tray.scrollLeft = startL - dx; });
window.addEventListener("pointerup", () => { if (!down) return; down = false; setTimeout(() => tray.classList.remove("dragging"), 0); });
tray.addEventListener("click", e => { if (moved){ e.preventDefault(); moved = false; } }, true);

/* filters */
document.querySelectorAll(".chip").forEach(ch => ch.addEventListener("click", () => {
  document.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", c === ch));
  const f = ch.dataset.f;
  tray.querySelectorAll(".card").forEach(c => c.hidden = !(f === "all" || c.dataset.kind === f));
  tray.scrollLeft = 0; update();
}));

/* external profile links */
document.querySelectorAll(".js-hf").forEach(a => a.href = LINKS.hf);
document.querySelectorAll(".js-gh").forEach(a => a.href = LINKS.github);
document.querySelectorAll(".js-fiverr-out").forEach(a => { if (LINKS.fiverr) a.href = LINKS.fiverr; else { a.removeAttribute("target"); a.href = "#contact"; } });
document.querySelectorAll(".js-fiverr").forEach(a => { if (LINKS.fiverr){ a.href = LINKS.fiverr; a.target = "_blank"; a.rel = "noopener"; } });

window.addEventListener("resize", update);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(update);

/* service icons */
document.querySelectorAll("[data-spot]").forEach(el => el.innerHTML = artSvg(el.dataset.spot, "spot"));
update();
