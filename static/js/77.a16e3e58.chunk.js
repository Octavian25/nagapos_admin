(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1238:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(27),o=a(131),c=a(48),s=a(13),i=a(330),d=a(7),m=a(24),g=a(108),E=a(329),b=a(30),h=a(92),p=a(133),u=a(132),k=a.n(u);var _=class extends l.Component{constructor(e){super(e),this.state={}}render(){let e=0,t=0,a=0,l=0;return this.props.data.forEach((n,r)=>{n.detail.forEach((l,n)=>{e+=l.stock_on_hand,a+=l.berat_atribut,t+=l.berat}),l+=n.detail.length}),n.a.createElement(n.a.Fragment,null,n.a.createElement(k.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Pindah Barang",sheet:"Laporan Pindah Barang",buttonText:"Export Exel"}),n.a.createElement("table",{rowkey:"kode_member",id:"table-to-xls",style:{display:"none"}},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"10"}," Laporan Pindah Barang ")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"10"}," Periode ")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"10"}," ",0===Object(d.l)("tgl_laporan").length?null:JSON.parse(Object(d.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(d.l)("tgl_laporan")).tgl_akhir," ")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"10"}," TOKO :  ",Object(d.j)().nama_toko," ")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"10"}," ALAMAT :  ",Object(d.j)().alamat_toko," ")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"10"})),n.a.createElement("tr",null,n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"GUDANG ASAL"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BAKI ASAl"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"GUDANG"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BAKI TUJUAN"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BARCODE"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA BARANG"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA ATRIBUT"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT ATRIBUT"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT"))),n.a.createElement("tbody",null,this.props.data.map((e,t)=>n.a.createElement(n.a.Fragment,null,e.detail.map((e,a)=>n.a.createElement("tr",{key:e.no_pindah},n.a.createElement("td",{style:{textAlign:"center"}}," ",++t),n.a.createElement("td",null," ",e.kode_gudang_asal),n.a.createElement("td",null," ",e.kode_baki_asal),n.a.createElement("td",{style:{textAlign:"center"}}," ",e.kode_gudang),n.a.createElement("td",{style:{textAlign:"center"}}," ",e.kode_baki),n.a.createElement("td",null,"\xa0",e.kode_barcode),n.a.createElement("td",null," ",e.nama_barang),n.a.createElement("td",null," ",e.nama_atribut),n.a.createElement("td",null," ",Object(d.f)(e.berat_atribut,2)),n.a.createElement("td",null," ",Object(d.f)(e.berat,3))))))),n.a.createElement("tfoot",null,n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"7",style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}},"Total"),n.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," "),n.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},Object(d.f)(a,2)),n.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},Object(d.f)(t,3))))))}},A=a(107);a(227);var f=(e="",t="",a="",l="")=>{const n=new A.default("l","mm",[297,210]);let r=[],o=[],c=30,s=0,i=0,m=0;n.setFontSize(15),n.text("LAPORAN PINDAH BARANG",14,15),n.setFontSize(20),n.text(Object(d.j)().nama_toko,200,15),n.setFontSize(8);let g=Object(d.j)().alamat_toko.length;g>20&&n.text(Object(d.j)().alamat_toko.slice(0,48),200,20),g>50&&n.text(Object(d.j)().alamat_toko.slice(48,90),200,25),n.setFontSize(10),n.setProperties({title:"Laporan Pindah Barang"}),n.text("PERIODE : ".concat(0===Object(d.l)("tgl_laporan").length?null:JSON.parse(Object(d.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(d.l)("tgl_laporan")).tgl_akhir),14,25);let E=1;e.forEach((e,t)=>{let a=0,l=0;e.detail.forEach((e,t)=>{let n=[E,e.kode_gudang_asal,e.kode_baki_asal,e.kode_gudang,e.kode_baki,e.kode_barcode,e.nama_barang,e.nama_atribut,{content:Object(d.f)(e.berat_atribut,3),styles:{halign:"right"}},{content:Object(d.f)(e.berat,3),styles:{halign:"right"}}];l+=parseFloat(e.berat),a+=parseFloat(e.berat_atribut),s+=parseFloat(e.berat),i+=parseFloat(e.berat_atribut),r.push(n),++E}),m+=e.detail.length});let b=[{content:"Total",colSpan:7,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"",styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(Object(d.f)(i,3)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(Object(d.f)(s,3)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}}];r.push(b);let h=[{colSpan:9,content:"Printed By ".concat(JSON.parse(Object(d.l)("userdata")).user_id," / ").concat(Object(d.i)()),styles:{fontStyle:"italic",textColor:"#000"}}];r.push(h),n.autoTable({head:[[{content:"NO"},{content:"GUDANG ASAL"},{content:"BAKI ASAL"},{content:"GUDANG"},{content:"BAKI TUJUAN"},{content:"BARCODE"},{content:"NAMA BARANG"},{content:"NAMA ATR"},{content:"BRT ATR",styles:{halign:"right"}},{content:"BERAT",styles:{halign:"right"}}]],body:r,foot:o,startY:c,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,textColor:"#000",fillColor:"#E8E5E5"}}),c=n.autoTableEndPosY()+3,r=[],o=[];const p=n.internal.getNumberOfPages(),u=n.internal.pageSize.width,k=n.internal.pageSize.height;n.setFontSize(10);for(let d=1;d<p+1;d++){let e=u/2,t=k-10;n.setPage(d),n.text("".concat(d," of ").concat(p),e,t,{align:"center"})}n.save("Laporan Pindah Barang.pdf")},O=a(61),S=a.n(O);class x extends l.Component{constructor(e){super(e),this.state={date:new Date},this.setStartDate=this.setStartDate.bind(this),this.setLastDate=this.setLastDate.bind(this)}exportPdf(){f(this.props.LaporanDataBarang)}setStartDate(e){this.setState({tgl_awal:new Date(e)})}setLastDate(e){this.setState({tgl_akhir:new Date(e)})}render(){let e=[],t=0;this.props.LaporanDataBarang.forEach(a=>{a.detail.forEach(a=>{e.push(a),t+=a.berat})});const a=[{dataField:"kode_gudang_asal",text:"Gudang Asal",footerAttrs:{colSpan:"5"},footer:(t,a,l,r)=>n.a.createElement("div",null,"Total Barang : ",e.length," ")},{dataField:"kode_baki_asal",text:"Baki Asal"},{dataField:"kode_barcode",text:"Kode Barcode"},{dataField:"kode_gudang",text:"Gudang"},{dataField:"kode_baki",text:"Baki Tujuan"},{dataField:"berat",text:"Berat",headerClasses:"text-right",formatter:e=>n.a.createElement("div",{className:"text-right"}," ",Object(d.f)(e,2)," "),footer:e=>n.a.createElement("div",{className:"text-right"}," ",Object(d.f)(e.reduce((e,t)=>e+t,0),2)," ")}];return n.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4"},n.a.createElement(E.a,{name:"tgl_awal",component:b.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:e=>this.setStartDate(e),placeholder:"Masukan Tanggal Dari"})),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement(E.a,{name:"tgl_akhir",component:b.c,type:"text",selected:this.state.tgl_akhir,onChange:e=>this.setLastDate(e),label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("div",{className:"text-right"},n.a.createElement("label",null,"\xa0"),n.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),n.a.createElement("div",{className:"col-12"},n.a.createElement(h.a,{keyField:"no_pindah",data:this.props.export?e:[],columns:a,empty:!0,textEmpty:"Data Laporan Pindah Barang Kosong"})),n.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("button",{type:"button",onClick:()=>this.exportPdf(),className:"btn btn-warning btn-block"}," ","Export PDF"," ")),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement(_,{data:this.props.LaporanDataBarang}))))),this.props.isLoading?n.a.createElement(S.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}x=Object(i.a)({form:"HeadPindahBarang",enableReinitialize:!0,validate:p.a})(x);var y=Object(c.b)(e=>({initialValues:{tgl_awal:Object(d.h)(),tgl_akhir:Object(d.h)()}}))(x);class N extends n.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,username:!1,export:!1,LaporanDataBarang:[],tgl_awal:new Date,tgl_akhir:new Date},this.handleSubmit=this.handleSubmit.bind(this)}handleSubmit(e){this.setState({isLoading:!0});let t={tgl_awal:Object(d.e)(g(new Date(e.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(d.e)(g(new Date(e.tgl_akhir)).format("YYYY-MM-DD"))};Object(s.m)("pindahbarang/get/report",t).then(e=>{0===e.data.length?(Object(m.e)("info","Data Yang Anda Cari Tidak Ada"),this.setState({isLoading:!1,export:!1,LaporanDataBarang:[]})):(Object(d.m)("tgl_laporan",JSON.stringify(t)),Object(m.e)("success","Laporan Pindah Barang Tersedia"),this.setState({LaporanDataBarang:e.data,isLoading:!1,export:!0}))}).catch(e=>this.errorHandling(e))}errorHandling(e){Object(m.a)(e),this.setState({isLoading:!1,export:!1})}render(){return n.a.createElement("div",null,n.a.createElement("ol",{className:"breadcrumb float-xl-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(r.b,{to:"#"},"Laporan Barang")),n.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Pindah Barang")),n.a.createElement("h1",{className:"page-header"},"Laporan Pindah Barang "),n.a.createElement(o.a,null,n.a.createElement(o.c,null,"Filter Laporan"),n.a.createElement("br",null),n.a.createElement("div",{className:"container"},n.a.createElement(y,{export:this.state.export,LaporanDataBarang:this.state.LaporanDataBarang,isLoading:this.state.isLoading,onSubmit:e=>this.handleSubmit(e)})),n.a.createElement("br",null)))}}N=Object(i.a)({form:"FormLaporanPindahBarang",enableReinitialize:!0})(N);t.default=Object(c.b)(e=>({hideModal:e.datamaster.modalDialog}),null)(N)}}]);
//# sourceMappingURL=77.a16e3e58.chunk.js.map