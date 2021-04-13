export function initDirective (Vue) {
  // 注册一个全局自定义指令 `v-focus`
  Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时执行
    inserted (el) {
      if (el.nodeName === 'INPUT') {
        el.focus()
      } else {
        el.querySelector('input').focus()
      }
    }
  })
}
