try {
    // 注意: 只有发生跨域请求时，cardLink 才会将请求发送到代理服务器(以此可以减轻代理服务器的压力)
    // 在执行 cardLink 之前预设代理服务器
    cardLink.server = 'https://api.allorigins.win/raw?url='
    // 为<article></article>(文章)标签下所有打开新标签窗口的a标签生成卡片链接
    cardLink(document.querySelectorAll('article a[mtype|="card"]'))
    // 兼容以前的文章
    cardLink(document.querySelectorAll('article a[rel=noopener]'))
} catch (e) {
    console.log(`卡片链接生成失败: ${e}`);
}