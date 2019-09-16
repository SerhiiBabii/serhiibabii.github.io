(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),s=a.n(c),l=a(7),i=a(8),o=a(6),u=a(1),m=a(2),p=a(4),g=a(3),d=a(5),h=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.props.filterItems.map(function(e){return r.a.createElement("option",{key:e.id,value:e.value},e.title)})}}]),t}(n.Component),f=function(e){var t=e.name,a=e.id,n=e.value,c=e.handleSelect,s=e.filterItems;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e:"),r.a.createElement("select",{name:t,className:"form-control",id:a,value:n,onChange:c},r.a.createElement(h,{filterItems:s})))},b=function(e){var t=e.genres,a=e.addGenre;return r.a.createElement("div",{className:"btn-group row"},t.map(function(e){return r.a.createElement("label",{key:e.id,className:"col-12"},e.name,":",r.a.createElement("input",{name:e.id,type:"checkbox",onChange:a}))}))},v=function(e){var t=e.page,a=e.total_pages,n=e.changePage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"btn-group col-12"},r.a.createElement("button",{type:"button",className:"btn btn-primary",disabled:1===t,onClick:function(){n(t-1)}},"Back"),r.a.createElement("button",{type:"button",className:"btn btn-primary",disabled:t>=a,onClick:function(){n(t+1)}},"Forward")),r.a.createElement("p",null,"Current page: ",r.a.createElement("strong",null,t)," from total pages:"," ",r.a.createElement("strong",null,a)))},y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={filterItems:[{id:1,title:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e",value:"popularity.desc"},{id:2,title:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043f\u043e \u0432\u043e\u0437\u0440\u043e\u0441\u0442\u0430\u043d\u0438\u044e",value:"popularity.asc"},{id:3,title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e",value:"vote_average.desc"},{id:4,title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043f\u043e \u0432\u043e\u0437\u0440\u043e\u0441\u0442\u0430\u043d\u0438\u044e",value:"vote_average.asc"}],filterYear:[{id:1,title:2019,value:2019},{id:2,title:2018,value:2018},{id:3,title:2017,value:2017},{id:4,title:2016,value:2016}]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filters,a=t.sort_by,n=t.year,c=e.page,s=e.total_pages,l=e.genres,i=e.handleSelect,o=e.changePage,u=e.resetFilters,m=e.addGenre,p=this.state,g=p.filterItems,d=p.filterYear;return r.a.createElement("form",{className:"mb-3"},r.a.createElement(f,{name:"sort_by",id:"sort_by",value:a,handleSelect:i,filterItems:g}),r.a.createElement(f,{name:"year",id:"year",value:n,handleSelect:i,filterItems:d}),r.a.createElement(v,{page:c,total_pages:s,changePage:o}),r.a.createElement("button",{type:"button",className:"btn btn-secondary col-12",onClick:u},"Reset filters"),r.a.createElement(b,{genres:l,addGenre:m}))}}]),t}(r.a.Component),j=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.item,t=e.backdrop_path||e.poster_path;return r.a.createElement("div",{className:"card",style:{width:"100%"}},r.a.createElement("img",{className:"card-img-top card-img--height",src:t?"https://image.tmdb.org/t/p/w500".concat(t):"./images/default-movie-poster.jpg",alt:"poster"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title"},e.title),r.a.createElement("div",{className:"card-text"},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433: ",e.vote_average)))}}]),t}(r.a.Component),E="https://api.themoviedb.org/3",O="b1a938ee7f324798663cd0727c5783ee",_=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(g.a)(t).call(this))).changedSortBy=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=t.sort_by,s=t.year,l="".concat(E,"/discover/movie?api_key=").concat(O,"&language=ru-RU&sort_by=").concat(c,"&page=").concat(a,"&primary_release_year=").concat(s,"&with_genres=").concat(r);fetch(l).then(function(e){return e.json()}).then(function(t){n(t.total_pages),e.setState({movies:t.results})})},e.state={movies:[]},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.changedSortBy(this.props.filters,this.props.page,this.props.currentTotalPages,this.props.genre)}},{key:"componentDidUpdate",value:function(e){e.filters.sort_by===this.props.filters.sort_by&&e.page===this.props.page&&e.filters.year===this.props.filters.year&&e.genre===this.props.genre||this.changedSortBy(this.props.filters,this.props.page,this.props.currentTotalPages,this.props.genre)}},{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",{className:"row"},e.map(function(e){return r.a.createElement("div",{key:e.id,className:"col-6 mb-4"},r.a.createElement(j,{item:e}))}))}}]),t}(n.Component),N={filters:{sort_by:"popularity.desc",year:2019},page:1,genres:[],genre:""},k=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(g.a)(t).call(this))).handleSelect=function(t){var a=t.target.name,n=t.target.value;e.setState(function(e){return Object(o.a)({},e,{filters:Object(o.a)({},e.filters,Object(i.a)({},a,n)),page:1})})},e.changePage=function(t){e.setState(Object(o.a)({},e.state,{page:t}))},e.currentTotalPages=function(t){e.setState(Object(o.a)({},e.state,{total_pages:t}))},e.resetFilters=function(t){e.getGenres(),e.setState(Object(o.a)({},N))},e.getGenres=function(){var t="".concat(E,"/genre/movie/list?api_key=").concat(O,"&language=ru-Ru");fetch(t).then(function(e){return e.json()}).then(function(t){e.setState({genres:t.genres})})},e.toggleGenre=function(e,t){var a=e.findIndex(function(e){return e===t});return[].concat(Object(l.a)(e.slice(0,a)),Object(l.a)(e.slice(a+1)))},e.addGenre=function(t){var a=t.target.name,n=Object(l.a)(e.state.genre);n=e.state.genre.includes(a)?e.toggleGenre(n,a):[].concat(Object(l.a)(n),[a]),e.setState(function(){return Object(o.a)({},e.state,{page:1,genre:n})})},e.state=Object(o.a)({},N,{total_pages:""}),e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getGenres()}},{key:"render",value:function(){var e=this.state,t=e.filters,a=e.page,n=e.total_pages,c=e.genres,s=e.genre;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"card",style:{width:"100%"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",null,"\u0424\u0438\u043b\u044c\u0442\u0440\u044b:"),r.a.createElement(y,{filters:t,handleSelect:this.handleSelect,page:a,total_pages:n,genres:c,genre:s,changePage:this.changePage,resetFilters:this.resetFilters,addGenre:this.addGenre})))),r.a.createElement("div",{className:"col-8"},r.a.createElement(_,{filters:t,page:a,total_pages:n,genre:s,currentTotalPages:this.currentTotalPages}))))}}]),t}(r.a.Component);a(16);s.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.c82373fa.chunk.js.map