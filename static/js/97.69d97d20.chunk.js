(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{1233:function(t,e,a){"use strict";a.r(e);var l=a(26),n=a(27),r=a(45),o=a(29),c=a(28),i=a(1),s=a(0),g=a.n(s),d=a(41),m=a(329),h=a(330),p=a(23),E=a(7),b=a(94),u=a(134),k=a(54),S=a.n(k),O=a(109);a(227);var A=(t="",e="",a="",l="")=>{const n=new O.default("l","mm",[297,210]);let r=[],o=[],c=30;n.setFontSize(15),n.text("LAPORAN STOCK JUAL",14,15),n.setFontSize(20),n.text(Object(E.j)().nama_toko,200,15),n.setFontSize(8);let i=Object(E.j)().alamat_toko.length;i>20&&n.text(Object(E.j)().alamat_toko.slice(0,48),200,20),i>50&&n.text(Object(E.j)().alamat_toko.slice(48,90),200,25),n.setFontSize(10),n.setProperties({title:"LAPORAN STOCK JUAL"}),n.text("PERIODE : ".concat(0===Object(E.l)("tgl_laporan").length?null:JSON.parse(Object(E.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(E.l)("tgl_laporan")).tgl_akhir),14,25),o=[[{content:"BARCODE"},{content:"KODE JENIS"},{content:"NAMA BARANG"},{content:"BERAT",styles:{halign:"right"}},{content:"HARGA / GRAM",styles:{halign:"right"}},{content:"HARGA JUAL",styles:{halign:"right"}},{content:"HARGA ATRIBUT",styles:{halign:"right"}},{content:"ONGKOS",styles:{halign:"right"}},{content:"TOTAL",styles:{halign:"right"}}]];let s=0;t.forEach((t,e)=>{s+=t.harga_total;let a=[t.kode_barcode,t.kode_dept,t.nama_barang,{content:t.berat.toFixed(3),styles:{halign:"right"}},{content:parseInt(t.harga_gram).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.harga_jual).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.harga_atribut).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.ongkos).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.harga_total).toLocaleString("kr-KO"),styles:{halign:"right"}}];r.push(a)});let g=[{content:"Total Transaksi: ".concat(t.length),colSpan:8,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:parseInt(s).toLocaleString("kr-KO"),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}}];r.push(g);let d=[{content:"Printed By ".concat(JSON.parse(Object(E.l)("userdata")).user_id," / ").concat(Object(E.i)()),colSpan:7,styles:{fontStyle:"italic",textColor:"#000"}}];r.push(d),n.autoTable({head:o,body:r,startY:c,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"},tableLineColor:[255,255,255],tableLineWidth:1}),c=n.autoTableEndPosY()+3,r=[];const m=n.internal.getNumberOfPages(),h=n.internal.pageSize.width,p=n.internal.pageSize.height;n.setFontSize(10);for(let E=1;E<m+1;E++){let t=h/2,e=p-10;n.setPage(E),n.text("".concat(E," of ").concat(m),t,e,{align:"center"})}n.save("LAPORAN STOCK JUAL.pdf")},_=a(133),x=a.n(_);var L=class extends s.Component{constructor(t){super(t),this.state={}}render(){return g.a.createElement(g.a.Fragment,null,g.a.createElement(x.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Stock Jual",sheet:"Laporan Stock Jual",buttonText:"Export Exel"}),g.a.createElement("table",{id:"table-to-xls",style:{display:"none"}},g.a.createElement("thead",null,g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"9",style:{textAlign:"center"}}," ","LAPORAN Stock Jual"," ")),g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"9"}," Periode ")),g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"9"}," ",0===Object(E.l)("tgl_laporan").length?null:JSON.parse(Object(E.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(E.l)("tgl_laporan")).tgl_akhir," ")),g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"9"}," TOKO : ",Object(E.j)().nama_toko," ")),g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"9"}," ALAMAT : ",Object(E.j)().alamat_toko," ")),g.a.createElement("tr",null),g.a.createElement("tr",null,g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BARCODE"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"QTY"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE JENIS"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA BARANG"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"HARGA / GRAM"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"HARGA JUAL"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"HARGA ATRIBUT"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"ONGKOS"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"HARGA TOTAL"))),g.a.createElement("tbody",null,this.props.data.map((t,e)=>g.a.createElement("tr",{key:e},g.a.createElement("td",null,t.kode_barcode),g.a.createElement("td",null,t.kode_dept),g.a.createElement("td",null,t.nama_barang),g.a.createElement("td",{style:{textAlign:"right"}},t.berat.toFixed(2)),g.a.createElement("td",{style:{textAlign:"right"}},t.harga_gram.toLocaleString("kr-KO")),g.a.createElement("td",{style:{textAlign:"right"}},t.harga_jual.toLocaleString("kr-KO")),g.a.createElement("td",{style:{textAlign:"right"}},t.harga_atribut.toLocaleString("kr-KO")),g.a.createElement("td",{style:{textAlign:"right"}},t.ongkos.toLocaleString("kr-KO")),g.a.createElement("td",{style:{textAlign:"right"}},t.harga_total.toLocaleString("kr-KO"))))),g.a.createElement("tfoot",null,g.a.createElement("tr",null,g.a.createElement("td",{colSpan:"8",style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}},"Grand Total Barang :"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",this.props.data.map(t=>t.harga_total).reduce((t,e)=>t+e,0).toLocaleString("ko-KO")," ")))))}},y=a(13);class f extends s.Component{constructor(t){super(t),this.state={date:new Date},this.setStartDate=this.setStartDate.bind(this),this.setLastDate=this.setLastDate.bind(this)}exportPdf(){A(this.props.LaporanStockJual)}setStartDate(t){this.setState({tgl_awal:new Date(t)})}setLastDate(t){this.setState({tgl_akhir:new Date(t)})}componentDidMount(){this.props.dispatch(Object(y.pb)()),this.props.dispatch(Object(y.lb)()),setTimeout(()=>{this.props.change("kode_dept","ALL"),this.props.change("kode_baki","ALL")},100)}render(){let t=[{value:"ALL",name:"SEMUA"}];this.props.databaki.forEach(e=>{let a={value:e.kode_baki,name:e.kode_baki+" - "+e.nama_baki};t.push(a)});let e=[{value:"ALL",name:"SEMUA"}];this.props.dataJenis.forEach(t=>{let a={value:t.kode_dept,name:t.kode_dept+" - "+t.nama_dept};e.push(a)});const a=[{dataField:"kode_barcode",text:"Kode Barcode",footerAttrs:{colSpan:"8"},footer:t=>g.a.createElement("div",null,"Total Transaksi : ",t.length," ")},{dataField:"kode_dept",text:"Kode Jenis"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"berat",text:"Berat",headerClasses:"text-right",formatter:t=>g.a.createElement("div",{className:"text-right"},Object(E.f)(t,3))},{dataField:"harga_gram",text:"Harga / Gram",headerClasses:"text-right",formatter:t=>g.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))},{dataField:"harga_jual",text:"Harga Jual",headerClasses:"text-right",formatter:t=>g.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))},{dataField:"harga_atribut",text:"Harga Atribut",headerClasses:"text-right",formatter:t=>g.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))},{dataField:"ongkos",text:"Ongkos",headerClasses:"text-right",formatter:t=>g.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))},{dataField:"harga_total",text:"Harga Total",headerClasses:"text-right",footer:(t,e,a,l)=>g.a.createElement("div",{className:"text-right"},t.reduce((t,e)=>t+e,0).toLocaleString("kr-KO")),formatter:t=>g.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))}];return g.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-lg-2"},g.a.createElement(m.a,{name:"tgl_awal",component:p.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:t=>this.setStartDate(t),placeholder:"Masukan Tanggal Dari"})),g.a.createElement("div",{className:"col-lg-2"},g.a.createElement(m.a,{name:"tgl_akhir",component:p.c,type:"text",selected:this.state.tgl_akhir,onChange:t=>this.setLastDate(t),label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),g.a.createElement("div",{className:"col-lg-2"},g.a.createElement(m.a,{label:"Jenis",name:"kode_dept",options:e,placeholder:"Silahkan Pilih Kode Jenis",component:p.f})),g.a.createElement("div",{className:"col-lg-2"},g.a.createElement(m.a,{label:"Kode Baki",name:"kode_baki",options:t,placeholder:"Silahkan Pilih Kode Baki",component:p.f})),g.a.createElement("div",{className:"col-lg-4"},g.a.createElement("div",{className:"text-right"},g.a.createElement("label",null,"\xa0"),g.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?g.a.createElement(g.a.Fragment,null,g.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),g.a.createElement("div",{className:"col-lg-12"},g.a.createElement(b.a,{keyField:"kode_barcode",data:this.props.export?this.props.LaporanStockJual:[],columns:a,empty:!0,textEmpty:"Data Laporan Stock Jual Kosong"})),g.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-lg-6"},g.a.createElement("button",{type:"button",onClick:()=>this.exportPdf(),className:"btn btn-warning btn-block"}," ","Export PDF"," ")),g.a.createElement("div",{className:"col-lg-6"},g.a.createElement(L,{data:this.props.LaporanStockJual}))))),this.props.isLoading?g.a.createElement(S.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}f=Object(h.a)({form:"HeadLaporanServiceAmbil",enableReinitialize:!0,validate:u.a})(f);var j=Object(d.b)(t=>({databaki:t.datamaster.getDataBaki,dataJenis:t.datamaster.getDataJenis,initialValues:{tgl_awal:Object(E.h)(),tgl_akhir:Object(E.h)()}}))(f),N=function(t){Object(o.a)(a,t);var e=Object(c.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={isLoading:!1,LaporanStockJual:[],export:!1},n.handleSubmit=n.handleSubmit.bind(Object(r.a)(n)),n}return Object(n.a)(a,[{key:"handleSubmit",value:function(t){var e=this,a={tgl_from:Object(i.y)(Object(i.K)(new Date(t.tgl_awal)).format("YYYY-MM-DD")),tgl_to:Object(i.y)(Object(i.K)(new Date(t.tgl_akhir)).format("YYYY-MM-DD")),kode_dept:t.kode_dept,kode_baki:t.kode_baki},l={tgl_awal:Object(i.y)(Object(i.K)(new Date(t.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(i.y)(Object(i.K)(new Date(t.tgl_akhir)).format("YYYY-MM-DD"))};this.setState({isLoading:!0}),Object(i.N)("penjualan/report-stock-terjual",a).then(function(t){if(0===t.data.length)return Object(i.t)("info","Laporan Stock Terjual Kosong"),e.setState({export:!1,isLoading:!1}),!1;Object(i.t)("success","Laporan Stock Jual Tersedia"),Object(i.J)("tgl_laporan",JSON.stringify(l)),e.setState({LaporanStockJual:t.data,isLoading:!1,export:!0})}).catch(function(t){Object(i.t)("info","Data Yang Di Cari Tidak Ada !!!"),e.setState({export:!1,isLoading:!1})})}},{key:"render",value:function(){var t=this;return i.n.createElement("div",null,i.n.createElement("ol",{className:"breadcrumb float-xl-right"},i.n.createElement("li",{className:"breadcrumb-item"},i.n.createElement(i.g,{to:"#"},"Laporan")),i.n.createElement("li",{className:"breadcrumb-item active"},"Laporan Stock Jual")),i.n.createElement("h1",{className:"page-header"},"Laporan Stock Jual "),i.n.createElement(i.k,null,i.n.createElement(i.m,null,"Laporan Stock Jual"),i.n.createElement("br",null),i.n.createElement(i.l,null,i.n.createElement(j,{export:this.state.export,isLoading:this.state.isLoading,LaporanStockJual:this.state.LaporanStockJual,onSubmit:function(e){return t.handleSubmit(e)}})),i.n.createElement("br",null)))}}]),a}(i.n.Component);N=Object(i.O)({form:"LaporanStockJual",enableReinitialize:!0})(N);e.default=Object(i.u)(null)(N)}}]);
//# sourceMappingURL=97.69d97d20.chunk.js.map