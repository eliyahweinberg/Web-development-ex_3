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
    $("#monthTax").append("</br>");
    
    label = "txtBonus";
    var $bLabel = $("<label>").attr('for', label);
    var $bInput = $("<input/>").attr({'id' : label, 'type' : "number"});
    $bLabel.css(cssWidth);
    $bLabel.text("Bonus Points: ");
    $("#cmdCalculate").before($bLabel);
    $("#cmdCalculate").before($bInput);
    $("#cmdCalculate").before("</br>");
    $("#cmdCheck").change(checkBoxListner);
      
}

function calculateTotal(){
    var result = 0;
    var wrongInput = false;
    var bonus = $("#txtBonus").val();
    if ($("#cmdCheck").is(":checked")){
        
        //check inputs
        
        result = calculateMonthTax($("#txtBase").val(), bonus);
        if (result === -1)
            wrongInput = true;
        result *= 12;
            
    }
    else{
        $('#monthTax').children('input').each(function () {
            var res = calculateMonthTax(this.value, bonus);
            if (res === -1)
                wrongInput = true;
            result += res;
            
            
            alert(this.value);
            }
        );
    }
    
    if (wrongInput){
        alert("Input can't be negative");
            return;
    }
    
    $("#txtResult").text("Total tax is: " + result);
}

function calculateMonthTax(tSalary, tPoints){
    var taxSteps = [6220, 8920, 14320, 19900, 41410, 53333];
    var taxValues = [0.1, 0.14, 0.2, 0.31, 0.35, 0.47, 0.5];
    const POINT_VALUE = 215;
    var salary = tSalary != "" ? parseFloat(tSalary) : 0;
    var points = tPoints != "" ? parseFloat(tPoints) : 0;
    points *= POINT_VALUE;
    var tax=0;
    var step;
    if (salary < 0 || points < 0)
        return -1;
    
    for(var i=6; i>0; i--){
        step = salary-taxSteps[i-1] > 0 ? salary-taxSteps[i-1] : 0;
        if (step != 0)
            salary = taxSteps[i-1];
        tax += step*taxValues[i];
    }
    tax += salary*taxValues[0];
        
    return tax-points > 0 ? tax-points : 0;
}


var checkBoxListner = function(){
    if (this.checked) {
        $("#monthTax").hide();
        $("#txtBase").removeAttr('readonly');
    }
    else if (!this.checked){
        $("#monthTax").show();
        $("#txtBase").val("");
        $("#txtBase").attr('readonly' , true);
    }
}

$("document").ready(loadPage);