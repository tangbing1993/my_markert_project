//index.js
const app = getApp()

Page({
  data: {
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    permission_modal_status:true
  },
  onLoad: function () {
    let app = getApp();
    // if (!wx.cloud) {
      
    //   wx.redirectTo({
    //     url: '../chooseLib/chooseLib',
    //   })
    //   return
    // }
    
    // wx.openSetting()
    this.checkUserPermission(app)
  },
  checkUserPermission:function(data){
    wx.getUserInfo({
      success: res => {
        this.setData({
          avatarUrl : res.userInfo.avatarUrl,
          userInfo : res.userInfo,
          user_info_status : true
        })
      },
      fail: e => {
        this.setData({
          user_info_status: false
        })
        
      }
    })
    
  }

})
