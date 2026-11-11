#!/bin/bash
# Uso: ./measure.sh <lámina>  → data-h="contenido/pie" en px CSS (el contenido debe quedar ≤ 1526)
cd "$(dirname "$0")"
python3 build.py src/$1.html >/dev/null
f=build/$1.html; g=build/$1.m.html
sed 's#</body>#<script>window.onload=()=>{const p=document.querySelector(".page");const foot=p.querySelector(".foot");let mx=0;for(const c of p.children){if(c!==foot)mx=Math.max(mx,c.getBoundingClientRect().bottom)};document.body.setAttribute("data-h",Math.round(mx)+"/"+Math.round(foot.getBoundingClientRect().bottom));}</script></body>#' $f > $g
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --window-size=1024,1536 --virtual-time-budget=6000 --dump-dom "file://$PWD/$g" 2>/dev/null | grep -o 'data-h="[^"]*"'
rm -f $g
