let jia = 0;
import wx from "../subwe/bridge"
export const $myRequestThree = (params) => {
    jia++
    wx.showLoading({
      title: '加载中...',
    })
  // 定义公共的url
  const baaseUrl = "https://www.qycloud.com.cn/bee/open-75661043697254742/"
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      method:'POST',
      url: baaseUrl + params.url,
      success: (result) => {
        resolve(result.data)
      },
      fail: (err) => {
        reject(err)
      },
      complete: () =>{
        jia--
        if(jia === 0){
          wx.hideLoading();
        }
      }
    })
  })
}