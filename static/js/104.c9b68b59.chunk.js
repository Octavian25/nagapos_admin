(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1244:function(t,e,a){"use strict";a.r(e);var n=a(13),r=a(14),l=a(23),o=a(16),i=a(15),c=a(2),s=a(0),g=a.n(s),u=a(40),d=a(335),m=a(336),E=a(29),h=a(5),p=a(87),b=a(132),f=a(53),O=a.n(f),S=a(106),k=(a(222),function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]&&arguments[3],new S.default("l","mm",[297,210])),n=[],r=30;a.setFontSize(15),a.text("LAPORAN PESANAN",14,15),a.setFontSize(20),a.text(Object(h.j)().nama_toko,200,15),a.setFontSize(8);var l=Object(h.j)().alamat_toko.length;l>20&&a.text(Object(h.j)().alamat_toko.slice(0,48),200,20),l>50&&a.text(Object(h.j)().alamat_toko.slice(48,90),200,25),a.setFontSize(10),a.setProperties({title:"LAPORAN PESANAN"}),a.text("PERIODE : ".concat(0===Object(h.l)("tgl_laporan").length?null:JSON.parse(Object(h.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(h.l)("tgl_laporan")).tgl_akhir),14,25),t=[[{content:"NO PESANAN"},{content:"SALES"},{content:"TGL PESAN"},{content:"TOTAL BERAT",styles:{halign:"right"}},{content:"TOTAL QTY",styles:{halign:"right"}},{content:"ONGKOS",styles:{halign:"right"}},{content:"TOTAL RP",styles:{halign:"right"}},{content:"BAYAR RP",styles:{halign:"right"}},{content:"SISA RP",styles:{halign:"right"}}]];var o=0,i=0,c=0,s=0,g=0,u=0;e.forEach(function(t,e){o+=t.sisa_bayar,i+=t.jumlah_bayar,c+=t.total_harga,s+=t.ongkos,g+=t.total_qty,u+=t.total_berat;var a=[t.no_pesanan,t.kode_sales,t.tanggal,{content:t.total_berat.toFixed(2),styles:{halign:"right"}},{content:parseInt(t.total_qty),styles:{halign:"right"}},{content:parseInt(t.ongkos).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.total_harga).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.jumlah_bayar).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.sisa_bayar).toLocaleString("kr-KO"),styles:{halign:"right"}}];n.push(a)});var d=[{content:"Grand Total",colSpan:3,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:u.toFixed(2),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:parseInt(g).toLocaleString("kr-KO"),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:parseInt(s).toLocaleString("kr-KO"),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:parseInt(c).toLocaleString("kr-KO"),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:parseInt(i).toLocaleString("kr-KO"),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:parseInt(o).toLocaleString("kr-KO"),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}}];n.push(d);var m=[{content:"Printed By ".concat(JSON.parse(Object(h.l)("userdata")).user_id," / ").concat(Object(h.i)()),colSpan:7,styles:{fontStyle:"italic",textColor:"#000"}}];n.push(m),a.autoTable({head:t,body:n,startY:r,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"},tableLineColor:[255,255,255],tableLineWidth:1}),r=a.autoTableEndPosY()+3,n=[];var E=a.internal.getNumberOfPages(),p=a.internal.pageSize.width,b=a.internal.pageSize.height;a.setFontSize(10);for(var f=1;f<E+1;f++){var O=p/2,k=b-10;a.setPage(f),a.text("".concat(f," of ").concat(E),O,k,{align:"center"})}a.save("LAPORAN PESANAN.pdf")}),y=a(131),x=a.n(y),L=function(t){Object(o.a)(a,t);var e=Object(i.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={},r}return Object(r.a)(a,[{key:"render",value:function(){return g.a.createElement(g.a.Fragment,null,g.a.createElement(x.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Pesanan",sheet:"Laporan Pesanan",buttonText:"Export Exel"}),g.a.createElement("table",{id:"table-to-xls",style:{display:"none"}},g.a.createElement("thead",null,g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"9",style:{textAlign:"center"}}," ","LAPORAN Pesanan"," ")),g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"9"}," Periode ")),g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"9"}," ",0===Object(h.l)("tgl_laporan").length?null:JSON.parse(Object(h.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(h.l)("tgl_laporan")).tgl_akhir," ")),g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"9"}," TOKO : ",Object(h.j)().nama_toko," ")),g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"9"}," ALAMAT : ",Object(h.j)().alamat_toko," ")),g.a.createElement("tr",null),g.a.createElement("tr",null,g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO PESANAN"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"SALES"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TGL PESAN"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TOTAL BERAT"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"TOTAL QTY"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"ONGKOS"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"TOTAL RP"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"BAYAR RP"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"SISA RP"))),g.a.createElement("tbody",null,this.props.data.map(function(t,e){return g.a.createElement("tr",{key:e},g.a.createElement("td",null,t.no_pesanan),g.a.createElement("td",null,t.kode_sales),g.a.createElement("td",null,t.tanggal),g.a.createElement("td",{style:{textAlign:"right"}},t.total_berat.toFixed(2)),g.a.createElement("td",{style:{textAlign:"right"}},t.total_qty.toLocaleString("kr-KO")),g.a.createElement("td",{style:{textAlign:"right"}},t.ongkos.toLocaleString("kr-KO")),g.a.createElement("td",{style:{textAlign:"right"}},t.total_harga.toLocaleString("kr-KO")),g.a.createElement("td",{style:{textAlign:"right"}},t.jumlah_bayar.toLocaleString("kr-KO")),g.a.createElement("td",{style:{textAlign:"right"}},t.sisa_bayar.toLocaleString("kr-KO")))})),g.a.createElement("tfoot",null,g.a.createElement("tr",null,g.a.createElement("td",{colSpan:"3",style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}},"Grand Total Barang :"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",this.props.data.map(function(t){return t.total_berat}).reduce(function(t,e){return t+e},0).toFixed(2)," "),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",this.props.data.map(function(t){return t.total_qty}).reduce(function(t,e){return t+e},0).toLocaleString("ko-KO")," "),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",this.props.data.map(function(t){return t.ongkos}).reduce(function(t,e){return t+e},0).toLocaleString("ko-KO")," "),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",this.props.data.map(function(t){return t.total_harga}).reduce(function(t,e){return t+e},0).toLocaleString("ko-KO")," "),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",this.props.data.map(function(t){return t.jumlah_bayar}).reduce(function(t,e){return t+e},0).toLocaleString("ko-KO")," "),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",this.props.data.map(function(t){return t.sisa_bayar}).reduce(function(t,e){return t+e},0).toLocaleString("ko-KO")," ")))))}}]),a}(s.Component),_=function(t){Object(o.a)(a,t);var e=Object(i.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={date:new Date,columns:[{dataField:"no_pesanan",text:"No Pesanan",footer:"",footerAttrs:{colSpan:"3"}},{dataField:"kode_sales",text:"Sales"},{dataField:"tanggal",text:"Tgl Pesan"},{dataField:"total_berat",text:"Total Berat",headerClasses:"text-right",footer:function(t){return g.a.createElement("div",{className:"text-right"}," ",t.reduce(function(t,e){return t+e},0).toFixed(2)," ")},formatter:function(t){return g.a.createElement("div",{className:"text-right"}," ",t.toFixed(2))}},{dataField:"total_qty",text:"Total Qty",headerClasses:"text-right",formatter:function(t){return g.a.createElement("div",{className:"text-right"}," ",t)},footer:function(t){return g.a.createElement("div",{className:"text-right"}," ",t.reduce(function(t,e){return t+e},0)," ")}},{dataField:"ongkos",text:"Ongkos",headerClasses:"text-right",formatter:function(t){return g.a.createElement("div",{className:"text-right"}," ",t.toLocaleString("kr-ko"))},footer:function(t){return g.a.createElement("div",{className:"text-right"}," ",t.reduce(function(t,e){return t+e},0).toLocaleString("kr-KO")," ")}},{dataField:"total_harga",text:"Total Rp",headerClasses:"text-right",formatter:function(t){return g.a.createElement("div",{className:"text-right"}," ",t.toLocaleString("kr-ko"))},footer:function(t){return g.a.createElement("div",{className:"text-right"}," ",t.reduce(function(t,e){return t+e},0).toLocaleString("kr-KO")," ")}},{dataField:"jumlah_bayar",text:"Bayar Rp",headerClasses:"text-right",formatter:function(t){return g.a.createElement("div",{className:"text-right"}," ",t.toLocaleString("kr-KO"))},footer:function(t){return g.a.createElement("div",{className:"text-right"}," ",t.reduce(function(t,e){return t+e},0).toLocaleString("kr-KO")," ")}},{dataField:"sisa_bayar",text:"Sisa Rp",headerClasses:"text-right",formatter:function(t){return g.a.createElement("div",{className:"text-right"}," ",t.toLocaleString("kr-KO"))},footer:function(t){return g.a.createElement("div",{className:"text-right"}," ",t.reduce(function(t,e){return t+e},0).toLocaleString("kr-KO")," ")}}]},r.setStartDate=r.setStartDate.bind(Object(l.a)(r)),r.setLastDate=r.setLastDate.bind(Object(l.a)(r)),r}return Object(r.a)(a,[{key:"exportPdf",value:function(){k(this.props.LaporanPesanan)}},{key:"setStartDate",value:function(t){this.setState({tgl_awal:new Date(t)})}},{key:"setLastDate",value:function(t){this.setState({tgl_akhir:new Date(t)})}},{key:"render",value:function(){var t=this;return g.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-lg-4"},g.a.createElement(d.a,{name:"tgl_awal",component:E.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(e){return t.setStartDate(e)},placeholder:"Masukan Tanggal Dari"})),g.a.createElement("div",{className:"col-lg-4"},g.a.createElement(d.a,{name:"tgl_akhir",component:E.c,type:"text",selected:this.state.tgl_akhir,onChange:function(e){return t.setLastDate(e)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),g.a.createElement("div",{className:"col-lg-4"},g.a.createElement("div",{className:"text-right"},g.a.createElement("label",null,"\xa0"),g.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?g.a.createElement(g.a.Fragment,null,g.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),g.a.createElement("div",{className:"col-lg-12"},g.a.createElement(p.a,{keyField:"no_pesanan",data:this.props.export?this.props.LaporanPesanan:[],columns:this.state.columns,empty:!0,textEmpty:"Data Laporan Titip Uang Kosong"})),g.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-lg-6"},g.a.createElement("button",{type:"button",onClick:function(){return t.exportPdf()},className:"btn btn-warning btn-block"}," ","Export PDF"," ")),g.a.createElement("div",{className:"col-lg-6"},g.a.createElement(L,{data:this.props.LaporanPesanan}))))),this.props.isLoading?g.a.createElement(O.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(s.Component);_=Object(m.a)({form:"HeadLaporanPesanan",enableReinitialize:!0,validate:b.a})(_);var A=Object(u.b)(function(t){return{initialValues:{tgl_awal:Object(h.h)(),tgl_akhir:Object(h.h)()}}})(_),v=function(t){Object(o.a)(a,t);var e=Object(i.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={isLoading:!1,LaporanPesanan:[],export:!1},r.handleSubmit=r.handleSubmit.bind(Object(l.a)(r)),r}return Object(r.a)(a,[{key:"handleSubmit",value:function(t){var e=this,a={tgl_awal:Object(c.y)(Object(c.K)(new Date(t.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(c.y)(Object(c.K)(new Date(t.tgl_akhir)).format("YYYY-MM-DD"))};this.setState({isLoading:!0}),Object(c.A)("pesanan/reports?tgl_from="+a.tgl_awal+"&tgl_to="+a.tgl_akhir).then(function(t){if(0===t.data.length)return Object(c.t)("info","Laporan Pesanan Kosong"),e.setState({export:!1,isLoading:!1}),!1;Object(c.t)("success","Laporan Pesanan Tersedia"),Object(c.J)("tgl_laporan",JSON.stringify(a)),e.setState({LaporanPesanan:t.data,isLoading:!1,export:!0})}).catch(function(t){Object(c.t)("info","Data Yang Di Cari Tidak Ada !!!"),e.setState({export:!1,isLoading:!1})})}},{key:"render",value:function(){var t=this;return c.n.createElement("div",null,c.n.createElement("ol",{className:"breadcrumb float-xl-right"},c.n.createElement("li",{className:"breadcrumb-item"},c.n.createElement(c.g,{to:"#"},"Laporan")),c.n.createElement("li",{className:"breadcrumb-item active"},"Laporan Pesanan")),c.n.createElement("h1",{className:"page-header"},"Laporan Pesanan "),c.n.createElement(c.k,null,c.n.createElement(c.m,null,"Laporan Pesanan"),c.n.createElement("br",null),c.n.createElement(c.l,null,c.n.createElement(A,{export:this.state.export,isLoading:this.state.isLoading,LaporanPesanan:this.state.LaporanPesanan,onSubmit:function(e){return t.handleSubmit(e)}})),c.n.createElement("br",null)))}}]),a}(c.n.Component);v=Object(c.O)({form:"LaporanPesanan",enableReinitialize:!0})(v);e.default=Object(c.u)(null)(v)}}]);
//# sourceMappingURL=104.c9b68b59.chunk.js.map