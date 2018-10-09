const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	  {
		name: '那些你很冒险的梦',
        artist: '林俊杰',
		url: 'http://www.ytmp3.cn/down/50076.mp3',
	  }
    ]
});