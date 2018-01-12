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
        var $mInput = $("<input/>").attr({'id' : label, 'type' : "number"});
        $mLabel.css(cssMonthWidth);
        $mLabel.text(item + ":");
        $("#monthTax").append($mLabel);
        $("#monthTax").append($mInput);
        $("#monthTax").append("</br>");
        
        }
    );
    
    label = "txtBonus";
    var $bLabel = $("<label>").attr('for', label);
    var $bInput = $("<input/>").attr({'id' : label, 'type' : "number"});
    $bLabel.css(cssWidth);
    $bLabel.text("Bonus Points: ");
    $("#cmdCalculate").before("</br>");
    $("#cmdCalculate").before($bLabel);
    $("#cmdCalculate").before($bInput);
    $("#cmdCalculate").before("</br>");
    
    $("#cmdCheck").change(checkBoxListner);
  
    
//    $("#monthTax").hide();
    
    
}

function calculateTotal(){
    alert($("#wrapper").html());
    
    
    
}

function calculateMonthTax(salary, points){
    
}

var checkBoxListner = function(){
    if (this.checked) {
            alert('checked');
        }
    else if (!this.checked)
        alert('unchecked');
}

$("document").ready(loadPage);