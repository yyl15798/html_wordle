
// media.js 
 ; (function (doc, win) {
  let docEl = doc.documentElement
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let recalc = function () {
    let clientWidth = docEl.clientWidth
    if (!clientWidth) return

    // PC分界线
    let hasPc = clientWidth > 750

    // 设计图大小
    let designSize = hasPc ? 1200 : 750

    // 比例 = 视口宽度 / 设计图大小 * 100
    let size = (clientWidth / designSize) * 10

    // 控制上下限
    size = Math.min(size, 12)
    size = Math.max(size,  6)

    if (hasPc) {
      size = Math.max(size, 9)
    }
    docEl.style.fontSize = size.toFixed(2) + 'px'
  }

  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)