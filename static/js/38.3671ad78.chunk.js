(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1280:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(27),i=t(131),l=t(109),o=t.n(l),d=t(47),c=t(82),m=t.n(c),b=t(15),h=t(328),p=t(329),u=t(30),g=t(788),E=t(61),B=t.n(E);class k extends n.Component{constructor(...e){super(...e),this.state={aktif:!1}}componentDidMount(){setTimeout(()=>{this.props.isEdit?document.getElementById("berat_bandrol").focus():document.getElementById("keterangan").focus()},100)}render(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},r.a.createElement(h.a,{id:"keterangan",tabIndex:"1",name:"keterangan",component:u.e,type:"text",label:"Keterangan",readOnly:this.props.isEdit,placeholder:"Masukan Keterangan"}),r.a.createElement(h.a,{tabIndex:"2",id:"berat_bandrol",name:"berat_bandrol",component:u.a,type:"text",label:"Berat Bandrol",onBlur:()=>this.setState({aktif:!0}),placeholder:"Berat Bandrol"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-right"},r.a.createElement("button",{className:"btn btn-white",onClick:()=>this.props.dispatch(Object(b.Ab)()),type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",r.a.createElement("button",{tabIndex:"3",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.submitting,type:"submit"},this.props.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?r.a.createElement(B.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}k=Object(p.a)({form:"FormBandrol",enableReinitialize:!0,validate:g.a})(k);var f=Object(d.b)(e=>{if(null!==e.datamaster.ShowModalBandrol)return{initialValues:{keterangan:e.datamaster.ShowModalBandrol.keterangan,berat_bandrol:e.datamaster.ShowModalBandrol.berat_bandrol}}},null)(k),j=t(24),O=t(55),N=t(13),S=t(227);a.default=Object(d.b)(e=>({DataBandrol:e.datamaster.getBandrol,hideModal:e.datamaster.modalDialog}),null)(class extends r.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,columns:[{dataField:"keterangan",text:"Keterangan "},{dataField:"berat_bandrol",text:"Berat Bandrol "},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(e,a)=>{let t={keterangan:a.keterangan,berat_bandrol:a.berat_bandrol};return r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{onClick:()=>this.formEditDataKategori(t),className:"btn btn-primary mr-3"},r.a.createElement("i",{className:"fa fa-edit"}))))}}]}}handleSubmit(e){this.setState({isLoading:!0});let a={berat_bandrol:e.berat_bandrol},t={keterangan:e.keterangan,berat_bandrol:e.berat_bandrol};this.state.isEdit?Object(N.p)("parabandrol/edit/by-keterangan/"+e.keterangan,a).then(()=>{this.props.dispatch(Object(b.Ab)())}).then(()=>{Object(j.e)("success","Data Berhasil Diedit")}).then(()=>{this.props.dispatch(Object(b.jb)())}).then(()=>{this.setState({isLoading:!1})}).then(()=>{this.props.dispatch(Object(O.d)("FormBandrol"))}).catch(e=>{Object(j.e)("info","Terjadi Kesalahan Saat Mengirim Data"),this.setState({isLoading:!1})}):Object(N.j)("pababandrol/add",t).then(()=>{this.props.dispatch(Object(b.Ab)())}).then(()=>{Object(j.e)("success","Data Berhasil Disimpan")}).then(()=>{this.props.dispatch(Object(b.jb)())}).then(()=>{this.props.dispatch(Object(O.d)("FormBandrol"))}).then(()=>{this.setState({isLoading:!1})}).catch(e=>this.ErrorHandling(e))}ErrorHandling(e){this.setState({isLoading:!1}),Object(j.a)(e)}componentDidMount(){this.props.dispatch(Object(b.jb)())}formEditDataKategori(e){this.props.dispatch(Object(b.Bb)()),this.props.dispatch(Object(b.T)(e)),this.setState({isEdit:!0})}showModalKategori(){this.props.dispatch(Object(b.Bb)()),this.props.dispatch(Object(b.T)(!1)),this.setState({isEdit:!1})}render(){return r.a.createElement("div",null,r.a.createElement("ol",{className:"breadcrumb float-xl-right"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(s.b,{to:"#"},"Data Master")),r.a.createElement("li",{className:"breadcrumb-item active"},"Master Bandrol")),r.a.createElement("h1",{className:"page-header"},"Master Bandrol "),r.a.createElement(i.a,null,r.a.createElement(i.c,null,"Master Bandrol"),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement(m.a,{keyField:"keterangan",data:this.props.DataBandrol||[],columns:this.state.columns,search:!0,exportCSV:{fileName:"Export Master Gudang.csv"}},e=>r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 mb-3"},0===this.props.DataBandrol.length?r.a.createElement("button",{onClick:()=>this.showModalKategori(),className:"btn btn-primary"},r.a.createElement("i",{className:"fa fa-plus"})):null),r.a.createElement("div",{className:"col-12"},r.a.createElement(o.a,e.baseProps),r.a.createElement("br",null))))),r.a.createElement("br",null),r.a.createElement(S.a,{size:"P",title:this.state.isEdit?"Edit Data Bandrol":"Tambah Data Bandrol",content:r.a.createElement(f,{isEdit:this.state.isEdit,isLoading:this.state.isLoading,onSubmit:e=>this.handleSubmit(e)})})))}})},788:function(e,a,t){"use strict";a.a=((e,a)=>{const t={};return e.kode_gudang||(t.kode_gudang="Kode Gudang Tidak Boleh Kosong"),e.nama_gudang||(t.nama_gudang="Nama Gudang Tidak Boleh Kosong"),t})}}]);
//# sourceMappingURL=38.3671ad78.chunk.js.map