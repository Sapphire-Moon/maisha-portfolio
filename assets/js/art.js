/* =========================================================
   Hand-drawn illustrations for the project cards.
   Each key matches the `art` field in data.js.
   Classes: f = soft fill, a = accent fill, h = hatching,
            b = background blob, as = accent stroke, d = dashed,
            lift = moves up on hover
   ========================================================= */
const ART = {

  energy: `
    <circle class="b" cx="165" cy="108" r="72"/>
    <path d="M60 166 H262"/>
    <g class="lift">
      <path class="f" d="M100 166 V116 L138 86 L176 116 V166"/>
      <path class="h" d="M138 86 L176 116 H100 Z"/>
      <rect class="f" x="129" y="134" width="18" height="32" rx="2"/>
      <rect x="108" y="124" width="14" height="13" rx="1"/>
      <path d="M115 124 V137 M108 130.5 H122"/>
    </g>
    <path class="a" d="M212 46 L194 92 H210 L198 132 L234 80 H217 L229 46 Z"/>
    <path class="as" d="M190 160 L208 150 L224 154 L242 138 L262 126"/>
    <circle class="a" cx="262" cy="126" r="3.5"/>
    <path d="M58 70 l6 0 M61 67 l0 6 M262 54 l6 0 M265 51 l0 6"/>`,

  hf: `
    <circle class="b" cx="160" cy="104" r="74"/>
    <rect class="f" x="62" y="46" width="140" height="96" rx="7"/>
    <path d="M62 62 H202"/>
    <circle cx="73" cy="54" r="2.2"/><circle cx="82" cy="54" r="2.2"/><circle cx="91" cy="54" r="2.2"/>
    <path d="M78 88 H150"/><circle class="a" cx="122" cy="88" r="6"/>
    <path d="M78 108 H130"/><circle class="a" cx="96" cy="108" r="6"/>
    <rect x="78" y="120" width="44" height="12" rx="6"/>
    <g class="lift">
      <rect x="128" y="84" width="140" height="96" rx="7" style="fill:var(--ink-2)"/>
      <path d="M128 100 H268"/>
      <circle cx="139" cy="92" r="2.2"/><circle cx="148" cy="92" r="2.2"/><circle cx="157" cy="92" r="2.2"/>
      <path d="M146 166 H252"/>
      <rect class="a" x="156" y="128" width="16" height="38"/>
      <rect class="h" x="182" y="140" width="16" height="26"/>
      <rect class="h" x="208" y="118" width="16" height="48"/>
      <rect class="h" x="234" y="148" width="16" height="18"/>
    </g>
    <path class="f" d="M244 150 L244 176 L251 169 L256 180 L261 178 L256 167 L266 167 Z"/>`,

  pcos: `
    <circle class="b" cx="160" cy="112" r="70"/>
    <path d="M70 168 H250"/>
    <path class="d" d="M112 100 Q 120 60 152 46 M160 86 V58 M208 100 Q 200 60 168 46"/>
    <circle class="a" cx="160" cy="44" r="13"/>
    <path d="M153 44 L158 49 L167 39" style="stroke:var(--signal-ink);stroke-width:2.2"/>
    <path d="M112 168 V132 M160 168 V122 M208 168 V132"/>
    <path class="h" d="M112 98 L136 138 H88 Z"/>
    <g class="lift"><ellipse class="a" cx="160" cy="104" rx="24" ry="30"/></g>
    <path class="h" d="M208 98 L232 138 H184 Z"/>
    <path d="M150 112 Q 160 102 170 112 M160 106 V128"/>
    <path d="M66 70 l6 0 M69 67 l0 6 M250 74 l6 0 M253 71 l0 6"/>`,

  money: `
    <circle class="b" cx="160" cy="108" r="72"/>
    <path d="M64 170 H256"/>
    <g>
      <ellipse class="f" cx="110" cy="160" rx="30" ry="9"/>
      <ellipse class="f" cx="110" cy="148" rx="30" ry="9"/>
      <ellipse class="f" cx="110" cy="136" rx="30" ry="9"/>
      <ellipse class="f" cx="110" cy="124" rx="30" ry="9"/>
      <ellipse class="f" cx="110" cy="112" rx="30" ry="9"/>
      <ellipse class="f" cx="166" cy="160" rx="30" ry="9"/>
      <ellipse class="a" cx="166" cy="148" rx="30" ry="9"/>
    </g>
    <path class="d" d="M118 82 Q 150 50 190 66"/>
    <g class="lift">
      <circle cx="214" cy="88" r="32" style="fill:var(--ink-2)"/>
      <circle class="h" cx="214" cy="88" r="25" style="stroke:none"/>
      <path d="M237 111 L262 136" style="stroke-width:7"/>
      <path class="as" d="M214 72 V92" style="stroke-width:3"/>
      <circle class="a" cx="214" cy="102" r="2.6"/>
    </g>`,

  network: `
    <circle class="b" cx="160" cy="102" r="72"/>
    <path d="M66 52 L130 92 M64 150 L130 112 M254 52 L190 92 M256 150 L190 112 M66 52 L64 150 M254 52 L256 150"/>
    <path class="d as" d="M286 100 L256 150"/>
    <circle class="f" cx="66" cy="52" r="10"/>
    <circle class="f" cx="64" cy="150" r="10"/>
    <circle class="f" cx="254" cy="52" r="10"/>
    <circle class="f" cx="256" cy="150" r="10"/>
    <circle class="a" cx="286" cy="100" r="7"/>
    <g class="lift">
      <path class="f" d="M160 58 L194 70 V100 C194 124 176 140 160 146 C144 140 126 124 126 100 V70 Z"/>
      <path class="h" d="M160 58 L194 70 V100 C194 124 176 140 160 146 Z" style="stroke:none"/>
      <path d="M146 100 L156 110 L176 88" class="as" style="stroke-width:3"/>
    </g>`,

  leaf: `
    <circle class="b" cx="164" cy="100" r="70"/>
    <path d="M78 46 V30 H96 M242 30 H260 V46 M260 154 V170 H242 M96 170 H78 V154"/>
    <g class="lift">
      <path class="f" d="M100 158 C 98 96, 160 50, 232 46 C 230 112, 180 158, 100 158 Z"/>
      <path d="M100 158 Q 168 112 232 46"/>
      <path d="M140 132 Q 136 112 142 96 M164 116 Q 162 96 172 78 M186 98 Q 188 82 200 66 M150 126 Q 172 128 186 140 M176 108 Q 198 110 210 116"/>
      <circle class="a" cx="182" cy="86" r="6"/>
      <circle class="a" cx="160" cy="122" r="4.5"/>
      <circle class="a" cx="204" cy="74" r="3.5"/>
      <circle class="a" cx="138" cy="140" r="3"/>
    </g>
    <rect class="a" x="196" y="140" width="70" height="20" rx="10" style="stroke:none"/>
    <text x="231" y="155" text-anchor="middle" class="tag-ink">blight 0.94</text>`,

  sheets: `
    <circle class="b" cx="160" cy="102" r="72"/>
    <g class="lift">
      <rect class="f" x="52" y="44" width="96" height="116" rx="4"/>
      <rect class="a" x="52" y="44" width="96" height="20" rx="4" style="stroke:none"/>
      <rect x="52" y="44" width="96" height="116" rx="4"/>
      <path d="M52 64 H148 M52 88 H148 M52 112 H148 M52 136 H148 M84 44 V160 M116 44 V160"/>
    </g>
    <path class="d" d="M156 100 C 172 82, 186 118, 202 100" marker-end="url(#arrow)"/>
    <text x="240" y="122" text-anchor="middle" class="big-mono">{ }</text>
    <path d="M228 94 H252 M228 104 H246 M228 114 H250" style="opacity:.7"/>
    <path d="M200 50 l6 0 M203 47 l0 6"/>`,

  folders: `
    <circle class="b" cx="160" cy="112" r="70"/>
    <path d="M50 168 H270"/>
    <path class="f" d="M60 168 V118 H80 L86 112 H118 V168 Z"/>
    <path class="a" d="M131 168 V112 H151 L157 106 H189 V168 Z"/>
    <path class="f" d="M202 168 V118 H222 L228 112 H260 V168 Z"/>
    <path d="M70 140 H108 M141 134 H179 M212 140 H250" style="opacity:.6"/>
    <g class="lift">
      <rect class="f" x="80" y="56" width="22" height="28" rx="2" transform="rotate(-14 91 70)"/>
      <rect class="h" x="150" y="36" width="22" height="28" rx="2" transform="rotate(8 161 50)"/>
      <rect class="f" x="222" y="58" width="22" height="28" rx="2" transform="rotate(16 233 72)"/>
    </g>
    <path class="d" d="M92 88 Q 92 100 90 108 M161 68 V98 M232 90 Q 234 100 232 108"/>`
};

/* Small icons for the services section (viewBox 0 0 80 80) */
const SPOTS = {
  model: `<circle class="b" cx="40" cy="42" r="30"/>
    <path d="M16 66 H64 M26 66 V52 M40 66 V46 M54 66 V52"/>
    <path class="h" d="M26 30 L36 52 H16 Z"/><ellipse class="a" cx="40" cy="32" rx="10" ry="14"/><path class="h" d="M54 30 L64 52 H44 Z"/>`,
  xai: `<circle class="b" cx="40" cy="42" r="30"/>
    <rect class="a" x="14" y="20" width="36" height="8" rx="1"/><rect class="h" x="14" y="34" width="26" height="8" rx="1"/><rect class="h" x="14" y="48" width="16" height="8" rx="1"/>
    <circle cx="50" cy="48" r="12" style="fill:var(--ink-2)"/><path d="M59 57 L68 66" style="stroke-width:4"/>`,
  audit: `<circle class="b" cx="40" cy="42" r="30"/>
    <rect class="f" x="18" y="16" width="36" height="48" rx="3"/><rect x="28" y="12" width="16" height="8" rx="2" style="fill:var(--ink-2)"/>
    <path d="M25 32 H46 M25 41 H42"/>
    <path class="a" d="M58 40 C 58 40, 48 52, 48 58 A10 10 0 0 0 68 58 C 68 52, 58 40, 58 40 Z"/>`,
  app: `<circle class="b" cx="40" cy="42" r="30"/>
    <rect class="f" x="12" y="18" width="50" height="38" rx="4"/><path d="M12 27 H62"/>
    <rect class="a" x="20" y="36" width="20" height="10" rx="5"/><path d="M46 41 H54"/>
    <path d="M54 56 V64 Q 54 70 62 70 H70 M66 64 V76"/>`
};

function artSvg(key, vb){
  const src = (vb === "spot" ? SPOTS : ART)[key] || "";
  const box = vb === "spot" ? "0 0 80 80" : "0 0 320 200";
  return `<svg class="art" viewBox="${box}" aria-hidden="true" focusable="false"><g filter="url(#rough)">${src}</g></svg>`;
}
