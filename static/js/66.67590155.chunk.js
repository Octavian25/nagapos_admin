(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1261:function(a,t,n){"use strict";n.r(t);var e=n(13),i=n(14),s=n(23),o=n(16),r=n(15),c=n(0),d=n.n(c),l=n(27),m=n(130),b=n(12),u=n(40),p=n(22),h=n.n(p),f=n(25),j=n(10),g=n(46),k=n(5),E=n(87),O=n(335),v=n(336),K=n(29),P=function(a,t){var n={};return a.kondisi_pinjaman||(n.kondisi_pinjaman="Kondisi Pinjaman Tidak Boleh Kosong"),n},y=n(53),S=n.n(y),_=function(a){Object(o.a)(n,a);var t=Object(r.a)(n);function n(){var a;Object(e.a)(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return(a=t.call.apply(t,[this].concat(s))).state={aktif:!1},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){setTimeout(function(){document.getElementById("kondisi_barang").focus()},100)}},{key:"render",value:function(){var a=this;return d.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},d.a.createElement("input",{type:"hidden",name:"kondisi_barang_lama"}),d.a.createElement(O.a,{id:"kondisi_barang",tabIndex:"1",name:"kondisi_barang",component:K.e,type:"text",label:" Kondisi Pinjaman",onBlur:function(){return a.setState({aktif:!0})},placeholder:"Masukan  Kondisi Pinjaman"}),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12 text-right"},d.a.createElement("button",{className:"btn btn-white",onClick:function(){return a.props.dispatch(Object(b.Ab)())},type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",d.a.createElement("button",{tabIndex:"2",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.isLoading,type:"submit"},this.props.isLoading?d.a.createElement(d.a.Fragment,null,d.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?d.a.createElement(S.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),n}(c.Component);_=Object(v.a)({form:"ModalKondisiPinjaman",enableReinitialize:!0,validate:P})(_);var D=Object(u.b)(function(a){if(null!==a.datamaster.ShowModalKondisiPinjaman)return{initialValues:{kondisi_barang_lama:a.datamaster.ShowModalKondisiPinjaman.kondisi_barang,kondisi_barang:a.datamaster.ShowModalKondisiPinjaman.kondisi_barang}}},null)(_),M=n(223),w=function(a,t){h.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Nama Kondisi "+a+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(n){n.isConfirmed&&Object(j.b)("parapinjaman/delete/by-kode-kondisi/"+a,{}).then(function(){Object(f.d)("Data Berhasil Di Hapus").then(function(){return t(Object(b.vb)())})})}).catch(function(a){Object(f.e)("error",a.response.data)})},N=function(a){Object(o.a)(n,a);var t=Object(r.a)(n);function n(a){var i;return Object(e.a)(this,n),(i=t.call(this,a)).state={isEdit:!1,isLoading:!1,modalDialog:!1,columns:[{dataField:"kondisi_barang",text:"Nama Kondisi",sort:!0},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(a,t){var n={kondisi_barang:t.kondisi_barang};return d.a.createElement("div",{className:"row text-center"},d.a.createElement("div",{className:"col-12"},d.a.createElement("button",{onClick:function(){return i.formEditKondisiPinjaman(n)},className:"btn btn-primary mr-3"},d.a.createElement("i",{className:"fa fa-edit"})),d.a.createElement("button",{onClick:function(){return w(t.kondisi_barang,i.props.dispatch)},className:"btn btn-danger"},d.a.createElement("i",{className:"fa fa-trash"}))))}}]},i.handleSubmit=i.handleSubmit.bind(Object(s.a)(i)),i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(b.vb)())}},{key:"handleSubmit",value:function(a){var t=this;this.setState({isLoading:!0});var n={kondisi_barang:a.kondisi_barang},e={kondisi_barang:a.kondisi_barang};this.state.isEdit?Object(j.k)("parapinjaman/edit/by-kode-kondisi/"+a.kondisi_barang_lama,n).then(function(){t.props.dispatch(Object(b.Ab)())}).then(function(){return Object(f.e)("success","Data Berhasil Diedit")}).then(function(){t.props.dispatch(Object(b.vb)())}).then(function(){t.setState({isLoading:!1})}).then(function(){t.props.dispatch(Object(g.d)("ModalKondisiPinjaman"))}).catch(function(a){Object(f.e)("info","Terjadi Kesalahan Saat Mengirim Data"),t.setState({isLoading:!1})}):Object(j.g)("parapinjaman/add",e).then(function(){t.props.dispatch(Object(b.Ab)())}).then(function(){Object(f.e)("success","Data Berhasil Disimpan")}).then(function(){t.props.dispatch(Object(b.vb)())}).then(function(){t.props.dispatch(Object(g.d)("ModalKondisiPinjaman"))}).then(function(){t.setState({isLoading:!1})}).catch(function(n){return Object(k.a)(n,"parapinjaman/reactive/by-kode-kondisi/",a.kondisi_barang,e,t.props.dispatch,Object(b.vb)(),Object(b.Ab)(),"ModalKondisiPinjaman").then(function(){t.setState({isLoading:!1})})})}},{key:"formEditKondisiPinjaman",value:function(a){this.props.dispatch(Object(b.Bb)()),this.props.dispatch(Object(b.cb)(a)),this.setState({isEdit:!0})}},{key:"ShowModalKondisiPinjaman",value:function(){this.props.dispatch(Object(b.Bb)()),this.props.dispatch(Object(b.cb)(!1)),this.setState({isEdit:!1})}},{key:"render",value:function(){var a=this;return d.a.createElement("div",null,d.a.createElement("ol",{className:"breadcrumb float-xl-right"},d.a.createElement("li",{className:"breadcrumb-item"},d.a.createElement(l.b,{to:"#"},"Data Master")),d.a.createElement("li",{className:"breadcrumb-item active"},"Master Kondisi Pinjaman")),d.a.createElement("h1",{className:"page-header"},"Master Kondisi Pinjaman "),d.a.createElement(m.a,null,d.a.createElement(m.c,null,"Master Kondisi Pinjaman"),d.a.createElement("br",null),d.a.createElement("div",{className:"container"},d.a.createElement(E.a,{keyField:"kondisi",tambahData:!0,handleClick:function(){return a.ShowModalKondisiPinjaman()},exportCsv:!0,data:this.props.DataKondisiPinjaman,columns:this.state.columns,empty:this.props.DataKondisiPinjaman,textEmpty:"Data Kondisi Pinjaman Kosong"})),d.a.createElement("br",null),d.a.createElement(M.a,{title:this.state.isEdit?"Edit Data Kondisi Pinjaman":"Tambah Data Kondisi Pinjaman",size:"P",content:d.a.createElement(D,{isEdit:this.state.isEdit,isLoading:this.state.isLoading,onSubmit:function(t){return a.handleSubmit(t)}})})))}}]),n}(d.a.Component);t.default=Object(u.b)(function(a){return{DataKondisiPinjaman:a.datamaster.getKondisiPinjaman,hideModal:a.datamaster.modalDialog}},null)(N)}}]);
//# sourceMappingURL=66.67590155.chunk.js.map