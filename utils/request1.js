import wx from "../subwe/bridge"
export const $myrequest1 = (params) => {
  // 定义公共的url
  const baseUrl = "https://www.xiaohulaile.com/xh/p/wxcx"
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      url: baseUrl + params.url,
      success: (result) => {
        resolve(result.data)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}
