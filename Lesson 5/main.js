//cái này biết cho vui chứ bây giờ chả ai cần check browser nữa :v
function CheckBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        return true;
    } else {
        return false;
    }
}
CheckBrowser()
function doShowAll() {
    if (CheckBrowser()) {
        var key = "";
        var list = "<tr><th>Item</th><th>Value</th></tr>\n";
        var i = 0;
        for (i = 0; i < localStorage.length; i++) {
            key = localStorage.key(i);
            list += "<tr><td>" + key + "</td>\n<td>" + localStorage.getItem(key) + "</td></tr>\n";
        }
        //If no item exists in the cart
        if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
            list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
        }
        //Bind the data to HTML table.
        //You can use jQuery, too
        document.getElementById('list').innerHTML = list;
    }
    else {
        alert("Cannot save shopping list as your browser does not support HTML 5")
    }
}
function SaveItem(){
    var name = document.forms.ShoppingList.name.value;
    var data = document.forms.ShoppingList.data.value;
    localStorage.setItem (name, data);
    doShowAll();
}
function ModifyItem(){
    var name1 = document.forms.ShoppingList.name.value;
    var data1 = document.forms.ShoppingList.data.value;
    if (localStorage.getItem(name1) != null){
        localStorage.setItem(name1,data1);
        document.forms.ShoppingList.data.value = localStorage.getItem(name1)
    }
    doShowAll()
}
function RemoveItem(){
    var name = document.forms.ShoppingList.name.value;
    document.forms.ShoppingList.data.value = localStorage.removeItem(name)
    doShowAll()
}
function ClearAll(){
    localStorage.clear()
    doShowAll()
}