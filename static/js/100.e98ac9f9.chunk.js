(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1173:function(t,e,a){"use strict";a.r(e);var l=a(0),r=a.n(l),n=a(48),o=a(329),c=a(330),s=a(30),i=a(7),g=a(92),m=a(133),h=a(107);a(227);var d=(t="",e="",a="",l="")=>{const r=new h.default("l","mm",[297,210]);let n=[],o=[],c=[],s=30,g=0,m=0,d=0,E=0,p=0;r.setFontSize(15),r.text("LAPORAN BARANG TUKAR",14,15),r.setFontSize(20),r.text(Object(i.j)().nama_toko,200,15),r.setFontSize(8);let b=Object(i.j)().alamat_toko.length;b>20&&r.text(Object(i.j)().alamat_toko.slice(0,48),200,20),b>50&&r.text(Object(i.j)().alamat_toko.slice(48,90),200,25),r.setFontSize(10),r.setProperties({title:"LAPORAN BARANG TUKAR"}),r.text("PERIODE : ".concat(0===Object(i.l)("tgl_laporan").length?null:JSON.parse(Object(i.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(i.l)("tgl_laporan")).tgl_akhir),14,25),c=[[{content:"NAMA BARANG"},{content:"QTY",styles:{halign:"right"}},{content:"HARGA/GRAM",styles:{halign:"right"}},{content:"BERAT",styles:{halign:"right"}},{content:"TOTAL HARGA",styles:{halign:"right"}}]],t.forEach((t,e)=>{let a=0,l=0,r=0,o=0,c=[{content:"Nomor Faktur Group : ".concat(t.no_faktur_group_user),colSpan:5}];n.push(c),t.detail_barang.forEach((t,e)=>{let c=[t.nama_barang,{content:parseInt(t.qty),styles:{halign:"right"}},{content:Object(i.n)(parseInt(t.harga_gram)).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:t.berat.toFixed(2),styles:{halign:"right"}},{content:parseInt(t.harga_beli).toLocaleString("kr-KO"),styles:{halign:"right"}}];m=parseFloat(m)+parseFloat(t.qty),d+=parseInt(t.harga_gram),p+=parseFloat(t.berat),E+=parseInt(t.harga_beli),a+=parseFloat(t.qty),o+=parseInt(t.harga_gram),l+=parseFloat(t.berat),r+=parseInt(t.harga_beli),n.push(c)}),g+=t.detail_barang.length});let u=[{content:"Grand Total Barang : ".concat(g),colSpan:1,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(m),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(Object(i.n)(parseInt(d)).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(p.toFixed(2)),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(E).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}}];n.push(u);let x=[{content:"Printed By ".concat(JSON.parse(Object(i.l)("userdata")).user_id," / ").concat(Object(i.i)()),colSpan:11,styles:{fontStyle:"italic",textColor:"#000"}}];n.push(x),r.autoTable({head:c,body:n,foot:o,startY:s,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,textColor:"#000",fillColor:"#E8E5E5"},tableLineColor:[255,255,255],tableLineWidth:1}),s=r.autoTableEndPosY()+3,n=[],o=[];const y=r.internal.getNumberOfPages(),A=r.internal.pageSize.width,k=r.internal.pageSize.height;r.setFontSize(10);for(let i=1;i<y+1;i++){let t=A/2,e=k-10;r.setPage(i),r.text("".concat(i," of ").concat(y),t,e,{align:"center"})}var _=r.output("datauristring"),O=window.open();O.document.open(),O.document.write("<html><head><title>LAPORAN BARANG TUKAR</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+_+"></embed></body></html>")},E=a(61),p=a.n(E),b=a(132),u=a.n(b);var x=class extends l.Component{constructor(t){super(t),this.state={}}render(){let t=0,e=0,a=0,l=0,n=0;return this.props.data.forEach((r,o)=>{r.detail_barang.forEach((r,n)=>{t+=r.qty,e+=r.berat,a+=r.harga_beli,l+=r.harga_gram}),n+=r.detail_barang.length}),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Barang Tukar",sheet:"Laporan Barang Tukar",buttonText:"Export Exel"}),r.a.createElement("table",{id:"table-to-xls",style:{display:"none"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"5",style:{textAlign:"center"}}," ","LAPORAN BARANG TUKAR"," ")),r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"5"}," Periode ")),r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"5"}," ",0===Object(i.l)("tgl_laporan").length?null:JSON.parse(Object(i.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(i.l)("tgl_laporan")).tgl_akhir," ")),r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"5"}," TOKO :  ",Object(i.j)().nama_toko," ")),r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"5"}," ALAMAT :  ",Object(i.j)().alamat_toko," ")),r.a.createElement("tr",null),r.a.createElement("tr",null,r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA BARANG"),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"QTY"),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGA/GRAM"),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT"),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"TOTAL HARGA"))),this.props.data.map((t,e)=>r.a.createElement(r.a.Fragment,null,r.a.createElement("tbody",null,t.detail_barang.map((t,e)=>r.a.createElement("tr",null,r.a.createElement("td",null,t.nama_barang),r.a.createElement("td",null,t.qty),r.a.createElement("td",{style:{textAlign:"right"}},Object(i.n)(t.harga_gram).toLocaleString("kr-KO")),r.a.createElement("td",{style:{textAlign:"right"}},t.berat.toFixed(2)),r.a.createElement("td",{style:{textAlign:"right"}},t.harga_beli.toLocaleString("kr-KO"))))))),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"1",style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}},"Grand Total Barang : ",n),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",t," "),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",Object(i.n)(l).toLocaleString("kr-KO")," "),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",e.toFixed(2)," "),r.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",a.toLocaleString("kr-KO")," ")))))}};class y extends l.Component{constructor(t){super(t),this.state={date:new Date},this.setStartDate=this.setStartDate.bind(this),this.setLastDate=this.setLastDate.bind(this)}exportPdf(){d(this.props.LaporanDataPenjualan)}setStartDate(t){this.setState({tgl_awal:new Date(t)})}setLastDate(t){this.setState({tgl_akhir:new Date(t)})}render(){let t=[],e=0,a=0,l=0,n=0,c=0,m=0;this.props.LaporanDataPenjualan.forEach(r=>{r.detail_barang.forEach(r=>{t.push(r),e+=r.qty,a+=r.kadar,l+=r.berat,n+=r.harga_nota,c+=r.harga_beli,m+=r.harga_gram})});const h=[{dataField:"nama_barang",text:"Nama Barang",footerAttrs:{colSpan:"1"},footer:(e,a,l,n)=>r.a.createElement("div",null,"Total Barang  : ",t.length," ")},{dataField:"qty",text:"Qty",headerClasses:"text-right",footer:(t,a,l,n)=>r.a.createElement("div",{className:"text-right"},e," "),formatter:t=>r.a.createElement("div",{className:"text-right"},t)},{dataField:"harga_gram",text:"Harga/Gram",headerClasses:"text-right",footer:(t,e,a,l)=>r.a.createElement("div",{className:"text-right"},Object(i.n)(m).toLocaleString("kr-KO")," "),formatter:t=>r.a.createElement("div",{className:"text-right"},Object(i.n)(t).toLocaleString("kr-KO"))},{dataField:"berat",text:"Berat",headerClasses:"text-right",footer:(t,e,a,n)=>r.a.createElement("div",{className:"text-right"},l.toFixed(2)," "),formatter:t=>r.a.createElement("div",{className:"text-right"},t.toFixed(2))},{dataField:"harga_beli",text:"Total Harga",headerClasses:"text-right",footer:(t,e,a,l)=>r.a.createElement("div",{className:"text-right"},c.toLocaleString("kr-KO")," "),formatter:t=>r.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))}];return r.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(o.a,{name:"tgl_awal",component:s.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:t=>this.setStartDate(t),placeholder:"Masukan Tanggal Dari"})),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(o.a,{name:"tgl_akhir",component:s.c,type:"text",selected:this.state.tgl_akhir,onChange:t=>this.setLastDate(t),label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"text-right"},r.a.createElement("label",null,"\xa0"),r.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),r.a.createElement("div",{className:"col-12"},r.a.createElement(g.a,{keyField:"kode_barcode",data:this.props.export?t:[],columns:h,empty:!0,textEmpty:"Data Laporan Batal Penjualan Kosong"})),r.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("button",{type:"button",onClick:()=>this.exportPdf(),className:"btn btn-warning btn-block"}," ","Export PDF"," ")),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(x,{data:this.props.LaporanDataPenjualan}))))),this.props.isLoading?r.a.createElement(p.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}y=Object(c.a)({form:"HeadFormLaporanPenjualanTukar",enableReinitialize:!0,validate:m.a})(y);e.default=Object(n.b)(t=>({initialValues:{tgl_awal:Object(i.h)(),tgl_akhir:Object(i.h)()}}))(y)}}]);
//# sourceMappingURL=100.e98ac9f9.chunk.js.map