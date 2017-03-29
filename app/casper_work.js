var casper = require('casper').create(
    {
        // verbose: true,//记录日志到控制台
        // logLevel: 'debug',//日志等级
        pageSettings: {
            loadImages: false,
            loadPlugins: false
        }
    }
)
// console.log(casper.cli.args)
var username = casper.cli.args[0]
var password = casper.cli.args[1]
// console.log(username)
// console.log(password)
var x = require('casper').selectXPath
phantom.outputEncoding = "utf-8"
casper.start('https://login.sina.com.cn/signup/signin.php',function(response){ 
    //  this.echo(this.getTitle())
    //  this.echo(phantom.cookies)
    })
casper.wait(10000,function() {
    this.evaluate(function (usr,psw) {
        // console.log(username)
        // console.log(password)
        // document.getElementById('username').value = 'xxxxx'
        // document.getElementById('password').value = 'xxxxx'
        document.getElementById('username').value = usr
        document.getElementById('password').value = psw
        document.getElementsByClassName('W_btn_a')[0].click()
    },username,password)
    
})
casper.wait(10000)
casper.thenOpen('http://s.weibo.com/user/&region=custom:11:1000&page=4',function(response) {
    // console.log(phantom.cookies)
    // console.log('response')
    // var cookies = phantom.cookies
    var cookies = this.page.cookies

    // console.log(cookies)
    // this.echo("cookie.length = " + cookies.length);
    for (var i in cookies) {
        if (cookies[i].name == 'SUB') {
            // console.log(2312321312312321)
            console.log(cookies[i].value)
        }
        // this.echo(cookies[i].name + "=" +  cookies[i].value);
    }
    // this.echo("''")
})

// casper.then(function() {
//     console.log(12321312)
//     console.log()
// })

casper.run();
