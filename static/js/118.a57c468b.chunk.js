(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{1295:function(e,a,t){"use strict";t.r(a);var n=t(13),r=t(14),l=t(16),c=t(15),i=t(0),s=t.n(i),m=t(42),o=t(32),u=t(53),b=t(31),p=t(77),d=t(11),h=t(347),g=t(348),k=t(78),f=t(28),E=t(165),v=t(54),j=t.n(v),O=Object(k.createNumberMask)({prefix:"Rp. ",suffix:" ,-",locale:"kr-KO"}),N=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={parametertransaksi:[]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(d.d)("paratransaksi/get/all").then(function(a){e.setState({parametertransaksi:a.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(h.a,{name:"kategori",component:f.f,options:this.state.parametertransaksi.map(function(e){return{value:e.kode_transaksi,name:e.kode_transaksi}}),label:"Kategori",placeholder:"Masukan Kategori"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(h.a,Object.assign({name:"jumlah",component:f.e,type:"telp",label:"Jumlah",placeholder:"Masukan Jumlah"},O))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(h.a,{name:"keterangan",component:f.e,type:"text",label:"Keterangan",placeholder:"Masukan Keterangan"})),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary"},this.props.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):s.a.createElement(s.a.Fragment,null,"Simpan ",s.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))))),this.props.isLoading?s.a.createElement(j.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(i.Component);N=Object(g.a)({form:"HeadTambahBank",enableReinitialize:!0,validate:E.a})(N);var y=Object(m.b)()(N),S=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={isLoading:!1},r}return Object(r.a)(t,[{key:"handleSubmit",value:function(e){var a=this;this.setState({isLoading:!0});var t={kategori:e.kategori,jumlah_rp:e.jumlah,deskripsi:e.keterangan};Object(d.j)("cash/in",t).then(function(){Object(b.d)("Data Berhasil Disimpan")}).then(function(){a.setState({isLoading:!1})}).then(function(){a.props.dispatch(Object(u.d)("HeadTambahBank"))}).catch(function(e){return a.ErrorHandling(e)})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(o.b,{to:"#"},"Transaksi Bank")),s.a.createElement("li",{className:"breadcrumb-item active"},"Tambah Uang Bank")),s.a.createElement("h1",{className:"page-header"},"Tambah Uang Bank "),s.a.createElement(p.a,null,s.a.createElement(p.c,null,"Tambah Uang Bank"),s.a.createElement(p.b,null,s.a.createElement(y,{isLoading:this.state.isLoading,onSubmit:function(a){return e.handleSubmit(a)}}))))}}]),t}(i.Component);a.default=Object(m.b)()(S)}}]);
//# sourceMappingURL=118.a57c468b.chunk.js.map