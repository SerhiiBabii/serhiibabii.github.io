(window["webpackJsonptodo-list"]=window["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,,,,function(t,e,n){t.exports=n(22)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),i=n(7),l=n(6),u=n(1),s=n(2),m=n(4),f=n(3),d=n(5),p=(n(16),function(t){var e=t.toDo,n=t.done;return o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement("h1",null,"Todo List"),o.a.createElement("h2",null,e," more to do; ",n," done"))}),h=(n(17),function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(o)))).state={text:"",error:""},n.onTextChange=function(t){n.setState({text:t.target.value,error:""})},n.onSubmit=function(t){t.preventDefault();var e=n.state.text;e?(n.setState({text:""}),(n.props.addItem||function(){})(e)):n.setState({error:"\u0421heck data entered in the field"})},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.state,e=t.text,n=t.error;return o.a.createElement("div",null,o.a.createElement("form",{className:"bottom-panel d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{className:"form-control new-todo-text",type:"text",value:e,onChange:this.onTextChange,placeholder:"Write your task"}),o.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary"},"Add item")),n?o.a.createElement("span",{className:"bottom-panel__error"},n):null)}}]),e}(a.Component)),b=[{name:"all",text:"All"},{name:"active",text:"Active"},{name:"done",text:"Done"}],g=function(t){var e=t.filter,n=t.onFilter,a=void 0===n?function(){}:n,r=b.map(function(t){var n=t.name,r=t.text,c="btn "+(n===e?"btn-info":"btn-outline-secondary");return o.a.createElement("button",{key:n,onClick:function(){return a(n)},className:c},r)});return o.a.createElement("div",{className:"btn-group"},r)},v=n(10),O=(n(18),function(t){var e=t.text,n=t.deleteItem,a=t.onToggleDone,r=t.onToggleImportant,c=t.important,i="todo-list-item";return t.done&&(i+=" done"),c&&(i+=" important"),o.a.createElement("span",{className:i},o.a.createElement("span",{className:"todo-list-item-text",onClick:a},e),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:r},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n},o.a.createElement("i",{className:"fa fa-trash-o"})))}),y=(n(19),function(t){var e=t.todoData,n=t.deleteItem,a=t.onToggleDone,r=t.onToggleImportant;return o.a.createElement("ul",{className:"list-group todo-list"},e.map(function(t){var e=t.id,c=Object(v.a)(t,["id"]);return o.a.createElement("li",{key:e,className:"list-group-item"},o.a.createElement(O,Object.assign({},c,{deleteItem:function(){return n(e)},onToggleImportant:function(){return r(e)},onToggleDone:function(){return a(e)}})))}))}),x=(n(20),function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(o)))).state={searchText:""},n.onSearcTextChange=function(t){var e=n.props.onSearch,a=void 0===e?function(){}:e;n.setState({searchText:t.target.value}),a(t.target.value)},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"Write text for search",value:this.state.searchText,onChange:this.onSearcTextChange})}}]),e}(a.Component));n(21);function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}var E=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(o)))).maxCount=1,n.state={todoData:[n.createTodoItem("Wake Up"),n.createTodoItem("Drink coffee"),n.createTodoItem("Go to work")],search:"",filter:"all"},n.deleteItem=function(t){n.setState(function(e){var n=e.todoData,a=n.findIndex(function(e){return e.id===t});return{todoData:[].concat(Object(l.a)(n.slice(0,a)),Object(l.a)(n.slice(a+1)))}})},n.addItem=function(t){var e=n.createTodoItem(t);n.setState(function(t){var n=t.todoData;return{todoData:[].concat(Object(l.a)(n),[e])}})},n.onToggleDone=function(t){n.setState(function(e){var a=e.todoData;return{todoData:n.onToggleProperty(a,t,"done")}})},n.onToggleImportant=function(t){n.setState(function(e){var a=e.todoData;return{todoData:n.onToggleProperty(a,t,"important")}})},n.onFilter=function(t){n.setState({filter:t})},n.onSearch=function(t){n.setState({search:t})},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"createTodoItem",value:function(t){return{id:this.maxCount++,text:t,important:!1,done:!1}}},{key:"onToggleProperty",value:function(t,e,n){var a=t.findIndex(function(t){return t.id===e}),o=t[a],r=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(n,!0).forEach(function(e){Object(i.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},o,Object(i.a)({},n,!o[n]));return[].concat(Object(l.a)(t.slice(0,a)),[r],Object(l.a)(t.slice(a+1)))}},{key:"filterItems",value:function(t,e){return"all"===e?t:"active"===e?t.filter(function(t){return!t.done}):"done"===e?t.filter(function(t){return t.done}):void 0}},{key:"searchItems",value:function(t,e){return 0===e.length?t:t.filter(function(t){return t.text.toLowerCase().indexOf(e.toLowerCase())>-1})}},{key:"render",value:function(){var t=this.state,e=t.todoData,n=t.search,a=t.filter,r=e.filter(function(t){return t.done}).length,c=e.length-r,i=this.searchItems(this.filterItems(e,a),n);return o.a.createElement("div",{className:"todo-app"},o.a.createElement(p,{toDo:c,done:r}),o.a.createElement("div",{className:"todo-panel d-flex"},o.a.createElement(x,{onSearch:this.onSearch}),o.a.createElement(g,{filter:a,onFilter:this.onFilter})),o.a.createElement(y,{todoData:i,deleteItem:this.deleteItem,onToggleDone:this.onToggleDone,onToggleImportant:this.onToggleImportant}),o.a.createElement(h,{addItem:this.addItem}))}}]),e}(a.Component);c.a.render(o.a.createElement(E,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.3ca8c6f1.chunk.js.map