(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1259:function(a,e,t){"use strict";t.r(e);var r=t(26),n=t(27),s=t(45),i=t(29),o=t(28),l=t(0),c=t.n(l),m=t(31),d=t(72),u=t(13),p=t(41),h=t(30),b=t(53),g=t(11),E=t(7),f=t(94),k=t(329),v=t(330),O=t(23),H=t(73),j=t(54),y=t.n(j);const S=Object(H.createNumberMask)({prefix:"Rp. ",locale:"kr-KO"});class x extends l.Component{constructor(...a){super(...a),this.state={aktif:!1}}componentDidMount(){this.props.dispatch(Object(u.v)()),setTimeout(()=>{document.getElementById("harga").focus()},100)}render(){return c.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()}},c.a.createElement(k.a,{label:"Kode Group",name:"kode_group",options:this.props.datagroup.filter(a=>void 0!==a.kode_group).map(a=>{return{value:a.kode_group,name:a.kode_group+" - "+a.nama_group}}),value:this.props.kode_group,disabled:this.props.isEdit,placeholder:"Silahkan Pilih Kode Group",component:O.f}),c.a.createElement(k.a,Object.assign({id:"harga",name:"harga",tabIndex:"1"},S,{component:O.e,type:"text",label:"Jumlah Harga",onBlur:()=>this.setState({aktif:!0}),placeholder:"Masukan Jumlah Harga"})),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 text-right"},c.a.createElement("button",{className:"btn btn-white",onClick:()=>this.props.dispatch(Object(u.Cb)()),type:"button"},"Batal"),"\xa0",c.a.createElement("button",{tabIndex:"2",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.isLoading,type:"submit"},this.props.isLoading?c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?c.a.createElement(y.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}x=Object(v.a)({form:"HeadHargaEmas",enableReinitialize:!0})(x);var P=Object(p.b)(a=>{if(null!==a.datamaster.ShowModalParameterHargaEmas)return{datagroup:a.datamaster.GetDataGroup,initialValues:{kode_group:a.datamaster.ShowModalParameterHargaEmas.kode_group,harga:a.datamaster.ShowModalParameterHargaEmas.harga}}},null)(x),N=t(228),_=function(a){Object(i.a)(t,a);var e=Object(o.a)(t);function t(a){var n;return Object(r.a)(this,t),(n=e.call(this,a)).state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode_group",text:"Kode Group",sort:!0},{dataField:"nama_group",text:"Nama Group"},{dataField:"harga",text:"Harga",headerClasses:"text-right",formatter:function(a){return c.a.createElement("div",{className:"text-right"}," ",void 0===a?0:a.toLocaleString("kr-KO")," ")}},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(a,e){var t={kode_group:e.kode_group,harga:e.harga};return c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col-12"},c.a.createElement("button",{onClick:function(){return n.formEditParameterHargaEmas(t)},className:"btn btn-primary mr-3"}," ",c.a.createElement("i",{className:"fa fa-edit"}))))}}]},n.handleSubmit=n.handleSubmit.bind(Object(s.a)(n)),n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(u.yb)())}},{key:"handleSubmit",value:function(a){var e=this;this.setState({isLoading:!0});var t={kode_group:a.kode_group,harga:a.harga};Object(g.r)("paraemas/edit/by-kode-group",t).then(function(){e.props.dispatch(Object(u.Cb)())}).then(function(){Object(h.e)("success","Data Berhasil Diedit")}).then(function(){e.props.dispatch(Object(u.yb)())}).then(function(){e.setState({isLoading:!1})}).then(function(){e.props.dispatch(Object(b.d)("HeadHargaEmas"))}).catch(function(r){Object(E.a)(r,"sales/reactive/by-kode-sales/",a.kode_sales,t,e.props.dispatch,Object(u.yb)(),Object(u.Cb)(),"HeadHargaEmas").then(function(){e.setState({isLoading:!1})})})}},{key:"formEditParameterHargaEmas",value:function(a){this.props.dispatch(Object(u.Db)()),this.props.dispatch(Object(u.eb)(a)),this.setState({isEdit:!0})}},{key:"render",value:function(){var a=this;return c.a.createElement("div",null,c.a.createElement("ol",{className:"breadcrumb float-xl-right"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement(m.b,{to:"#"},"Data Master")),c.a.createElement("li",{className:"breadcrumb-item active"},"Parameter Harga Emas")),c.a.createElement("h1",{className:"page-header"},"Parameter Harga Emas "),c.a.createElement(d.a,null,c.a.createElement(d.c,null,"Parameter Harga Emas"),c.a.createElement("br",null),c.a.createElement("div",{className:"container"},c.a.createElement(f.a,{keyField:"kode_group",exportCsv:!0,data:this.props.ParameterHargaEmas,columns:this.state.columns,empty:this.props.ParameterHargaEmas,textEmpty:"Parameter Harga Emas Kosong"})),c.a.createElement("br",null),c.a.createElement(N.a,{size:"P",title:this.state.isEdit?"Edit Parameter Harga Emas":"Tambah Parameter Harga Emas",content:c.a.createElement(P,{isLoading:this.state.isLoading,isEdit:this.state.isEdit,onSubmit:function(e){return a.handleSubmit(e)}})})))}}]),t}(c.a.Component);e.default=Object(p.b)(function(a){return{ParameterHargaEmas:a.datamaster.getParameterHargaEmas,hideModal:a.datamaster.modalDialog}},null)(_)}}]);
//# sourceMappingURL=64.9cdd424a.chunk.js.map