(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1180:function(a,e,t){"use strict";t.r(e);var r=t(0),n=t.n(r),o=t(47),s=t(706),l=t(704),i=t(705),m=t(813),d=t(328),p=t(329),c=t(15),g=t(30),u=t(93);var b=(a,e)=>{const t={};return a.kode||(t.kode="Kode Tidak Boleh Kosong"),a.nama_kategori||(t.nama_kategori="Nama Kategori Tidak Boleh Kosong"),a.harga_pergram||(t.harga_pergram="Harga / Gram Tidak Boleh Kosong"),a.presentase||(t.presentase="Presentase Tidak Boleh Kosong"),a.kadar||(t.kadar="Kadar Tidak Boleh Kosong"),t},h=t(61),k=t.n(h);class K extends r.Component{constructor(...a){super(...a),this.state={}}render(){return n.a.createElement(s.a,{backdrop:"static",keyboard:!1,isOpen:this.props.isOpen,toggle:()=>this.props.dispatch(Object(c.Ab)())},n.a.createElement(l.a,null," ",this.props.title," "),n.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},n.a.createElement(i.a,null,n.a.createElement(d.a,{name:"kode",component:g.e,type:"text",label:"Kode",placeholder:"Masukan Kode",readOnly:this.props.isEdit}),n.a.createElement(d.a,{name:"nama_kategori",component:g.e,type:"text",label:"Nama Kategori",placeholder:"Masukan Nama Kategori"}),n.a.createElement(d.a,{name:"harga_pergram",component:g.e,type:"text",label:"Harga / Gram",placeholder:"Masukan Harga / Gram",normalize:u.a}),n.a.createElement(d.a,{name:"presentase",component:g.e,type:"text",label:"Presentase",placeholder:"Masukan Presentase",normalize:u.c}),n.a.createElement(d.a,{name:"kadar",component:g.e,type:"text",label:"Kadar",placeholder:"Masukan Kadar"})),n.a.createElement(m.a,null,n.a.createElement("button",{className:"btn btn-white",onClick:()=>this.props.dispatch(Object(c.Ab)()),type:"button",disabled:this.props.isLoading},"Batal"),n.a.createElement("button",{className:"btn btn-primary",disabled:this.props.submitting,type:"submit"},this.props.isLoading?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data")),this.props.isLoading?n.a.createElement(k.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null))}}K=Object(p.a)({form:"ModalKategori",enableReinitialize:!0,validate:b})(K);e.default=Object(o.b)(a=>{if(null!==a.datamaster.ShowtModalKategori)return{initialValues:{kode:a.datamaster.ShowtModalKategori.kode,nama_kategori:a.datamaster.ShowtModalKategori.nama_kategori,harga_pergram:a.datamaster.ShowtModalKategori.harga_pergram,presentase:a.datamaster.ShowtModalKategori.presentase,kadar:a.datamaster.ShowtModalKategori.kadar}}},null)(K)},813:function(a,e,t){"use strict";var r=t(14),n=t(18),o=t(0),s=t.n(o),l=t(1),i=t.n(l),m=t(20),d=t.n(m),p=t(9),c={tag:p.n,className:i.a.string,cssModule:i.a.object},g=function(a){var e=a.className,t=a.cssModule,o=a.tag,l=Object(n.a)(a,["className","cssModule","tag"]),i=Object(p.j)(d()(e,"modal-footer"),t);return s.a.createElement(o,Object(r.a)({},l,{className:i}))};g.propTypes=c,g.defaultProps={tag:"div"},e.a=g}}]);
//# sourceMappingURL=44.589616c4.chunk.js.map