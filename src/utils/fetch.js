import wepy from 'wepy'

const BASE_URL = 'https://itjustfun.cn/api/public/v1/'
const BASE_URL_LOCAL = 'http://localhost:8888/api/public/v1/'
function fetch(url, options = {}) {
  if (typeof url === 'string') {
    options.url = url
  }
  if (typeof url === 'object') {
    options = url
  }
  if (options.type === 'locale') {
    options.url = BASE_URL_LOCAL + options.url
  } else {
    options.url = BASE_URL + options.url
  }
  return wepy.request({
    url: options.url,
    method: options.method || 'GET',
    data: options.data || {},
    header: options.header || {}
  })
}

export default fetch
