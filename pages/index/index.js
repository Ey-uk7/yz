// pages/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    containerData: [{img:'https://img2.baidu.com/it/u=3666583310,1952442169&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',text:'功能A'},
    {img:'https://img2.baidu.com/it/u=3666583310,1952442169&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',text:'功能B'},
    {img:'https://img2.baidu.com/it/u=3666583310,1952442169&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',text:'功能C'},
    {img:'https://img2.baidu.com/it/u=3666583310,1952442169&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',text:'功能D'},
    {img:'https://img2.baidu.com/it/u=3612261956,474167053&fm=253&fmt=auto&app=138&f=JPEG?w=256&h=256',text:'功能E'},
    {img:'https://img2.baidu.com/it/u=3612261956,474167053&fm=253&fmt=auto&app=138&f=JPEG?w=256&h=256',text:'功能F'},
    {img:'https://img2.baidu.com/it/u=3612261956,474167053&fm=253&fmt=auto&app=138&f=JPEG?w=256&h=256',text:'功能G'},
    {img:'https://img2.baidu.com/it/u=3612261956,474167053&fm=253&fmt=auto&app=138&f=JPEG?w=256&h=256',text:'功能H'},
    {img:'https://img0.baidu.com/it/u=1087263365,3455384828&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',text:'功能I'},
    {img:'https://img0.baidu.com/it/u=1087263365,3455384828&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',text:'功能J'},
    {img:'https://img13.51tietu.net/pic/2019121020/zsxjqshmmdnzsxjqshmmdn.jpg',text:''},
    {img:'https://img13.51tietu.net/pic/2019121020/zsxjqshmmdnzsxjqshmmdn.jpg',text:''}],

    navbarData: [{img:'https://img0.baidu.com/it/u=1087263365,3455384828&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',text:'功能1'},
    {img:'https://img0.baidu.com/it/u=1087263365,3455384828&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',text:'功能2'},
    {img:'https://img0.baidu.com/it/u=1087263365,3455384828&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',text:'功能3'},
    {img:'https://img0.baidu.com/it/u=1087263365,3455384828&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',text:'功能4'},
    {img:'https://img0.baidu.com/it/u=1087263365,3455384828&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',text:'功能5'},],

    imgSource: ['https://img0.baidu.com/it/u=3421374377,4269003712&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
    'https://img2.baidu.com/it/u=3329909248,3799019568&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
    'https://img1.baidu.com/it/u=3007048469,3759326707&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500'],
    currentSwiper: 0,
    showDialog: false
  },
  toggleDialog() {
    this.setData({
    showDialog:true
    });
    console.log(this.showDialog);
   },
   closeMask: function() { 
    this.setData({
      showDialog: false
    })
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
    this.getTabBar().setData({
      //唯一标识（其它设置不同的整数）  
      selected: 0
    })
  }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
