import { Product } from 'product-model.js';
import { Cart } from '../cart/cart-model.js';
var product = new Product();  //实例化 商品详情 对象
var cart = new Cart();
Page({
  data: {
    id: '',
    countsArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    productCounts: 1,
    currentTabsIndex: 0
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
        cartTotalCounts: cart.getCartTotalCounts().counts1,
        product: data
      });
    });
  },
  onCartTap: function () {
    wx.switchTab({
      url: '/pages/cart/cart'
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
    var index = product.getDataSet(event, 'index');
    this.setData({
      currentTabsIndex: index
    });
  },
  onAddingToCartTap() {
    this.addToCart();
    var counts = this.data.cartTotalCounts + this.data.productCounts;
    this.setData({
      cartTotalCounts: counts
    });
  },
  addToCart() {
    var tempObj = {}, keys = ['id', 'name', 'main_img_url', 'price'];
    for (var key in this.data.product) {
      if (keys.indexOf(key) >= 0) {
        tempObj[key] = this.data.product[key];
      }
    }
    cart.add(tempObj, this.data.productCounts);
  }
})