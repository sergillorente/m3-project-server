(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{46:function(e,t,n){},63:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),i=n.n(a),s=n(37),c=n.n(s),o=n(5),l=n(2),u=n(3),h=n(7),j=n(6),d=(n(46),n(4)),b=n(22),p=n(15),O=n(14),g=n.n(O),x=new(function(){function e(){Object(l.a)(this,e),this.auth=g.a.create({baseURL:"https://oh-review-m3.herokuapp.com/auth",withCredentials:!0})}return Object(u.a)(e,[{key:"signup",value:function(e,t,n){return this.auth.post("/signup",{username:e,email:t,password:n}).then((function(e){return e.data}))}},{key:"login",value:function(e,t){return this.auth.post("/login",{email:e,password:t}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.get("/logout").then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/me").then((function(e){return e.data}))}}]),e}()),v=i.a.createContext(),m=v.Consumer,f=v.Provider,y=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoggedIn:!1,isLoading:!0,user:null,error:!1},e.getMe=function(){x.me().then((function(t){return e.setState({isLoggedIn:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null,isLoading:!1})}))},e.signup=function(t,n,r){x.signup(t,n,r).then((function(t){return e.setState({isLoggedIn:!0,user:t,error:!1})})).catch((function(t){e.setState({isLoggedIn:!1,user:null,error:t.response.data.message})}))},e.login=function(t,n){x.login(t,n).then((function(t){return e.setState({isLoggedIn:!0,user:t,error:!1})})).catch((function(t){e.setState({isLoggedIn:!1,user:null,error:t.response.data.message})}))},e.logout=function(){x.logout().then((function(){return e.setState({isLoggedIn:!1,user:null})})).catch((function(e){return console.log(e)}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getMe()}},{key:"render",value:function(){var e=this.state,t=e.isLoggedIn,n=e.isLoading,a=e.user,i=e.error,s=this.getMe,c=this.signup,o=this.login,l=this.logout;return n?Object(r.jsx)("p",{children:"Loading"}):Object(r.jsx)(f,{value:{getMe:s,isLoggedIn:t,isLoading:n,user:a,signup:c,login:o,logout:l,error:i},children:this.props.children})}}]),n}(i.a.Component),w=function(e){return function(t){Object(h.a)(a,t);var n=Object(j.a)(a);function a(){return Object(l.a)(this,a),n.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var t=this;return Object(r.jsx)(m,{children:function(n){var a=n.getMe,i=n.isLoggedIn,s=n.user,c=n.signup,o=n.login,l=n.logout,u=n.error;return Object(r.jsx)(e,Object(p.a)(Object(p.a)({},t.props),{},{getMe:a,isLoggedIn:i,user:s,signup:c,login:o,logout:l,error:u}))}})}}]),a}(i.a.Component)},S=(n(63),n(20)),C=n(21);function L(){var e=Object(S.a)(["\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    margin-top: 139%;\n    text-align: center;\n    background-color: rgb(138, 137, 136);\n    color: black;\n    font-size: 14px;\n"]);return L=function(){return e},e}function k(){var e=Object(S.a)(["  \n    font-size: 19px;\n    text-align: center;\n    color: black;\n"]);return k=function(){return e},e}function I(){var e=Object(S.a)(["\n    font-size: 19px;\n    text-align: center;\n    color: black;\n    margin: 0 30px 0 30px;\n"]);return I=function(){return e},e}function A(){var e=Object(S.a)(["\n    font-size: 22px;\n    padding: 12px;\n    margin-bottom: 127px;\n    margin-top: 58px;\n    border-radius: 11px;\n    background-color: #8bc34a;\n    color: black;\n    border: 1px solid;\n    &:hover (\n        background-color: #5a9216;\n        color: black;\n    )\n"]);return A=function(){return e},e}var F=C.a.button(A()),N=C.a.p(I()),D=C.a.p(k()),H=C.a.div(L());var M=w((function(e){return Object(r.jsx)(H,{children:e.isLoggedIn?Object(r.jsxs)("div",{children:[Object(r.jsx)(o.b,{to:"/hotels",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:"/images/hotel.png",alt:"hotel icon"}),Object(r.jsx)("p",{className:"text-color",children:"HOTELS"})]})}),Object(r.jsx)(o.b,{to:"/profile",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:"/images/profile-user.png",alt:"profile icon"}),Object(r.jsx)("p",{className:"text-color",children:"PROFILE"})]})})]}):Object(r.jsx)("div",{children:Object(r.jsx)(o.b,{to:"/hotels",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:"/images/hotel.png",alt:"hotel icon"}),Object(r.jsx)("p",{className:"text-color",children:"HOTELS"})]})})})})})),R=function(e){return[1,2,3,4,5].map((function(t){return t<=e.category?Object(r.jsx)("img",{height:"40px",alt:"star",src:"https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png"},t):Object(r.jsx)("img",{height:"40px",alt:"star",src:"https://purepng.com/public/uploads/large/purepng.com-grey-starstargeometricallydecagonconcavestardomclipartblackgrey-1421526502793oblca.png"},t)}))},E=(n(69),w(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.logout,a=e.isLoggedIn;return Object(r.jsxs)("nav",{className:"navbar",children:[Object(r.jsx)(o.b,{to:"/",children:Object(r.jsx)("img",{src:"/images/logo.png",alt:"logo icon",className:"logo"})}),a?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:t&&t.username}),Object(r.jsx)("button",{onClick:n,children:"Logout"})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(o.b,{to:"/signup",children:[Object(r.jsx)("button",{className:"navbar-button",id:"signup",children:"Sign Up"})," "]}),Object(r.jsx)("br",{}),Object(r.jsxs)(o.b,{to:"/login",children:[Object(r.jsx)("button",{className:"navbar-button",children:"Log in"})," "]})]})]})}}]),n}(i.a.Component))),P=w((function(e){var t=e.review,n=t.userId,a=t.created_at,i=t.text,s=t.rating,c=t._id,o=e.index,l=e.user._id;return Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:n.picture,alt:"user",height:"30px"}),Object(r.jsx)("p",{children:n.username}),Object(r.jsx)("p",{children:a}),Object(r.jsx)("p",{children:i}),Object(r.jsx)("p",{children:s}),n===l&&Object(r.jsx)("button",{onClick:function(t){return function(t,n,r){t.preventDefault(),e.handleDelete(n,r)}(t,c,o)},children:"Delete"})]})})),U=n(12),_=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={rating:1,text:"",error:""},e.handleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(U.a)({},r,a))},e.handleSubmit=function(t){t.preventDefault(),e.props.handleSubmit(e.state.rating,e.state.text).then((function(t){return e.setState({text:"",rating:1,error:""})})).catch((function(t){return e.setState({error:t.response.data.message})}))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Leave a review"}),Object(r.jsx)("form",{onSubmit:this.handleSubmit,children:Object(r.jsxs)("label",{children:["Rating:",Object(r.jsxs)("select",{name:"rating",value:this.state.rating,onChange:this.handleChange,children:[Object(r.jsx)("option",{value:1,children:"1"}),Object(r.jsx)("option",{value:2,children:"2"}),Object(r.jsx)("option",{value:3,children:"3"}),Object(r.jsx)("option",{value:4,children:"4"}),Object(r.jsx)("option",{value:5,children:"5"})]}),Object(r.jsx)("textarea",{required:!0,value:this.state.text,name:"text",onChange:this.handleChange}),Object(r.jsx)("input",{type:"submit",value:"Save"})]})}),this.state.error&&Object(r.jsx)("p",{children:this.state.error})]})}}]),n}(i.a.Component),q=new function e(){var t=this;Object(l.a)(this,e),this.getAll=function(){return t.api.get("/hotels").then((function(e){return e.data}))},this.getOneHotel=function(e){return t.api.get("/hotels/".concat(e)).then((function(e){return e.data}))},this.api=g.a.create({baseURL:"https://oh-review-m3.herokuapp.com/api",withCredentials:!0})},G=new function e(){var t=this;Object(l.a)(this,e),this.getAll=function(e){return t.api.get("/reviews/".concat(e)).then((function(e){return e.data}))},this.createOne=function(e,n){return t.api.post("/reviews/".concat(e),n).then((function(e){return e.data}))},this.deleteOne=function(e){return t.api.delete("/reviews/".concat(e)).then((function(e){return e.data}))},this.api=g.a.create({baseURL:"https://oh-review-m3.herokuapp.com/api",withCredentials:!0})},z=w(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={hotel:{},reviews:[],isLoading:!0,error:!1},e.getOneHotel=function(){var t=e.props.match.params.hotelId;q.getOneHotel(t).then((function(t){return e.setState({hotel:t,isLoading:!1})})).catch((function(t){return e.setState({error:t.response.data.message,isLoading:!1})}))},e.getAllReviews=function(){var t=e.props.match.params.hotelId;G.getAll(t).then((function(t){return e.setState({reviews:t,isLoading:!1})}))},e.handleSubmit=function(t,n){return G.createOne(e.props.match.params.hotelId,{rating:t,text:n}).then((function(t){return e.setState({reviews:[].concat(Object(b.a)(e.state.reviews),[t])})}))},e.handleDelete=function(t,n){G.deleteOne(t).then((function(t){var r=Object(b.a)(e.state.reviews);r.splice(n,1),e.setState({reviews:Object(b.a)(r)})}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getOneHotel(),this.getAllReviews()}},{key:"render",value:function(){var e=this,t=this.state.hotel;return Object(r.jsxs)("div",{children:[Object(r.jsx)(E,{}),Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:t.image,alt:t}),Object(r.jsx)("h1",{children:t.title}),Object(r.jsx)("h3",{children:t.district}),Object(r.jsx)(R,{category:t.category}),Object(r.jsx)("p",{children:t.description})]}),Object(r.jsx)(_,{handleSubmit:this.handleSubmit}),Object(r.jsx)("hr",{}),this.state.reviews.map((function(t,n){return Object(r.jsx)(P,{index:n,review:t,handleDelete:e.handleDelete},t._id)})),Object(r.jsx)(M,{})]})}}]),n}(i.a.Component)),B=function(e){var t=e.hotel,n=t.image,a=t.title,i=t.district,s=t.category,c=t.description,l=t._id;return Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:n,alt:"hotel information"}),Object(r.jsx)("h3",{children:a}),Object(r.jsx)("p",{children:i}),Object(r.jsx)(R,{category:s}),Object(r.jsx)("p",{children:"".concat(c.slice(0,100),"...")}),Object(r.jsx)(o.b,{to:"/hotel-details/".concat(l),children:Object(r.jsx)("button",{children:"Share your opinion"})})]})},T=(n(70),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={search:"",district:"",category:""},e.handleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(U.a)({},r,a))},e.handleSubmit=function(t){t.preventDefault(),e.props.handleSearch(e.state.search,e.state.district,e.state.category)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(r.jsx)("input",{type:"text",name:"search",placeholder:"Search...",value:this.state.search,onChange:this.handleChange}),Object(r.jsxs)("label",{children:["Filter by district:",Object(r.jsxs)("select",{name:"district",value:this.state.district,onChange:this.handleChange,children:[Object(r.jsx)("option",{value:"",children:"Show All"}),Object(r.jsx)("option",{value:"Sants-Montju\xefc",children:"Sants-Montju\xefc"}),Object(r.jsx)("option",{value:"Horta-Guinard\xf3",children:"Horta-Guinard\xf3"}),Object(r.jsx)("option",{value:"Ciutat Vella",children:"Ciutat Vella"}),Object(r.jsx)("option",{value:"Eixample",children:"Eixample"}),Object(r.jsx)("option",{value:"Les Corts",children:"Les Corts"}),Object(r.jsx)("option",{value:"Sarri\xe0-Sant Gervasi",children:"Sarri\xe0-Sant Gervasi"}),Object(r.jsx)("option",{value:"Gr\xe0cia",children:"Gr\xe0cia"}),Object(r.jsx)("option",{value:"Nou Barris",children:"Nou Barris"}),Object(r.jsx)("option",{value:"Sant Mart\xed",children:"Sant Mart\xed"})]})]}),Object(r.jsxs)("label",{children:["Filter by category:",Object(r.jsxs)("select",{name:"category",value:this.state.category,onChange:this.handleChange,children:[Object(r.jsx)("option",{value:"",children:"Show All"}),Object(r.jsx)("option",{value:3,children:"3-stars"}),Object(r.jsx)("option",{value:4,children:"4-stars"}),Object(r.jsx)("option",{value:5,children:"5-stars"})]})]}),Object(r.jsx)("input",{type:"submit",value:"Search"})]}),Object(r.jsx)("button",{onClick:this.props.removeFilters,children:"Remove filters"})]})}}]),n}(i.a.Component)),W=w(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={hotels:[],filteredHotels:[],isLoading:!0,error:!1},e.handleSearch=function(t,n,r){var a=e.state.hotels.filter((function(e){return!(t&&!e.title.toLowerCase().includes(t.toLowerCase()))&&((!n||e.district===n)&&(!r||e.category===+r))}));e.setState({filteredHotels:a})},e.removeFilters=function(){e.setState({filteredHotels:e.state.hotels}),console.log(e.state.filtredHotels)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;q.getAll().then((function(t){return e.setState({hotels:t,filteredHotels:t,isLoading:!1})})).catch((function(t){return e.setState({error:t.response.data.message,isLoading:!1})}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(E,{}),this.state.isLoading?Object(r.jsx)("p",{children:"It's loading..."}):Object(r.jsxs)("div",{children:[this.props.isLoggedIn?Object(r.jsx)(T,{handleSearch:this.handleSearch,removeFilters:this.removeFilters}):null,Object(r.jsx)("div",{children:this.state.filteredHotels.map((function(e){return Object(r.jsx)(B,{hotel:e},e._id)}))})]}),this.state.error&&Object(r.jsx)("p",{children:this.state.error}),Object(r.jsx)(M,{})]})}}]),n}(i.a.Component)),J=w(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={email:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,r=n.email,a=n.password;e.props.login(r,a)},e.handleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(U.a)({},r,a))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(r.jsxs)("div",{children:[Object(r.jsx)(E,{}),Object(r.jsx)("h1",{children:"Login"}),Object(r.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(r.jsx)("label",{children:"Email:"}),Object(r.jsx)("input",{required:!0,type:"email",name:"email",value:t,onChange:this.handleChange}),Object(r.jsx)("label",{children:"Password:"}),Object(r.jsx)("input",{required:!0,type:"password",name:"password",value:n,onChange:this.handleChange}),Object(r.jsx)("input",{type:"submit",value:"Login"})]}),Object(r.jsx)("div",{children:this.props.error&&Object(r.jsx)("p",{children:this.props.error})}),Object(r.jsx)("div",{children:Object(r.jsxs)("p",{children:["or ",Object(r.jsx)(o.b,{to:"/signup",children:" Sign up"})," if you don't have an account"]})}),Object(r.jsx)(M,{})]})}}]),n}(a.Component));n(71);var V=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{className:"presentation-logo",src:"/images/logo.png",alt:"logo"}),Object(r.jsxs)("div",{className:"text",children:[Object(r.jsx)(N,{children:"Welcome to Oh! Review, the place where you will find the most known hotels in Barcelona."}),Object(r.jsx)(D,{children:"Reviews, community and much more..."}),Object(r.jsx)(o.b,{to:"/hotels",children:Object(r.jsx)(F,{children:"START NOW"})}),Object(r.jsx)("p",{className:"project",children:"Oh! Review \xa9 2020"})]})]})})},Y=(n(72),new function e(){var t=this;Object(l.a)(this,e),this.addNewContent=function(){return t.user.post("/profile").then((function(e){return e.data}))},this.getUserProfile=function(e){return t.user.get("/profile/".concat(e)).then((function(e){return e.data}))},this.updateProfile=function(e){return t.user.put("/profile/",e).then((function(e){return e.data}))},this.user=g.a.create({baseURL:"https://oh-review-m3.herokuapp.com/user",withCredentials:!0})}),K=w(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={username:e.props.user.username,password:"",error:""},e.handleSubmitForm=function(t){t.preventDefault();var n=e.state,r=n.username,a=n.password;Y.updateProfile({username:r,password:a}).then((function(t){e.setState({error:""}),e.props.getMe()})).catch((function(t){return e.setState({error:t.response.data.message})}))},e.handleChange=function(t){var n=t.target,r=n.name,a=n.value;console.log(r,a),e.setState(Object(U.a)({},r,a))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return Object(r.jsxs)("div",{children:[Object(r.jsx)(E,{}),Object(r.jsx)("h1",{children:"PROFILE"}),Object(r.jsx)("img",{src:this.props.user.picture,alt:"default",className:"default-pic"}),Object(r.jsx)("h3",{children:"Update user information:"}),Object(r.jsxs)("form",{onSubmit:this.handleSubmitForm,children:[Object(r.jsx)("label",{children:"Username:"}),Object(r.jsx)("input",{required:!0,type:"text",name:"username",value:t,placeholder:"Write...",onChange:this.handleChange}),Object(r.jsx)("label",{children:"Email:"}),Object(r.jsx)("input",{type:"email",name:"email",placeholder:this.props.user.email,disabled:!0}),Object(r.jsx)("label",{children:"Password:"}),Object(r.jsx)("input",{type:"password",name:"password",value:n,placeholder:"*****",onChange:this.handleChange}),Object(r.jsx)("input",{type:"submit",value:"Save Changes"})]}),Object(r.jsx)("div",{children:this.state.error&&Object(r.jsx)("p",{children:this.state.error})}),Object(r.jsx)(M,{})]})}}]),n}(i.a.Component)),Q=w(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={username:"",email:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,r=n.username,a=n.email,i=n.password;e.props.signup(r,a,i)},e.handleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(U.a)({},r,a))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,a=e.password;return Object(r.jsxs)("div",{children:[Object(r.jsx)(E,{}),Object(r.jsx)("h1",{children:"Sign Up"}),Object(r.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(r.jsx)("label",{children:"Username:"}),Object(r.jsx)("input",{required:!0,type:"text",name:"username",value:t,onChange:this.handleChange}),Object(r.jsx)("label",{children:"Email:"}),Object(r.jsx)("input",{required:!0,type:"email",name:"email",value:n,onChange:this.handleChange}),Object(r.jsx)("label",{children:"Password:"}),Object(r.jsx)("input",{required:!0,type:"password",name:"password",value:a,onChange:this.handleChange}),Object(r.jsx)("input",{type:"submit",value:"Signup"})]}),Object(r.jsx)("div",{children:this.props.error&&Object(r.jsx)("p",{children:this.props.error})}),Object(r.jsx)("div",{children:Object(r.jsxs)("p",{children:["or ",Object(r.jsx)(o.b,{to:"/login",children:" Log in"})," if you already have an account"]})}),Object(r.jsx)(M,{})]})}}]),n}(a.Component));var X=w((function(e){var t=e.isLoggedIn,n=e.isLoading,a=e.component,i=e.exact,s=e.path;return n?"Loading":Object(r.jsx)(d.b,{exact:i,path:s,render:function(e){return"/hotels"===s?Object(r.jsx)(a,Object(p.a)({},e)):t?Object(r.jsx)(d.a,{to:"/hotels"}):t?void 0:Object(r.jsx)(a,Object(p.a)({},e))}})}));var Z=w((function(e){var t=e.isLoggedIn,n=e.isLoading,a=e.component,i=e.exact,s=e.path;return n?"Loading":Object(r.jsx)(d.b,{exact:i,path:s,render:function(e){return t?t?Object(r.jsx)(a,Object(p.a)({},e)):void 0:Object(r.jsx)(d.a,{to:"/login"})}})})),$=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(d.d,{children:[Object(r.jsx)(X,{exact:!0,path:"/",component:V}),Object(r.jsx)(X,{exact:!0,path:"/signup",component:Q}),Object(r.jsx)(X,{exact:!0,path:"/login",component:J}),Object(r.jsx)(Z,{exact:!0,path:"/profile",component:K}),Object(r.jsx)(Z,{path:"/hotel-details/:hotelId",component:z}),Object(r.jsx)(X,{exact:!0,path:"/hotels",component:W})]})})}}]),n}(a.Component);c.a.render(Object(r.jsx)(o.a,{children:Object(r.jsx)(y,{children:Object(r.jsx)($,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.d67a74e3.chunk.js.map