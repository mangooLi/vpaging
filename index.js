exports.install = function(Vue) {

 Vue.component('page', {
  template: require('./src/template.html'),
  style:require('./src/style.css'),
  data: function() {
    return {
      page: 1
    }
  },
  props: {
   
    records: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: false,
      default: 10
    },
    pagelength: {
      // type: Array,
      required: false,
      default: function(){
        return [10,20,30];
      }
    }
   
  },
  computed: {
   
    totalPages: function() {
      return this.records?Math.ceil(this.records / this.perPage):1;
    },
  
  },
methods: {
  /////////////////////////////////////////////
  setPage: function(page) {
    page=parseInt(page);
    if(isNaN(page)){
      page=1;
    }
    if (page>this.totalPages||page<1) {
      return false;
    }

    this.page = page;
    this.$dispatch('vPageChanged', page,this.perPage);
    return true;
  },

  
  //////////////////////////////////////////////////
  isFirst:function(){
    return this.page==1?true:false;
  },
  isLast:function(){
    return this.page==this.totalPages?true:false;
  },

  /////////////////////
  enterPage: function(page) {
    if(page>this.totalPages||page<1){
      page=this.totalPages;
    };
    this.setPage(page)
  },
  firstPage:function(){
     if($('#first').hasClass("disabled")){
      // alert("hujh")
      return;
    }
    return this.setPage(1);
  },
  lastPage:function(){
     if($('#last').hasClass("disabled")){
      // alert("hujh")
      return;
    }
    return this.setPage(this.totalPages);
  },
  next: function() {
    if($('#next').hasClass("disabled")){
      alert("next is disabled")
      return;
    }
    return this.setPage(Number(this.page) + 1);
  },
  prev: function() {
    if($('#prev').hasClass("disabled")){
      // alert("hujh")
      return;
    }
    return this.setPage(this.page -1);
  },
 
  setPerPage:function(Length){
    
    this.perPage=Length;
    
    this.page=this.page>this.totalPages?this.totalPages:this.page;
    this.$dispatch('vPageChanged', this.page,Length);
  }









}
});

}


