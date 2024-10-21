import{m as c,J as b,b3 as I,Q as B,ba as pt,bb as q,b4 as it,N as F,b as T,b5 as gt,I as O,bc as xt,i as ft,j as bt}from"./mermaid.esm.min-CToZygF8.js";var ut=c((a,t,r,l)=>{t.forEach(s=>{$t[s](a,r,l)})},"insertMarkers"),wt=c((a,t,r)=>{b.trace("Making markers for ",r),a.append("defs").append("marker").attr("id",r+"_"+t+"-extensionStart").attr("class","marker extension "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),a.append("defs").append("marker").attr("id",r+"_"+t+"-extensionEnd").attr("class","marker extension "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},"extension"),mt=c((a,t,r)=>{a.append("defs").append("marker").attr("id",r+"_"+t+"-compositionStart").attr("class","marker composition "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),a.append("defs").append("marker").attr("id",r+"_"+t+"-compositionEnd").attr("class","marker composition "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},"composition"),kt=c((a,t,r)=>{a.append("defs").append("marker").attr("id",r+"_"+t+"-aggregationStart").attr("class","marker aggregation "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),a.append("defs").append("marker").attr("id",r+"_"+t+"-aggregationEnd").attr("class","marker aggregation "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},"aggregation"),Lt=c((a,t,r)=>{a.append("defs").append("marker").attr("id",r+"_"+t+"-dependencyStart").attr("class","marker dependency "+t).attr("refX",6).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),a.append("defs").append("marker").attr("id",r+"_"+t+"-dependencyEnd").attr("class","marker dependency "+t).attr("refX",13).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},"dependency"),vt=c((a,t,r)=>{a.append("defs").append("marker").attr("id",r+"_"+t+"-lollipopStart").attr("class","marker lollipop "+t).attr("refX",13).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6),a.append("defs").append("marker").attr("id",r+"_"+t+"-lollipopEnd").attr("class","marker lollipop "+t).attr("refX",1).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6)},"lollipop"),St=c((a,t,r)=>{a.append("marker").attr("id",r+"_"+t+"-pointEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",6).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),a.append("marker").attr("id",r+"_"+t+"-pointStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",4.5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},"point"),Bt=c((a,t,r)=>{a.append("marker").attr("id",r+"_"+t+"-circleEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),a.append("marker").attr("id",r+"_"+t+"-circleStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},"circle"),_t=c((a,t,r)=>{a.append("marker").attr("id",r+"_"+t+"-crossEnd").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),a.append("marker").attr("id",r+"_"+t+"-crossStart").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},"cross"),Mt=c((a,t,r)=>{a.append("defs").append("marker").attr("id",r+"_"+t+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},"barb"),$t={extension:wt,composition:mt,aggregation:kt,dependency:Lt,lollipop:vt,point:St,circle:Bt,cross:_t,barb:Mt},ye=ut;function Q(a,t){t&&a.attr("style",t)}c(Q,"applyStyle");function nt(a){let t=T(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),r=t.append("xhtml:div"),l=a.label,s=a.isNode?"nodeLabel":"edgeLabel",e=r.append("span");return e.html(l),Q(e,a.labelStyle),e.attr("class",s),Q(r,a.labelStyle),r.style("display","inline-block"),r.style("white-space","nowrap"),r.attr("xmlns","http://www.w3.org/1999/xhtml"),t.node()}c(nt,"addHtmlLabel");var Tt=c((a,t,r,l)=>{let s=a||"";if(typeof s=="object"&&(s=s[0]),I(B().flowchart.htmlLabels)){s=s.replace(/\\n|\n/g,"<br />"),b.debug("vertexText"+s);let e={isNode:l,label:pt(q(s)),labelStyle:t.replace("fill:","color:")};return nt(e)}else{let e=document.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",t.replace("color:","fill:"));let i=[];typeof s=="string"?i=s.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(s)?i=s:i=[];for(let n of i){let d=document.createElementNS("http://www.w3.org/2000/svg","tspan");d.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),d.setAttribute("dy","1em"),d.setAttribute("x","0"),r?d.setAttribute("class","title-row"):d.setAttribute("class","row"),d.textContent=n.trim(),e.appendChild(d)}return e}},"createLabel"),N=Tt,_=c(async(a,t,r,l)=>{let s=B(),e,i=t.useHtmlLabels||I(s.flowchart.htmlLabels);r?e=r:e="node default";let n=a.insert("g").attr("class",e).attr("id",t.domId||t.id),d=n.insert("g").attr("class","label").attr("style",t.labelStyle),h;t.labelText===void 0?h="":h=typeof t.labelText=="string"?t.labelText:t.labelText[0];let o=d.node(),y;t.labelType==="markdown"?y=it(d,F(q(h),s),{useHtmlLabels:i,width:t.width||s.flowchart.wrappingWidth,classes:"markdown-node-label"},s):y=o.appendChild(N(F(q(h),s),t.labelStyle,!1,l));let p=y.getBBox(),g=t.padding/2;if(I(s.flowchart.htmlLabels)){let f=y.children[0],k=T(y),x=f.getElementsByTagName("img");if(x){let M=h.replace(/<img[^>]*>/g,"").trim()==="";await Promise.all([...x].map(u=>new Promise(E=>{function S(){if(u.style.display="flex",u.style.flexDirection="column",M){let H=s.fontSize?s.fontSize:window.getComputedStyle(document.body).fontSize,Y=parseInt(H,10)*5+"px";u.style.minWidth=Y,u.style.maxWidth=Y}else u.style.width="100%";E(u)}c(S,"setupImage"),setTimeout(()=>{u.complete&&S()}),u.addEventListener("error",S),u.addEventListener("load",S)})))}p=f.getBoundingClientRect(),k.attr("width",p.width),k.attr("height",p.height)}return i?d.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"):d.attr("transform","translate(0, "+-p.height/2+")"),t.centerLabel&&d.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),d.insert("rect",":first-child"),{shapeSvg:n,bbox:p,halfPadding:g,label:d}},"labelHelper"),m=c((a,t)=>{let r=t.node().getBBox();a.width=r.width,a.height=r.height},"updateNodeBounds");function R(a,t,r,l){return a.insert("polygon",":first-child").attr("points",l.map(function(s){return s.x+","+s.y}).join(" ")).attr("class","label-container").attr("transform","translate("+-t/2+","+r/2+")")}c(R,"insertPolygonShape");var Et=c(a=>{let t=new Set;for(let r of a)switch(r){case"x":t.add("right"),t.add("left");break;case"y":t.add("up"),t.add("down");break;default:t.add(r);break}return t},"expandAndDeduplicateDirections"),Ct=c((a,t,r)=>{let l=Et(a),s=2,e=t.height+2*r.padding,i=e/s,n=t.width+2*i+r.padding,d=r.padding/2;return l.has("right")&&l.has("left")&&l.has("up")&&l.has("down")?[{x:0,y:0},{x:i,y:0},{x:n/2,y:2*d},{x:n-i,y:0},{x:n,y:0},{x:n,y:-e/3},{x:n+2*d,y:-e/2},{x:n,y:-2*e/3},{x:n,y:-e},{x:n-i,y:-e},{x:n/2,y:-e-2*d},{x:i,y:-e},{x:0,y:-e},{x:0,y:-2*e/3},{x:-2*d,y:-e/2},{x:0,y:-e/3}]:l.has("right")&&l.has("left")&&l.has("up")?[{x:i,y:0},{x:n-i,y:0},{x:n,y:-e/2},{x:n-i,y:-e},{x:i,y:-e},{x:0,y:-e/2}]:l.has("right")&&l.has("left")&&l.has("down")?[{x:0,y:0},{x:i,y:-e},{x:n-i,y:-e},{x:n,y:0}]:l.has("right")&&l.has("up")&&l.has("down")?[{x:0,y:0},{x:n,y:-i},{x:n,y:-e+i},{x:0,y:-e}]:l.has("left")&&l.has("up")&&l.has("down")?[{x:n,y:0},{x:0,y:-i},{x:0,y:-e+i},{x:n,y:-e}]:l.has("right")&&l.has("left")?[{x:i,y:0},{x:i,y:-d},{x:n-i,y:-d},{x:n-i,y:0},{x:n,y:-e/2},{x:n-i,y:-e},{x:n-i,y:-e+d},{x:i,y:-e+d},{x:i,y:-e},{x:0,y:-e/2}]:l.has("up")&&l.has("down")?[{x:n/2,y:0},{x:0,y:-d},{x:i,y:-d},{x:i,y:-e+d},{x:0,y:-e+d},{x:n/2,y:-e},{x:n,y:-e+d},{x:n-i,y:-e+d},{x:n-i,y:-d},{x:n,y:-d}]:l.has("right")&&l.has("up")?[{x:0,y:0},{x:n,y:-i},{x:0,y:-e}]:l.has("right")&&l.has("down")?[{x:0,y:0},{x:n,y:0},{x:0,y:-e}]:l.has("left")&&l.has("up")?[{x:n,y:0},{x:0,y:-i},{x:n,y:-e}]:l.has("left")&&l.has("down")?[{x:n,y:0},{x:0,y:0},{x:n,y:-e}]:l.has("right")?[{x:i,y:-d},{x:i,y:-d},{x:n-i,y:-d},{x:n-i,y:0},{x:n,y:-e/2},{x:n-i,y:-e},{x:n-i,y:-e+d},{x:i,y:-e+d},{x:i,y:-e+d}]:l.has("left")?[{x:i,y:0},{x:i,y:-d},{x:n-i,y:-d},{x:n-i,y:-e+d},{x:i,y:-e+d},{x:i,y:-e},{x:0,y:-e/2}]:l.has("up")?[{x:i,y:-d},{x:i,y:-e+d},{x:0,y:-e+d},{x:n/2,y:-e},{x:n,y:-e+d},{x:n-i,y:-e+d},{x:n-i,y:-d}]:l.has("down")?[{x:n/2,y:0},{x:0,y:-d},{x:i,y:-d},{x:i,y:-e+d},{x:n-i,y:-e+d},{x:n-i,y:-d},{x:n,y:-d}]:[{x:0,y:0}]},"getArrowPoints");function lt(a,t){return a.intersect(t)}c(lt,"intersectNode");var Pt=lt;function st(a,t,r,l){var s=a.x,e=a.y,i=s-l.x,n=e-l.y,d=Math.sqrt(t*t*n*n+r*r*i*i),h=Math.abs(t*r*i/d);l.x<s&&(h=-h);var o=Math.abs(t*r*n/d);return l.y<e&&(o=-o),{x:s+h,y:e+o}}c(st,"intersectEllipse");var dt=st;function ot(a,t,r){return dt(a,t,t,r)}c(ot,"intersectCircle");var Nt=ot;function ht(a,t,r,l){var s,e,i,n,d,h,o,y,p,g,f,k,x,M,u;if(s=t.y-a.y,i=a.x-t.x,d=t.x*a.y-a.x*t.y,p=s*r.x+i*r.y+d,g=s*l.x+i*l.y+d,!(p!==0&&g!==0&&J(p,g))&&(e=l.y-r.y,n=r.x-l.x,h=l.x*r.y-r.x*l.y,o=e*a.x+n*a.y+h,y=e*t.x+n*t.y+h,!(o!==0&&y!==0&&J(o,y))&&(f=s*n-e*i,f!==0)))return k=Math.abs(f/2),x=i*h-n*d,M=x<0?(x-k)/f:(x+k)/f,x=e*d-s*h,u=x<0?(x-k)/f:(x+k)/f,{x:M,y:u}}c(ht,"intersectLine");function J(a,t){return a*t>0}c(J,"sameSign");var Rt=ht,It=ct;function ct(a,t,r){var l=a.x,s=a.y,e=[],i=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY;typeof t.forEach=="function"?t.forEach(function(f){i=Math.min(i,f.x),n=Math.min(n,f.y)}):(i=Math.min(i,t.x),n=Math.min(n,t.y));for(var d=l-a.width/2-i,h=s-a.height/2-n,o=0;o<t.length;o++){var y=t[o],p=t[o<t.length-1?o+1:0],g=Rt(a,r,{x:d+y.x,y:h+y.y},{x:d+p.x,y:h+p.y});g&&e.push(g)}return e.length?(e.length>1&&e.sort(function(f,k){var x=f.x-r.x,M=f.y-r.y,u=Math.sqrt(x*x+M*M),E=k.x-r.x,S=k.y-r.y,H=Math.sqrt(E*E+S*S);return u<H?-1:u===H?0:1}),e[0]):a}c(ct,"intersectPolygon");var Wt=c((a,t)=>{var r=a.x,l=a.y,s=t.x-r,e=t.y-l,i=a.width/2,n=a.height/2,d,h;return Math.abs(e)*i>Math.abs(s)*n?(e<0&&(n=-n),d=e===0?0:n*s/e,h=n):(s<0&&(i=-i),d=i,h=s===0?0:i*e/s),{x:r+d,y:l+h}},"intersectRect"),Ht=Wt,w={node:Pt,circle:Nt,ellipse:dt,polygon:It,rect:Ht},Dt=c(async(a,t)=>{t.useHtmlLabels||B().flowchart.htmlLabels||(t.centerLabel=!0);let{shapeSvg:r,bbox:l,halfPadding:s}=await _(a,t,"node "+t.classes,!0);b.info("Classes = ",t.classes);let e=r.insert("rect",":first-child");return e.attr("rx",t.rx).attr("ry",t.ry).attr("x",-l.width/2-s).attr("y",-l.height/2-s).attr("width",l.width+t.padding).attr("height",l.height+t.padding),m(t,e),t.intersect=function(i){return w.rect(t,i)},r},"note"),Xt=Dt,G=c(a=>a?" "+a:"","formatClass"),P=c((a,t)=>`${t||"node default"}${G(a.classes)} ${G(a.class)}`,"getClassesFromNode"),K=c(async(a,t)=>{let{shapeSvg:r,bbox:l}=await _(a,t,P(t,void 0),!0),s=l.width+t.padding,e=l.height+t.padding,i=s+e,n=[{x:i/2,y:0},{x:i,y:-i/2},{x:i/2,y:-i},{x:0,y:-i/2}];b.info("Question main (Circle)");let d=R(r,i,i,n);return d.attr("style",t.style),m(t,d),t.intersect=function(h){return b.warn("Intersect called"),w.polygon(t,n,h)},r},"question"),Yt=c((a,t)=>{let r=a.insert("g").attr("class","node default").attr("id",t.domId||t.id),l=28,s=[{x:0,y:l/2},{x:l/2,y:0},{x:0,y:-l/2},{x:-l/2,y:0}];return r.insert("polygon",":first-child").attr("points",s.map(function(e){return e.x+","+e.y}).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),t.width=28,t.height=28,t.intersect=function(e){return w.circle(t,14,e)},r},"choice"),jt=c(async(a,t)=>{let{shapeSvg:r,bbox:l}=await _(a,t,P(t,void 0),!0),s=4,e=l.height+t.padding,i=e/s,n=l.width+2*i+t.padding,d=[{x:i,y:0},{x:n-i,y:0},{x:n,y:-e/2},{x:n-i,y:-e},{x:i,y:-e},{x:0,y:-e/2}],h=R(r,n,e,d);return h.attr("style",t.style),m(t,h),t.intersect=function(o){return w.polygon(t,d,o)},r},"hexagon"),Ot=c(async(a,t)=>{let{shapeSvg:r,bbox:l}=await _(a,t,void 0,!0),s=2,e=l.height+2*t.padding,i=e/s,n=l.width+2*i+t.padding,d=Ct(t.directions,l,t),h=R(r,n,e,d);return h.attr("style",t.style),m(t,h),t.intersect=function(o){return w.polygon(t,d,o)},r},"block_arrow"),Ut=c(async(a,t)=>{let{shapeSvg:r,bbox:l}=await _(a,t,P(t,void 0),!0),s=l.width+t.padding,e=l.height+t.padding,i=[{x:-e/2,y:0},{x:s,y:0},{x:s,y:-e},{x:-e/2,y:-e},{x:0,y:-e/2}];return R(r,s,e,i).attr("style",t.style),t.width=s+e,t.height=e,t.intersect=function(n){return w.polygon(t,i,n)},r},"rect_left_inv_arrow"),At=c(async(a,t)=>{let{shapeSvg:r,bbox:l}=await _(a,t,P(t),!0),s=l.width+t.padding,e=l.height+t.padding,i=[{x:-2*e/6,y:0},{x:s-e/6,y:0},{x:s+2*e/6,y:-e},{x:e/6,y:-e}],n=R(r,s,e,i);return n.attr("style",t.style),m(t,n),t.intersect=function(d){return w.polygon(t,i,d)},r},"lean_right"),Zt=c(async(a,t)=>{let{shapeSvg:r,bbox:l}=await _(a,t,P(t,void 0),!0),s=l.width+t.padding,e=l.height+t.padding,i=[{x:2*e/6,y:0},{x:s+e/6,y:0},{x:s-2*e/6,y:-e},{x:-e/6,y:-e}],n=R(r,s,e,i);return n.attr("style",t.style),m(t,n),t.intersect=function(d){return w.polygon(t,i,d)},r},"lean_left"),zt=c(async(a,t)=>{let{shapeSvg:r,bbox:l}=await _(a,t,P(t,void 0),!0),s=l.width+t.padding,e=l.height+t.padding,i=[{x:-2*e/6,y:0},{x:s+2*e/6,y:0},{x:s-e/6,y:-e},{x:e/6,y:-e}],n=R(r,s,e,i);return n.attr("style",t.style),m(t,n),t.intersect=function(d){return w.polygon(t,i,d)},r},"trapezoid"),qt=c(async(a,t)=>{let{shapeSvg:r,bbox:l}=await _(a,t,P(t,void 0),!0),s=l.width+t.padding,e=l.height+t.padding,i=[{x:e/6,y:0},{x:s-e/6,y:0},{x:s+2*e/6,y:-e},{x:-2*e/6,y:-e}],n=R(r,s,e,i);return n.attr("style",t.style),m(t,n),t.intersect=function(d){return w.polygon(t,i,d)},r},"inv_trapezoid"),Qt=c(async(a,t)=>{let{shapeSvg:r,bbox:l}=await _(a,t,P(t,void 0),!0),s=l.width+t.padding,e=l.height+t.padding,i=[{x:0,y:0},{x:s+e/2,y:0},{x:s,y:-e/2},{x:s+e/2,y:-e},{x:0,y:-e}],n=R(r,s,e,i);return n.attr("style",t.style),m(t,n),t.intersect=function(d){return w.polygon(t,i,d)},r},"rect_right_inv_arrow"),Jt=c(async(a,t)=>{let{shapeSvg:r,bbox:l}=await _(a,t,P(t,void 0),!0),s=l.width+t.padding,e=s/2,i=e/(2.5+s/50),n=l.height+i+t.padding,d="M 0,"+i+" a "+e+","+i+" 0,0,0 "+s+" 0 a "+e+","+i+" 0,0,0 "+-s+" 0 l 0,"+n+" a "+e+","+i+" 0,0,0 "+s+" 0 l 0,"+-n,h=r.attr("label-offset-y",i).insert("path",":first-child").attr("style",t.style).attr("d",d).attr("transform","translate("+-s/2+","+-(n/2+i)+")");return m(t,h),t.intersect=function(o){let y=w.rect(t,o),p=y.x-t.x;if(e!=0&&(Math.abs(p)<t.width/2||Math.abs(p)==t.width/2&&Math.abs(y.y-t.y)>t.height/2-i)){let g=i*i*(1-p*p/(e*e));g!=0&&(g=Math.sqrt(g)),g=i-g,o.y-t.y>0&&(g=-g),y.y+=g}return y},r},"cylinder"),Vt=c(async(a,t)=>{let{shapeSvg:r,bbox:l,halfPadding:s}=await _(a,t,"node "+t.classes+" "+t.class,!0),e=r.insert("rect",":first-child"),i=t.positioned?t.width:l.width+t.padding,n=t.positioned?t.height:l.height+t.padding,d=t.positioned?-i/2:-l.width/2-s,h=t.positioned?-n/2:-l.height/2-s;if(e.attr("class","basic label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",d).attr("y",h).attr("width",i).attr("height",n),t.props){let o=new Set(Object.keys(t.props));t.props.borders&&(Z(e,t.props.borders,i,n),o.delete("borders")),o.forEach(y=>{b.warn(`Unknown node property ${y}`)})}return m(t,e),t.intersect=function(o){return w.rect(t,o)},r},"rect"),Ft=c(async(a,t)=>{let{shapeSvg:r,bbox:l,halfPadding:s}=await _(a,t,"node "+t.classes,!0),e=r.insert("rect",":first-child"),i=t.positioned?t.width:l.width+t.padding,n=t.positioned?t.height:l.height+t.padding,d=t.positioned?-i/2:-l.width/2-s,h=t.positioned?-n/2:-l.height/2-s;if(e.attr("class","basic cluster composite label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",d).attr("y",h).attr("width",i).attr("height",n),t.props){let o=new Set(Object.keys(t.props));t.props.borders&&(Z(e,t.props.borders,i,n),o.delete("borders")),o.forEach(y=>{b.warn(`Unknown node property ${y}`)})}return m(t,e),t.intersect=function(o){return w.rect(t,o)},r},"composite"),Gt=c(async(a,t)=>{let{shapeSvg:r}=await _(a,t,"label",!0);b.trace("Classes = ",t.class);let l=r.insert("rect",":first-child"),s=0,e=0;if(l.attr("width",s).attr("height",e),r.attr("class","label edgeLabel"),t.props){let i=new Set(Object.keys(t.props));t.props.borders&&(Z(l,t.props.borders,s,e),i.delete("borders")),i.forEach(n=>{b.warn(`Unknown node property ${n}`)})}return m(t,l),t.intersect=function(i){return w.rect(t,i)},r},"labelRect");function Z(a,t,r,l){let s=[],e=c(n=>{s.push(n,0)},"addBorder"),i=c(n=>{s.push(0,n)},"skipBorder");t.includes("t")?(b.debug("add top border"),e(r)):i(r),t.includes("r")?(b.debug("add right border"),e(l)):i(l),t.includes("b")?(b.debug("add bottom border"),e(r)):i(r),t.includes("l")?(b.debug("add left border"),e(l)):i(l),a.attr("stroke-dasharray",s.join(" "))}c(Z,"applyNodePropertyBorders");var Kt=c((a,t)=>{let r;t.classes?r="node "+t.classes:r="node default";let l=a.insert("g").attr("class",r).attr("id",t.domId||t.id),s=l.insert("rect",":first-child"),e=l.insert("line"),i=l.insert("g").attr("class","label"),n=t.labelText.flat?t.labelText.flat():t.labelText,d="";typeof n=="object"?d=n[0]:d=n,b.info("Label text abc79",d,n,typeof n=="object");let h=i.node().appendChild(N(d,t.labelStyle,!0,!0)),o={width:0,height:0};if(I(B().flowchart.htmlLabels)){let k=h.children[0],x=T(h);o=k.getBoundingClientRect(),x.attr("width",o.width),x.attr("height",o.height)}b.info("Text 2",n);let y=n.slice(1,n.length),p=h.getBBox(),g=i.node().appendChild(N(y.join?y.join("<br/>"):y,t.labelStyle,!0,!0));if(I(B().flowchart.htmlLabels)){let k=g.children[0],x=T(g);o=k.getBoundingClientRect(),x.attr("width",o.width),x.attr("height",o.height)}let f=t.padding/2;return T(g).attr("transform","translate( "+(o.width>p.width?0:(p.width-o.width)/2)+", "+(p.height+f+5)+")"),T(h).attr("transform","translate( "+(o.width<p.width?0:-(p.width-o.width)/2)+", 0)"),o=i.node().getBBox(),i.attr("transform","translate("+-o.width/2+", "+(-o.height/2-f+3)+")"),s.attr("class","outer title-state").attr("x",-o.width/2-f).attr("y",-o.height/2-f).attr("width",o.width+t.padding).attr("height",o.height+t.padding),e.attr("class","divider").attr("x1",-o.width/2-f).attr("x2",o.width/2+f).attr("y1",-o.height/2-f+p.height+f).attr("y2",-o.height/2-f+p.height+f),m(t,s),t.intersect=function(k){return w.rect(t,k)},l},"rectWithTitle"),te=c(async(a,t)=>{let{shapeSvg:r,bbox:l}=await _(a,t,P(t,void 0),!0),s=l.height+t.padding,e=l.width+s/4+t.padding,i=r.insert("rect",":first-child").attr("style",t.style).attr("rx",s/2).attr("ry",s/2).attr("x",-e/2).attr("y",-s/2).attr("width",e).attr("height",s);return m(t,i),t.intersect=function(n){return w.rect(t,n)},r},"stadium"),ee=c(async(a,t)=>{let{shapeSvg:r,bbox:l,halfPadding:s}=await _(a,t,P(t,void 0),!0),e=r.insert("circle",":first-child");return e.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",l.width/2+s).attr("width",l.width+t.padding).attr("height",l.height+t.padding),b.info("Circle main"),m(t,e),t.intersect=function(i){return b.info("Circle intersect",t,l.width/2+s,i),w.circle(t,l.width/2+s,i)},r},"circle"),re=c(async(a,t)=>{let{shapeSvg:r,bbox:l,halfPadding:s}=await _(a,t,P(t,void 0),!0),e=5,i=r.insert("g",":first-child"),n=i.insert("circle"),d=i.insert("circle");return i.attr("class",t.class),n.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",l.width/2+s+e).attr("width",l.width+t.padding+e*2).attr("height",l.height+t.padding+e*2),d.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",l.width/2+s).attr("width",l.width+t.padding).attr("height",l.height+t.padding),b.info("DoubleCircle main"),m(t,n),t.intersect=function(h){return b.info("DoubleCircle intersect",t,l.width/2+s+e,h),w.circle(t,l.width/2+s+e,h)},r},"doublecircle"),ae=c(async(a,t)=>{let{shapeSvg:r,bbox:l}=await _(a,t,P(t,void 0),!0),s=l.width+t.padding,e=l.height+t.padding,i=[{x:0,y:0},{x:s,y:0},{x:s,y:-e},{x:0,y:-e},{x:0,y:0},{x:-8,y:0},{x:s+8,y:0},{x:s+8,y:-e},{x:-8,y:-e},{x:-8,y:0}],n=R(r,s,e,i);return n.attr("style",t.style),m(t,n),t.intersect=function(d){return w.polygon(t,i,d)},r},"subroutine"),ie=c((a,t)=>{let r=a.insert("g").attr("class","node default").attr("id",t.domId||t.id),l=r.insert("circle",":first-child");return l.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),m(t,l),t.intersect=function(s){return w.circle(t,7,s)},r},"start"),tt=c((a,t,r)=>{let l=a.insert("g").attr("class","node default").attr("id",t.domId||t.id),s=70,e=10;r==="LR"&&(s=10,e=70);let i=l.append("rect").attr("x",-1*s/2).attr("y",-1*e/2).attr("width",s).attr("height",e).attr("class","fork-join");return m(t,i),t.height=t.height+t.padding/2,t.width=t.width+t.padding/2,t.intersect=function(n){return w.rect(t,n)},l},"forkJoin"),ne=c((a,t)=>{let r=a.insert("g").attr("class","node default").attr("id",t.domId||t.id),l=r.insert("circle",":first-child"),s=r.insert("circle",":first-child");return s.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),l.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),m(t,s),t.intersect=function(e){return w.circle(t,7,e)},r},"end"),le=c((a,t)=>{var V;let r=t.padding/2,l=4,s=8,e;t.classes?e="node "+t.classes:e="node default";let i=a.insert("g").attr("class",e).attr("id",t.domId||t.id),n=i.insert("rect",":first-child"),d=i.insert("line"),h=i.insert("line"),o=0,y=l,p=i.insert("g").attr("class","label"),g=0,f=(V=t.classData.annotations)==null?void 0:V[0],k=t.classData.annotations[0]?"«"+t.classData.annotations[0]+"»":"",x=p.node().appendChild(N(k,t.labelStyle,!0,!0)),M=x.getBBox();if(I(B().flowchart.htmlLabels)){let L=x.children[0],v=T(x);M=L.getBoundingClientRect(),v.attr("width",M.width),v.attr("height",M.height)}t.classData.annotations[0]&&(y+=M.height+l,o+=M.width);let u=t.classData.label;t.classData.type!==void 0&&t.classData.type!==""&&(B().flowchart.htmlLabels?u+="&lt;"+t.classData.type+"&gt;":u+="<"+t.classData.type+">");let E=p.node().appendChild(N(u,t.labelStyle,!0,!0));T(E).attr("class","classTitle");let S=E.getBBox();if(I(B().flowchart.htmlLabels)){let L=E.children[0],v=T(E);S=L.getBoundingClientRect(),v.attr("width",S.width),v.attr("height",S.height)}y+=S.height+l,S.width>o&&(o=S.width);let H=[];t.classData.members.forEach(L=>{let v=L.getDisplayDetails(),D=v.displayText;B().flowchart.htmlLabels&&(D=D.replace(/</g,"&lt;").replace(/>/g,"&gt;"));let W=p.node().appendChild(N(D,v.cssStyle?v.cssStyle:t.labelStyle,!0,!0)),C=W.getBBox();if(I(B().flowchart.htmlLabels)){let z=W.children[0],j=T(W);C=z.getBoundingClientRect(),j.attr("width",C.width),j.attr("height",C.height)}C.width>o&&(o=C.width),y+=C.height+l,H.push(W)}),y+=s;let Y=[];if(t.classData.methods.forEach(L=>{let v=L.getDisplayDetails(),D=v.displayText;B().flowchart.htmlLabels&&(D=D.replace(/</g,"&lt;").replace(/>/g,"&gt;"));let W=p.node().appendChild(N(D,v.cssStyle?v.cssStyle:t.labelStyle,!0,!0)),C=W.getBBox();if(I(B().flowchart.htmlLabels)){let z=W.children[0],j=T(W);C=z.getBoundingClientRect(),j.attr("width",C.width),j.attr("height",C.height)}C.width>o&&(o=C.width),y+=C.height+l,Y.push(W)}),y+=s,f){let L=(o-M.width)/2;T(x).attr("transform","translate( "+(-1*o/2+L)+", "+-1*y/2+")"),g=M.height+l}let yt=(o-S.width)/2;return T(E).attr("transform","translate( "+(-1*o/2+yt)+", "+(-1*y/2+g)+")"),g+=S.height+l,d.attr("class","divider").attr("x1",-o/2-r).attr("x2",o/2+r).attr("y1",-y/2-r+s+g).attr("y2",-y/2-r+s+g),g+=s,H.forEach(L=>{T(L).attr("transform","translate( "+-o/2+", "+(-1*y/2+g+s/2)+")");let v=L==null?void 0:L.getBBox();g+=((v==null?void 0:v.height)??0)+l}),g+=s,h.attr("class","divider").attr("x1",-o/2-r).attr("x2",o/2+r).attr("y1",-y/2-r+s+g).attr("y2",-y/2-r+s+g),g+=s,Y.forEach(L=>{T(L).attr("transform","translate( "+-o/2+", "+(-1*y/2+g)+")");let v=L==null?void 0:L.getBBox();g+=((v==null?void 0:v.height)??0)+l}),n.attr("style",t.style).attr("class","outer title-state").attr("x",-o/2-r).attr("y",-(y/2)-r).attr("width",o+t.padding).attr("height",y+t.padding),m(t,n),t.intersect=function(L){return w.rect(t,L)},i},"class_box"),et={rhombus:K,composite:Ft,question:K,rect:Vt,labelRect:Gt,rectWithTitle:Kt,choice:Yt,circle:ee,doublecircle:re,stadium:te,hexagon:jt,block_arrow:Ot,rect_left_inv_arrow:Ut,lean_right:At,lean_left:Zt,trapezoid:zt,inv_trapezoid:qt,rect_right_inv_arrow:Qt,cylinder:Jt,start:ie,end:ne,note:Xt,subroutine:ae,fork:tt,join:tt,class_box:le},X={},pe=c(async(a,t,r)=>{let l,s;if(t.link){let e;B().securityLevel==="sandbox"?e="_top":t.linkTarget&&(e=t.linkTarget||"_blank"),l=a.insert("svg:a").attr("xlink:href",t.link).attr("target",e),s=await et[t.shape](l,t,r)}else s=await et[t.shape](a,t,r),l=s;return t.tooltip&&s.attr("title",t.tooltip),t.class&&s.attr("class","node default "+t.class),X[t.id]=l,t.haveCallback&&X[t.id].attr("class",X[t.id].attr("class")+" clickable"),l},"insertNode"),ge=c((a,t)=>{X[t.id]=a},"setNodeElem"),xe=c(()=>{X={}},"clear"),fe=c(a=>{let t=X[a.id];b.trace("Transforming node",a.diff,a,"translate("+(a.x-a.width/2-5)+", "+a.width/2+")");let r=8,l=a.diff||0;return a.clusterNode?t.attr("transform","translate("+(a.x+l-a.width/2)+", "+(a.y-a.height/2-r)+")"):t.attr("transform","translate("+a.x+", "+a.y+")"),l},"positionNode"),se=c((a,t,r,l,s)=>{t.arrowTypeStart&&rt(a,"start",t.arrowTypeStart,r,l,s),t.arrowTypeEnd&&rt(a,"end",t.arrowTypeEnd,r,l,s)},"addEdgeMarkers"),de={arrow_cross:"cross",arrow_point:"point",arrow_barb:"barb",arrow_circle:"circle",aggregation:"aggregation",extension:"extension",composition:"composition",dependency:"dependency",lollipop:"lollipop"},rt=c((a,t,r,l,s,e)=>{let i=de[r];if(!i){b.warn(`Unknown arrow type: ${r}`);return}let n=t==="start"?"Start":"End";a.attr(`marker-${t}`,`url(${l}#${s}_${e}-${i}${n})`)},"addEdgeMarker"),A={},$={},be=c(()=>{A={},$={}},"clear"),ue=c((a,t)=>{let r=B(),l=I(r.flowchart.htmlLabels),s=t.labelType==="markdown"?it(a,t.label,{style:t.labelStyle,useHtmlLabels:l,addSvgBackground:!0},r):N(t.label,t.labelStyle),e=a.insert("g").attr("class","edgeLabel"),i=e.insert("g").attr("class","label");i.node().appendChild(s);let n=s.getBBox();if(l){let h=s.children[0],o=T(s);n=h.getBoundingClientRect(),o.attr("width",n.width),o.attr("height",n.height)}i.attr("transform","translate("+-n.width/2+", "+-n.height/2+")"),A[t.id]=e,t.width=n.width,t.height=n.height;let d;if(t.startLabelLeft){let h=N(t.startLabelLeft,t.labelStyle),o=a.insert("g").attr("class","edgeTerminals"),y=o.insert("g").attr("class","inner");d=y.node().appendChild(h);let p=h.getBBox();y.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),$[t.id]||($[t.id]={}),$[t.id].startLeft=o,U(d,t.startLabelLeft)}if(t.startLabelRight){let h=N(t.startLabelRight,t.labelStyle),o=a.insert("g").attr("class","edgeTerminals"),y=o.insert("g").attr("class","inner");d=o.node().appendChild(h),y.node().appendChild(h);let p=h.getBBox();y.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),$[t.id]||($[t.id]={}),$[t.id].startRight=o,U(d,t.startLabelRight)}if(t.endLabelLeft){let h=N(t.endLabelLeft,t.labelStyle),o=a.insert("g").attr("class","edgeTerminals"),y=o.insert("g").attr("class","inner");d=y.node().appendChild(h);let p=h.getBBox();y.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),o.node().appendChild(h),$[t.id]||($[t.id]={}),$[t.id].endLeft=o,U(d,t.endLabelLeft)}if(t.endLabelRight){let h=N(t.endLabelRight,t.labelStyle),o=a.insert("g").attr("class","edgeTerminals"),y=o.insert("g").attr("class","inner");d=y.node().appendChild(h);let p=h.getBBox();y.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),o.node().appendChild(h),$[t.id]||($[t.id]={}),$[t.id].endRight=o,U(d,t.endLabelRight)}return s},"insertEdgeLabel");function U(a,t){B().flowchart.htmlLabels&&a&&(a.style.width=t.length*9+"px",a.style.height="12px")}c(U,"setTerminalWidth");var we=c((a,t)=>{b.debug("Moving label abc88 ",a.id,a.label,A[a.id],t);let r=t.updatedPath?t.updatedPath:t.originalPath,l=B(),{subGraphTitleTotalMargin:s}=gt(l);if(a.label){let e=A[a.id],i=a.x,n=a.y;if(r){let d=O.calcLabelPosition(r);b.debug("Moving label "+a.label+" from (",i,",",n,") to (",d.x,",",d.y,") abc88"),t.updatedPath&&(i=d.x,n=d.y)}e.attr("transform",`translate(${i}, ${n+s/2})`)}if(a.startLabelLeft){let e=$[a.id].startLeft,i=a.x,n=a.y;if(r){let d=O.calcTerminalLabelPosition(a.arrowTypeStart?10:0,"start_left",r);i=d.x,n=d.y}e.attr("transform",`translate(${i}, ${n})`)}if(a.startLabelRight){let e=$[a.id].startRight,i=a.x,n=a.y;if(r){let d=O.calcTerminalLabelPosition(a.arrowTypeStart?10:0,"start_right",r);i=d.x,n=d.y}e.attr("transform",`translate(${i}, ${n})`)}if(a.endLabelLeft){let e=$[a.id].endLeft,i=a.x,n=a.y;if(r){let d=O.calcTerminalLabelPosition(a.arrowTypeEnd?10:0,"end_left",r);i=d.x,n=d.y}e.attr("transform",`translate(${i}, ${n})`)}if(a.endLabelRight){let e=$[a.id].endRight,i=a.x,n=a.y;if(r){let d=O.calcTerminalLabelPosition(a.arrowTypeEnd?10:0,"end_right",r);i=d.x,n=d.y}e.attr("transform",`translate(${i}, ${n})`)}},"positionEdgeLabel"),oe=c((a,t)=>{let r=a.x,l=a.y,s=Math.abs(t.x-r),e=Math.abs(t.y-l),i=a.width/2,n=a.height/2;return s>=i||e>=n},"outsideNode"),he=c((a,t,r)=>{b.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${a.x} y:${a.y} w:${a.width} h:${a.height}`);let l=a.x,s=a.y,e=Math.abs(l-r.x),i=a.width/2,n=r.x<t.x?i-e:i+e,d=a.height/2,h=Math.abs(t.y-r.y),o=Math.abs(t.x-r.x);if(Math.abs(s-t.y)*i>Math.abs(l-t.x)*d){let y=r.y<t.y?t.y-d-s:s-d-t.y;n=o*y/h;let p={x:r.x<t.x?r.x+n:r.x-o+n,y:r.y<t.y?r.y+h-y:r.y-h+y};return n===0&&(p.x=t.x,p.y=t.y),o===0&&(p.x=t.x),h===0&&(p.y=t.y),b.debug(`abc89 topp/bott calc, Q ${h}, q ${y}, R ${o}, r ${n}`,p),p}else{r.x<t.x?n=t.x-i-l:n=l-i-t.x;let y=h*n/o,p=r.x<t.x?r.x+o-n:r.x-o+n,g=r.y<t.y?r.y+y:r.y-y;return b.debug(`sides calc abc89, Q ${h}, q ${y}, R ${o}, r ${n}`,{_x:p,_y:g}),n===0&&(p=t.x,g=t.y),o===0&&(p=t.x),h===0&&(g=t.y),{x:p,y:g}}},"intersection"),at=c((a,t)=>{b.debug("abc88 cutPathAtIntersect",a,t);let r=[],l=a[0],s=!1;return a.forEach(e=>{if(!oe(t,e)&&!s){let i=he(t,l,e),n=!1;r.forEach(d=>{n=n||d.x===i.x&&d.y===i.y}),r.some(d=>d.x===i.x&&d.y===i.y)||r.push(i),s=!0}else l=e,s||r.push(e)}),r},"cutPathAtIntersect"),me=c(function(a,t,r,l,s,e,i){let n=r.points;b.debug("abc88 InsertEdge: edge=",r,"e=",t);let d=!1,h=e.node(t.v);var o=e.node(t.w);o!=null&&o.intersect&&(h!=null&&h.intersect)&&(n=n.slice(1,r.points.length-1),n.unshift(h.intersect(n[0])),n.push(o.intersect(n[n.length-1]))),r.toCluster&&(b.debug("to cluster abc88",l[r.toCluster]),n=at(r.points,l[r.toCluster].node),d=!0),r.fromCluster&&(b.debug("from cluster abc88",l[r.fromCluster]),n=at(n.reverse(),l[r.fromCluster].node).reverse(),d=!0);let y=n.filter(S=>!Number.isNaN(S.y)),p=bt;r.curve&&(s==="graph"||s==="flowchart")&&(p=r.curve);let{x:g,y:f}=xt(r),k=ft().x(g).y(f).curve(p),x;switch(r.thickness){case"normal":x="edge-thickness-normal";break;case"thick":x="edge-thickness-thick";break;case"invisible":x="edge-thickness-thick";break;default:x=""}switch(r.pattern){case"solid":x+=" edge-pattern-solid";break;case"dotted":x+=" edge-pattern-dotted";break;case"dashed":x+=" edge-pattern-dashed";break}let M=a.append("path").attr("d",k(y)).attr("id",r.id).attr("class"," "+x+(r.classes?" "+r.classes:"")).attr("style",r.style),u="";(B().flowchart.arrowMarkerAbsolute||B().state.arrowMarkerAbsolute)&&(u=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,u=u.replace(/\(/g,"\\("),u=u.replace(/\)/g,"\\)")),se(M,r,u,i,s);let E={};return d&&(E.updatedPath=n),E.originalPath=r.points,E},"insertEdge");export{be as H,ue as I,we as N,me as R,N as _,ge as d,fe as g,Ht as h,ye as p,m as w,xe as x,pe as y};