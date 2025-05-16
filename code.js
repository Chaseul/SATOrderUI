let orders;
let historyButton;
let ordersPageCurrent;
let ordersPageHistory;
let navInfo;

let currentOrders = true;

$(()=>{
    console.log("Page Loaded!");

    historyButton = $("#historyRef");
    ordersPageCurrent = $("#CurrentOrders");
    ordersPageHistory = $("#PastOrders");

    //Bind click events
    historyButton.on("click", changePage);

    $("#arrowRef").on("click",NavUpdate);
    console.log(historyButton);
})

function NavUpdate(){
    if ($("aside").css("width") == navInfo){
        $("aside").css("width", "2em");}
    else{
        $("aside").css("width", "15em");
        navInfo = $("aside").css("width");
    }
}

//Changes the page to show past orders and current orders
function changePage(){
    console.log("History Button Clicked!");
    if(currentOrders){
        currentOrders = false;
        ordersPageCurrent.css("display", "none");
        ordersPageHistory.css("display", "flex");

        $("h1").text("Past Orders");
        $("header").css("background-color", "rgb(238, 146, 146)");
    }else{
        currentOrders = true;
        ordersPageHistory.css("display", "none");
        ordersPageCurrent.css("display", "flex");

        $("h1").text("Orders");
        $("header").css("background-color", "rgb(152, 209, 152)");
    }
}