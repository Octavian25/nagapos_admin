(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1256:function(a,e,t){"use strict";t.r(e);var r=t(0),s=t.n(r),i=t(27),o=t(131),n=t(15),l=t(47),m=t(24),d=t(55),c=t(13),p=t(7),h=t(92),u=t(328),b=t(329),g=t(30),E=t(134),k=t(61),f=t.n(k);const H=Object(E.createNumberMask)({prefix:"Rp. ",locale:"kr-KO"});class O extends r.Component{constructor(...a){super(...a),this.state={aktif:!1}}componentDidMount(){this.props.dispatch(Object(n.u)()),setTimeout(()=>{document.getElementById("harga").focus()},100)}render(){return s.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()}},s.a.createElement(u.a,{label:"Kode Group",name:"kode_group",options:this.props.datagroup.filter(a=>void 0!==a.kode_group).map(a=>{return{value:a.kode_group,name:a.kode_group+" - "+a.nama_group}}),value:this.props.kode_group,disabled:this.props.isEdit,placeholder:"Silahkan Pilih Kode Group",component:g.f}),s.a.createElement(u.a,Object.assign({id:"harga",name:"harga",tabIndex:"1"},H,{component:g.e,type:"text",label:"Jumlah Harga",onBlur:()=>this.setState({aktif:!0}),placeholder:"Masukan Jumlah Harga"})),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 text-right"},s.a.createElement("button",{className:"btn btn-white",onClick:()=>this.props.dispatch(Object(n.Ab)()),type:"button"},"Batal"),"\xa0",s.a.createElement("button",{tabIndex:"2",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.isLoading,type:"submit"},this.props.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?s.a.createElement(f.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}O=Object(b.a)({form:"HeadHargaEmas",enableReinitialize:!0})(O);var S=Object(l.b)(a=>{if(null!==a.datamaster.ShowModalParameterHargaEmas)return{datagroup:a.datamaster.GetDataGroup,initialValues:{kode_group:a.datamaster.ShowModalParameterHargaEmas.kode_group,harga:a.datamaster.ShowModalParameterHargaEmas.harga}}},null)(O),j=t(227);e.default=Object(l.b)(a=>({ParameterHargaEmas:a.datamaster.getParameterHargaEmas,hideModal:a.datamaster.modalDialog}),null)(class extends s.a.Component{constructor(a){super(a),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode_group",text:"Kode Group",sort:!0},{dataField:"nama_group",text:"Nama Group"},{dataField:"harga",text:"Harga",formatter:a=>s.a.createElement("span",null,parseFloat(a).toLocaleString("kr-KO"))},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,e)=>{let t={kode_group:e.kode_group,harga:e.harga};return s.a.createElement("div",{className:"row text-center"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{onClick:()=>this.formEditParameterHargaEmas(t),className:"btn btn-primary mr-3"}," ",s.a.createElement("i",{className:"fa fa-edit"}))))}}]},this.handleSubmit=this.handleSubmit.bind(this)}componentDidMount(){this.props.dispatch(Object(n.wb)())}handleSubmit(a){this.setState({isLoading:!0});let e={kode_group:a.kode_group,harga:a.harga};Object(c.r)("paraemas/edit/by-kode-group",e).then(()=>{this.props.dispatch(Object(n.Ab)())}).then(()=>{Object(m.e)("success","Data Berhasil Diedit")}).then(()=>{this.props.dispatch(Object(n.wb)())}).then(()=>{this.setState({isLoading:!1})}).then(()=>{this.props.dispatch(Object(d.d)("HeadHargaEmas"))}).catch(t=>{Object(p.a)(t,"sales/reactive/by-kode-sales/",a.kode_sales,e,this.props.dispatch,Object(n.wb)(),Object(n.Ab)(),"HeadHargaEmas").then(()=>{this.setState({isLoading:!1})})})}formEditParameterHargaEmas(a){this.props.dispatch(Object(n.Bb)()),this.props.dispatch(Object(n.db)(a)),this.setState({isEdit:!0})}render(){return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(i.b,{to:"#"},"Data Master")),s.a.createElement("li",{className:"breadcrumb-item active"},"Parameter Harga Emas")),s.a.createElement("h1",{className:"page-header"},"Parameter Harga Emas "),s.a.createElement(o.a,null,s.a.createElement(o.c,null,"Parameter Harga Emas"),s.a.createElement("br",null),s.a.createElement("div",{className:"container"},s.a.createElement(h.a,{keyField:"kode_group",exportCsv:!0,data:this.props.ParameterHargaEmas,columns:this.state.columns,empty:this.props.ParameterHargaEmas,textEmpty:"Parameter Harga Emas Kosong"})),s.a.createElement("br",null),s.a.createElement(j.a,{size:"P",title:this.state.isEdit?"Edit Parameter Harga Emas":"Tambah Parameter Harga Emas",content:s.a.createElement(S,{isLoading:this.state.isLoading,isEdit:this.state.isEdit,onSubmit:a=>this.handleSubmit(a)})})))}})}}]);
//# sourceMappingURL=67.274610b7.chunk.js.map