// pages/product/product.js
import { Product } from 'product-model.js';
var product = new Product();  //实例化 商品详情 对象
Page({
  data: {
    id:'',
    countsArray:[1,2,3,4,5,6,7,8,9,10],
    productCounts: 1,
    currentTabsIndex:0
  },
  onLoad(options) {
    var id = options.id;
    this.data.id = id;
    this._loadData();
  },
  _loadData: function (callback) {
    var that = this;
    product.getDetailInfo(this.data.id, (data) => {
      that.setData({
        product: data
      });
    });
  },
  bindPickerChange(event) {
    var index = event.detail.value;
    var selectedCount = this.data.countsArray[index];
    this.setData({
      productCounts: selectedCount
    });
  },
  onTabsItemTap(event) {
    var index = product.getDataSet(event,'index');
    this.setData({
      currentTabsIndex:index
    });

  }
})