(this.webpackJsonptest_yarandin_starwars=this.webpackJsonptest_yarandin_starwars||[]).push([[0],{28:function(e,a,t){e.exports=t(47)},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(21),s=t.n(r),l=t(9),i=t(5),m=t(6),u=t(8),o=t.n(u),f=t(11),p=t(22),d=t(23),h=function(){function e(){Object(p.a)(this,e)}return Object(d.a)(e,[{key:"getResource",value:function(){var e=Object(f.a)(o.a.mark((function e(a){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://swapi.co/api").concat(a));case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Could not fetch");case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"getAll",value:function(e){return this.getResource(e)}}]),e}(),_=t(27),E=t(24),N=t.n(E),b=function(e){var a=e.films,t=Object(n.useState)(""),r=Object(i.a)(t,2),s=r[0],m=r[1],u=Object(n.useState)(""),o=Object(i.a)(u,2),f=o[0],p=o[1],d=N()(p,1e3),h=f?a.filter((function(e){return e.title.toLowerCase().includes(f.toLowerCase())})):a,E=Object(_.a)(h);return c.a.createElement("main",{className:"main"},c.a.createElement("div",{className:"stars"}),c.a.createElement("div",{className:"clouds"}),c.a.createElement("h1",{className:"main__heading"},"Star wars universe"),c.a.createElement("div",{className:"main__search"},c.a.createElement("input",{type:"text",placeholder:"Search...",value:s,onChange:function(e){d(e.target.value),m(e.target.value)}}),c.a.createElement("button",{className:"button",type:"button",onClick:function(){return E.sort((function(e,a){return e.title.localeCompare(a.title)}))}},"Sort")),c.a.createElement("section",{className:"films"},E.map((function(e){return c.a.createElement(l.b,{to:"/".concat(e.episode_id),className:"films__link",key:e.episode_id},c.a.createElement("article",{className:"films__article"},c.a.createElement("h2",{className:"films__heading"},e.title)))}))))},v=function(e){var a=e.id,t=e.films,r=JSON.parse(t).find((function(e){return e.episode_id===+a})),s=Object(n.useState)([]),l=Object(i.a)(s,2),m=l[0],u=l[1],p=Object(n.useState)([]),d=Object(i.a)(p,2),h=d[0],_=d[1],E=Object(n.useState)([]),N=Object(i.a)(E,2),b=N[0],v=N[1],g=r.characters,O=r.planets,j=r.starships;function k(e,a){return w.apply(this,arguments)}function w(){return(w=Object(f.a)(o.a.mark((function e(a,t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(a.map((function(e){return fetch(e).then((function(e){return e.json()}))})));case 2:n=e.sent,c=JSON.stringify(n,null,2),t(JSON.parse(c));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){k(g,u),k(O,_),k(j,v)}),[]),c.a.createElement("section",{className:"episode"},0!==m.length&&0!==h.length&&0!==b.length?c.a.createElement("section",{className:"film"},c.a.createElement("h1",{className:"film__heading"},r.title),c.a.createElement("article",{className:"film__prev"},c.a.createElement("p",{className:"film__text"},r.opening_crawl)),c.a.createElement("p",{className:"film__paragraph"},c.a.createElement("span",null,"Director:")," ".concat(r.director)),c.a.createElement("p",{className:"film__paragraph"},c.a.createElement("span",null,"Producer:")," ".concat(r.producer)),c.a.createElement("p",{className:"film__paragraph"},c.a.createElement("span",null,"Release date:")," ".concat(r.release_date)),c.a.createElement("div",{className:"film__details details"},c.a.createElement("div",{className:"details__block"},c.a.createElement("h3",{className:"details__head"},"Heroes"),m.map((function(e){return c.a.createElement("h4",{key:e.name,className:"details_heading"},e.name)}))),c.a.createElement("div",{className:"details__block"},c.a.createElement("h3",{className:"details__head"},"Planets"),h.map((function(e){return c.a.createElement("h4",{key:e.name,className:"details_heading"},e.name)}))),c.a.createElement("div",{className:"details__block"},c.a.createElement("h3",{className:"details__head"},"Starships"),b.map((function(e){return c.a.createElement("h4",{key:e.name,className:"details_heading"},e.name)}))))):c.a.createElement("section",{className:"section_spinner"},c.a.createElement("div",{className:"spinner"})))},g=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],s=new h;return Object(n.useEffect)((function(){s.getAll("/films/").then((function(e){r(e.results)}))}),[]),c.a.createElement(m.c,null,c.a.createElement(m.a,{exact:!0,path:"/"},c.a.createElement(b,{films:t})),c.a.createElement(m.a,{path:"/:id",render:function(e){var a=e.match.params.id;return c.a.createElement(v,{id:a,films:JSON.stringify(t)})}}))};t(46);s.a.render(c.a.createElement(l.a,null,c.a.createElement(g,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.b3082323.chunk.js.map