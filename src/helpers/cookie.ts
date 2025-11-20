const cookie = {
  read(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)')) // 字符串中的\有特殊含义如\n,所以使用\时需要转义，即\\
    return match ? decodeURIComponent(match[3]) : null
  }
}

export default cookie
