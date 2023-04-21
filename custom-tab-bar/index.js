// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list:[
      {
        pagePath:'/pages/index/index',
        iconPath:'/imgs/list1.png',
        selectedIconPath:'/imgs/list2.png',
        text:'工作',
        id:1
      },
      {
        pagePath:'/pages/logs/logs',
        iconPath:'/imgs/麦克风1.png',
        selectedIconPath:'/imgs/麦克风2.png',
        text:'助手',
        id:2
      },
      {
        pagePath:'/pages/analyse/analyse',
        iconPath:'/imgs/分析1.png',
        selectedIconPath:'/imgs/fx2.png',
        text:'分析',
        id:3
      },
      {
        pagePath:'/pages/my/my',
        iconPath:'/imgs/my.png',
        selectedIconPath:'/imgs/我.png',
        text:'我',
        id:4
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      console.log(e);
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})
