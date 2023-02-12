let api_path = "david18";

new Vue({
    el : '#app',
    data:{
        productList: []
    },
    methods:{
        //跟HTML的imgStyle綁定 並傳入參數再回傳到style
      imgStyle(img){
        return {
            backgroundImage : `url(${img})`
        }
      }
    },
    //發請求要資料並回傳到data.productList
    mounted(){
        axios.get(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/products`)
        //回傳的資料 => 指向路徑 => 賦予資料
        .then(res => this.productList = res.data.products)
    },
})