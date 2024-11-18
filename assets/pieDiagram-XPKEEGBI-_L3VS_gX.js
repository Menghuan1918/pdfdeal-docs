import{c as N}from"./chunk-4KE642ED-CajXLkcu.js";import{p as V}from"./gitGraph-YCYPL57B-MEVJTYR7-Cqk1ZymX.js";import{m as r,J as y,Q as X,as as Y,aT as G,aV as I,aW as M,aX as K,aY as j,k as q,b as H,F as U,B as Z,w as _,A as ee,L as te,v as ae,au as ie}from"./mermaid.esm.min-BJK2onOV.js";import"./chunk-5ZJXQJOJ-91yLoE_0.js";import"./app-D1JWQJZF.js";var re=ie.pie,D={sections:new Map,showData:!1},u=D.sections,T=D.showData,le=structuredClone(re),se=r(()=>structuredClone(le),"getConfig"),oe=r(()=>{u=new Map,T=D.showData,ae()},"clear"),ne=r(({label:e,value:a})=>{u.has(e)||(u.set(e,a),y.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),pe=r(()=>u,"getSections"),de=r(e=>{T=e},"setShowData"),ce=r(()=>T,"getShowData"),O={getConfig:se,clear:oe,setDiagramTitle:te,getDiagramTitle:ee,setAccTitle:_,getAccTitle:Z,setAccDescription:U,getAccDescription:H,addSection:ne,getSections:pe,setShowData:de,getShowData:ce},fe=r((e,a)=>{N(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),ge={parse:r(async e=>{let a=await V("pie",e);y.debug(a),fe(a,O)},"parse")},me=r(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),ue=me,he=r(e=>{let a=[...e.entries()].map(l=>({label:l[0],value:l[1]})).sort((l,h)=>h.value-l.value);return K().value(l=>l.value)(a)},"createPieArcs"),xe=r((e,a,l,h)=>{y.debug(`rendering pie chart
`+e);let d=h.db,v=X(),C=Y(d.getConfig(),v.pie),b=40,s=18,c=4,o=450,x=o,S=G(a),n=S.append("g");n.attr("transform","translate("+x/2+","+o/2+")");let{themeVariables:i}=v,[k]=I(i.pieOuterStrokeWidth);k??(k=2);let A=C.textPosition,f=Math.min(x,o)/2-b,R=M().innerRadius(0).outerRadius(f),W=M().innerRadius(f*A).outerRadius(f*A);n.append("circle").attr("cx",0).attr("cy",0).attr("r",f+k/2).attr("class","pieOuterCircle");let z=d.getSections(),w=he(z),B=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12],p=j(B);n.selectAll("mySlices").data(w).enter().append("path").attr("d",R).attr("fill",t=>p(t.data.label)).attr("class","pieCircle");let F=0;z.forEach(t=>{F+=t}),n.selectAll("mySlices").data(w).enter().append("text").text(t=>(t.data.value/F*100).toFixed(0)+"%").attr("transform",t=>"translate("+W.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),n.append("text").text(d.getDiagramTitle()).attr("x",0).attr("y",-(o-50)/2).attr("class","pieTitleText");let $=n.selectAll(".legend").data(p.domain()).enter().append("g").attr("class","legend").attr("transform",(t,g)=>{let m=s+c,Q=m*p.domain().length/2,E=12*s,J=g*m-Q;return"translate("+E+","+J+")"});$.append("rect").attr("width",s).attr("height",s).style("fill",p).style("stroke",p),$.data(w).append("text").attr("x",s+c).attr("y",s-c).text(t=>{let{label:g,value:m}=t.data;return d.getShowData()?`${g} [${m}]`:g});let P=Math.max(...$.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),L=x+b+s+c+P;S.attr("viewBox",`0 0 ${L} ${o}`),q(S,o,L,C.useMaxWidth)},"draw"),Se={draw:xe},ve={parser:ge,db:O,renderer:Se,styles:ue};export{ve as diagram};
