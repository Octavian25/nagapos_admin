(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1190:function(a,e,t){"use strict";t.r(e);var r=t(39),n=t(40),o=t(48),l=t(42),i=t(41),u=t(0),s=t.n(u),c=t(27),_=t(7),d=t(131),m=t(13),g=t(24),p=t(108),b=Object(u.lazy)(function(){return t.e(97).then(t.bind(null,1174))}),k=function(a){Object(l.a)(t,a);var e=Object(i.a)(t);function t(a){var n;return Object(r.a)(this,t),(n=e.call(this,a)).state={isLoading:!1,LaporanDataPenjualan:[],export:!1},n.handleSubmit=n.handleSubmit.bind(Object(o.a)(n)),n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var a=JSON.parse(Object(_.l)("userdata"));this.setState({username:a.user_id})}},{key:"handleSubmit",value:function(a){var e=this;this.setState({isLoading:!0});var t={tgl_awal:Object(_.e)(p(new Date(a.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(_.e)(p(new Date(a.tgl_akhir)).format("YYYY-MM-DD")),marketplace:a.marketplace,kode_group:a.kode_group,jenis_group:a.jenis_group};Object(m.f)("penjualan/report-marketplaces?tgl_from="+t.tgl_awal+"&tgl_to="+t.tgl_akhir+"&marketplace="+t.marketplace+"&kode_group="+t.kode_group+"&jenis_group="+t.jenis_group).then(function(a){if(0===a.data.length)Object(g.e)("info","Data Yang Di Cari Tidak Ada !!!"),e.setState({isLoading:!1,export:!1});else{Object(g.e)("success","Laporan Transaksi Penjualan Tersedia"),Object(_.m)("tgl_laporan",JSON.stringify(t));var r=[];a.data.forEach(function(a){var e={no_faktur_jual:a.no_faktur_jual,tgl_system:a.tgl_system,kode_sales:a.kode_sales,kode_member:a.kode_member,nama_customer:a.nama_customer,no_hp:a.no_hp,alamat_customer:a.alamat_customer,berat:a.berat,berat_awal:a.berat_jual,harga_jual:parseInt(a.harga_jual)+parseInt(a.harga_atribut),harga_gram:a.harga_gram,harga_atribut:a.harga_atribut,ongkos:a.ongkos,harga_total:a.harga_total,kode_barcode:a.kode_barcode,kode_barang:a.kode_barang,nama_barang:a.nama_barang,kode_group:a.kode_group,kode_dept:a.kode_dept,nama_atribut:a.nama_atribut,berat_atribut:a.berat_atribut,kode_gudang:a.kode_gudang,kode_baki:a.kode_baki,kode_marketplace:a.kode_marketplace};r.push(e)}),e.setState({LaporanDataPenjualan:[]}),e.setState({export:!0,isLoading:!1,LaporanDataPenjualan:r})}}).catch(function(a){Object(g.e)("info","Data Yang Di Cari Tidak Ada !!!"),e.setState({isLoading:!1,export:!1})})}},{key:"render",value:function(){var a=this;return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(c.b,{to:"#"},"Laporan")),s.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Penjualan Marketplace")),s.a.createElement("h1",{className:"page-header"},"Laporan Penjualan Marketplace "),s.a.createElement(d.a,null,s.a.createElement(d.c,null,"Laporan Penjualan Marketplace"),s.a.createElement(d.b,null,s.a.createElement(b,{export:this.state.export,isLoading:this.state.isLoading,LaporanDataPenjualan:this.state.LaporanDataPenjualan,onSubmit:function(e){return a.handleSubmit(e)}}))))}}]),t}(u.Component);e.default=k}}]);
//# sourceMappingURL=98.7d784266.chunk.js.map