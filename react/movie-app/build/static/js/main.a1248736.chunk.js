(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{49:function(e,t,a){e.exports=a(79)},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),i=a(24),o=a.n(i),c=a(28),l=a(16),u=a(3),p=a(6),d=a(7),m=a(10),h=a(8),v=a(9),g=a(88),f=a(80),b=function(e){var t=e.title,a=e.type,n=e.id,r=e.placeholder,i=e.name,o=e.value,c=e.error,l=e.onChange,u=e.onBlur;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:n},t),s.a.createElement("input",{type:a,className:"form-control",id:n,placeholder:r,name:i,value:o,onChange:l,onBlur:u}),c&&s.a.createElement("div",{className:"invalid-feedback"},c))},E=a(27),y=a.n(E),O="https://api.themoviedb.org/3",j="b1a938ee7f324798663cd0727c5783ee",k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(a,n){fetch(e,t).then(function(e){if(e.status<400)return e.json();throw e}).then(function(e){a(e)}).catch(function(e){e.json().then(function(e){n(e)})})})},w=function(){function e(){Object(p.a)(this,e)}return Object(d.a)(e,null,[{key:"get",value:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).params,a=void 0===t?{}:t,n=Object(u.a)({api_key:j},a);return k("".concat(O).concat(e,"?").concat(y.a.stringify(n)),{mode:"cors",headers:{"Content-type":"application/json"}})}},{key:"post",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.params,n=void 0===a?{}:a,r=t.body,s=Object(u.a)({api_key:j},n);return k("".concat(O).concat(e,"?").concat(y.a.stringify(s)),{method:"POST",mode:"cors",headers:{"Content-type":"application/json",Accept:"application/json"},body:JSON.stringify(r)})}},{key:"mark",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.params,n=void 0===a?{}:a,r=t.body,s=Object(u.a)({api_key:j},n);return k("".concat(O).concat(e,"?").concat(y.a.stringify(s)),{method:"POST",mode:"cors",headers:{"Content-type":"application/json;charset=utf-8"},body:JSON.stringify(r)})}},{key:"delete",value:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).params,a=void 0===t?{}:t,n=Object(u.a)({api_key:j},a);return k("".concat(O).concat(e,"?").concat(y.a.stringify(n)),{method:"DELETE",mode:"cors",headers:{"Content-type":"application/json"}})}}]),e}(),_=function(e){return function(t){function a(){return Object(p.a)(this,a),Object(m.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(v.a)(a,t),Object(d.a)(a,[{key:"render",value:function(){var t=this;return s.a.createElement(pe.Consumer,null,function(a){return s.a.createElement(e,Object.assign({},t.props,a))})}}]),a}(s.a.Component)},M=_((n=function(e){var t=e.userName,a=e.password,n=e.repeatPassword,r=e.submitting,i=e.errors,o=e.onChange,c=e.handleBlur,l=e.onSubmit;return s.a.createElement("div",{className:"form-login-container"},s.a.createElement("form",{className:"form-login"},s.a.createElement("h1",{className:"h3 mb-3 font-weight-normal text-center"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),s.a.createElement(b,{title:"User",type:"text",id:"username",placeholder:"User",name:"userName",value:t,error:i.userName,onChange:o,onBlur:c}),s.a.createElement(b,{title:"Password",type:"password",id:"password",placeholder:"Password",name:"password",value:a,error:i.password,onChange:o,onBlur:c}),s.a.createElement(b,{title:"Repeat password",type:"password",id:"repeatPassword",placeholder:"Repeat password",name:"repeatPassword",value:n,error:i.repeatPassword,onChange:o,onBlur:c}),s.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block",onClick:l,disabled:r},"\u0412\u0445\u043e\u0434"),i.base&&s.a.createElement("div",{className:"invalid-feedback text-center"},i.base)))},function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={userName:"",password:"",repeatPassword:"",submitting:!1,errors:{}},a._isMounted=!1,a.onChange=function(e){var t=e.target.name,n=e.target.value;a.setState(function(e){var a;return Object(u.a)({},e,(a={},Object(l.a)(a,t,n),Object(l.a)(a,"errors",Object(u.a)({},e.errors,Object(l.a)({base:null},t,null))),a))})},a.handleBlur=function(e){var t=a.validateFields(e);Object.keys(t).length>0&&a.setState(function(e){return Object(u.a)({},e,{errors:Object(u.a)({},e.errors,t)})})},a.validateFields=function(e){var t={};return"username"!==e.target.id&&"submit"!==e.target.type||/^[a-zA-Z0-9]{6,}$/.test(a.state.userName)||(t.userName="Invalid username"),"password"!==e.target.id&&"submit"!==e.target.type||/(?=^.{8,}$)(?=.*\d)(?=.*[a-zA-Z]).*$/.test(a.state.password)||(t.password="Invalid password"),"repeatPassword"!==e.target.id&&"submit"!==e.target.type||a.state.password===a.state.repeatPassword||(t.repeatPassword="Must be equal password"),t},a.onSubmit=function(e){e.preventDefault();var t=a.validateFields(e);Object.keys(t).length>0?a.setState(function(e){return Object(u.a)({},e,{errors:Object(u.a)({},e.errors,t)})}):a.onLogIn()},a.onLogIn=function(){a.setState(Object(u.a)({},a.state,{submitting:!0})),w.get("/authentication/token/new").then(function(e){return w.post("/authentication/token/validate_with_login",{body:{username:a.state.userName,password:a.state.password,request_token:e.request_token}})}).then(function(e){return w.post("/authentication/session/new",{body:{request_token:e.request_token}})}).then(function(e){return a.props.updateSessionId(e.session_id),w.get("/account",{params:{session_id:e.session_id}})}).then(function(e){a.props.updateUser(e),a.props.toggleModal(),a._isMounted&&a.setState(Object(u.a)({},a.state,{submitting:!1}))}).catch(function(e){console.log("error",e),a.setState(Object(u.a)({},a.state,{submitting:!1,errors:{base:e.status_message}}))})},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this.state,t=e.userName,a=e.password,r=e.repeatPassword,i=e.submitting,o=e.errors;return s.a.createElement(n,{userName:t,password:a,repeatPassword:r,submitting:i,onChange:this.onChange,handleBlur:this.handleBlur,onSubmit:this.onSubmit,errors:o})}}]),t}(s.a.Component))),N=_(function(e){return s.a.createElement("div",null,s.a.createElement("button",{className:"btn btn-success",type:"button",onClick:e.toggleModal},"Log In"),s.a.createElement(g.a,{isOpen:e.showModal,toggle:e.toggleModal},s.a.createElement(f.a,null,s.a.createElement(M,null))))}),S=a(81),C=a(89),P=a(82),F=a(83),D=_(function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={dropdownOpen:!1},a.toggleDropdown=function(){a.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.onLogOut;return s.a.createElement(S.a,{isOpen:this.state.dropdownOpen,toggle:this.toggleDropdown},s.a.createElement(C.a,{tag:"div",onClick:this.toggleDropdown,"data-toggle":"dropdown","aria-expanded":this.state.dropdownOpen},s.a.createElement("img",{width:"40",className:"rounded-circle",src:"https://secure.gravatar.com/avatar/".concat(t.avatar.gravatar.hash,'.jpg?s=64"'),alt:"avatar",onClick:this.toggleDropdown})),s.a.createElement(P.a,{right:!0},s.a.createElement(F.a,{onClick:a},"\u0412\u044b\u0439\u0442\u0438")))}}]),t}(r.Component)),U=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.user;return s.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},s.a.createElement("div",{className:"container"},s.a.createElement("ul",{className:"navbar-nav"},s.a.createElement("li",{className:"nav-item active"},s.a.createElement("a",{href:"/",className:"nav-link"},"Home"))),e?s.a.createElement(D,null):s.a.createElement(N,null)))}}]),t}(r.Component),A=a(29),T=function(e){return e.filterItems.map(function(e){return s.a.createElement("option",{key:e.id,value:e.value},e.title)})},I=function(e){var t=e.name,a=e.id,n=e.value,r=e.handleSelect,i=e.filterItems;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:a},"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e:"),s.a.createElement("select",{name:t,className:"form-control",id:a,value:n,onChange:r},s.a.createElement(T,{filterItems:i})))},W=_(function(e){return function(t){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={genres:[]},t.getGenres=function(){var e="".concat(O,"/genre/movie/list?api_key=").concat(j,"&language=ru-Ru");fetch(e).then(function(e){return e.json()}).then(function(e){t.setState({genres:e.genres})})},t}return Object(v.a)(a,t),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getGenres()}},{key:"componentDidUpdate",value:function(e){var t=this;e.filters.genre!==this.props.filters.genre&&""===this.props.filters.genre&&(this.setState(function(){return Object(u.a)({},t.state,{genres:[]})}),this.getGenres())}},{key:"render",value:function(){var t=this.props.addGenre;return s.a.createElement(e,{genres:this.state.genres,addGenre:t})}}]),a}(s.a.Component)}(function(e){var t=e.addGenre,a=e.genres;return s.a.createElement("div",{className:"btn-group row"},a.map(function(e){return s.a.createElement("label",{key:e.id,className:"col-12"},s.a.createElement("input",{name:e.id,type:"checkbox",onChange:t}),e.name)}))})),G=function(e){var t=e.page,a=e.total_pages,n=e.changePage;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"btn-group col-12"},s.a.createElement("button",{type:"button",className:"btn btn-primary",disabled:1===t,onClick:function(){n(t-1)}},"Back"),s.a.createElement("button",{type:"button",className:"btn btn-primary",disabled:t>=a,onClick:function(){n(t+1)}},"Forward")),s.a.createElement("p",null,"Current page: ",s.a.createElement("strong",null,t)," from total pages:"," ",s.a.createElement("strong",null,a)))},B=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={filterItems:[{id:1,title:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e",value:"popularity.desc"},{id:2,title:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043f\u043e \u0432\u043e\u0437\u0440\u043e\u0441\u0442\u0430\u043d\u0438\u044e",value:"popularity.asc"},{id:3,title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e",value:"vote_average.desc"},{id:4,title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043f\u043e \u0432\u043e\u0437\u0440\u043e\u0441\u0442\u0430\u043d\u0438\u044e",value:"vote_average.asc"}],filterYear:[{id:1,title:2019,value:2019},{id:2,title:2018,value:2018},{id:3,title:2017,value:2017},{id:4,title:2016,value:2016}]},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filters,a=e.filters,n=a.sort_by,r=a.year,i=e.page,o=e.total_pages,c=e.handleSelect,l=e.changePage,u=e.resetFilters,p=e.addGenre,d=this.state,m=d.filterItems,h=d.filterYear;return s.a.createElement("form",{className:"mb-3"},s.a.createElement(I,{name:"sort_by",id:"sort_by",value:n,handleSelect:c,filterItems:m}),s.a.createElement(I,{name:"year",id:"year",value:r,handleSelect:c,filterItems:h}),s.a.createElement(G,{page:i,total_pages:o,changePage:l}),s.a.createElement("button",{type:"button",className:"btn btn-secondary col-12",onClick:u},"Reset filters"),s.a.createElement(W,{filters:t,addGenre:p}))}}]),t}(s.a.Component),x=a(23),R=_(function(e){return function(t){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={favorite:!1,watchlist:!1,movie_id:""},t.handleMark=function(e){var a=e.target.getAttribute("name");t.props.user?w.mark("/account/".concat(t.props.user.id,"/").concat(a),{params:{session_id:t.props.session_id},body:Object(l.a)({media_type:"movie",media_id:t.props.item.id},a,!t.state[a])}).then(function(){"favorite"===a?t.props.getMovieFavorite(t.props.user.id,t.props.session_id):"watchlist"===a&&t.props.getMovieWatchlist(t.props.user.id,t.props.session_id)}).then(function(){t.setState(function(e){return Object(u.a)({},t.prevState,Object(l.a)({},a,!e[a]))}),t.checkMark("watchlist",t.props.item.id),t.checkMark("favorite",t.props.item.id)}):t.props.user||t.props.toggleModal()},t.checkMark=function(e,a){t.props[e].results.forEach(function(n){a===n.id&&t.setState(function(t){return Object(u.a)({},t,Object(l.a)({},e,!0))})})},t}return Object(v.a)(a,t),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.user&&this.checkMark("watchlist",this.props.item.id),this.props.user&&this.checkMark("favorite",this.props.item.id)}},{key:"componentDidUpdate",value:function(e){this.props.user&&(e.watchlist!==this.props.watchlist&&this.checkMark("watchlist",this.props.item.id),e.favorite!==this.props.favorite&&this.checkMark("favorite",this.props.item.id)),e.filters===this.props.filters&&e.page===this.props.page||(this.checkMark("watchlist",this.props.item.id),this.checkMark("favorite",this.props.item.id)),e.user&&null===this.props.user&&this.setState(Object(u.a)({},this.state,{favorite:!1,watchlist:!1}))}},{key:"render",value:function(){var t=this.props.item,a=this.state,n=a.favorite,r=a.watchlist,i=t.backdrop_path||t.poster_path;return s.a.createElement(e,{item:t,favorite:n,watchlist:r,poster:i,defaultPoster:"./images/default-movie-poster.jpg",handleMark:this.handleMark})}}]),a}(s.a.Component)}(function(e){var t=e.item,a=e.favorite,n=e.watchlist,r=e.poster,i=e.defaultPoster,o=e.handleMark;return s.a.createElement("div",{className:"card",style:{width:"100%"}},s.a.createElement("img",{className:"card-img-top card-img--height",src:r?"https://image.tmdb.org/t/p/w500".concat(r):i,alt:"poster"}),s.a.createElement("div",{className:"card-body"},s.a.createElement(x.b,{to:"/movie/".concat(t.id,"/detail"),className:"card-title"},t.title),s.a.createElement("div",{className:"card-text"},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433: ",t.vote_average),s.a.createElement("div",{className:"card-favorite-watchlist"},s.a.createElement("i",{className:"material-icons",name:"favorite",onClick:o},a?"star":"star_border"),s.a.createElement("i",{className:"material-icons",name:"watchlist",onClick:o},n?"bookmark":"bookmark_border"))))})),L=function(e){var t=e.filters,a=e.movies,n=e.getMovieFavorite,r=e.getMovieWatchlist;return s.a.createElement("div",{className:"row"},a.map(function(e){return s.a.createElement("div",{key:e.id,className:"col-6 mb-4"},s.a.createElement(R,{item:e,filters:t,getMovieFavorite:n,getMovieWatchlist:r}))}))};L.defaulProps={movies:[]};var q=function(e){return function(t){function a(e){var t;return Object(p.a)(this,a),(t=Object(m.a)(this,Object(h.a)(a).call(this,e))).changedSortBy=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2?arguments[2]:void 0,r=e.sort_by,s=e.year,i=e.genre,o={language:"ru-RU",sort_by:r,page:a,primary_release_year:s,with_genres:void 0===i?"":i};w.get("/discover/movie",{params:o}).then(function(e){n(e.total_pages),t.setState({movies:e.results})})},t.state={movies:[]},t}return Object(v.a)(a,t),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.changedSortBy(this.props.filters,this.props.page,this.props.currentTotalPages)}},{key:"componentDidUpdate",value:function(e){e.filters.sort_by===this.props.filters.sort_by&&e.filters.genre===this.props.filters.genre&&e.page===this.props.page&&e.filters.year===this.props.filters.year||(this.changedSortBy(this.props.filters,this.props.page,this.props.currentTotalPages),this.props.user&&this.props.session_id&&(this.props.getMovieWatchlist(this.props.user.id,this.props.session_id),this.props.getMovieFavorite(this.props.user.id,this.props.session_id)))}},{key:"render",value:function(){var t=this.state.movies,a=this.props,n=a.filters,r=a.favorite,i=a.watchlist,o=a.getMovieWatchlist,c=a.getMovieFavorite;return s.a.createElement(e,{filters:n,movies:t,favorite:r,watchlist:i,getMovieWatchlist:o,getMovieFavorite:c})}}]),a}(s.a.Component)}(L),V=new A.a,$=_(function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=V.get("session_id");if(e){var t=V.get("user_id");t&&e&&(this.props.getMovieFavorite(t,e),this.props.getMovieWatchlist(t,e))}}},{key:"componentDidUpdate",value:function(e){e.user!==this.props.user&&this.props.user&&null!==this.props.user&&(this.props.getMovieFavorite(this.props.user.id,this.props.session_id),this.props.getMovieWatchlist(this.props.user.id,this.props.session_id))}},{key:"render",value:function(){var e=this.props,t=e.filters,a=e.page,n=e.total_pages,r=e.favorite,i=e.watchlist;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row mt-4"},s.a.createElement("div",{className:"col-4"},s.a.createElement("div",{className:"card",style:{width:"100%"}},s.a.createElement("div",{className:"card-body"},s.a.createElement("h3",null,"\u0424\u0438\u043b\u044c\u0442\u0440\u044b:"),s.a.createElement(B,{filters:t,favorite:r,watchlist:i,handleSelect:this.props.handleSelect,page:a,total_pages:n,changePage:this.props.changePage,resetFilters:this.props.resetFilters,addGenre:this.props.addGenre})))),s.a.createElement("div",{className:"col-8"},s.a.createElement(q,{filters:t,page:a,total_pages:n,currentTotalPages:this.props.currentTotalPages,favorite:r,watchlist:i,getMovieFavorite:this.props.getMovieFavorite,getMovieWatchlist:this.props.getMovieWatchlist}))))}}]),t}(r.Component)),J=a(17),z=function(e){var t=e.actor,a=t.profile_path?"https://image.tmdb.org/t/p/w500".concat(t.profile_path):"../../images/default-avatar.png";return s.a.createElement("img",{className:"col-2",src:a,alt:t.name,title:t.name})},Y=(a(77),function(){return s.a.createElement("div",{className:"lds-css ng-scope"},s.a.createElement("div",{className:"lds-double-ring"},s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null,s.a.createElement("div",null)),s.a.createElement("div",null,s.a.createElement("div",null))))}),Z=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={actors:[],loaded:!0},a.getActors=function(e){a.setState({actors:e.cast,loaded:!1})},a.updateActors=function(){w.get("/movie/".concat(a.props.match.params.id,"/credits"),{params:{language:"ru_RU"}}).then(a.getActors)},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.updateActors()}},{key:"componentDidUpdate",value:function(e){e.activeTab!==this.props.activeTab&&"3"===this.props.activeTab&&this.updateActors()}},{key:"render",value:function(){var e=this.state,t=e.actors,a=e.loaded,n=a?s.a.createElement(Y,null):null,r=a?null:s.a.createElement(H,{actors:t});return s.a.createElement("div",null,n,r)}}]),t}(r.Component),H=function(e){var t=e.actors;return s.a.createElement("div",null,t.map(function(e){return s.a.createElement(z,{key:e.cast_id,actor:e})}))},K=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={video:[],loaded:!0},a.getVideo=function(e){a.setState(function(){return{video:e.results,loaded:!1}})},a.updateVideo=function(){w.get("/movie/".concat(a.props.match.params.id,"/videos"),{params:{language:"ru-RU"}}).then(function(e){a.getVideo(e)})},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.updateVideo()}},{key:"componentDidUpdate",value:function(e){e.activeTab!==this.props.activeTab&&"2"===this.props.activeTab&&this.updateVideo()}},{key:"render",value:function(){var e=this.state,t=e.video,a=e.loaded,n=a?s.a.createElement(Y,null):null,r=a?null:s.a.createElement(Q,{data:t});return s.a.createElement("div",null,n,r)}}]),t}(r.Component),Q=function(e){return e.data.map(function(e){return s.a.createElement("div",{key:e.id},s.a.createElement("h6",null,e.name),s.a.createElement("iframe",{title:e.id,width:"720",height:"480",src:"https://www.youtube.com/embed/".concat(e.key)}))})},X=a(84),ee=a(85),te=function(e){var t=e.details;return s.a.createElement(X.a,null,s.a.createElement(X.a,{className:"mt-4"},s.a.createElement(ee.a,null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},"\u0421\u0442\u0430\u0442\u0443\u0441:"),s.a.createElement("td",null,t.status)),s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},"\u0414\u0430\u0442\u0430 \u0432\u044b\u0445\u043e\u0434\u0430:"),s.a.createElement("td",null,t.release_date)),s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c:"),s.a.createElement("td",null,t.runtime," \u043c\u0438\u043d")),s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},"\u042f\u0437\u044b\u043a \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u0430:"),s.a.createElement("td",null,t.original_language)),s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},"\u0421\u0442\u0440\u0430\u043d\u0430:"),s.a.createElement("td",null,t.production_countries?t.production_countries.map(function(e){return e.name}):null)),s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},"\u0411\u044e\u0434\u0436\u0435\u0442:"),s.a.createElement("td",null,t.budget,"$")),s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},"\u0421\u0431\u043e\u0440\u044b:"),s.a.createElement("td",null,t.revenue,"$")),s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f:"),s.a.createElement("td",null,t.production_companies?t.production_companies.map(function(e){return e.name+", "}):null)),s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},"\u0416\u0430\u043d\u0440\u044b:"),s.a.createElement("td",null,t.genres?t.genres.map(function(e){return e.name+" "}):null))))))},ae=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={details:[],loaded:!1},a.getDetails=function(e){a.setState(function(){return{details:e,loaded:!1}})},a.updateDetails=function(){w.get("/movie/".concat(a.props.match.params.id),{params:{language:"ru-RU"}}).then(function(e){a.getDetails(e)})},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.updateDetails()}},{key:"render",value:function(){var e=this.state,t=e.details,a=e.loaded,n=a?s.a.createElement(Y,null):null,r=a?null:s.a.createElement(te,{details:t});return s.a.createElement("div",null,n,r)}}]),t}(r.Component),ne=function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Sorry. This page doesn't exist"))},re=a(86),se=a(87),ie=a(5),oe=a.n(ie),ce=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={activeTab:"1"},a.toggle=function(e){a.state.activeTab!==e&&a.setState({activeTab:e})},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.movie,n=t.activeTab;return s.a.createElement("div",null,s.a.createElement(re.a,{tabs:!0},s.a.createElement(se.a,null,s.a.createElement(x.c,{to:"/movie/".concat(a.id,"/detail"),className:oe()("nav-link",{active:"1"===n}),onClick:function(){e.toggle("1")}},"\u0414\u0435\u0442\u0430\u043b\u0438")),s.a.createElement(se.a,null,s.a.createElement(x.c,{to:"/movie/".concat(a.id,"/videos"),className:oe()("nav-link",{active:"2"===n}),onClick:function(){e.toggle("2")}},"\u0412\u0438\u0434\u0435\u043e")),s.a.createElement(se.a,null,s.a.createElement(x.c,{to:"/movie/".concat(a.id,"/credits"),className:oe()("nav-link",{active:"3"===n}),onClick:function(){e.toggle("3")}},"\u0410\u043a\u0442\u0435\u0440\u044b"))),s.a.createElement(J.c,null,s.a.createElement(J.a,{path:"/movie/:id/detail",component:ae}),s.a.createElement(J.a,{path:"/movie/:id/videos",component:K}),s.a.createElement(J.a,{path:"/movie/:id/credits",component:Z}),s.a.createElement(J.a,{component:ne})))}}]),t}(r.Component),le=_(function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={movie:[],favorite:!1,watchlist:!1},a.handleMark=function(e){var t=e.target.getAttribute("name");a.props.user?w.mark("/account/".concat(a.props.user.id,"/").concat(t),{params:{session_id:a.props.session_id},body:Object(l.a)({media_type:"movie",media_id:a.props.match.params.id},t,!a.state[t])}).then(function(){"favorite"===t?a.props.getMovieFavorite(a.props.user.id,a.props.session_id):"watchlist"===t&&a.props.getMovieWatchlist(a.props.user.id,a.props.session_id)}).then(function(){a.setState(function(e){return Object(l.a)({},t,!e[t])})}):a.props.user||a.props.toggleModal()},a.checkMark=function(e,t){a.props[e].results.forEach(function(n){+t===n.id&&a.setState(Object(l.a)({},e,!0))})},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.get("/movie/".concat(this.props.match.params.id),{params:{language:"ru_RU"}}).then(function(t){e.setState(Object(u.a)({},e.state,{movie:t}))}),this.props.user&&(this.checkMark("watchlist",this.props.match.params.id),this.checkMark("favorite",this.props.match.params.id))}},{key:"componentDidUpdate",value:function(e){e.user===this.props.user||this.props.user||null===this.props.user||(this.props.getMovieFavorite(this.props.user.id,this.props.session_id),this.props.getMovieWatchlist(this.props.user.id,this.props.session_id)),this.props.user&&(e.watchlist!==this.props.watchlist&&this.checkMark("watchlist",this.props.match.params.id),e.favorite!==this.props.favorite&&this.checkMark("favorite",this.props.match.params.id)),e.user&&null===this.props.user&&this.setState(Object(u.a)({},this.state,{favorite:!1,watchlist:!1}))}},{key:"render",value:function(){var e=this.state,t=e.movie,a=t.title,n=t.original_title,r=t.backdrop_path,i=t.poster_path,o=t.overview,c=t.vote_average,l=t.release_date,u=e.favorite,p=e.watchlist,d=r||i;return s.a.createElement("div",null,s.a.createElement("div",{className:""},s.a.createElement("img",{src:d?"https://image.tmdb.org/t/p/w500".concat(d):"../../images/default-movie-poster.jpg",alt:"poster"}),s.a.createElement("div",null,s.a.createElement("h4",null,a," (",n,")"," ",s.a.createElement("span",null,l?l.substring(0,4):"")),s.a.createElement("div",null,s.a.createElement("div",null,c),s.a.createElement("div",{className:"card-favorite-watchlist"},s.a.createElement("i",{className:"material-icons",name:"favorite",onClick:this.handleMark},u?"star":"star_border"),s.a.createElement("i",{className:"material-icons",name:"watchlist",onClick:this.handleMark},p?"bookmark":"bookmark_border"))),s.a.createElement("div",null,s.a.createElement("p",null,o),s.a.createElement("p",null)))),s.a.createElement(ce,{movie:this.state.movie}))}}]),t}(r.Component)),ue=new A.a,pe=s.a.createContext(),de={filters:{sort_by:"popularity.desc",year:2019,genre:""},page:1},me=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).updateUser=function(t){e.updateUserId(t.id),e.setState(Object(u.a)({},e.state,{user:t}))},e.updateSessionId=function(t){ue.set("session_id",t,{path:"/",maxAge:259200}),e.setState(Object(u.a)({},e.state,{session_id:t}))},e.updateUserId=function(e){ue.set("user_id",e,{path:"/",maxAge:259200})},e.onLogOut=function(){w.delete("/authentication/session",{params:{session_id:e.state.session_id}}),ue.remove("session_id"),ue.remove("user_id"),e.setState(Object(u.a)({},e.state,{user:null,session_id:null,watchlist:[],favorite:[]}))},e.handleSelect=function(t){var a=t.target.name,n=t.target.value;e.setState(function(e){return Object(u.a)({},e,{filters:Object(u.a)({},e.filters,Object(l.a)({},a,n)),page:1})})},e.changePage=function(t){e.setState(Object(u.a)({},e.state,{page:t}))},e.currentTotalPages=function(t){e.setState(Object(u.a)({},e.state,{total_pages:t}))},e.resetFilters=function(t){e.setState(Object(u.a)({},de))},e.toggleGenre=function(e,t){var a=e.findIndex(function(e){return e===t});return[].concat(Object(c.a)(e.slice(0,a)),Object(c.a)(e.slice(a+1)))},e.addGenre=function(t){var a=t.target.name,n=Object(c.a)(e.state.filters.genre);n=e.state.filters.genre.includes(a)?e.toggleGenre(n,a):[].concat(Object(c.a)(n),[a]),e.setState(function(){return Object(u.a)({},e.state,{page:1,filters:Object(u.a)({},e.state.filters,{genre:n})})})},e.getMovieWatchlist=function(t,a){w.get("/account/".concat(t,"/watchlist/movies"),{params:{session_id:a,language:"ru-RU"}}).then(function(t){e.setState(Object(u.a)({},e.state,{watchlist:t}))})},e.getMovieFavorite=function(t,a){w.get("/account/".concat(t,"/favorite/movies"),{params:{session_id:a,language:"ru-RU"}}).then(function(t){e.setState(Object(u.a)({},e.state,{favorite:t}))})},e.toggleModal=function(){e.setState(function(t){return Object(u.a)({},e.state,{showModal:!t.showModal})})},e.state=Object(u.a)({},de,{user:null,session_id:null,total_pages:"",showModal:!1,watchlist:[],favorite:[]}),e}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=ue.get("session_id");if(t){w.get("/account",{params:{session_id:t}}).then(function(t){e.updateUser(t)}),this.setState(Object(u.a)({},this.state,{session_id:t}));var a=ue.get("user_id");a&&t&&(this.getMovieFavorite(a,t),this.getMovieWatchlist(a,t))}}},{key:"render",value:function(){var e=this.state,t=e.filters,a=e.user,n=e.page,r=e.total_pages,i=e.session_id,o=e.showModal,c=e.watchlist,l=e.favorite;return s.a.createElement(x.a,null,s.a.createElement(pe.Provider,{value:{filters:t,user:a,session_id:i,showModal:o,watchlist:c,favorite:l,page:n,total_pages:r,onLogOut:this.onLogOut,updateUser:this.updateUser,updateSessionId:this.updateSessionId,getMovieFavorite:this.getMovieFavorite,getMovieWatchlist:this.getMovieWatchlist,toggleModal:this.toggleModal,handleSelect:this.handleSelect,changePage:this.changePage,resetFilters:this.resetFilters,addGenre:this.addGenre,currentTotalPages:this.currentTotalPages}},s.a.createElement("div",{className:"container"},s.a.createElement(U,{user:a}),s.a.createElement(J.a,{path:"/",exact:!0,component:$}),s.a.createElement(J.a,{path:"/movie/:id",component:le}))))}}]),t}(r.Component);a(78);o.a.render(s.a.createElement(me,null),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.a1248736.chunk.js.map