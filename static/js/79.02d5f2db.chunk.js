(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1237:function(t,e,a){"use strict";a.r(e);var l=a(1),n=a(0),r=a.n(n),o=a(41),i=a(329),s=a(330),c=a(23),g=a(7),m=a(94),p=a(134),h=a(54),d=a.n(h),E=a(109);a(227);var b=(t="")=>{const e=new E.default("l","mm",[297,210]);let a=[],l=[],n=30,r=0;e.setFontSize(15),e.text("LAPORAN  TITIP UANG",14,15),e.setFontSize(20),e.text(Object(g.j)().nama_toko,200,15),e.setFontSize(8);let o=Object(g.j)().alamat_toko.length;o>20&&e.text(Object(g.j)().alamat_toko.slice(0,48),200,20),o>50&&e.text(Object(g.j)().alamat_toko.slice(48,90),200,25),e.setFontSize(10),e.setProperties({title:"LAPORAN  TITIP UANG"}),e.text("PERIODE : ".concat(0===Object(g.l)("tgl_laporan").length?null:JSON.parse(Object(g.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(g.l)("tgl_laporan")).tgl_akhir),14,25),l=[[{content:"Nama Barang"},{content:"BERAT",styles:{halign:"right"}},{content:"HARGA JUAL",styles:{halign:"right"}},{content:"ONGKOS",styles:{halign:"right"}},{content:"SUB TOTAL",styles:{halign:"right"}},{content:"DP RP",styles:{halign:"right"}}]],t.forEach((t,e)=>{r+=t.dp_rp;let l=[t.nama_barang,{content:t.berat.toFixed(2),styles:{halign:"right"}},{content:parseInt(t.harga_jual).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.ongkos).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.harga_total).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.dp_rp).toLocaleString("kr-KO"),styles:{halign:"right"}}];a.push(l)});let i=[{content:"Sub total",colSpan:5,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(r.toLocaleString("kr-KO")),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}}];a.push(i);let s=[{colSpan:3,content:"Printed By ".concat(JSON.parse(Object(g.l)("userdata")).user_id," / ").concat(Object(g.i)()),styles:{fontStyle:"italic",textColor:"#000"}}];a.push(s),e.autoTable({head:l,body:a,startY:n,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"}}),n=e.autoTableEndPosY()+3,a=[];const c=e.internal.getNumberOfPages(),m=e.internal.pageSize.width,p=e.internal.pageSize.height;e.setFontSize(10);for(let g=1;g<c+1;g++){let t=m/2,a=p-10;e.setPage(g),e.text("".concat(g," of ").concat(c),t,a,{align:"center"})}e.save("LAPORAN TITIP UANG.pdf")},u=a(133),S=a.n(u);var O=class extends n.Component{constructor(t){super(t),this.state={}}render(){let t=0;return this.props.data.forEach((e,a)=>{t+=e.dp_rp}),r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Titip Uang",sheet:"Laporan Titip Uang",buttonText:"Export Exel"}),r.a.createElement("table",{rowkey:"kode_member",id:"table-to-xls",style:{display:"none"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"6"}," Laporan Titip Uang ")),r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"6"}," Periode  ")),r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"6"}," ",0===Object(g.l)("tgl_laporan").length?null:JSON.parse(Object(g.l)("tgl_laporan")).tgl_awal+"s/d"+JSON.parse(Object(g.l)("tgl_laporan")).tgl_akhir," ")),r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"6"}," TOKO :  ",Object(g.j)().nama_toko," ")),r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"6"}," ALAMAT :  ",Object(g.j)().alamat_toko," ")),r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"6"})),r.a.createElement("tr",null,r.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA BARANG"),r.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT"),r.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGGA JUAL"),r.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"ONGKOS"),r.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"SUBTOTAL"),r.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"DP RP"))),r.a.createElement("tbody",null,this.props.data.map((t,e)=>r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{style:{textAlign:"right"}}," ",t.nama_barang),r.a.createElement("td",{style:{textAlign:"right"}}," ",t.berat.toFixed(2)),r.a.createElement("td",{style:{textAlign:"right"}}," ",t.harga_jual),r.a.createElement("td",{style:{textAlign:"right"}}," ",t.ongkos.toLocaleString("kr-KO")),r.a.createElement("td",{style:{textAlign:"right"}}," ",t.harga_total.toLocaleString("kr-KO")),r.a.createElement("td",{style:{textAlign:"right"}}," ",t.dp_rp.toLocaleString("kr-KO")))))),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"},colSpan:"5"}," Grand Total "),r.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"\xa0",t.toLocaleString("kr-KO"))))))}};class x extends n.Component{constructor(t){super(t),this.state={date:new Date,columns:[{dataField:"nama_barang",text:"Nama Barang",footer:"",footerAttrs:{colSpan:"5"}},{dataField:"berat",text:"Berat",headerClasses:"text-right"},{dataField:"harga_jual",text:"Harga Jual",headerClasses:"text-right"},{dataField:"ongkos",text:"Ongkos",headerClasses:"text-right"},{dataField:"harga_total",text:"Sub Total",headerClasses:"text-right"},{dataField:"dp_rp",text:"Dp",headerClasses:"text-right",formatter:t=>r.a.createElement("div",{className:"text-right"}," ",t.toLocaleString("kr-KO")),footer:t=>r.a.createElement("div",{className:"text-right"}," ",t.reduce((t,e)=>t+e,0).toLocaleString("kr-KO")," ")}]},this.setStartDate=this.setStartDate.bind(this),this.setLastDate=this.setLastDate.bind(this)}exportPdf(){b(this.props.LaporanTitipUang)}setStartDate(t){this.setState({tgl_awal:new Date(t)})}setLastDate(t){this.setState({tgl_akhir:new Date(t)})}render(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(i.a,{name:"tgl_awal",component:c.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:t=>this.setStartDate(t),placeholder:"Masukan Tanggal Dari"})),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(i.a,{name:"tgl_akhir",component:c.c,type:"text",selected:this.state.tgl_akhir,onChange:t=>this.setLastDate(t),label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"text-right"},r.a.createElement("label",null,"\xa0"),r.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(m.a,{keyField:"berat_bruto",data:this.props.export?this.props.LaporanTitipUang:[],columns:this.state.columns,empty:!0,textEmpty:"Data Laporan Titip Uang Kosong"})),r.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("button",{type:"button",onClick:()=>this.exportPdf(),className:"btn btn-warning btn-block"}," ","Export PDF"," ")),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(O,{data:this.props.LaporanTitipUang}))))),this.props.isLoading?r.a.createElement(d.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}x=Object(s.a)({form:"HeadLaporanTitipUang",enableReinitialize:!0,validate:p.a})(x);var k=Object(o.b)(t=>({initialValues:{tgl_awal:Object(g.h)(),tgl_akhir:Object(g.h)()}}))(x);class L extends l.n.Component{constructor(t){super(t),this.state={isLoading:!1,LaporanTitipUang:[],export:!1},this.handleSubmit=this.handleSubmit.bind(this)}handleSubmit(t){let e={tgl_awal:Object(l.y)(Object(l.K)(new Date(t.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(l.y)(Object(l.K)(new Date(t.tgl_akhir)).format("YYYY-MM-DD"))};this.setState({isLoading:!0}),Object(l.A)("titip/report-titip-uang?tgl_from="+e.tgl_awal+"&tgl_to="+e.tgl_akhir).then(t=>{if(0===t.data.length)return Object(l.t)("info","Laporan Titip Uang Kosong"),this.setState({export:!1,isLoading:!1}),!1;Object(l.t)("success","Laporan Titip Uang Tersedia"),Object(l.J)("tgl_laporan",JSON.stringify(e)),this.setState({LaporanTitipUang:t.data,isLoading:!1,export:!0})}).catch(t=>{Object(l.t)("info","Data Yang Di Cari Tidak Ada !!!"),this.setState({export:!1,isLoading:!1})})}render(){return l.n.createElement("div",null,l.n.createElement("ol",{className:"breadcrumb float-xl-right"},l.n.createElement("li",{className:"breadcrumb-item"},l.n.createElement(l.g,{to:"#"},"Laporan")),l.n.createElement("li",{className:"breadcrumb-item active"},"Laporan Titip Uang")),l.n.createElement("h1",{className:"page-header"},"Laporan Titip Uang "),l.n.createElement(l.k,null,l.n.createElement(l.m,null,"Laporan Titip Uang"),l.n.createElement("br",null),l.n.createElement(l.l,null,l.n.createElement(k,{export:this.state.export,isLoading:this.state.isLoading,LaporanTitipUang:this.state.LaporanTitipUang,onSubmit:t=>this.handleSubmit(t)})),l.n.createElement("br",null)))}}L=Object(l.O)({form:"LaporanTitipUang",enableReinitialize:!0})(L);e.default=Object(l.u)(null)(L)}}]);
//# sourceMappingURL=79.02d5f2db.chunk.js.map