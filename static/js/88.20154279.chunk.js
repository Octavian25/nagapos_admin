(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1245:function(t,e,a){"use strict";a.r(e);var n=a(3),i=a(0),l=a.n(i),o=a(48),s=a(329),r=a(330),c=a(30),d=a(7),m=a(92),h=a(61),g=a.n(h),b=a(107);a(227);var p=(t="")=>{const e=new b.default("l","mm",[297,210]);let a=[],n=[],i=30;e.setFontSize(15),e.text("LAPORAN OTORISASI AKUN",14,15),e.setFontSize(20),e.text(Object(d.j)().nama_toko,200,15),e.setFontSize(8);let l=Object(d.j)().alamat_toko.length;l>20&&e.text(Object(d.j)().alamat_toko.slice(0,48),200,20),l>50&&e.text(Object(d.j)().alamat_toko.slice(48,90),200,25),e.setFontSize(10),e.setProperties({title:"LAPORAN OTORISASI AKUN"}),n=[[{content:"No"},{content:"USER ID"},{content:"KATEGORI"},{content:"DESKRIPSI"},{content:"KETERANGAN"}]],t.forEach((t,e)=>{let n=[{content:"".concat(++e),styles:{cellWidth:10}},t.user_id,t.kategori,t.description,t.keterangan];a.push(n)});let o=[{colSpan:6,content:"Printed By ".concat(JSON.parse(Object(d.l)("userdata")).user_id," / ").concat(Object(d.i)()),styles:{fontStyle:"italic",textColor:"#000"}}];a.push(o),e.autoTable({head:n,body:a,startY:i,theme:"plain",rowPageBreak:"avoid",margin:{top:10},bodyStyles:{fontSize:8},headStyles:{fontSize:8,textColor:"#000",fillColor:"#E8E5E5"}}),i=e.autoTableEndPosY()+3,a=[];const s=e.internal.getNumberOfPages(),r=e.internal.pageSize.width,c=e.internal.pageSize.height;e.setFontSize(10);for(let d=1;d<s+1;d++){let t=r/2,a=c-10;e.setPage(d),e.text("".concat(d," of ").concat(s),t,a,{align:"center"})}var m=e.output("datauristring"),h=window.open();h.document.open(),h.document.write("<html><head><title>LAPORAN BARANG DETAIL</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+m+"></embed></body></html>")};class u extends i.Component{constructor(t){super(t),this.state={date:new Date},this.setStartDate=this.setStartDate.bind(this),this.setLastDate=this.setLastDate.bind(this)}handleSubmit(t){console.log(t)}exportPdf(){}setStartDate(t){this.setState({tgl_awal:new Date(t)})}setLastDate(t){this.setState({tgl_akhir:new Date(t)})}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(s.a,{name:"tgl_awal",component:c.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:t=>this.setStartDate(t),placeholder:"Masukan Tanggal Dari"})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(s.a,{name:"tgl_akhir",component:c.c,type:"text",selected:this.state.tgl_akhir,onChange:t=>this.setLastDate(t),label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),l.a.createElement("div",{className:"col-lg-4 text"},l.a.createElement("div",{className:"text-right"},l.a.createElement("label",null,"\xa0"),l.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(m.a,{keyField:"no_hp",data:this.props.dataAuthorization,columns:[{dataField:"user_id",text:"User Id",footerAttrs:{colSpan:"4"}},{dataField:"kategori",text:"Kategori"},{dataField:"description",text:"Deskripsi"},{dataField:"keterangan",text:"Keterangan"}],empty:!0,textEmpty:"Data Laporan Otorisasi Kosong"})),l.a.createElement("div",{className:this.props.dataAuthorization.length>0?"col-lg-12":"col-lg-12 d-none"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("button",{type:"button",onClick:()=>p(this.props.dataAuthorization),className:"btn btn-warning btn-block"}," ","Export PDF"," ")),l.a.createElement("div",{className:"col-lg-6"})))),this.props.isLoading?l.a.createElement(g.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}u=Object(r.a)({form:"HeadLaporanAuthorization",enableReinitialize:!0})(u);var E=Object(o.b)(t=>({initialValues:{tgl_awal:Object(d.h)(),tgl_akhir:Object(d.h)()}}))(u),S=a(13);class O extends n.n.Component{constructor(t){super(t),this.state={isLoading:!1,export:!1,dataAuthorization:[]},this.handleSubmit=this.handleSubmit.bind(this)}handleSubmit(t){let e={tgl_awal:Object(n.y)(Object(n.K)(new Date(t.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(n.y)(Object(n.K)(new Date(t.tgl_akhir)).format("YYYY-MM-DD"))};this.setState({isLoading:!0}),Object(S.e)("authorization/reports?tanggal[gte]=".concat(e.tgl_awal,"&tanggal[lte]=").concat(e.tgl_akhir)).then(t=>{0===t.data.length?(Object(n.t)("info","Data Yang Di Cari Tidak Ada !!!"),this.setState({dataAuthorization:[],isLoading:!1})):(Object(n.t)("success","Laporan Otorisasi Tersedia"),this.setState({dataAuthorization:t.data,isLoading:!1}))}).catch(t=>{Object(n.t)("info","Data Yang Di Cari Tidak Ada !!!")})}render(){return n.n.createElement("div",null,n.n.createElement("ol",{className:"breadcrumb float-xl-right"},n.n.createElement("li",{className:"breadcrumb-item"},n.n.createElement(n.g,{to:"#"},"Laporan")),n.n.createElement("li",{className:"breadcrumb-item active"},"Laporan Otorisasi")),n.n.createElement("h1",{className:"page-header"},"Laporan Otorisasi "),n.n.createElement(n.k,null,n.n.createElement(n.m,null,"Laporan Otorisasi"),n.n.createElement("br",null),n.n.createElement("div",{className:"container"},n.n.createElement(E,{dataAuthorization:this.state.dataAuthorization,onSubmit:t=>this.handleSubmit(t),export:this.state.export,isLoading:this.state.isLoading})),n.n.createElement("br",null)))}}O=Object(n.O)({form:"LaporanOtorisasi",enableReinitialize:!0})(O);e.default=Object(n.u)(t=>({initialValues:{tgl_awal:Object(n.E)(),tgl_akhir:Object(n.E)()}}))(O)}}]);
//# sourceMappingURL=88.20154279.chunk.js.map