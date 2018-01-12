var loadPage = function() {
    $("#cmdCalculate").click(calculateTotal);
    var label = "txtBase";
    var $label = $("<label>").attr('for', label);
    var $input = $("<input/>").attr({'id' : label, 'type' : "number"});
    var $cBox = $("<label>");
    
    var cssWidth = { "width" : "110px", "display" : "inline-block", "margin-left" : "5px"};
    var cssMonthWidth = {"width" : "100px", "display" : "inline-block", "margin-left" : "5px"};
    
    $label.css(cssWidth);
    $label.text("Base Salary: ");
    $input.attr('readonly' , true);
    $cBox.html('<input id= "cmdCheck" type = "checkbox"/> For 12 Months').css({"display" : "inline-block", "margin-left" : "20px"});
    $("#monthTax").before($label);
    $("#monthTax").before($input);
    $("#monthTax").before($cBox);
    $("#monthTax").before("</br>");
    $("#monthTax").before("</br>");
    
    var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
    var txt = "txt";
    monthArr.forEach(function(item,index){
        var label = txt + item;
        var $mLabel = $("<label>").attr('for', label);
        $mLabel.css(cssMonthWidth);
        $mLabel.text(item);
        $("#monthTax").append($mLabel);
        $("#monthTax").append("</br>");
        
        }
    );

  
    
//    $("#monthTax").hide();
    
    
}

function calculateTotal(){
    alert($("#wrapper").html());
    
    
    
}

function calculateMonthTax(salary, points){
    
}

$("document").ready(loadPage);