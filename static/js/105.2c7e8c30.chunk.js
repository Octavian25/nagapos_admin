(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1235:function(e,t,a){"use strict";a.r(t);var l=a(13),n=a(14),r=a(23),o=a(16),c=a(15),i=a(0),s=a.n(i),d=a(27),m=a(5),g=a(25),u=a(130),E=a(10),b=a(40),h=a(335),p=a(336),S=a(29),v=a(87),k=a(131),O=a.n(k),f=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(O.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Batal Service",sheet:"Laporan Batal Service",buttonText:"Export Exel"}),s.a.createElement("table",{id:"table-to-xls",style:{display:"none"}},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"5",style:{textAlign:"center"}}," ","LAPORAN BATAL SERVICE"," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"5"}," Periode ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"5"}," ",0===Object(m.l)("tgl_laporan").length?null:JSON.parse(Object(m.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(m.l)("tgl_laporan")).tgl_akhir," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"5"}," TOKO : ",Object(m.j)().nama_toko," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"5"}," ALAMAT : ",Object(m.j)().alamat_toko," ")),s.a.createElement("tr",null),s.a.createElement("tr",null,s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO SERVICE"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TGL TRANSAKSI"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA CUSTOME"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"ALAMAT"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"SALES"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"DESKRIPSI"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"BERAT"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"ONGKOS"))),s.a.createElement("tbody",null,this.props.data.map(function(e,t){return s.a.createElement(s.a.Fragment,null,s.a.createElement("tr",{key:t},s.a.createElement("td",null,e.no_faktur_service),s.a.createElement("td",null,e.tgl_system),s.a.createElement("td",null,e.nama_customer),s.a.createElement("td",null,e.alamat_customer),s.a.createElement("td",null,e.kode_sales),s.a.createElement("td",null,e.detail_barang.deskripsi),s.a.createElement("td",null,e.detail_barang.berat.toFixed(2)),s.a.createElement("td",null,e.detail_barang.ongkos.toLocaleString("kr-KO"))))})),s.a.createElement("tfoot",null,s.a.createElement("tr",null,s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"},colSpan:"8"},"Total Transaksi ",this.props.data.length)))))}}]),a}(i.Component),_=a(106),x=(a(222),function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]&&arguments[3],new _.default("l","mm",[297,210])),l=[],n=30;a.setFontSize(15),a.text("LAPORAN SERVICE BATAL",14,15),a.setFontSize(20),a.text(Object(m.j)().nama_toko,200,15),a.setFontSize(8);var r=Object(m.j)().alamat_toko.length;r>20&&a.text(Object(m.j)().alamat_toko.slice(0,48),200,20),r>50&&a.text(Object(m.j)().alamat_toko.slice(48,90),200,25),a.setFontSize(10),a.setProperties({title:"LAPORAN SERVICE BATAL"}),a.text("PERIODE : ".concat(0===Object(m.l)("tgl_laporan").length?null:JSON.parse(Object(m.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(m.l)("tgl_laporan")).tgl_akhir),14,25),e=[[{content:"NO SERVICE"},{content:"TGL TRANSAKSI"},{content:"NAMA CUSTOMER"},{content:"SALES"},{content:"DESKRIPSI"},{content:"BERAT",styles:{halign:"right"}},{content:"QTY",styles:{halign:"right"}},{content:"ONGKOS",styles:{halign:"right"}}]];var o=0;t.forEach(function(e,t){o+=e.detail_barang.ongkos;var a=[e.no_faktur_service,e.tgl_system,e.nama_customer,e.alamat_customer,e.kode_sales,e.detail_barang.deskripsi,{content:e.detail_barang.berat.toFixed(3),styles:{halign:"right"}},{content:parseInt(e.detail_barang.ongkos).toLocaleString("kr-KO"),styles:{halign:"right"}}];l.push(a)});var c=[{content:"Total Transaksi: ".concat(t.length),colSpan:8,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:parseInt(o).toLocaleString("kr-KO"),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}}];l.push(c);var i=[{content:"Printed By ".concat(JSON.parse(Object(m.l)("userdata")).user_id," / ").concat(Object(m.i)()),colSpan:7,styles:{fontStyle:"italic",textColor:"#000"}}];l.push(i),a.autoTable({head:e,body:l,startY:n,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"},tableLineColor:[255,255,255],tableLineWidth:1}),n=a.autoTableEndPosY()+3,l=[];var s=a.internal.getNumberOfPages(),d=a.internal.pageSize.width,g=a.internal.pageSize.height;a.setFontSize(10);for(var u=1;u<s+1;u++){var E=d/2,b=g-10;a.setPage(u),a.text("".concat(u," of ").concat(s),E,b,{align:"center"})}a.save("LAPORAN SERVICE BATAL.pdf")}),y=a(53),A=a.n(y),j=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={date:new Date,columns:[{dataField:"no_faktur_service",text:"No Service",footerAttrs:{colSpan:"8"},footer:function(e,t,a,l){return s.a.createElement("div",null,"Total Transaksi : ",n.props.dataservices.length," ")}},{dataField:"tgl_system",text:"Tgl Transaksi"},{dataField:"nama_customer",text:"Nama Customer"},{dataField:"alamat_customer",text:"Alamat"},{dataField:"kode_sales",text:"Sales"},{dataField:"detail_barang.deskripsi",text:"Deskripsi"},{dataField:"detail_barang.berat",text:"Berat",headerClasses:"text-right",formatter:function(e){return s.a.createElement("div",{className:"text-right"},e.toFixed(2))}},{dataField:"detail_barang.ongkos",text:"Ongkos",headerClasses:"text-right",formatter:function(e){return s.a.createElement("div",{className:"text-right"},e.toLocaleString("kr-KO"))}}]},n.setStartDate=n.setStartDate.bind(Object(r.a)(n)),n.setLastDate=n.setLastDate.bind(Object(r.a)(n)),n}return Object(n.a)(a,[{key:"exportPdf",value:function(){x(this.props.dataservices)}},{key:"setStartDate",value:function(e){this.setState({tgl_awal:new Date(e)})}},{key:"setLastDate",value:function(e){this.setState({tgl_akhir:new Date(e)})}},{key:"render",value:function(){var e=this;return s.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(h.a,{id:"tgl_awal",name:"tgl_awal",component:S.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(t){return e.setStartDate(t)},placeholder:"Masukan Tanggal Dari"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(h.a,{name:"tgl_akhir",component:S.c,type:"text",selected:this.state.tgl_akhir,onChange:function(t){return e.setLastDate(t)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("div",{className:"text-right"},s.a.createElement("label",null,"\xa0"),s.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(v.a,{keyField:"no_hp",data:this.props.export?this.props.dataservices:[],columns:this.state.columns,empty:!0,textEmpty:"Data Laporan Batal Service Kosong"})),s.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},s.a.createElement("label",{htmlFor:""},"\xa0"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("button",{type:"button",onClick:function(){return e.exportPdf()},className:"btn btn-warning btn-block"}," Export PDF ")),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(f,{data:this.props.dataservices}))))),this.props.isLoading?s.a.createElement(A.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(i.Component);j=Object(p.a)({form:"HeadFormBatalService",enableReinitialize:!0})(j);var L=Object(b.b)(function(e){return{initialValues:{tgl_awal:Object(m.h)(),tgl_akhir:Object(m.h)()}}})(j),N=a(107),C=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={isLoading:!1,export:!1,dataservices:[]},n.handleSubmit=n.handleSubmit.bind(Object(r.a)(n)),n}return Object(n.a)(a,[{key:"handleSubmit",value:function(e){var t=this;this.setState({isLoading:!0});var a={tgl_awal:Object(m.e)(N(new Date(e.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(m.e)(N(new Date(e.tgl_akhir)).format("YYYY-MM-DD"))};Object(E.i)("service/get/servicebatal",a).then(function(e){0===e.data.length?(Object(g.e)("info","Data Yang Anda Cari Tidak Ada"),t.setState({export:!1,isLoading:!1,dataservices:[]})):(Object(g.e)("success","Laporan Batal Service Tersedia"),Object(m.m)("tgl_laporan",JSON.stringify(a)),t.setState({export:!0,isLoading:!1,dataservices:e.data}))}).catch(function(e){t.setState({export:!1,isLoading:!1}),Object(g.e)("info","Data Yang Anda Cari Tidak Ada")})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(d.b,{to:"#"},"Laporan")),s.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Batal Services")),s.a.createElement("h1",{className:"page-header"},"Laporan Batal Services "),s.a.createElement(u.a,null,s.a.createElement(u.c,null,"Laporan Batal Services"),s.a.createElement("br",null),s.a.createElement(u.b,null,s.a.createElement(L,{export:this.state.export,isLoading:this.state.isLoading,dataservices:this.state.dataservices,onSubmit:function(t){return e.handleSubmit(t)}})),s.a.createElement("br",null)))}}]),a}(s.a.Component);t.default=C}}]);
//# sourceMappingURL=105.2c7e8c30.chunk.js.map