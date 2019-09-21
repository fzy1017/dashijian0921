var public = 'http://localhost:8000/';
var URL = {
    login: public + 'admin/login',
    logout: public + 'admin/logout',
    logget: public + 'admin/getuser'
}
var user = {
    // 登录界面
    logIN: function (urL,name, password, hdin) {
        $.post(urL, {
            user_name: name,
            password: password
        }, function (res) {
            hdin(res);
        })
    },

    // 退出界面
    logOut: function (urL,hdout) {
        $.post(urL, function (res) {
            hdout(res);
        })
    },


    // 获取管理员信息
    logGet: function (urL,hdget) {
        $.get(urL, function (res) {
            hdget(res);
        })
    }
}