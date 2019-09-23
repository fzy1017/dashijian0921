var cate = {
    category_search: function (csh) {
        $.get('http://localhost:8000/admin/category_search', function (res) {
            csh(res);
        })
    },
    category_add: function (name,slug,cad) {
        $.post('http://localhost:8000/admin/category_add',{name:name,slug:slug}, function (res) {
            cad(res);
        })
    }
}