(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){t.exports=n(30)},,,,,,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),i=n(7),l=n(10),s=n(6),u=n(1),h=n(2),f=n(4),d=n(3),b=n(5),m=(n(18),function(t){var e=t.toDo,n=t.done;return r.a.createElement("div",{className:"header d-flex"},r.a.createElement("h1",null,"List of tasks"),r.a.createElement("h2",null,e," more to do, ",n," done"))}),p=(n(20),function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(f.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={searchString:""},n.onChangeSearchString=function(t){var e=t.target.value;n.setState({searchString:e}),n.props.onChangeSearchString(e)},n}return Object(b.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return r.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"Type here to search...",value:this.state.searchString,onChange:this.onChangeSearchString})}}]),e}(a.Component)),g=n(11),y=(n(22),function(t){function e(){return Object(u.a)(this,e),Object(f.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){var t=this.props,e=t.text,n=t.onDeleted,a=t.onChangePriority,o=t.onChangeStatus,c="todo-list-item";return t.done&&(c+=" done"),t.priority&&(c+=" priority"),r.a.createElement("span",{className:c},r.a.createElement("span",{className:"todo-list-item-text",onClick:o},e),r.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:a},r.a.createElement("i",{className:"fa fa-exclamation"})),r.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n},r.a.createElement("i",{className:"fa fa-trash-o"})))}}]),e}(a.Component)),v=(n(24),function(t){var e=t.data,n=t.onDeleted,a=t.onChangePriority,o=t.onChangeStatus,c=e.map(function(t){var e=t.id,c=Object(g.a)(t,["id"]);return r.a.createElement("li",{key:e,className:"list-group-item"},r.a.createElement(y,Object.assign({},c,{onDeleted:function(){return n(e)},onChangePriority:function(){return a(e)},onChangeStatus:function(){return o(e)}})))});return r.a.createElement("ul",{className:"list-group todo-list"},c," ")}),C=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(f.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).buttons=[{filterValue:"all",btnLabel:"All"},{filterValue:"todo",btnLabel:"Todo"},{filterValue:"done",btnLabel:"Done"}],n}return Object(b.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.onChangeFilter,a=this.buttons.map(function(t){var a=t.filterValue,o=t.btnLabel,c=e===a?"btn-info":"btn-outline-secondary";return r.a.createElement("button",{type:"button",className:"btn ".concat(c),key:a,onClick:function(){return n(a)}},o)});return r.a.createElement("div",{className:"btn-group"},a)}}]),e}(a.Component),S=(n(26),function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(f.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={newTaskText:""},n.onTextChange=function(t){n.setState({text:t.target.value})},n.onSubmit=function(t){t.preventDefault(),n.props.onTaskAdded(n.state.text),n.setState({text:""})},n}return Object(b.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return r.a.createElement("form",{className:"task-add-form d-flex",onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",className:"form-control",onChange:this.onTextChange,placeholder:"What to do next?",value:this.state.text}),r.a.createElement("button",{className:"btn btn-outline-secondary"},"Add task"))}}]),e}(a.Component)),O=(n(28),function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(f.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).lastId=10,n.state={todoData:[n.createTask("Learn React"),n.createTask("Build own apps"),n.createTask("Deploy app to web")],searchString:"",filter:"all"},n.deleteTask=function(t){n.setState(function(e){var n=e.todoData,a=n.findIndex(function(e){return e.id===t});return{todoData:[].concat(Object(s.a)(n.slice(0,a)),Object(s.a)(n.slice(a+1)))}})},n.addTask=function(t){var e=n.createTask(t);n.setState(function(t){var n=t.todoData;return{todoData:[].concat(Object(s.a)(n),[e])}})},n.onChangePriority=function(t){n.setState(function(e){var a=e.todoData;return{todoData:n.changeProperty(a,t,"priority")}})},n.onChangeStatus=function(t){n.setState(function(e){var a=e.todoData;return{todoData:n.changeProperty(a,t,"done")}})},n.onChangeSearchString=function(t){n.setState({searchString:t})},n.onChangeFilter=function(t){n.setState({filter:t})},n}return Object(b.a)(e,t),Object(h.a)(e,[{key:"createTask",value:function(t){return{text:t,priority:!1,done:!1,id:this.lastId++}}},{key:"changeProperty",value:function(t,e,n){var a=t.findIndex(function(t){return t.id===e}),r=t[a],o=Object(l.a)({},r,Object(i.a)({},n,!r[n]));return[].concat(Object(s.a)(t.slice(0,a)),[o],Object(s.a)(t.slice(a+1)))}},{key:"search",value:function(t,e){return 0===e.length?t:t.filter(function(t){return t.text.toLowerCase().indexOf(e.toLowerCase())>-1})}},{key:"filter",value:function(t,e){switch(e){case"all":return t;case"todo":return t.filter(function(t){return!t.done});case"done":return t.filter(function(t){return t.done});default:return t}}},{key:"render",value:function(){var t=this.state,e=t.todoData,n=t.searchString,a=t.filter,o=this.filter(this.search(e,n),a),c=e.filter(function(t){return t.done}).length,i=e.length-c;return r.a.createElement("div",{className:"todo-app"},r.a.createElement(m,{toDo:i,done:c}),r.a.createElement("div",{className:"top-panel d-flex"},r.a.createElement(p,{onChangeSearchString:this.onChangeSearchString}),r.a.createElement(C,{filter:a,onChangeFilter:this.onChangeFilter})),r.a.createElement(v,{data:o,onDeleted:this.deleteTask,onChangePriority:this.onChangePriority,onChangeStatus:this.onChangeStatus}),r.a.createElement(S,{onTaskAdded:this.addTask}))}}]),e}(a.Component));c.a.render(r.a.createElement(O,null),document.getElementById("root"))}],[[12,2,1]]]);
//# sourceMappingURL=main.25304253.chunk.js.map