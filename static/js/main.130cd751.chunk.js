(this["webpackJsonpreact-hooks-movie"]=this["webpackJsonpreact-hooks-movie"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),l=(a(10),a(2)),i=a(1),s=(a(11),function(e){return r.a.createElement("header",{className:"App-header"},r.a.createElement("h2",null,e.text))}),u=function(e){var t=e.movie,a="N/A"===t.Poster?"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg":t.Poster;return r.a.createElement("div",{className:"movie"},r.a.createElement("h2",null,t.Title),r.a.createElement("div",null,r.a.createElement("img",{width:"200",alt:"The movie titled: ".concat(t.Title),src:a})),r.a.createElement("p",null,"(",t.Year,")"))},m=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],o=a[1];return r.a.createElement("form",{className:"search"},r.a.createElement("input",{value:c,onChange:function(e){o(e.target.value)},type:"text"}),r.a.createElement("input",{onClick:function(t){t.preventDefault(),e.search(c),o("")},type:"submit",value:"SEARCH"}))},E={loading:!0,movies:[],errorMessage:null},p=function(e,t){switch(t.type){case"SEARCH_MOVIES_REQUEST":return Object(i.a)(Object(i.a)({},e),{},{loading:!0,errorMessage:null});case"SEARCH_MOVIES_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{loading:!1,movies:t.payload});case"SEARCH_MOVIES_FAILURE":return Object(i.a)(Object(i.a)({},e),{},{loading:!1,errorMessage:t.error});default:return e}},S=function(){var e=Object(n.useReducer)(p,E),t=Object(l.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){fetch("https://www.omdbapi.com/?s=man&apikey=4a3b711b").then((function(e){return e.json()})).then((function(e){c({type:"SEARCH_MOVIES_SUCCESS",payload:e.Search})}))}),[]);var o=a.movies,i=a.errorMessage,S=a.loading;return r.a.createElement("div",{className:"App"},r.a.createElement(s,{text:"HOOKED"}),r.a.createElement(m,{search:function(e){c({type:"SEARCH_MOVIES_REQUEST"}),fetch("https://www.omdbapi.com/?s=".concat(e,"&apikey=4a3b711b")).then((function(e){return e.json()})).then((function(e){"True"===e.Response?c({type:"SEARCH_MOVIES_SUCCESS",payload:e.Search}):c({type:"SEARCH_MOVIES_FAILURE",error:e.Error})}))}}),r.a.createElement("p",{className:"App-intro"},"Sharing a few of our favourite movies"),r.a.createElement("div",{className:"movies"},S&&!i?r.a.createElement("span",null,"loading... "):i?r.a.createElement("div",{className:"errorMessage"},i):o.map((function(e,t){return r.a.createElement(u,{key:"".concat(t,"-").concat(e.Title),movie:e})}))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.130cd751.chunk.js.map