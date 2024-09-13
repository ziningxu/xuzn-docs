// 统一管理项目数据的初始化
// 全局缓存内容赋值
function initAppData() {
  appStoreWatch()
  appStoreAssign()
  // 先监听再赋值
  function appStoreAssign() {}
  // 监听全局数据
  function appStoreWatch() {}
}

export default initAppData
