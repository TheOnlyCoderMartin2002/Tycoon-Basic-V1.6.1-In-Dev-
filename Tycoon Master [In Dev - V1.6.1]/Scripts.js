let random_num_storage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // top
let no_input = "";
let actionBtnStorage = document.getElementsByClassName("action-btn");
let farmBtnStorage = document.getElementsByClassName('farm-btn');
let numberInpStorage = document.getElementsByClassName('num-inp');
let loanOptionStorage = document.getElementsByClassName('loan-option');
let settingBtnsStorage = document.getElementsByClassName('settings-btn');

let item_price = 0;

let user_fund_balance = 0;
let user_savings_balance = 0;
let user_diamond_balance = 0;
let passive_earnings_total = 15;
let user_loan_debt = 0;
let user_loan_debt_limit = 3000;
let user_tycoon_score = 0;
let user_loan_interest = 0;

let farm_row_1_value = 1;  // Cash Farm Values
let farm_row_2_value = 3;
let farm_row_3_value = 5;
let farm_row_4_value = 10;
let farm_row_5_value = 20;
let farm_row_6_value = 35;
let farm_row_7_value = 50;
let farm_row_8_value = 5;
let farm_row_9_value = 10;
let farm_row_10_value = 10
let farm_row_11_value = 20;
let farm_row_12_value = 2;
let farm_row_13_value = 200;



let farm_row_1_double_purchased_status = false;
let farm_row_2_double_purchased_status = false;
let farm_row_3_double_purchased_status = false;
let farm_row_4_double_purchased_status = false;

let total_income_upgrades_count = 0;
let total_cash_farm_income_count = 0;
let total_farm_click_count = 0;

let task_1_user_progress = 0;
let task_2_user_progress = 0;
let task_3_user_progress = 0;
let task_4_user_progress = 0;
let task_5_user_progress = 0;
let task_6_user_progress = 0;

let task_1_target = 2;
let task_2_target = 3;
let task_3_target = 200;
let task_4_target = 2000;
let task_5_target = 100;
let task_6_target = 7;


let stat = document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
let stat_2 = document.getElementById("savings-output").innerHTML = "SAVINGS : $" + user_savings_balance;
let stat_3 = document.getElementById("loan-debt-output").innerHTML = "LOAN DEBT : $" + user_loan_debt;
let stat_4 = document.getElementById("tycoon-score-output").innerHTML = "TYCOON SCORE : " + user_tycoon_score + " PTS";
let stat_5 = document.getElementById("total-passive-earnings-output").innerHTML = "TOTAL PASSIVE EARNINGS : $" + passive_earnings_total;
let stat_6 = document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
let stat_7 = document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICKS : " + total_farm_click_count;
let stat_8 = document.getElementById("diamond-balance-output").innerHTML = "DIAMONDS : " + user_diamond_balance;
let statsStorage = [stat, stat_2, stat_3, stat_4, stat_5, stat_6, stat_7, stat_8];

let cash_row_collection_ready = false;
let cash_row_2_collection_ready = false;
let cash_row_3_collection_ready = false;
let cash_row_4_collection_ready = false;
let cash_row_5_collection_ready = false;
let cash_row_6_collection_ready = false;
let cash_row_7_collection_ready = false;
let cash_row_8_collection_ready = false;
let cash_row_9_collection_ready = false;

let perk_1_purchase_status = false;
let perk_2_purchase_status = false;

let c1 = 77102;
let c2 = 97210;
let c3 = 69144;
let c4 = 80372;
let c5 = 57018;
let c6 = 41009;
let c7 = 19105;
let c8 = 206684;
let c9 = 116808;
let c10 = 72600;

alert("[INFO]: Welcome to Wealth Simulator | Basic. This game has been developed on a mobile, therefore it is more optimised for a mobile screen. However it will work just as well on any desktop!");

for (let z = 0; z < farmBtnStorage.length; z++) {
    farmBtnStorage[z].onclick = function() {
        playAudio();
    }
}



let unlock_all_farms = document.getElementById('unlock-farms-btn').onclick = function() {
    user_fund_balance += 14000;
    user_diamond_balance += 6;
    
    updateStats();
    
    buy_farm_btn_1();
    buy_farm_btn_2();
    buy_farm_btn_3();
    buy_farm_btn_4();
    buy_farm_btn_5();
    buy_farm_btn_6();
    buy_farm_btn_7();
    buy_farm_btn_8();
    buy_farm_btn_9();
}

document.getElementById('vip-btn').onclick = function() {
    alert("[IN-DEV]: The V.I.P lounge is being implemented (unknown release date)");
}

document.getElementById('buy-code-btn-1').onclick = function() {
    item_price = 750;
    
    if (user_fund_balance < item_price) {
        playAudio2();
        document.getElementById("container").style.backgroundColor = "red";
        
        setTimeout( function() {
            document.getElementById("container").style.backgroundColor = "transparent";
        }, 500)
    } else if (user_fund_balance >= item_price) {
        playAudio7();
        playAudio4();
        
        document.getElementById("buy-code-btn-1").disabled = true;
        document.getElementById("buy-code-btn-1").innerHTML = '[CODE OWNED]: 57018';
        
        setTimeout( function() {
            alert("[CODE PURCHASED SUCCESSFULLY]: Your code for a dark purple background is | 57018 |");
        })
    }
}

document.getElementById('buy-code-btn-2').onclick = function() {
    item_price = 750;
    
    if (user_fund_balance < item_price) {
        playAudio2();
        document.getElementById("container").style.backgroundColor = "red";
        
        setTimeout( function() {
            document.getElementById("container").style.backgroundColor = "transparent";
        }, 500)
    } else if (user_fund_balance >= item_price) {
        playAudio7();
        playAudio4();
        
        document.getElementById("buy-code-btn-2").disabled = true;
        document.getElementById("buy-code-btn-2").innerHTML = '[CODE OWNED]: 72600';
        
        setTimeout( function() {
            alert("[CODE PURCHASED SUCCESSFULLY]: Your code for an extra dark red background is | 72600 |");
        })
    }
}

document.getElementById('buy-code-btn-3').onclick = function() {
    item_price = 2000;
    
    if (user_fund_balance < item_price) {
        playAudio2();
        document.getElementById("container").style.backgroundColor = "red";
        
        setTimeout( function() {
            document.getElementById("container").style.backgroundColor = "transparent";
        }, 500)
    } else if (user_fund_balance >= item_price) {
        playAudio7();
        playAudio4();
        
        document.getElementById("buy-code-btn-3").disabled = true;
        document.getElementById("buy-code-btn-3").innerHTML = '[CODE OWNED]: 77102';
        
        setTimeout( function() {
            alert("[CODE PURCHASED SUCCESSFULLY]: Your code for X2 (double) income for the initial 4 cash farms is | 77102 |");
        })
    }
}

document.getElementById('buy-code-btn-4').onclick = function() {
    item_price = 5000;
    
    if (user_fund_balance < item_price) {
        playAudio2();
        document.getElementById("container").style.backgroundColor = "red";
        
        setTimeout( function() {
            document.getElementById("container").style.backgroundColor = "transparent";
        }, 500)
    } else if (user_fund_balance >= item_price) {
        playAudio7();
        playAudio4();
        
        document.getElementById("buy-code-btn-4").disabled = true;
        document.getElementById("buy-code-btn-4").innerHTML = '[CODE OWNED]: 97210';
        
        setTimeout( function() {
            alert("[CODE PURCHASED SUCCESSFULLY]: Your code for X3 (triple) income for the initial 4 cash farms is | 97210 |");
        })
    }
}


let test_mode = document.getElementById('test-mode-btn').onclick = function() {
    user_fund_balance += 999999999;
    user_savings_balance += 999999999;
    user_diamond_balance += 999999999;
    user_tycoon_score += 999999999;
    playAudio7();
    updateStats();
}

document.getElementById('stats-btn').onclick = function() {
    document.getElementById("close-admin-btn").style.display = 'block';
    document.getElementById("stats-panel").style.display = 'flex';
    playAudio3();
    
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "none";
    }
}

document.getElementById('promo-codes-btn').onclick = function() {
    document.getElementById("promo-codes-btn").style.display = 'none';
    document.getElementById("promo-panel").style.display = 'flex';
}

document.getElementById('code-apply-btn').onclick = function() {
    if (document.getElementById("promo-code-inp").value == c1) {
        alert("Code Accepted | Applied X2 multipliers to the first 4 cash farms");
        //unlock_all_x2_multipliers();
        user_tycoon_score += 100;
        buy_double_1();
        buy_double_2();
        buy_double_3();
        buy_double_4();
        c1 = 01010110101010101011010101;
        document.getElementById("promo-panel").style.display = 'none';
        document.getElementById("promo-code-inp").value = '';
        document.getElementById("promo-codes-btn").style.display = 'block';
    } else if (document.getElementById("promo-code-inp").value == c2) {
        alert("Code Accepted | Perk 2 (X3 multipliers) have been applied to the first 4 cash farms");
        user_diamond_balance += 1;
        setTimeout( function() {
            perk_2();
            c2 = 01010110101010101011010101;
            document.getElementById("promo-panel").style.display = 'none';
            document.getElementById("promo-code-inp").value = '';
            document.getElementById("promo-codes-btn").style.display = 'block';
        }, 1000)
    } else if (document.getElementById("promo-code-inp").value == c3) {
        let code_award_value = 2000;
        alert("Code Accepted | $2000 has been applied to your balance!");
        user_fund_balance += code_award_value;
        
        playAudio();
        playAudio7();
        setTimeout( function() {
            c3 = 01010110101010101011010101;
            document.getElementById("promo-panel").style.display = 'none';
            document.getElementById("promo-code-inp").value = '';
            document.getElementById("promo-codes-btn").style.display = 'block';
        }, 1000)
    } else if (document.getElementById("promo-code-inp").value == c4) {
            document.getElementById("root").style.backgroundColor = 'darkgreen';
            playAudio7();
    } else if (document.getElementById("promo-code-inp").value == c5) {
        document.getElementById("root").style.backgroundColor = '#38041F';
            playAudio7();
    } else if (document.getElementById("promo-code-inp").value == c7) {
        farm_row_1_value = 1000;
        farm_row_2_value = 3000;
        farm_row_3_value = 5000;
        farm_row_4_value = 10000;
        
        playAudio7();
        updateStats();
        alert("Code Accepted | Applied X1000 multipliers to the first 4 cash farms");
        
        document.getElementById("buy-double-1").innerHTML = 'X1000';
        document.getElementById("buy-double-2").innerHTML = 'X1000';
        document.getElementById("buy-double-3").innerHTML = 'X1000';
        document.getElementById("buy-double-4").innerHTML = 'X1000';
        
        document.getElementById("buy-double-1").style.color = '#9EFFA0';
        document.getElementById("buy-double-2").style.color = '#9EFFA0';
        document.getElementById("buy-double-3").style.color = '#9EFFA0';
        document.getElementById("buy-double-4").style.color = '#9EFFA0';
        
        document.getElementById("buy-double-1").disabled = true;
        document.getElementById("buy-double-2").disabled = true;
        document.getElementById("buy-double-3").disabled = true;
        document.getElementById("buy-double-4").disabled = true;
        
        setTimeout( function() {
            c7 = 01010110101010101011010101;
            document.getElementById("promo-panel").style.display = 'none';
            document.getElementById("promo-code-inp").value = '';
            document.getElementById("promo-codes-btn").style.display = 'block';
        }, 1000)
        
    } else if (document.getElementById("promo-code-inp").value == c8) {
        test_mode();
        updateStats();
    } else if (document.getElementById("promo-code-inp").value == c9) {
        unlock_all_farms();
        updateStats();
    } else if (document.getElementById("promo-code-inp").value == c10) {
        document.getElementById("root").style.backgroundColor = '#360909';
        playAudio7();
    } else if (document.getElementById("promo-code-inp").value == c6) {
        farm_row_1_value = 20;
        farm_row_2_value = 60;
        farm_row_3_value = 100;
        farm_row_4_value = 200;
        playAudio7();
        updateStats();
        
        alert("Code Accepted | Applied X20 multipliers to the first 4 cash farms");
        
        document.getElementById("buy-double-1").innerHTML = 'X20';
        document.getElementById("buy-double-2").innerHTML = 'X20';
        document.getElementById("buy-double-3").innerHTML = 'X20';
        document.getElementById("buy-double-4").innerHTML = 'X20';
        
        document.getElementById("buy-double-1").style.color = 'cyan';
        document.getElementById("buy-double-2").style.color = 'cyan';
        document.getElementById("buy-double-3").style.color = 'cyan';
        document.getElementById("buy-double-4").style.color = 'cyan';
        
        document.getElementById("buy-double-1").disabled = true;
        document.getElementById("buy-double-2").disabled = true;
        document.getElementById("buy-double-3").disabled = true;
        document.getElementById("buy-double-4").disabled = true;
        
    }
    setTimeout( function() {
            c6 = 01010110101010101011010101;
            document.getElementById("promo-panel").style.display = 'none';
            document.getElementById("promo-code-inp").value = '';
            document.getElementById("promo-codes-btn").style.display = 'block';
        }, 1000)
    if (document.getElementById("promo-code-inp").value == no_input) {
        document.getElementById("promo-panel").style.display = 'none';
        document.getElementById("promo-code-inp").value = '';
        document.getElementById("promo-codes-btn").style.display = 'block';
        playAudio2();
    }
} 
function doubleIncomeUnlockStatusChecker() {
    let refund_total = 0;
    
    if (refund_total == 0) {
        console.log("no refund");
    }
    
    if (farm_row_1_double_purchased_status = true) {
        refund_total += 5;
        playAudio4();
    } else {
        console.log(".");
    }
    if (farm_row_2_double_purchased_status = true) {
        refund_total += 10;
        playAudio4();
    } else {
        console.log(".");
    }
    if (farm_row_3_double_purchased_status = true) {
        refund_total += 15;
        playAudio4();
    } else {
        console.log(".");
    }
    if (farm_row_4_double_purchased_status = true) {
        refund_total += 20;
        playAudio4();
    } else {
        console.log(".");
    }
    setTimeout( function() {
        alert("YOU RECEIVED A REFUND OF " + refund_total + "POINTS FOR THE INITIAL 4 ROWS");
        user_tycoon_score += refund_total;
    }, 2000)
}

let buy_double_1 = document.getElementById("buy-double-1").onclick = function() {
    item_price = 10;
    if (user_tycoon_score < item_price) {
        //alert("INSUFFICIENT POINTS!");
        playAudio2();
    } else if (user_tycoon_score >= item_price) {
        //alert("DOUBLE INCOME PURCHASED!");
        playAudio4();
        user_tycoon_score -= item_price;
        farm_row_1_value = 2;
        farm_row_1_double_purchased_status = true;
        document.getElementById("buy-double-1").innerHTML = 'X2';
        document.getElementById("buy-double-1").style.color = 'lime';
        document.getElementById("buy-double-1").style.width = '60px';
        document.getElementById("buy-double-1").disabled = true;
    }
}

let buy_double_2 = document.getElementById("buy-double-2").onclick = function() {
    item_price = 20;
    if (user_tycoon_score < item_price) {
        //alert("INSUFFICIENT POINTS!");
        playAudio2();
    } else if (user_tycoon_score >= item_price) {
        //alert("DOUBLE INCOME PURCHASED!");
        playAudio4();
        user_tycoon_score -= item_price;
        farm_row_2_value = 6;
        farm_row_2_double_purchased_status = false;
        document.getElementById("buy-double-2").innerHTML = 'X2';
        document.getElementById("buy-double-2").style.color = 'lime';
        document.getElementById("buy-double-2").disabled = true;
    }
}

let buy_double_3 = document.getElementById("buy-double-3").onclick = function() {
    item_price = 30;
    if (user_tycoon_score < item_price) {
        //alert("INSUFFICIENT POINTS!");
        playAudio2();
    } else if (user_tycoon_score >= item_price) {
        //alert("DOUBLE INCOME PURCHASED!");
        playAudio4();
        user_tycoon_score -= item_price;
        farm_row_3_value = 10;
        farm_row_3_double_purchased_status = false;
        document.getElementById("buy-double-3").innerHTML = 'X2';
        document.getElementById("buy-double-3").style.color = 'lime';
        document.getElementById("buy-double-3").disabled = true;
    }
}

let buy_double_4 = document.getElementById("buy-double-4").onclick = function() {
    item_price = 40;
    if (user_tycoon_score < item_price) {
        //alert("INSUFFICIENT POINTS!");
        playAudio2();
    } else if (user_tycoon_score >= item_price) {
        //alert("DOUBLE INCOME PURCHASED!");
        playAudio4();
        user_tycoon_score -= item_price;
        farm_row_4_value = 20;
        farm_row_4_double_purchased_status = false;
        document.getElementById("buy-double-4").innerHTML = 'X2';
        document.getElementById("buy-double-4").style.color = 'lime';
        document.getElementById("buy-double-4").disabled = true;
    }
}

let buy_double_5 = document.getElementById("buy-double-5").onclick = function() {
    item_price = 50;
    if (user_tycoon_score < item_price) {
        //alert("INSUFFICIENT POINTS!");
        playAudio2();
    } else if (user_tycoon_score >= item_price) {
        //alert("DOUBLE INCOME PURCHASED!");
        playAudio4();
        user_tycoon_score -= item_price;
        farm_row_5_value = 40;
        document.getElementById("buy-double-5").innerHTML = 'X2';
        document.getElementById("buy-double-5").style.color = 'lime';
        document.getElementById("buy-double-5").disabled = true;
    }
}

let buy_double_6 = document.getElementById("buy-double-6").onclick = function() {
    item_price = 60;
    if (user_tycoon_score < item_price) {
        //alert("INSUFFICIENT POINTS!");
        playAudio2();
    } else if (user_tycoon_score >= item_price) {
        //alert("DOUBLE INCOME PURCHASED!");
        playAudio4();
        user_tycoon_score -= item_price;
        farm_row_6_value = 70;
        document.getElementById("buy-double-6").innerHTML = 'X2';
        document.getElementById("buy-double-6").style.color = 'lime';
        document.getElementById("buy-double-6").disabled = true;
    }
}

let buy_double_7 = document.getElementById("buy-double-7").onclick = function() {
    item_price = 70;
    if (user_tycoon_score < item_price) {
        //alert("INSUFFICIENT POINTS!");
        playAudio2();
    } else if (user_tycoon_score >= item_price) {
        //alert("DOUBLE INCOME PURCHASED!");
        playAudio4();
        user_tycoon_score -= item_price;
        farm_row_7_value = 100;
        document.getElementById("buy-double-7").innerHTML = 'X2';
        document.getElementById("buy-double-7").style.color = 'lime';
        document.getElementById("buy-double-7").disabled = true;
    }
}

let buy_double_8 = document.getElementById("buy-double-8").onclick = function() {
    item_price = 80;
    if (user_tycoon_score < item_price) {
        //alert("INSUFFICIENT POINTS!");
        playAudio2();
    } else if (user_tycoon_score >= item_price) {
        //alert("DOUBLE INCOME PURCHASED!");
        playAudio4();
        user_tycoon_score -= item_price;
        farm_row_8_value = 10;
        document.getElementById("buy-double-8").innerHTML = 'X2';
        document.getElementById("buy-double-8").style.color = 'lime';
        document.getElementById("buy-double-8").disabled = true;
    }
}

let buy_double_9 = document.getElementById("buy-double-9").onclick = function() {
    item_price = 90;
    if (user_tycoon_score < item_price) {
        //alert("INSUFFICIENT POINTS!");
        playAudio2();
    } else if (user_tycoon_score >= item_price) {
        //alert("DOUBLE INCOME PURCHASED!");
        playAudio4();
        user_tycoon_score -= item_price;
        farm_row_9_value = 20;
        document.getElementById("buy-double-9").innerHTML = 'X2';
        document.getElementById("buy-double-9").style.color = 'lime';
        document.getElementById("buy-double-9").disabled = true;
    }
}

let buy_double_10 = document.getElementById("buy-double-10").onclick = function() {
    item_price = 100;
    if (user_tycoon_score < item_price) {
        //alert("INSUFFICIENT POINTS!");
        playAudio2();
    } else if (user_tycoon_score >= item_price) {
        //alert("DOUBLE INCOME PURCHASED!");
        playAudio4();
        user_tycoon_score -= item_price;
        farm_row_10_value = 20;
        document.getElementById("buy-double-10").innerHTML = 'X2';
        document.getElementById("buy-double-10").style.color = 'lime';
        document.getElementById("buy-double-10").disabled = true;
    }
}

let buy_double_11 = document.getElementById("buy-double-11").onclick = function() {
    item_price = 150;
    if (user_tycoon_score < item_price) {
        //alert("INSUFFICIENT POINTS!");
        playAudio2();
    } else if (user_tycoon_score >= item_price) {
        //alert("DOUBLE INCOME PURCHASED!");
        playAudio4();
        user_tycoon_score -= item_price;
        farm_row_11_value = 40;
        document.getElementById("buy-double-11").innerHTML = 'X2';
        document.getElementById("buy-double-11").style.color = 'lime';
        document.getElementById("buy-double-11").disabled = true;
    }
}

let buy_double_12 = document.getElementById("buy-double-12").onclick = function() {
    item_price = 250;
    if (user_tycoon_score < item_price) {
        //alert("INSUFFICIENT POINTS!");
        playAudio2();
    } else if (user_tycoon_score >= item_price) {
        //alert("DOUBLE INCOME PURCHASED!");
        playAudio4();
        user_tycoon_score -= item_price;
        farm_row_12_value = 4;
        document.getElementById("buy-double-12").innerHTML = 'X2';
        document.getElementById("buy-double-12").style.color = 'lime';
        document.getElementById("buy-double-12").disabled = true;
    }
}

let buy_double_13 = document.getElementById("buy-double-13").onclick = function() {
    item_price = 500;
    if (user_tycoon_score < item_price) {
        //alert("INSUFFICIENT POINTS!");
        playAudio2();
    } else if (user_tycoon_score >= item_price) {
        //alert("DOUBLE INCOME PURCHASED!");
        playAudio4();
        user_tycoon_score -= item_price;
        farm_row_13_value = 400;
        document.getElementById("buy-double-13").innerHTML = 'X2';
        document.getElementById("buy-double-13").style.color = 'lime';
        document.getElementById("buy-double-13").disabled = true;
    }
}

let unlock_all_x2_multipliers = document.getElementById('unlock-all-x2-incomes').onclick = function() {
    user_tycoon_score += 1450;
    buy_double_1();
    buy_double_2();
    buy_double_3();
    buy_double_4();
    buy_double_5();
    buy_double_6();
    buy_double_7();
    buy_double_8();
    buy_double_9();
    buy_double_10();
    buy_double_11();
    buy_double_12();
    buy_double_13();
    playAudio5();
    playAudio6();
}

function updateStats() {
    stat = document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    stat_2 = document.getElementById("savings-output").innerHTML = "<b>SAVINGS</b> : $" + user_savings_balance;
    stat_3 = document.getElementById("loan-debt-output").innerHTML = "<b>LOAN DEBT</b> : $" + user_loan_debt;
    stat_4 = document.getElementById("tycoon-score-output").innerHTML = "<b>TYCOON POINTS</b> : " + user_tycoon_score + " PTS";
    stat_5 = document.getElementById("total-passive-earnings-output").innerHTML = "TOTAL PASSIVE EARNINGS : $" + passive_earnings_total;
    stat_6 = document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
    stat_7 = document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICKS : " + total_farm_click_count;
    stat_8 = document.getElementById("diamond-balance-output").innerHTML = "DIAMONDS : " + user_diamond_balance;
}

setTimeout( function() {
    cash_row_collection_ready = true;
    cash_row_2_collection_ready = true;
    cash_row_3_collection_ready = true;
    cash_row_4_collection_ready = true;
}, 1000)

function showDebt() {

if (user_loan_debt == 0) {
    document.getElementById("loan-debt-output").style.display = 'none';
    document.getElementById("debt-icon").style.display = 'none';
} else if (user_loan_debt > 0) {
    document.getElementById("loan-debt-output").style.display = 'block';
    document.getElementById("debt-icon").style.display = 'block';
}
}

setInterval( function() { // Stat reloader
    updateStats();
}, 1)



setInterval( function() {  
    task1Checker();
    task2Checker();
    task3Checker();
    task4Checker();
    task5Checker();
    task6Checker();
}, 1000)


setInterval( function() {  
    showDebt();
}, 1000)

// TASKS

function task1Checker() {
    if (task_1_user_progress == task_1_target) {
        task_1_user_progress = -99999;
        task_1_target = null;
        playAudio4();
        
        if (task_1_target == null) {
            document.getElementById('claim-task-reward-btn').disabled = false;
            document.getElementById("output-text").innerHTML = "";
        }
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "TASK COMPLETED!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 6000)
        
        playAudio4();
        alert("TASK COMPLETED!");
        console.log("task complete");
        document.getElementById('claim-task-reward-btn').innerHTML = "CLAIM REWARD";
        document.getElementById('claim-task-reward-btn').style.backgroundColor = "darkred";
        document.getElementById('claim-task-reward-btn').disabled = false;
    } else {
        
    }
}

function task2Checker() {
    if (task_2_user_progress == task_2_target) {
        task_2_user_orogress = -99999;
        task_2_target = null;
        playAudio4();
        
        if (task_2_target == null) {
            document.getElementById('claim-task-reward-btn-2').disabled = false;
            document.getElementById("output-text").innerHTML = "";
        }
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "TASK COMPLETED!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 6000)
        
        
        playAudio4();
        alert("TASK COMPLETED!");
        console.log("task complete");
        document.getElementById('claim-task-reward-btn-2').innerHTML = "CLAIM REWARD";
        document.getElementById('claim-task-reward-btn-2').style.backgroundColor = "darkred";
        document.getElementById('claim-task-reward-btn-2').disabled = false;
    } else {
        
    }
}

function task3Checker() {
    if (task_3_user_progress == task_3_target) {
        task_3_user_orogress = -99999;
        task_3_target = null;
        playAudio4();
        
        if (task_3_target == null) {
            document.getElementById('claim-task-reward-btn-3').disabled = false;
            document.getElementById("output-text").innerHTML = "";
        }
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "TASK COMPLETED!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 6000)
        
        
        playAudio4();
        alert("TASK COMPLETED!");
        console.log("task complete");
        document.getElementById('claim-task-reward-btn-3').innerHTML = "CLAIM REWARD";
        document.getElementById('claim-task-reward-btn-3').style.backgroundColor = "darkred";
        document.getElementById('claim-task-reward-btn-3').disabled = false;
    } else {
        
    }
}

function task4Checker() {
    if (task_4_user_progress >= task_4_target) {
        task_4_user_progress = -99999;
        task_4_target = null;
        playAudio4();
        
        if (task_4_target == null) {
            document.getElementById('claim-task-reward-btn-4').disabled = false;
            document.getElementById("output-text").innerHTML = "";
        }
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "TASK COMPLETED!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 6000)
        
        
        playAudio4();
        alert("TASK COMPLETED!");
        console.log("task complete");
        document.getElementById('claim-task-reward-btn-4').innerHTML = "CLAIM REWARD";
        document.getElementById('claim-task-reward-btn-4').style.backgroundColor = "darkred";
        document.getElementById('claim-task-reward-btn-4').disabled = false;
    } else {
        
    }
}

function task5Checker() {
    if (task_5_user_progress >= task_5_target) {
        task_5_user_progress = -99999;
        task_5_target = null;
        playAudio4();
        
        if (task_5_target == null) {
            document.getElementById('claim-task-reward-btn-5').disabled = false;
            document.getElementById("output-text").innerHTML = "";
        }
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "TASK COMPLETED!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 6000)
        
        
        playAudio4();
        alert("TASK COMPLETED!");
        console.log("task complete");
        document.getElementById('claim-task-reward-btn-5').innerHTML = "CLAIM REWARD";
        document.getElementById('claim-task-reward-btn-5').style.backgroundColor = "darkred";
        document.getElementById('claim-task-reward-btn-5').disabled = false;
    } else {
        
    }
}

function task6Checker() {
    if (task_6_user_progress >= task_6_target) {
        task_6_user_progress = -99999;
        task_6_target = null;
        playAudio4();
        
        if (task_6_target == null) {
            document.getElementById('claim-task-reward-btn-6').disabled = false;
            document.getElementById("output-text").innerHTML = "";
        }
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "TASK COMPLETED!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 6000)
        
        
        playAudio4();
        alert("TASK COMPLETED!");
        console.log("task complete");
        document.getElementById('claim-task-reward-btn-6').innerHTML = "CLAIM REWARD";
        document.getElementById('claim-task-reward-btn-6').style.backgroundColor = "darkred";
        document.getElementById('claim-task-reward-btn-6').disabled = false;
    } else {
        
    }
}


function checkReadyStatus2() {
    if (cash_row_8_collection_ready == true) {
        farm_btn_10();
    }
    if (cash_row_9_collection_ready == true) {
        farm_btn_11();
    }
}

const myInterval = setInterval(currentTime, 1000); // borrowed code

function currentTime() {
  const date = new Date();
  document.getElementById("current-time-output").innerHTML = date.toLocaleTimeString();
}

document.getElementById("earn-btn").addEventListener("click", function(){
    setTimeout( function() {
          playAudio5();
      }, 1500)
  setTimeout( function() {
      alert("# Welcome to your Cash Farms! The first 4 rows are free for you to collect every specified interval :) Simply tap / click the cash amounts to grow your balance & earn over time to purchase better farms, upgrades & perks!! \n\n# Furthermore, the table offers 3 types of unique farms for you to unlock such as timed farms, auto-collected farms, and most effient of all the instant-collect farms which grant the specified cash amount per click!");
  }, 2000)
  }, { once: true });

document.getElementById("collect-ready-farms-btn").addEventListener("click", function(){
    setTimeout( function() {
          playAudio5();
      }, 1500)
  setTimeout( function() {
      alert("# Quick-collect allows you to collect the first 4 rows all at once as long as the rows are ready for collection! \n\n# Upon purchasing the auto-collect perk via the shop, quick-collect will be disabled. Visit shop for more info.");
  }, 2000)
  }, { once: true });


document.getElementById('claim-timed-cash-1').onclick = function() {  // TIMED CASH
    let reward_1 = 250;
    user_fund_balance += reward_1;
    user_tycoon_score += 5;
    
    setTimeout( function() {
        reward_1 = 0;
    }, 1000)
    playAudio5();
    playAudio();
    updateStats();
    document.getElementById("claim-timed-cash-1").innerHTML = "CLAIMED";
    document.getElementById("claim-timed-cash-1").disabled = true;
    document.getElementById("status-tab-1").innerHTML = "■■■■";
}

setTimeout( function() {
    document.getElementById("claim-timed-cash-1").style.display = "flex";
    document.getElementById("status-tab-1").innerHTML = "READY";
    playAudio5();
}, 120000)

document.getElementById('claim-timed-cash-2').onclick = function() {
    let reward_2 = 500;
    user_fund_balance += reward_2;
    user_tycoon_score += 10;
    
    setTimeout( function() {
        reward_2 = 0;
    }, 1000)
    playAudio5();
    playAudio();
    updateStats();
    document.getElementById("claim-timed-cash-2").innerHTML = "CLAIMED";
    document.getElementById("claim-timed-cash-2").disabled = true;
    document.getElementById("status-tab-2").innerHTML = "■■■■";
}

setTimeout( function() {
    document.getElementById("claim-timed-cash-2").style.display = "flex";
    document.getElementById("status-tab-2").innerHTML = "READY";
    playAudio5();
}, 300000)

document.getElementById('claim-timed-cash-3').onclick = function() {
    let reward_3 = 1000;
    user_fund_balance += reward_3;
    user_tycoon_score += 10;
    
    setTimeout( function() {
        reward_3 = 0;
    }, 1000)
    playAudio5();
    playAudio();
    updateStats();
    document.getElementById("claim-timed-cash-3").innerHTML = "CLAIMED";
    document.getElementById("claim-timed-cash-3").disabled = true;
    document.getElementById("status-tab-3").innerHTML = "■■■■";
}

setTimeout( function() {
    document.getElementById("claim-timed-cash-3").style.display = "flex";
    document.getElementById("status-tab-3").innerHTML = "READY";
    playAudio5();
}, 600000)

document.getElementById('claim-timed-cash-4').onclick = function() {
    let reward_4 = 2500;
    user_fund_balance += reward_4;
    user_tycoon_score += 15;
    
    setTimeout( function() {
        reward_1 = 0;
    }, 1000)
    playAudio5();
    playAudio();
    updateStats();
    document.getElementById("claim-timed-cash-4").innerHTML = "CLAIMED";
    document.getElementById("claim-timed-cash-4").disabled = true;
    document.getElementById("status-tab-4").innerHTML = "■■■■";
}

setTimeout( function() {
    document.getElementById("claim-timed-cash-4").style.display = "flex";
    document.getElementById("status-tab-4").innerHTML = "READY";
    playAudio5();
}, 1200000)

document.getElementById('collect-ready-farms-btn').onclick = function() {
    checkReadyStatus();
}

document.getElementById('timed-cash-rewards-btn').onclick = function() {
    playAudio3();
    //alert('In development!');
    
    document.getElementById("timed-cash-rewards-panel").style.display = "flex";
    document.getElementById("close-admin-btn").style.display = "block";
    document.getElementById("number-game-panel").style.display = "none";
    
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "none";
    }
}

document.getElementById('number-game-info-btn').onclick = function() {
    //alert('In development!');
    playAudio3();
    document.getElementById("number-game-info-panel").style.display = "flex";
    document.getElementById("close-number-game-info-btn").style.display = "block";
    
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "none";
    }
}

document.getElementById('close-number-game-info-btn').onclick = function() {
    //alert('In development!');
    playAudio3();
    document.getElementById("close-number-game-info-btn").style.display = "none";
    document.getElementById("number-game-info-panel").style.display = "none";
    
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "block";
    }p
}

document.getElementById('hide-balance-panel').onclick = function() {
    document.getElementById('balance-panel').style.display = 'none';
    playAudio3();
}

document.getElementById('show-balance-panel').onclick = function() {
    document.getElementById('balance-panel').style.display = 'flex';
    playAudio3();
}

document.getElementById('close-table-settings').onclick = function() {
    document.getElementById('earn-panel').style.display = 'none';
    document.getElementById('number-game-panel').style.display = 'flex';
    document.getElementById('farm-table-settings-panel').style.display = 'none';
    document.getElementById('close-admin-btn').style.display = 'none';
    document.getElementById('farm-info-btn').style.display = 'none';
    document.getElementById('farm-table-settings-btn').style.display = 'none';
    document.getElementById('close-shop-btn').style.display = 'none';
    document.getElementById('tasks-menu').style.display = 'none';
    document.getElementById('collect-ready-farms-btn').style.display = 'none';
    document.getElementById("promo-panel").style.display = 'none';
    document.getElementById("promo-code-inp").value = '';
    document.getElementById("promo-codes-btn").style.display = 'block';
   playAudio3();
    
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "block";
    }
}



for (let sb = 0; sb < settingBtnsStorage.length; sb++) {   // Settings
    settingBtnsStorage[sb].onclick = function() {
        document.getElementById('earn-panel').style.display = 'none';
        document.getElementById('close-admin-btn').style.display = 'none';
        document.getElementById('farm-info-btn').style.display = 'none';
        document.getElementById('farm-table-settings-btn').style.display = 'none';
        document.getElementById('farm-table-settings-panel').style.display = 'flex';
        document.getElementById('shop-menu').style.display = 'none';
        document.getElementById('income-upgrades-info-btn').style.display = 'none';
        document.getElementById('close-shop-btn').style.display = 'none';
        document.getElementById('tasks-menu').style.display = 'none';
        document.getElementById('number-game-panel').style.display = 'none';
        document.getElementById("savings-panel").style.display = "none";
        document.getElementById('collect-ready-farms-btn').style.display = 'none';
        playAudio3();
        
        for (let y = 0; actionBtnStorage.length; y++) {
            actionBtnStorage[y].style.display = "none";
        }
    }
}

let perk_1 = document.getElementById('buy-perk-1').onclick = function() {
    item_price = 1500;
    
    if (user_fund_balance >= item_price) {
        user_fund_balance -= item_price;
        perk_1_purchase_status = true;
        playAudio7();
        document.getElementById("buy-perk-1").innerHTML = 'PERK OWNED & ACTIVE';
        document.getElementById("buy-perk-1").style.backgroundColor = 'darkred';
        document.getElementById("buy-perk-1").disabled = true;
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "QUICK-COLLECT HAS BEEN REPLACED BY AUTO-COLLECT & DISABLED TO PREVENT BUGS!";
        document.getElementById("collect-ready-farms-btn").disabled = true;
        
        cash_row_collection_ready = true;
        cash_row_2_collection_ready = true;
        cash_row_3_collection_ready = true;
        cash_row_4_collection_ready = true;
        cash_row_5_collection_ready = true;
        cash_row_6_collection_ready = true;
        cash_row_7_collection_ready = true;
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById('transfer-from-savings-inp').value = '';
             }, 6000)
        
    
        setInterval( function() {
            checkReadyStatus();
        }, 2000)
    } else {
        //alert('INSUFFIECIENT FUNDS!');
        playAudio2();
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "INSUFFICIENT FUNDS!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
             }, 2000)
    }
}

let perk_2 = document.getElementById('buy-perk-2').onclick = function() {
    item_price = 1;
    
    if (user_diamond_balance >= item_price) {
        user_diamond_balance -= item_price;
        perk_2_purchase_status = true;
        playAudio7();
        doubleIncomeUnlockStatusChecker();
        document.getElementById("buy-perk-2").innerHTML = 'PERK OWNED & ACTIVE';
        document.getElementById("buy-perk-2").style.backgroundColor = 'darkred';
        document.getElementById("buy-perk-2").disabled = true;
        document.getElementById("output-panel").style.display = "block";
        
        user_tycoon_score += 100;
        
        buy_double_1();
        buy_double_2();
        buy_double_3();
        buy_double_4();
        
        farm_row_1_value = 3;
        farm_row_2_value = 9;
        farm_row_3_value = 15;
        farm_row_4_value = 30;
        
        document.getElementById("buy-double-1").innerHTML = 'X3';
        document.getElementById("buy-double-2").innerHTML = 'X3';
        document.getElementById("buy-double-3").innerHTML = 'X3';
        document.getElementById("buy-double-4").innerHTML = 'X3';
        
        document.getElementById("buy-double-1").style.color = 'yellow';
        document.getElementById("buy-double-2").style.color = 'yellow';
        document.getElementById("buy-double-3").style.color = 'yellow';
        document.getElementById("buy-double-4").style.color = 'yellow';
        
        document.getElementById("buy-double-1").disabled = true;
        document.getElementById("buy-double-2").disabled = true;
        document.getElementById("buy-double-3").disabled = true;
        document.getElementById("buy-double-4").disabled = true;
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById('transfer-from-savings-inp').value = '';
             }, 6000)
    } else {
        //alert('INSUFFIECIENT FUNDS!');
        playAudio2();
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "INSUFFICIENT DIAMONDS!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
             }, 2000)
    }
}

document.getElementById('unlock-perk-1').onclick = function() {
    user_fund_balance += 1500;
    playAudio5();
    playAudio6();
    perk_1();
    alert("|Admin|: Perk 1 - Unlocked");
}

document.getElementById('unlock-perk-2').onclick = function() {
    user_diamond_balance += 1;
    playAudio5();
    playAudio6();
    perk_2();
    alert("|Admin|: Perk 2 - Unlocked");
}

document.getElementById('store-btn').onclick = function() {
    document.getElementById("store-panel").style.display = 'flex';
    document.getElementById("number-game-panel").style.display = 'none';
    document.getElementById("close-admin-btn").style.display = 'block';
    playAudio3();
    
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "none";
    }
}

document.getElementById('task-details-btn').onclick = function() {
    alert("Visit the main menu & enter numbers of your choice between 1-10 | Get 2 matches to complete task");
}

document.getElementById('task-details-btn-2').onclick = function() {
    alert("Purchase X3 income upgrades costing $200 to complete task");
}

document.getElementById('task-details-btn-3').onclick = function() {
    alert("Visit the Cash Farms & start collecting the |$1.00| value to reach the task's target!");
}

document.getElementById('task-details-btn-4').onclick = function() {
    alert("Progress your balance to reach the task's $2000 mark!");
}

document.getElementById('task-details-btn-5').onclick = function() {
    alert("Purchase any income upgrades to reach a total of X100!");
}

document.getElementById('task-details-btn-6').onclick = function() {
    alert("Unlock all cash farms that require cash to be purchased (final 2 farms aren't included!)");
}

document.getElementById('claim-task-reward-btn').onclick = function() {
    playAudio();
    updateStats();
    
    user_fund_balance += 250;
    user_tycoon_score += 5;
    document.getElementById('claim-task-reward-btn').innerHTML = "CLAIMED";
    document.getElementById('claim-task-reward-btn').disabled = true;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    document.getElementById("tycoon-score-output").innerHTML = "TYCOON POINTS : " + user_tycoon_score + " PTS";
}

document.getElementById('claim-task-reward-btn-2').onclick = function() {
    playAudio();
    updateStats();
    
    user_fund_balance += 500;
    user_tycoon_score += 5;
    document.getElementById('claim-task-reward-btn-2').innerHTML = "CLAIMED";
    document.getElementById('claim-task-reward-btn-2').disabled = true;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    document.getElementById("tycoon-score-output").innerHTML = "TYCOON POINTS : " + user_tycoon_score + " PTS";
}

document.getElementById('claim-task-reward-btn-3').onclick = function() {
    playAudio();
    updateStats();
    
    user_fund_balance += 250;
    user_tycoon_score += 5;
    user_diamond_balance += 1;
    document.getElementById('claim-task-reward-btn-3').innerHTML = "CLAIMED";
    document.getElementById('claim-task-reward-btn-3').disabled = true;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    document.getElementById("tycoon-score-output").innerHTML = "TYCOON POINTS : " + user_tycoon_score + " PTS";
}

document.getElementById('claim-task-reward-btn-4').onclick = function() {
    playAudio();
    updateStats();
    
    user_fund_balance += 750;
    user_tycoon_score += 10;
    user_diamond_balance += 1;
    document.getElementById('claim-task-reward-btn-4').innerHTML = "CLAIMED";
    document.getElementById('claim-task-reward-btn-4').disabled = true;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    document.getElementById("tycoon-score-output").innerHTML = "TYCOON POINTS : " + user_tycoon_score + " PTS";
}

document.getElementById('claim-task-reward-btn-5').onclick = function() {
    playAudio();
    updateStats();
    
    user_fund_balance += 1500;
    user_tycoon_score += 30;
    user_diamond_balance += 3;
    document.getElementById('claim-task-reward-btn-5').innerHTML = "CLAIMED";
    document.getElementById('claim-task-reward-btn-5').disabled = true;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    document.getElementById("tycoon-score-output").innerHTML = "TYCOON POINTS : " + user_tycoon_score + " PTS";
}

document.getElementById('claim-task-reward-btn-6').onclick = function() {
    playAudio();
    updateStats();
    
    user_fund_balance += 2500;
    user_tycoon_score += 100;
    user_diamond_balance += 3;
    alert('YOU WON A PROMO CODE! | 69144 | ENSURE YOU SAVE IT :)');
    
    document.getElementById('claim-task-reward-btn-6').innerHTML = "CLAIMED";
    document.getElementById('claim-task-reward-btn-6').disabled = true;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    document.getElementById("tycoon-score-output").innerHTML = "TYCOON POINTS : " + user_tycoon_score + " PTS";
}

document.getElementById('tasks-btn').onclick = function() { 
    document.getElementById('tasks-menu').style.display = 'flex';
    document.getElementById('close-admin-btn').style.display = 'block';
    document.getElementById("number-game-panel").style.display = "none";
    document.getElementById('farm-table-settings-btn').style.display = 'block';
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    playAudio3();
    
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "none";
    }
}

document.getElementById('pay-custom-amount').onclick = function() {
    let payment_inp = document.getElementById("custom-payment-inp");
    
    if (payment_inp.value == 0) {
        playAudio2();
        alert('FAILED - INVALID AMOUNT');
    } else if (user_fund_balance < payment_inp.value) {
        playAudio2();
        alert('FAILED - INSUFFICIENT BALANCE');
        document.getElementById("custom-payment-inp").value = '';
    } else if (user_loan_debt == 0) {
        playAudio2();
        alert('FAILED - YOU HAVE NO ACTIVE DEBT');
        document.getElementById("custom-payment-inp").value = '';
    } else if (payment_inp.value > user_loan_debt) {
        alert('FAILED - AMOUNT EXCEEDS WHAT YOU OWE');
        playAudio2();
    } else if (payment_inp.value == user_loan_debt) {
        user_fund_balance -= payment_inp.value;
        user_loan_debt -= payment_inp.value;
        user_loan_interest = 5;
        user_fund_balance -= user_loan_interest;
        playAudio();
        playAudio7();
        showDebt();
        
        alert('SUCCESS - YOU PAID THE DEBT IN FULL!');
        document.getElementById("loan-debt-output").innerHTML = "LOAN DEBT : $" + user_loan_debt;
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
        document.getElementById("custom-payment-inp").value = '';
    
    } else {
        user_fund_balance -= payment_inp.value;
        user_loan_debt -= payment_inp.value;
        user_loan_interest = 5;
        user_fund_balance -= user_loan_interest;
        playAudio();
        playAudio7();
        showDebt();
        
        alert('SUCCESS - THANKS FOR YOUR PAYMENT!');
        document.getElementById("loan-debt-output").innerHTML = "LOAN DEBT : $" + user_loan_debt;
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
        document.getElementById("custom-payment-inp").value = '';
    }
    }


document.getElementById('loan-500').onclick = function() {
    if (user_tycoon_score >= 35) {
        user_fund_balance += 500;
        user_loan_debt += 500;
        user_loan_interest = 125;
        user_loan_debt += user_loan_interest;
        
        alert('# LOAN OF $500.00 ADDED TO YOUR BALANCE! 2 MINUTE WAITING PERIOD BEFORE YOU ARE ABLE TO GET THIS LOAN AGAIN!');
        document.getElementById("loan-500").disabled = true;
        
        setInterval( function() {
            document.getElementById("loan-500").disabled = false;
        }, 120000)
        
        document.getElementById("loan-debt-output").innerHTML = "LOAN DEBT : $" + user_loan_debt;
        document.getElementById("loan-debt-output").style.display = 'block';
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    } else {
        alert('LOAN FAILED - YOUR TYCOON SCORE IS BELOW THE REQUIREMENT FOR THIS OPTION! [REQUIREMENT: 35PTS]');
    }
}

document.getElementById('loan-1000').onclick = function() {
    if (user_tycoon_score >= 80) {
        user_fund_balance += 1000;
        user_loan_debt += 1000;
        user_loan_interest = 250;
        user_loan_debt += user_loan_interest;
        
        alert('# LOAN OF $1,000.00 ADDED TO YOUR BALANCE! 3 MINUTE WAITING PERIOD BEFORE YOU ARE ABLE TO GET THIS LOAN AGAIN!');
        document.getElementById("loan-1000").disabled = true;
        
        setInterval( function() {
            document.getElementById("loan-1000").style.disabled = false;
        }, 180000)
        
        document.getElementById("loan-debt-output").innerHTML = "LOAN DEBT : $" + user_loan_debt;
        document.getElementById("loan-debt-output").style.display = 'block';
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    } else {
        alert('LOAN FAILED - YOUR TYCOON SCORE IS BELOW THE REQUIREMENT FOR THIS OPTION! [REQUIREMENT: 80PTS]');
    }
}

document.getElementById('loan-2500').onclick = function() {
    if (user_tycoon_score >= 150) {
        user_fund_balance += 2500;
        user_loan_debt += 2500;
        user_loan_interest = 650;
        user_loan_debt += user_loan_interest;
        
        alert('# LOAN OF $2,500.00 ADDED TO YOUR BALANCE! 4 MINUTE WAITING PERIOD BEFORE YOU ARE ABLE TO GET THIS LOAN AGAIN!');
        document.getElementById("loan-2500").disabled = true;
        
        setInterval( function() {
            document.getElementById("loan-2500").disabled = false;
        }, 240000)
        
         document.getElementById("loan-debt-output").innerHTML = "LOAN DEBT : $" + user_loan_debt;
        document.getElementById("loan-debt-output").style.display = 'block';
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    } else {
        alert('LOAN FAILED - YOUR TYCOON SCORE IS BELOW THE REQUIREMENT FOR THIS OPTION! [REQUIREMENT: 150PTS]');
    }
}

document.getElementById('income-upgrades-info-btn').onclick = function() {
    document.getElementById("close-income-upgrades-info").style.display = "block";
    document.getElementById('income-upgrades-info-btn').style.display = 'none';
    document.getElementById('shop-menu').style.display = 'none';
    document.getElementById('income-upgrades-info').style.display = 'flex';
    document.getElementById("number-game-panel").style.display = "none";
    document.getElementById('farm-table-settings-btn').style.display = 'none';
    playAudio3();
    
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "none";
    }
}

document.getElementById('close-income-upgrades-info').onclick = function() {
    document.getElementById("close-income-upgrades-info").style.display = "none";
    document.getElementById("income-upgrades-info").style.display = "none";
    document.getElementById("income-upgrades-info-btn").style.display = "block";
    document.getElementById("shop-menu").style.display = "flex";
    document.getElementById('farm-table-settings-btn').style.display = 'block';
}

document.getElementById('loans-btn').onclick = function() {
    document.getElementById('close-admin-btn').style.display = 'block';
    document.getElementById('loans-panel').style.display = 'flex';
    document.getElementById("number-game-panel").style.display = "none";
    document.getElementById('loan-info-btn').style.display = 'flex';
    playAudio3();
    
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "none";
    }
}

document.getElementById("loan-info-btn").onclick = function() {
        document.getElementById("loans-panel").style.display = "none";
        document.getElementById("loan-info-btn").style.display = "none";
        document.getElementById("loan-info-panel").style.display = "flex";
        document.getElementById("close-loan-info").style.display = "block";
        playAudio3();
        }

document.getElementById("close-loan-info").onclick = function() {
        document.getElementById("loans-panel").style.display = "flex";
        document.getElementById("loan-info-btn").style.display = "block";
        document.getElementById("loan-info-panel").style.display = "none";
        document.getElementById("close-loan-info").style.display = "none";
        playAudio3();
        }

document.getElementById("farm-info-btn").onclick = function() {
    document.getElementById("farm-table-info").style.display = "flex";
    document.getElementById("earn-panel").style.display = "none";
    document.getElementById("close-farm-info").style.display = "block";
    document.getElementById("farm-info-btn").style.display = "none";
    document.getElementById('farm-table-settings-panel').style.display = 'none';
    document.getElementById('farm-table-settings-btn').style.display = 'none';
    document.getElementById('collect-ready-farms-btn').style.display = 'none';
    document.getElementById('collect-ready-farms-unlock-placeholder-btn').style.display = 'none';
    playAudio3();
}

document.getElementById("close-farm-info").onclick = function() {
        document.getElementById("farm-table-info").style.display = "none";
        document.getElementById("earn-panel").style.display = "flex";
        document.getElementById("close-farm-info").style.display = "none";
        document.getElementById("farm-info-btn").style.display = "block";
        document.getElementById('farm-table-settings-btn').style.display = 'block';
        document.getElementById('collect-ready-farms-btn').style.display = 'block';
        document.getElementById('collect-ready-farms-unlock-placeholder-btn').style.display = 'block';
        playAudio3();
        }

document.getElementById("darkred-theme").onclick = function() {
    document.getElementById("root").style.backgroundImage = "linear-gradient(darkred, darkred)";
    playAudio3();
    playAudio7();
}

document.getElementById("darkblue-theme").onclick = function() {
    document.getElementById("root").style.backgroundImage = "linear-gradient(darkblue, darkblue)";
    playAudio3();
    playAudio7();
}

document.getElementById("default-theme").onclick = function() {
    document.getElementById("root").style.backgroundImage = "linear-gradient(black, black)";
    playAudio3();
    playAudio7();
}

function disableAudio() {
if (document.getElementById("turn-off-audio").checked == true) {
    document.getElementById("access-granted").muted = true;
    document.getElementById("access-denied").muted = true;
    document.getElementById("button-click").muted = true;
    document.getElementById("small-cash-effect").muted = true;
    document.getElementById("turn-on-audio").checked == false;
    document.getElementById("audio-status-output").innerHTML = "STATUS [OFF]";
    
    alert("AUDIO EFFECTS TURNED OFF!");
    
    document.getElementById("turn-off-audio").style.display = "none";
    document.getElementById("turn-on-audio").style.display = "block";
    document.getElementById("audio-off-label").style.display = "none";
    document.getElementById("audio-on-label").style.display = "block";
}
}

function enableAudio() {
if (document.getElementById("turn-on-audio").checked == true) {
    document.getElementById("access-granted").muted = false;
    document.getElementById("access-denied").muted = false;
    document.getElementById("button-click").muted = false;
    document.getElementById("small-cash-effect").muted = false;
    document.getElementById("turn-off-audio").checked == false;
    playAudio3();
    document.getElementById("audio-status-output").innerHTML = "STATUS [ON]";
    alert("AUDIO EFFECTS TURNED ON!");
    
    document.getElementById("turn-off-audio").style.display = "block";
    document.getElementById("turn-on-audio").style.display = "none";
    document.getElementById("audio-off-label").style.display = "block";
    document.getElementById("audio-on-label").style.display = "none";

}
}

document.getElementById('add-diamond-btn').onclick = function() {
    user_diamond_balance += 1;
    updateStats();
    playAudio5();
}
    
document.getElementById('add-cash-manual-btn').onclick = function() {
    let user_input = parseInt(prompt('Enter an amount:'));
    let amount = user_input.value;
    
    user_fund_balance += user_input;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
}

document.getElementById('add-score-manual-btn').onclick = function() {
    let user_input = parseInt(prompt('Enter an amount:'));
    let amount = user_input.value;
    
    user_tycoon_score += user_input;
    document.getElementById("tycoon-score-output").innerHTML = "TYCOON POINTS : " + user_tycoon_score;
}

document.getElementById("buy-all-upgrades-btn").onclick = function() {
    user_fund_balance += 4050;
    buy_farm();
    buy_farm_2();
    buy_farm_3();
    buy_farm_4();
    buy_farm_5();
    buy_farm_6();
    buy_farm_7();
    buy_farm_8();
    buy_farm_9();
    buy_farm_10();
    playAudio3();
    document.getElementById("total-passive-earnings-output").innerHTML = "TOTAL PASSIVE EARNINGS : $" + passive_earnings_total;
    alert("UNLOCKED ALL UPGRADES!");
}

document.getElementById("clear-balance").onclick = function() {
    user_fund_balance = 0;
    user_savings_balance = 0;
    user_diamond_balance = 0;
    user_tycoon_score = 0;
    user_loan_debt = 0;
    alert("Balances cleared successfully!");
    
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    document.getElementById("savings-output").innerHTML = "SAVINGS : $" + user_savings_balance;
    document.getElementById("loan-debt-output").innerHTML = "LOAN DEBT : $" + user_loan_debt;
    document.getElementById("tycoon-score-output").innerHTML = "TYCOON POINTS : " + user_tycoon_score + " PTS";
    }

document.getElementById('confirm-transfer').onclick = function() {
    if (user_fund_balance < document.getElementById('transfer-to-savings-inp').value) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "INSUFFICIENT FUNDS IN BALANCE!";
        playAudio2();
        //alert('INSUFFICIENT FUNDS IN BALANCE!');
        
        for (let ni = 0; ni < numberInpStorage.length; ni++) {
            numberInpStorage[ni].value = "";
        }

        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById('transfer-to-savings-inp').value = '';
        }, 2000)
    } else if (document.getElementById('transfer-to-savings-inp').value == no_input) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "NO AMOUNT ENTERED!";
        playAudio2();
        //alert('YOU MUST ENTER AN AMOUNT');
        
        for (let ni = 0; ni < numberInpStorage.length; ni++) {
            numberInpStorage[ni].value = "";
        }
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById('transfer-to-savings-inp').value = '';
        }, 2000)
    } else {
        let entered_amount = parseInt(document.getElementById('transfer-to-savings-inp').value);
        user_fund_balance -= document.getElementById('transfer-to-savings-inp').value;
        user_savings_balance += entered_amount;
        document.getElementById('savings-output').innerHTML = 'SAVINGS : $' + user_savings_balance; 
        document.getElementById('balance-output').innerHTML =  "BALANCE: $" + user_fund_balance;
        playAudio();
        playAudio7();
        
        for (let ni = 0; ni < numberInpStorage.length; ni++) {
            numberInpStorage[ni].value = "";
        }
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "TRANSFER COMPLETE!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById('transfer-to-savings-inp').value = '';
        }, 2000)
    }
}

document.getElementById('confirm-transfer-2').onclick = function() {
    if (user_savings_balance < document.getElementById('transfer-from-savings-inp').value) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "INSUFFICIENT FUNDS IN SAVINGS!";
        playAudio2();
        //alert('INSUFFICIENT FUNDS IN SAVINGS!');
        
        for (let ni = 0; ni < numberInpStorage.length; ni++) {
            numberInpStorage[ni].value = "";
        }
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById('transfer-from-savings-inp').value = '';
        }, 2000)
    } else if (document.getElementById('transfer-from-savings-inp').value == no_input) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "NO AMOUNT ENTERED!";
        playAudio2();
        //alert('YOU MUST ENTER AN AMOUNT');
        
        for (let ni = 0; ni < numberInpStorage.length; ni++) {
            numberInpStorage[ni].value = "";
        }
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById('transfer-from-savings-inp').value = '';
        }, 2000)
    } else {
        let entered_amount = parseInt(document.getElementById('transfer-from-savings-inp').value);
        user_fund_balance += entered_amount;
        user_savings_balance -= entered_amount;
        document.getElementById('savings-output').innerHTML = 'SAVINGS : $' + user_savings_balance; 
        document.getElementById('balance-output').innerHTML = '<b>BALANCE</b> : $' + user_fund_balance;
        playAudio();
        playAudio7();
        
        for (let ni = 0; ni < numberInpStorage.length; ni++) {
            numberInpStorage[ni].value = "";
        }
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "TRANSFER COMPLETE!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById('transfer-from-savings-inp').value = '';
        }, 2000)
    }
}

document.getElementById('settings-btn').onclick = function() { 
    document.getElementById('settings-panel').style.display = 'flex';
    document.getElementById('close-admin-btn').style.display = 'block';
    document.getElementById("number-game-panel").style.display = "none";
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    playAudio3();
    
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "none";
    }
}

document.getElementById('close-updates-panel').onclick = function() {
    document.getElementById("close-updates-panel").style.display = "none";
    document.getElementById("updates-panel").style.display = "none";
    document.getElementById("updates-btn").style.display = "block";
    playAudio3();
}

document.getElementById('updates-btn').onclick = function() {
    document.getElementById("updates-btn").style.display = "none";
    document.getElementById('updates-panel').style.display = 'flex';
    document.getElementById('close-admin-btn').style.display = 'block';
    document.getElementById("number-game-panel").style.display = "none";
    document.getElementById("close-updates-panel").style.display = "block";
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    playAudio3();
    
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "none";
    }
}

document.getElementById('savings-btn').onclick = function() { 
    document.getElementById('savings-panel').style.display = 'flex';
    document.getElementById('close-admin-btn').style.display = 'block';
    document.getElementById("number-game-panel").style.display = "none";
    document.getElementById("farm-table-settings-btn").style.display = "block";
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    playAudio3();
    
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "none";
    }
}

let farm_btn = document.getElementById('farm-btn').onclick = function() {
    user_fund_balance += farm_row_1_value;
    total_cash_farm_income_count += 1;
    total_farm_click_count += 1;
    cash_collection_ready = true;
    task_3_user_progress += 1;
    task_4_user_progress += 1;
    task3Checker();
    
    
    document.getElementById('task-3-progress').value += 1;
    document.getElementById('task-4-progress').value += 1;
    document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICKS : " + total_farm_click_count;
    document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
    playAudio6();
    playAudio3();
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
}

let farm_btn_2 = document.getElementById('farm-btn-2').onclick = function() {
    user_fund_balance += farm_row_2_value;
    total_cash_farm_income_count += 3;
    total_farm_click_count += 1;
    cash_row_2_collection_ready = false;
    document.getElementById('task-4-progress').value += 3;
    document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICKS : " + total_farm_click_count;
    document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
    playAudio();
    playAudio3();
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    document.getElementById('farm-btn-2').style.display = 'none';
    document.getElementById('collect-row-2').style.backgroundColor = 'darkred';
    
    setTimeout( function() {
        document.getElementById('cooldown-2').innerHTML = '<h1>3s</h1>';
        setTimeout( function() {
            document.getElementById('cooldown-2').innerHTML = '<h1>2s</h1>';
            setTimeout( function() {
                document.getElementById('cooldown-2').innerHTML = '<h1>1s</h1>';
                setTimeout( function() {
                    document.getElementById('cooldown-2').innerHTML = "<img src='Images/Ready.png' width='95%' height='20px' />";
                    document.getElementById('cooldown-2').style.fontWeight = 'bold';
                    document.getElementById('cooldown-2').style.fontFamily = 'Fantasy, Arial';
                    document.getElementById('farm-btn-2').style.display = 'flex';
                    document.getElementById('collect-row-2').style.backgroundColor = 'darkgreen';
                    cash_row_2_collection_ready = true;
                }, 1000)
            }, 1000)
        }, 1000)
    }, 500)
}

let farm_btn_3 = document.getElementById('farm-btn-3').onclick = function() {
    user_fund_balance += farm_row_3_value;
    total_cash_farm_income_count += 5;
    total_farm_click_count += 1;
    cash_row_3_collection_ready = false;
    task_4_user_progress += 5;
    document.getElementById('task-4-progress').value += 5;
    document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICKS : " + total_farm_click_count;
    document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
    playAudio();
    playAudio3();
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    document.getElementById('farm-btn-3').style.display = 'none';
    document.getElementById('collect-row-3').style.backgroundColor = 'darkred';
    
    setTimeout( function() {
        document.getElementById('cooldown-3').innerHTML = '<h1>5s</h1>';
        setTimeout( function() {
            document.getElementById('cooldown-3').innerHTML = '<h1>4s</h1>';
            setTimeout( function() {
                document.getElementById('cooldown-3').innerHTML = '<h1>3s</h1>';
                setTimeout( function() {
                    document.getElementById('cooldown-3').innerHTML = '<h1>2s</h1>';
                    setTimeout( function() {
                        document.getElementById('cooldown-3').innerHTML = '<h1>1s</h1>';
                        setTimeout( function() {
                            document.getElementById('cooldown-3').innerHTML = '<img src="Images/Ready.png" width="95%" height="20px" />';
                            document.getElementById('cooldown-3').style.fontWeight = 'bold';
                            document.getElementById('cooldown-3').style.fontFamily = 'Fantasy, Arial';
                            document.getElementById('farm-btn-3').style.display = 'flex';
                            document.getElementById('collect-row-3').style.backgroundColor = 'darkgreen';
                            cash_row_3_collection_ready = true;
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}

let farm_btn_4 = document.getElementById('farm-btn-4').onclick = function() {
    user_fund_balance += farm_row_4_value;
    total_cash_farm_income_count += 10;
    total_farm_click_count += 1;
    cash_row_4_collection_ready = false;
    task_4_user_progress += 10;
    document.getElementById('task-4-progress').value += 10;
    document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICKS : " + total_farm_click_count;
    document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
    playAudio();
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    document.getElementById('farm-btn-4').style.display = 'none';
    document.getElementById('collect-row-4').style.backgroundColor = 'darkred';
    
    setTimeout( function() {
        document.getElementById('cooldown-4').innerHTML = '<h1>8s</h1>';
        setTimeout( function() {
            document.getElementById('cooldown-4').innerHTML = '<h1>7s</h1>';
            setTimeout( function() {
                document.getElementById('cooldown-4').innerHTML = '<h1>6s</h1>';
                setTimeout( function() {
                    document.getElementById('cooldown-4').innerHTML = '<h1>5s</h1>';
                    setTimeout( function() {
                        document.getElementById('cooldown-4').innerHTML = '<h1>4s</h1>';
                        setTimeout( function() {
                            document.getElementById('cooldown-4').innerHTML = '<h1>3s</h1>';
                            setTimeout( function() {
                                document.getElementById('cooldown-4').innerHTML = '<h1>2s</h1>';
                                setTimeout( function() {
                                    document.getElementById('cooldown-4').innerHTML = '<h1>1s</h1>';
                                    setTimeout( function() {
                                        document.getElementById('cooldown-4').innerHTML = '<img src="Images/Ready.png" width="95%" height="20px" />';
                                        document.getElementById('cooldown-4').style.fontWeight = 'bold';
                                        document.getElementById('cooldown-4').style.fontFamily = 'Fantasy, Arial';
                                        document.getElementById('farm-btn-4').style.display = 'flex';
                                        document.getElementById('collect-row-4').style.backgroundColor = 'darkgreen';
                                        cash_row_4_collection_ready = true;
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}

let buy_farm_btn_1 = document.getElementById('buy-farm-btn').onclick = function() {
    item_price = 250;
    
    if (user_fund_balance < item_price) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "NOT ENOUGH FUNDS!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
        playAudio2();
    } else if (user_fund_balance >= item_price) {
        user_fund_balance -= item_price;
        task_6_user_progress += 1;
        document.getElementById('task-6-progress').value += 1;
        //document.getElementById('buy-double-1').disabled = false;
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
        playAudio7();
        
        document.getElementById('buy-farm-btn').style.display = 'none';
        document.getElementById('farm-btn-5').style.display = 'flex';
        document.getElementById('cooldown-5').innerHTML = '<img src="Images/Ready.png" width="95%" height="20px" />';
        document.getElementById('price-panel').innerHTML = '■■■';
        document.getElementById('collect-row-5').style.backgroundColor = 'darkgreen';
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "FARM PURCHASED!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
    }
    
    let farm_btn_5 = document.getElementById('farm-btn-5').onclick = function() {
        user_fund_balance += farm_row_5_value;
        user_tycoon_score += 1;
        total_cash_farm_income_count += 20;
        total_farm_click_count += 1;
        task_4_user_progress += 20;
        
        
        document.getElementById('task-4-progress').value += 20;
        document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICKS : " + total_farm_click_count;
        document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
    
        document.getElementById("tycoon-score-output").innerHTML = "TYCOON POINTS : " + user_tycoon_score + " PTS";
        playAudio();
        playAudio3();
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
        document.getElementById('farm-btn-5').style.display = 'none';
        document.getElementById('collect-row-5').style.backgroundColor = 'darkred';
        
        setTimeout( function() {
            document.getElementById('cooldown-5').innerHTML = '<h1>15s</h1>';
            setTimeout( function() {
                document.getElementById('cooldown-5').innerHTML = '<h1>14s</h1>';
                setTimeout( function() {
                    document.getElementById('cooldown-5').innerHTML = '<h1>13s</h1>';
                    setTimeout( function() {
                        document.getElementById('cooldown-5').innerHTML = '<h1>12s</h1>';
                        setTimeout( function() {
                            document.getElementById('cooldown-5').innerHTML = '<h1>11s</h1>';
                            setTimeout( function() {
                                document.getElementById('cooldown-5').innerHTML = '<h1>10s</h1>';
                                setTimeout( function() {
                                    document.getElementById('cooldown-5').innerHTML = '<h1>9s</h1>';
                                    setTimeout( function() {
                                        document.getElementById('cooldown-5').innerHTML = '<h1>8s</h1>';
                                        setTimeout( function() {
                                            document.getElementById('cooldown-5').innerHTML = '<h1>7s</h1>';
                                            setTimeout( function() {
                                                document.getElementById('cooldown-5').innerHTML = '<h1>6s</h1>';
                                                setTimeout( function() {
                                                    document.getElementById('cooldown-5').innerHTML = '<h1>5s</h1>';
                                                    setTimeout( function() {
                                                        document.getElementById('cooldown-5').innerHTML = '<h1>4s</h1>';
                                                        setTimeout( function() {
                                                            document.getElementById('cooldown-5').innerHTML = '<h1>3s</h1>';
                                                            setTimeout( function() {
                                                                document.getElementById('cooldown-5').innerHTML = '<h1>2s</h1>';
                                                                setTimeout( function() {
                                                                    document.getElementById('cooldown-5').innerHTML = '<h1>1s</h1>';
                                                                    setTimeout( function() {
                                                                        document.getElementById('cooldown-5').innerHTML = '<img src="Images/Ready.png" width="95%" height="20px" />';
                                                                        document.getElementById('cooldown-5').style.fontWeight = 'bold';
                                                                        document.getElementById('cooldown-5').style.fontFamily = 'Fantasy, Arial';
                                                                        document.getElementById('farm-btn-5').style.display = 'flex';
                                                                        document.getElementById('collect-row-5').style.backgroundColor = 'darkgreen';
                                                                        cash_row_5_collection_ready = true;
                                                                    }, 500)
                                                                }, 1000)
                                                            }, 1000)
                                                        }, 1000)
                                                    }, 1000)
                                                }, 1000)
                                            }, 1000)
                                        }, 1000)
                                    }, 100)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }
}

let buy_farm_btn_2 = document.getElementById('buy-farm-btn-2').onclick = function() {
    item_price = 500;
    
    if (user_fund_balance < item_price) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "NOT ENOUGH FUNDS!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
        playAudio2();
    } else if (user_fund_balance >= item_price) {
        user_fund_balance -= item_price;
        task_6_user_progress += 1;
        document.getElementById('task-6-progress').value += 1;
        //document.getElementById('buy-double-2').disabled = false;
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
        playAudio7();
        
        document.getElementById('buy-farm-btn-2').style.display = 'none';
        document.getElementById('farm-btn-6').style.display = 'flex';
        document.getElementById('cooldown-6').innerHTML = '<img src="Images/Ready.png" width="95%" height="20px" />';
        document.getElementById('price-panel-2').innerHTML = '■■■';
        document.getElementById('collect-row-6').style.backgroundColor = 'darkgreen';
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "FARM PURCHASED!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
    }
    
    let farm_btn_6 = document.getElementById('farm-btn-6').onclick = function() {
        user_fund_balance += farm_row_6_value;
        user_tycoon_score += 1;
        total_cash_farm_income_count += 35;
        total_farm_click_count += 1;
        task_4_user_progress += 35;
        
        
        document.getElementById('task-4-progress').value += 35;
        document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICKS : " + total_farm_click_count;
        document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
        document.getElementById("tycoon-score-output").innerHTML = "TYCOON POINTS : " + user_tycoon_score + " PTS";
        playAudio();
        playAudio3();
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
        document.getElementById('farm-btn-6').style.display = 'none';
        document.getElementById('collect-row-6').style.backgroundColor = 'darkred';
        
        setTimeout( function() {
            document.getElementById('cooldown-6').innerHTML = '<h1>20s</h1>';
            setTimeout( function() {
                document.getElementById('cooldown-6').innerHTML = '<h1>19s</h1>';
                setTimeout( function() {
                    document.getElementById('cooldown-6').innerHTML = '<h1>18s</h1>';
                    setTimeout( function() {
                        document.getElementById('cooldown-6').innerHTML = '<h1>17s</h1>';
                        setTimeout( function() {
                            document.getElementById('cooldown-6').innerHTML = '<h1>16s</h1>';
                            setTimeout( function() {
                                document.getElementById('cooldown-6').innerHTML = '<h1>15s</h1>';
                                setTimeout( function() {
                                    document.getElementById('cooldown-6').innerHTML = '<h1>14s</h1>';
                                    setTimeout( function() {
                                        document.getElementById('cooldown-6').innerHTML = '<h1>13s</h1>';
                                        setTimeout( function() {
                                            document.getElementById('cooldown-6').innerHTML = '<h1>12s</h1>';
                                            setTimeout( function() {
                                                document.getElementById('cooldown-6').innerHTML = '<h1>11s</h1>';
                                                setTimeout( function() {
                                                    document.getElementById('cooldown-6').innerHTML = '<h1>10s</h1>';
                                                    setTimeout( function() {
                                                        document.getElementById('cooldown-6').innerHTML = '<h1>9s</h1>';
                                                        setTimeout( function() {
                                                            document.getElementById('cooldown-6').innerHTML = '<h1>8s</h1>';
                                                            setTimeout( function() {
                                                                document.getElementById('cooldown-6').innerHTML = '<h1>7s</h1>';
                                                                setTimeout( function() {
                                                                    document.getElementById('cooldown-6').innerHTML = '<h1>6s</h1>';
                                                                    setTimeout( function() {
                                                                        document.getElementById('cooldown-6').innerHTML = '<h1>5s</h1>';
                                                                        setTimeout( function() {
                                                                            document.getElementById('cooldown-6').innerHTML = '<h1>4s</h1>';
                                                                            setTimeout( function() {
                                                                                document.getElementById('cooldown-6').innerHTML = '<h1>3s</h1>';
                                                                                setTimeout( function() {
                                                                                    document.getElementById('cooldown-6').innerHTML = '<h1>2s</h1>';
                                                                                    setTimeout( function() {
                                                                                        document.getElementById('cooldown-6').innerHTML = '<h1>1s</h1>';
                                                                                        setTimeout( function() {
                                                                                            document.getElementById('cooldown-6').innerHTML = '<img src="Images/Ready.png" width="95%" height="20px" />';
                                                                                            document.getElementById('cooldown-6').style.fontWeight = 'bold';
                                                                                            document.getElementById('cooldown-6').style.fontFamily = 'Fantasy, Arial';
                                                                                            document.getElementById('farm-btn-6').style.display = 'flex';
                                                                                            document.getElementById('collect-row-6').style.backgroundColor = 'darkgreen';
                                                                                            cash_row_6_collection_ready = true;
                                                                                        }, 500)
                                                                                    }, 1000)
                                                                                }, 1000)
                                                                            }, 1000)
                                                                        }, 1000)
                                                                    }, 1000)
                                                                }, 1000)
                                                            }, 1000)
                                                        }, 1000)
                                                    }, 1000)
                                                }, 1000)
                                            }, 1000)
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }
}

let buy_farm_btn_3 = document.getElementById('buy-farm-btn-3').onclick = function() {
    item_price = 1000;
    
    if (user_fund_balance < item_price) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "NOT ENOUGH FUNDS!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
        playAudio2();
    } else if (user_fund_balance >= item_price) {
        user_fund_balance -= item_price;
        task_6_user_progress += 1;
        document.getElementById('task-6-progress').value += 1;
        //document.getElementById('buy-double-3').disabled = false;
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
        playAudio7();
        
        document.getElementById('buy-farm-btn-3').style.display = 'none';
        document.getElementById('farm-btn-7').style.display = 'flex';
        document.getElementById('cooldown-7').innerHTML = '<img src="Images/Ready.png" width="95%" height="20px" />';
        document.getElementById('price-panel-3').innerHTML = '■■■';
        document.getElementById('collect-row-7').style.backgroundColor = 'darkgreen';
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "FARM PURCHASED!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
    }
    
    let farm_btn_7 = document.getElementById('farm-btn-7').onclick = function() {
        user_fund_balance += farm_row_7_value;
        user_tycoon_score += 2;
        total_cash_farm_income_count += 50;
        total_farm_click_count += 1;
        task_4_user_progress += 50;
        
        document.getElementById('task-4-progress').value += 50;
        document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICKS : " + total_farm_click_count;
        document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
        document.getElementById("tycoon-score-output").innerHTML = "TYCOON POINTS : " + user_tycoon_score + " PTS";
        playAudio3();
        playAudio();
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
        document.getElementById('farm-btn-7').style.display = 'none';
        document.getElementById('collect-row-7').style.backgroundColor = 'darkred';
        
        setTimeout( function() {
            document.getElementById('cooldown-7').innerHTML = '<h1>30s</h1>';
            setTimeout( function() {
                document.getElementById('cooldown-7').innerHTML = '<h1>29s</h1>';
                setTimeout( function() {
                    document.getElementById('cooldown-7').innerHTML = '<h1>28s</h1>';
                    setTimeout( function() {
                        document.getElementById('cooldown-7').innerHTML = '<h1>27s</h1>';
                        setTimeout( function() {
                            document.getElementById('cooldown-7').innerHTML = '<h1>26s</h1>';
                            setTimeout( function() {
                                document.getElementById('cooldown-7').innerHTML = '<h1>25s</h1>';
                                setTimeout( function() {
                                    document.getElementById('cooldown-7').innerHTML = '<h1>24s</h1>';
                                    setTimeout( function() {1
                                        document.getElementById('cooldown-7').innerHTML = '<h1>23s</h1>';
                                        setTimeout( function() {
                                            document.getElementById('cooldown-7').innerHTML = '<h1>22s</h1>';
                                            setTimeout( function() {
                                                document.getElementById('cooldown-7').innerHTML = '<h1>21s</h1>';
                                                setTimeout( function() {
                                                    document.getElementById('cooldown-7').innerHTML = '<h1>20s</h1>';
                                                    setTimeout( function() {
                                                        document.getElementById('cooldown-7').innerHTML = '<h1>19s</h1>';
                                                        setTimeout( function() {
                                                            document.getElementById('cooldown-7').innerHTML = '<h1>18s</h1>';
                                                            setTimeout( function() {
                                                                document.getElementById('cooldown-7').innerHTML = '<h1>17s</h1>';
                                                                setTimeout( function() {
                                                                    document.getElementById('cooldown-7').innerHTML = '<h1>16s</h1>';
                                                                    setTimeout( function() {
                                                                        document.getElementById('cooldown-7').innerHTML = '<h1>15s</h1>';
                                                                        setTimeout( function() {
                                                                            document.getElementById('cooldown-7').innerHTML = '<h1>14s</h1>';
                                                                            setTimeout( function() {
                                                                                document.getElementById('cooldown-7').innerHTML = '<h1>13s</h1>';
                                                                                setTimeout( function() {
                                                                                    document.getElementById('cooldown-7').innerHTML = '<h1>12s</h1>';
                                                                                    setTimeout( function() {
                                                                                        document.getElementById('cooldown-7').innerHTML = '<h1>11s</h1>';
                                                                                        setTimeout( function() {
                                                                                            document.getElementById('cooldown-7').innerHTML = '<h1>10s</h1>';
                                                                                            setTimeout( function() {
                                                                                                document.getElementById('cooldown-7').innerHTML = '<h1>9s</h1>';
                                                                                                setTimeout( function() {
                                                                                                    document.getElementById('cooldown-7').innerHTML = '<h1>8s</h1>';
                                                                                                    setTimeout( function() {
                                                                                                        document.getElementById('cooldown-7').innerHTML = '<h1>7s</h1>';
                                                                                                        setTimeout( function() {
                                                                                                            document.getElementById('cooldown-7').innerHTML = '<h1>6s</h1>';
                                                                                                            setTimeout( function() {
                                                                                                                document.getElementById('cooldown-7').innerHTML = '<h1>5s</h1>';
                                                                                                                setTimeout( function() {
                                                                                                                    document.getElementById('cooldown-7').innerHTML = '<h1>4s</h1>';
                                                                                                                    setTimeout( function() {
                                                                                                                        document.getElementById('cooldown-7').innerHTML = '<h1>3s</h1>';
                                                                                                                        setTimeout( function() {
                                                                                                                            document.getElementById('cooldown-7').innerHTML = '<h1>2s</h1>';
                                                                                                                            setTimeout( function() {
                                                                                                                                document.getElementById('cooldown-7').innerHTML = '<h1>1s</h1>';
                                                                                                                                setTimeout( function() {
                                                                                                                                    document.getElementById('cooldown-7').innerHTML = '<img src="Images/Ready.png" width="95%" height="20px" />';
                                                                                                                                    document.getElementById('cooldown-7').style.fontWeight = 'bold';
                                                                                                                                    document.getElementById('cooldown-7').style.fontFamily = 'Fantasy, Arial';
                                                                                                                                    document.getElementById('farm-btn-7').style.display = 'flex';
                                                                                                                                    document.getElementById('collect-row-7').style.backgroundColor = 'darkgreen';
                                                                                                                                    cash_row_7_collection_ready = true;
                                                                                                                                    
                                                                                                                                }, 500)
                                                                                                                            }, 1000)
                                                                                                                        }, 1000)
                                                                                                                    }, 1000)
                                                                                                                }, 1000)
                                                                                                            }, 1000)
                                                                                                        }, 1000)
                                                                                                    }, 1000)
                                                                                                }, 1000)
                                                                                            }, 1000)
                                                                                        }, 1000)
                                                                                    }, 1000)
                                                                                }, 1000)
                                                                            }, 1000)
                                                                        }, 1000)
                                                                    }, 1000)
                                                                }, 1000)
                                                            }, 1000)
                                                        }, 1000)
                                                    }, 1000)
                                                }, 1000)
                                            }, 1000)
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }
}

let farm_btn_8 = document.getElementById('farm-btn-8').onclick = function() {
        user_fund_balance += farm_row_10_value;
        total_cash_farm_income_count += 10;
        total_farm_click_count += 1;
        task_4_user_progress += 10;
        document.getElementById('task-4-progress').value += 10;
        document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICKS : " + total_farm_click_count;
        document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
        playAudio();
        playAudio3();
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
        //document.getElementById('farm-btn-7').style.display = 'none';
}

let buy_farm_btn_4 = document.getElementById('buy-farm-btn-4').onclick = function() {
    item_price = 3000;
    
    if (user_fund_balance < item_price) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "NOT ENOUGH FUNDS!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
        playAudio2();
    } else if (user_fund_balance >= item_price) {
        user_fund_balance -= item_price;
        task_6_user_progress += 1;
        document.getElementById('task-6-progress').value += 1;
        //document.getElementById('buy-double-4').disabled = false;
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
        playAudio7();
        
        document.getElementById('buy-farm-btn-4').style.display = 'none';
        document.getElementById('farm-btn-8').style.display = 'flex';
        document.getElementById('cooldown-8').innerHTML = '<img src="Images/Ready.png" width="95%" height="20px" />';
        document.getElementById('price-panel-4').innerHTML = '■■■';
        document.getElementById('collect-row-10').style.backgroundColor = 'darkgreen';
    
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "FARM PURCHASED!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
    }
}

let farm_btn_9 = document.getElementById('farm-btn-9').onclick = function() {
        user_fund_balance += farm_row_11_value;
        total_cash_farm_income_count += 20;
        total_farm_click_count += 1;
        task_4_user_progress += 20;
        document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICKS : " + total_farm_click_count;
        document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
        playAudio();
        playAudio3();
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
}

let buy_farm_btn_5 = document.getElementById('buy-farm-btn-5').onclick = function() {
    item_price = 5000;
    
    if (user_fund_balance < item_price) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "NOT ENOUGH FUNDS!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
        playAudio2();
    } else if (user_fund_balance >= item_price) {
        user_fund_balance -= item_price;
        task_6_user_progress += 1;
        document.getElementById('task-6-progress').value += 1;
        //document.getElementById('buy-double-5').disabled = false;
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
        playAudio7();
        
        document.getElementById('buy-farm-btn-5').style.display = 'none';
        document.getElementById('farm-btn-9').style.display = 'flex';
        document.getElementById('cooldown-9').innerHTML = '<img src="Images/Ready.png" width="95%" height="20px" />';
        document.getElementById('price-panel-5').innerHTML = '■■■';
        document.getElementById('collect-row-11').style.backgroundColor = 'darkgreen';
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "FARM PURCHASED!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
    }
}

let farm_btn_10 = document.getElementById('farm-btn-10').onclick = function() {
        cash_row_8_collection_ready = false;
        task_4_user_progress += 5;
    
        setTimeout( function() {
            cash_row_8_collection_ready = true;
        }, 2000)
    
        document.getElementById('task-4-progress').value += 5;
        document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICKS : " + total_farm_click_count;
        document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
        playAudio();
        playAudio3();
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
}

let buy_farm_btn_6 = document.getElementById('buy-farm-btn-6').onclick = function() {
    item_price = 1750;
    
    if (user_fund_balance < item_price) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "NOT ENOUGH FUNDS!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
        playAudio2();
    } else if (user_fund_balance >= item_price) {
        user_fund_balance -= item_price;
        task_6_user_progress += 1;
        document.getElementById('task-6-progress').value += 1;
        //document.getElementById('buy-double-6').disabled = false;
        playAudio7();
        
        
        setInterval( function() {
            user_fund_balance += farm_row_8_value;
            total_cash_farm_income_count += 5;
            total_farm_click_count += 1;
        }, 2000)
        
        setInterval( function() {
            checkReadyStatus2();
            document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
        }, 3000)
        
        document.getElementById('auto-pic-1').style.display = 'none';
        document.getElementById('buy-farm-btn-6').style.display = 'none';
        document.getElementById('farm-btn-10').style.display = 'flex';
        document.getElementById('cooldown-10').innerHTML = '<img src="Images/Ready.png" width="95%" height="20px" />';
        document.getElementById('price-panel-6').innerHTML = '■■■';
        document.getElementById("farm-btn-10").disabled = true;
        document.getElementById('collect-row-8').style.backgroundColor = 'darkgreen';
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "FARM PURCHASED!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
    }
}

let farm_btn_11 = document.getElementById('farm-btn-11').onclick = function() {
        cash_row_9_collection_ready = false;
        task_4_user_progress += 10;
    
        setTimeout( function() {
            cash_row_9_collection_ready = true;
        }, 2000)
    
        document.getElementById('task-4-progress').value += 10;
        document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICKS : " + total_farm_click_count;
        document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
        playAudio();
        playAudio3();
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
}

let buy_farm_btn_7 = document.getElementById('buy-farm-btn-7').onclick = function() {
    item_price = 2500;
    
    if (user_fund_balance < item_price) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "NOT ENOUGH FUNDS!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
        playAudio2();
    } else if (user_fund_balance >= item_price) {
        user_fund_balance -= item_price;
        task_6_user_progress += 1;
        cash_row_9_collection_ready = true;
        document.getElementById('task-6-progress').value += 1;
        //document.getElementById('buy-double-7').disabled = false;
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
        document.getElementById('collect-row-9').style.backgroundColor = 'darkgreen';
        playAudio7();
        
        setInterval( function() {
            user_fund_balance += farm_row_9_value;
            total_cash_farm_income_count += 10;
            total_farm_click_count += 1;
        }, 4000)
        
        
        setInterval( function() {
            checkReadyStatus2();
        }, 5000)
        
        document.getElementById('auto-pic-2').style.display = 'none';
        document.getElementById('buy-farm-btn-7').style.display = 'none';
        document.getElementById('farm-btn-11').style.display = 'flex';
        document.getElementById('cooldown-11').innerHTML = '<img src="Images/Ready.png" width="95%" height="20px" />';
        document.getElementById('price-panel-7').innerHTML = '■■■';
        document.getElementById("farm-btn-11").disabled = true;
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "FARM PURCHASED!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
    }
}    

let buy_farm_btn_8 = document.getElementById('buy-farm-btn-8').onclick = function() {
    item_price = 1;
    
    if (user_diamond_balance < item_price) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "MISSING DIAMOND!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
        playAudio2();
    } else if (user_diamond_balance >= item_price) {
        user_diamond_balance -= item_price;
        //document.getElementById('buy-double-8').disabled = false;
       playAudio7();
        
        setInterval( function() {
            user_tycoon_score += farm_row_12_value;
            total_farm_click_count += 1;
            playAudio();
        }, 30000)
        
        document.getElementById('buy-farm-btn-8').style.display = 'none';
        document.getElementById('farm-btn-12').style.display = 'flex';
        document.getElementById('cooldown-12').innerHTML = '<img src="Images/Ready.png" width="95%" height="20px" />';
        document.getElementById('price-panel-8').innerHTML = '■■■';
        document.getElementById("farm-btn-12").disabled = true;
        document.getElementById('collect-row-12').style.backgroundColor = 'darkgreen';
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "FARM PURCHASED!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
    }
}

let farm_btn_12 = document.getElementById('farm-btn-12').onclick = function() {
        total_farm_click_count += 1;
        
    
        document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICKS : " + total_farm_click_count;
        document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
}

let buy_farm_btn_9 = document.getElementById('buy-farm-btn-9').onclick = function() {
    item_price = 5;
    
    if (user_diamond_balance < item_price) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "MISSING DIAMONDS!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
        playAudio2();
        
    } else if (user_diamond_balance >= item_price) {
        user_diamond_balance -= item_price;
        //document.getElementById('buy-double-9').disabled = false;
       playAudio();
        
        setInterval( function() {
            user_fund_balance += farm_row_13_value;
            total_farm_click_count += 1;
            total_cash_farm_income_count += 200;
            task_4_user_progress += 200;
            playAudio3();
            document.getElementById('task-4-progress').value += 250;
            playAudio();
        }, 30000)
        
        document.getElementById('buy-farm-btn-9').style.display = 'none';
        document.getElementById('farm-btn-13').style.display = 'flex';
        document.getElementById('cooldown-13').innerHTML = '<img src="Images/Ready.png" width="95%" height="20px" />';
        document.getElementById('price-panel-9').innerHTML = '■■■';
        document.getElementById("farm-btn-13").disabled = true;
        document.getElementById('collect-row-13').style.backgroundColor = 'darkgreen';
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "FARM PURCHASED!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
    }
}

function checkReadyStatus() {
        if (cash_collection_ready = true) {
            farm_btn();
        } 
        if (cash_row_2_collection_ready == true) {
            farm_btn_2();
        }
        if (cash_row_3_collection_ready == true) {
            farm_btn_3();
        }
        if (cash_row_4_collection_ready == true) {
            farm_btn_4();
        }
    }



let default_reward = setInterval( function() {
    let timed_grant = user_savings_balance += 15;
    
    playAudio();
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    document.getElementById("savings-output").innerHTML = "SAVINGS : $" + user_savings_balance;
    document.getElementById("earning-granted-output").style.display = 'block';
    document.getElementById("earning-granted-output").innerHTML = 'RECEIVED +$20';
    
    setTimeout( function() {
        document.getElementById("earning-granted-output").style.display = 'none';
        document.getElementById("earning-granted-output").innerHTML = '';
    }, 1000)
    
    
    console.log(user_fund_balance);
}, 30000)

document.getElementById('earn-btn').onclick = function() {
    document.getElementById('close-admin-btn').style.display = 'block';
    document.getElementById('collect-ready-farms-btn').style.display = 'block';
    document.getElementById('farm-info-btn').style.display = 'block';
    document.getElementById('farm-table-settings-btn').style.display = 'block';
    document.getElementById('earn-panel').style.display = 'flex';
    document.getElementById("number-game-panel").style.display = "none";
    playAudio3();
    //alert("Welcome to the Cash Farms! The initial 4 rows are on free to collect every specified interval :) Simply tap / click the cash amounts to cash them into your main balance & earn over time to purchase better farms!!");
    
    
    
    if (perk_2_purchase_status == true) {
        document.getElementById("collect-ready-farms-btn").style.display = "block";
    }
    
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "none";
    }
}

document.getElementById("admin-btn").onclick = function() {
    let admin_pin = 7845;
    let user_response = parseInt(prompt('ENTER ADMIN PIN'));
    
    if (user_response != admin_pin) {
        console.log('Incorrect admin pin');
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "INCORRECT PIN!";
        playAudio2();
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
    } else {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "ACCESS GRANTED!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
        
        document.getElementById("admin-menu").style.display = "flex";
        document.getElementById("close-admin-btn").style.display = "block";
        document.getElementById("number-game-panel").style.display = "none";
    playAudio3();
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "none";
    }
        
        
    }
}

document.getElementById("add-funds-btn").onclick = function() {
    user_fund_balance += 100;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    
    document.getElementById("earning-granted-output").style.display = 'block';
    document.getElementById("earning-granted-output").innerHTML = 'RECEIVED +$100';
    
    setTimeout( function() {
        document.getElementById("earning-granted-output").style.display = 'none';
    }, 1000)
    
    playAudio();
}

document.getElementById("add-funds-btn-2").onclick = function() {
    user_fund_balance += 500;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    
    document.getElementById("earning-granted-output").style.display = 'block';
    document.getElementById("earning-granted-output").innerHTML = 'RECEIVED +$500';
    
    setTimeout( function() {
        document.getElementById("earning-granted-output").style.display = 'none';
    }, 1000)
    
    playAudio();
}

document.getElementById("add-funds-btn-3").onclick = function() {
    user_fund_balance += 2500;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    
    document.getElementById("earning-granted-output").style.display = 'block';
    document.getElementById("earning-granted-output").innerHTML = 'RECEIVED +$2,500';
    
    setTimeout( function() {
        document.getElementById("earning-granted-output").style.display = 'none';
    }, 1000)
    
    playAudio();
}


document.getElementById("close-admin-btn").onclick = function() {
    document.getElementById("admin-menu").style.display = "none";
    document.getElementById("close-admin-btn").style.display = "none";
    document.getElementById('earn-panel').style.display = 'none';
    document.getElementById('savings-panel').style.display = 'none';
    document.getElementById("number-game-panel").style.display = "flex";
    document.getElementById('updates-panel').style.display = 'none';
    document.getElementById('settings-panel').style.display = 'none';
    document.getElementById('farm-info-btn').style.display = 'none';
    document.getElementById("close-farm-info").style.display = "none";
    document.getElementById("farm-table-info").style.display = "none";
    document.getElementById("loans-panel").style.display = "none";
    document.getElementById("loan-info-panel").style.display = "none";
    document.getElementById("close-loan-info").style.display = "none";
    document.getElementById('loan-info-btn').style.display = 'none';
    document.getElementById("close-updates-panel").style.display = "none";
    document.getElementById("updates-btn").style.display = "block";
    document.getElementById("tasks-menu").style.display = "none";
    document.getElementById("store-panel").style.display = 'none';
    document.getElementById('farm-table-settings-btn').style.display = 'none';
    document.getElementById('farm-table-settings-panel').style.display = 'none';
    document.getElementById("timed-cash-rewards-panel").style.display = "none";
    document.getElementById("collect-ready-farms-btn").style.display = "none";
    document.getElementById("stats-panel").style.display = 'none';
    
    payment_inp = '';
    playAudio3();
    
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "block";
    }
    
     for (let z = 0; z < loanOptionStorage.length; z++) {
        loanOptionStorage[z].style.display = 'flex';
    }
}

let buy_farm = document.getElementById("buy-btn").onclick = function() { // INCOME FARMS
    item_price = 100;
    
    if (user_fund_balance < item_price) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "NOT ENOUGH FUNDS!";
        //document.getElementById("shop-menu").style.display = "none";
        
        document.getElementById("container").style.backgroundColor = "red";
        
        setTimeout( function() {
            document.getElementById("container").style.backgroundColor = "transparent";
        }, 500)
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById("shop-menu").style.display = "flex";
            }, 2000)
        playAudio2();
    } else if (user_fund_balance >= item_price) {
        user_fund_balance -= item_price;
        user_tycoon_score += 1;
        total_income_upgrades_count += 1;
        task_5_user_progress += 1;
        document.getElementById("container").style.backgroundColor = "green";
        
        setTimeout( function() {
            document.getElementById("container").style.backgroundColor = "transparent";
        }, 500)
        document.getElementById('task-5-progress').value += 1;
        document.getElementById("owned-upgrades-output").innerHTML = "OWNED UPGRADES : " + total_income_upgrades_count;
        document.getElementById("tycoon-score-output").innerHTML = "TYCOON POINTS : " + user_tycoon_score + " PTS";
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
        playAudio();
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "PURCHASE SUCCESSFUL!";
        //document.getElementById("shop-menu").style.display = "none";
        
        passive_earnings_total += 5;
        document.getElementById("total-passive-earnings-output").innerHTML = "TOTAL PASSIVE EARNINGS : $" + passive_earnings_total;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
setInterval( function() {
    user_fund_balance += 5;
    task_4_user_progress += 5;
    playAudio();
     document.getElementById('task-4-progress').value += 5;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    console.log(user_fund_balance);
}, 15000)
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById("shop-menu").style.display = "flex";
            }, 3000)
    } 
}

let buy_farm_2 = document.getElementById("buy-btn-2").onclick = function() {
    item_price = 200;
    
    if (user_fund_balance < item_price) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "NOT ENOUGH FUNDS!";
        //document.getElementById("shop-menu").style.display = "none";
        
        document.getElementById("container").style.backgroundColor = "red";
        
        setTimeout( function() {
            document.getElementById("container").style.backgroundColor = "transparent";
        }, 500)
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById("shop-menu").style.display = "flex";
            }, 2000)
        playAudio2();
    } else if (user_fund_balance >= item_price) {
        user_fund_balance -= item_price;
        user_tycoon_score += 1;
        task_2_user_progress += 1;
        total_income_upgrades_count += 1;
        task_5_user_progress += 1;
        
        document.getElementById("container").style.backgroundColor = "green";
        
        setTimeout( function() {
            document.getElementById("container").style.backgroundColor = "transparent";
        }, 500)
        
        document.getElementById('task-5-progress').value += 1;
        document.getElementById('task-2-progress').value += 1;
        task2Checker();
        document.getElementById("owned-upgrades-output").innerHTML = "OWNED UPGRADES : " + total_income_upgrades_count;
        document.getElementById("tycoon-score-output").innerHTML = "TYCOON POINTS : " + user_tycoon_score + " PTS";
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
        playAudio();
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "PURCHASE SUCCESSFUL!";
        //document.getElementById("shop-menu").style.display = "none";
        passive_earnings_total += 10;
        document.getElementById("total-passive-earnings-output").innerHTML = "TOTAL PASSIVE EARNINGS : $" + passive_earnings_total;
      document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
setInterval( function() {
    user_fund_balance += 10;
    task_4_user_progress += 10;
    playAudio();
     document.getElementById('task-4-progress').value += 10;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    console.log(user_fund_balance);
}, 20000)
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById("shop-menu").style.display = "flex";
            }, 3000)
    } 
}

let buy_farm_3 = document.getElementById("buy-btn-3").onclick = function() {
    item_price = 500;
    
    if (user_fund_balance < item_price) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "NOT ENOUGH FUNDS!";
        
        document.getElementById("container").style.backgroundColor = "red";
        
        setTimeout( function() {
            document.getElementById("container").style.backgroundColor = "transparent";
        }, 500)
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
             }, 2000)
        playAudio2();
    } else if (user_fund_balance >= item_price) {
        user_fund_balance -= item_price;
        user_tycoon_score += 3;
        task_5_user_progress += 1;
        total_income_upgrades_count += 1;
        
        document.getElementById("container").style.backgroundColor = "green";
        
        setTimeout( function() {
            document.getElementById("container").style.backgroundColor = "transparent";
        }, 500)
        
        document.getElementById('task-5-progress').value += 1;
        document.getElementById("owned-upgrades-output").innerHTML = "OWNED UPGRADES : " + total_income_upgrades_count;
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
        playAudio();
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "PURCHASE SUCCESSFUL!";
        //document.getElementById("shop-menu").style.display = "none";
        
        passive_earnings_total += 15;
        document.getElementById("total-passive-earnings-output").innerHTML = "TOTAL PASSIVE EARNINGS : $" + passive_earnings_total;
        document.getElementById("tycoon-score-output").innerHTML = "TYCOON POINTS : " + user_tycoon_score + " PTS";
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
setInterval( function() {
    user_fund_balance += 15;
    task_4_user_progress += 15;
    playAudio();
     document.getElementById('task-4-progress').value += 15;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    console.log(user_fund_balance);
}, 20000)
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById("shop-menu").style.display = "flex";
             }, 3000)
    } 
}

let buy_farm_4 = document.getElementById("buy-btn-4").onclick = function() {
    item_price = 750;
    
    if (user_fund_balance < item_price) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "NOT ENOUGH FUNDS!";
        
        document.getElementById("container").style.backgroundColor = "red";
        
        setTimeout( function() {
            document.getElementById("container").style.backgroundColor = "transparent";
        }, 500)
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            }, 2000)
        playAudio2();
    } else if (user_fund_balance >= item_price) {
        user_fund_balance -= item_price;
        user_tycoon_score += 5;
        total_income_upgrades_count += 1;
        task_5_user_progress += 1;
        
        document.getElementById("container").style.backgroundColor = "green";
        
        setTimeout( function() {
            document.getElementById("container").style.backgroundColor = "transparent";
        }, 500).
        
        document.getElementById('task-5-progress').value += 1;
        document.getElementById("owned-upgrades-output").innerHTML = "OWNED UPGRADES : " + total_income_upgrades_count;
        document.getElementById("tycoon-score-output").innerHTML = "TYCOON POINTS : " + user_tycoon_score + " PTS";
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
        playAudio();
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "PURCHASE SUCCESSFUL!";
        //document.getElementById("shop-menu").style.display = "none";
        
        passive_earnings_total += 20;
        document.getElementById("total-passive-earnings-output").innerHTML = "TOTAL PASSIVE EARNINGS : $" + passive_earnings_total;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
setInterval( function() {
    user_fund_balance += 20;
    task_4_user_progress += 20;
    playAudio();
     document.getElementById('task-4-progress').value += 20;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    console.log(user_fund_balance);
}, 20000)
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById("shop-menu").style.display = "flex";
             }, 3000)
    } 
}

let buy_farm_5 = document.getElementById("buy-btn-5").onclick = function() {
    item_price = 1000;
    
    if (user_fund_balance < item_price) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "NOT ENOUGH FUNDS!";
        
        document.getElementById("container").style.backgroundColor = "red";
        
        setTimeout( function() {
            document.getElementById("container").style.backgroundColor = "transparent";
        }, 500)
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            }, 2000)
        playAudio2();
    } else if (user_fund_balance >= item_price) {
        user_fund_balance -= item_price;
        user_tycoon_score += 6;
        total_income_upgrades_count += 1
        task_5_user_progress += 1;
        
        document.getElementById("container").style.backgroundColor = "green";
        
        setTimeout( function() {
            document.getElementById("container").style.backgroundColor = "transparent";
        }, 500)
        
        document.getElementById('task-5-progress').value += 1;
        document.getElementById("owned-upgrades-output").innerHTML = "OWNED UPGRADES : " + total_income_upgrades_count;
        document.getElementById("tycoon-score-output").innerHTML = "TYCOON POINTS : " + user_tycoon_score + " PTS";
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
        playAudio();
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "PURCHASE SUCCESSFUL!";
        //document.getElementById("shop-menu").style.display = "none";
        
        passive_earnings_total += 30;
        document.getElementById("total-passive-earnings-output").innerHTML = "TOTAL PASSIVE EARNINGS : $" + passive_earnings_total;
     document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
setInterval( function() {
    user_fund_balance += 30;
    task_4_user_progress += 30;
    playAudio();
     document.getElementById('task-4-progress').value += 30;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    console.log(user_fund_balance);
}, 25000)
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById("shop-menu").style.display = "flex";
             }, 3000)
    } 
}

let buy_farm_6 = document.getElementById("buy-btn-6").onclick = function() {
    item_price = 1500;
    
    if (user_fund_balance < item_price) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "NOT ENOUGH FUNDS!";
        
        document.getElementById("container").style.backgroundColor = "red";
        
        setTimeout( function() {
            document.getElementById("container").style.backgroundColor = "transparent";
        }, 500)
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById("shop-menu").style.display = "flex";
            }, 2000)
        playAudio2();
    } else if (user_fund_balance >= item_price) {
        user_fund_balance -= item_price;
        user_tycoon_score += 6;
        task_5_user_progress += 1;
        total_income_upgrades_count += 1;
        
        document.getElementById("container").style.backgroundColor = "green";
        
        setTimeout( function() {
            document.getElementById("container").style.backgroundColor = "transparent";
        }, 500)
        
        document.getElementById('task-5-progress').value += 1;
        document.getElementById("owned-upgrades-output").innerHTML = "OWNED UPGRADES : " + total_income_upgrades_count;
        document.getElementById("tycoon-score-output").innerHTML = "TYCOON POINTS : " + user_tycoon_score + " PTS";
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
        playAudio();
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "PURCHASE SUCCESSFUL!";
        //document.getElementById("shop-menu").style.display = "none";
        
        passive_earnings_total += 50;
        document.getElementById("total-passive-earnings-output").innerHTML = "TOTAL PASSIVE EARNINGS : $" + passive_earnings_total;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
setInterval( function() {
    user_fund_balance += 50;
    task_4_user_progress += 50;
    playAudio();
     document.getElementById('task-4-progress').value += 50;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    console.log(user_fund_balance);
}, 25000)
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById("shop-menu").style.display = "flex";
            }, 3000)
    } 
}

let buy_farm_7 = document.getElementById("buy-btn-7").onclick = function() {
    item_price = 2500;
    
    if (user_fund_balance < item_price) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "NOT ENOUGH FUNDS!";
        
        document.getElementById("container").style.backgroundColor = "red";
        
        setTimeout( function() {
            document.getElementById("container").style.backgroundColor = "transparent";
        }, 500)
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById("shop-menu").style.display = "flex";
            }, 2000)
        playAudio2();
    } else if (user_fund_balance >= item_price) {
        user_fund_balance -= item_price;
        user_tycoon_score += 5;
        total_income_upgrades_count += 1;
        task_5_user_progress += 1;
        
        document.getElementById("container").style.backgroundColor = "green";
        
        setTimeout( function() {
            document.getElementById("container").style.backgroundColor = "transparent";
        }, 500)
        
        document.getElementById('task-5-progress').value += 1;
        document.getElementById("owned-upgrades-output").innerHTML = "OWNED UPGRADES : " + total_income_upgrades_count;
        document.getElementById("tycoon-score-output").innerHTML = "TYCOON POINTS : " + user_tycoon_score + " PTS";
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
        playAudio();
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "PURCHASE SUCCESSFUL!";
        //document.getElementById("shop-menu").style.display = "none";
        
        passive_earnings_total += 125;
        document.getElementById("total-passive-earnings-output").innerHTML = "TOTAL PASSIVE EARNINGS : $" + passive_earnings_total;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
setInterval( function() {
    user_fund_balance += 125;
    task_4_user_progress += 125;
    playAudio();
     document.getElementById('task-4-progress').value += 125;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    console.log(user_fund_balance);
}, 40000)
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById("shop-menu").style.display = "flex";
            }, 3000)
    } 
}

let buy_farm_8 = document.getElementById("buy-btn-8").onclick = function() {
    item_price = 3500;
    
    if (user_fund_balance < item_price) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "NOT ENOUGH FUNDS!";
        
        document.getElementById("container").style.backgroundColor = "red";
        
        setTimeout( function() {
            document.getElementById("container").style.backgroundColor = "transparent";
        }, 500)
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById("shop-menu").style.display = "flex";
            }, 2000)
        playAudio2();
    } else if (user_fund_balance >= item_price) {
        user_fund_balance -= item_price;
        user_tycoon_score += 10;
        total_income_upgrades_count += 1;
        task_5_user_progress += 1;
        
        document.getElementById("container").style.backgroundColor = "green";
        
        setTimeout( function() {
            document.getElementById("container").style.backgroundColor = "transparent";
        }, 500)
        
        document.getElementById('task-5-progress').value += 1;
        document.getElementById("owned-upgrades-output").innerHTML = "OWNED UPGRADES : " + total_income_upgrades_count;
        document.getElementById("tycoon-score-output").innerHTML = "TYCOON POINTS : " + user_tycoon_score + " PTS";
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
        playAudio();
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "PURCHASE SUCCESSFUL!";
        //document.getElementById("shop-menu").style.display = "none";
        
        passive_earnings_total += 200;
        document.getElementById("total-passive-earnings-output").innerHTML = "TOTAL PASSIVE EARNINGS : $" + passive_earnings_total;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
setInterval( function() {
    user_fund_balance += 200;
    task_4_user_progress += 200;
    playAudio();
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    console.log(user_fund_balance);
}, 60000)
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById("shop-menu").style.display = "flex";
            }, 3000)
    } 
}

let buy_farm_9 = document.getElementById("buy-btn-9").onclick = function() {
    item_price = 15;
    
    if (user_tycoon_score < item_price) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "NOT ENOUGH POINTS!";
        
        document.getElementById("container").style.backgroundColor = "red";
        
        setTimeout( function() {
            document.getElementById("container").style.backgroundColor = "transparent";
        }, 500)
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById("shop-menu").style.display = "flex";
            }, 2000)
        playAudio2();
    } else if (user_tycoon_score >= item_price) {
        user_tycoon_score -= item_price;
        setTimeout( function() {
            user_tycoon_score += 1;
        }, 1000)
        total_income_upgrades_count += 1;
        task_5_user_progress += 1;
        
        document.getElementById("container").style.backgroundColor = "green";
        
        setTimeout( function() {
            document.getElementById("container").style.backgroundColor = "transparent";
        }, 500)
        
        document.getElementById('task-5-progress').value += 1;
        document.getElementById("owned-upgrades-output").innerHTML = "OWNED UPGRADES : " + total_income_upgrades_count;
        document.getElementById("tycoon-score-output").innerHTML = "TYCOON POINTS : " + user_tycoon_score + " PTS";
        document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
        playAudio();
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "PURCHASE SUCCESSFUL!";
        //document.getElementById("shop-menu").style.display = "none";
        
        passive_earnings_total += 1;
        document.getElementById("total-passive-earnings-output").innerHTML = "TOTAL PASSIVE EARNINGS : $" + passive_earnings_total;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
setInterval( function() {
    user_fund_balance += 1;
    task_4_user_progress += 1;
    
    playAudio6();
    updateStats();
     document.getElementById('task-4-progress').value += 1;
    document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
    console.log(user_fund_balance);
}, 1000)
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById("shop-menu").style.display = "flex";
            }, 3000)
    } 
}




document.getElementById("shop-btn").onclick = function() {
    document.getElementById("shop-menu").style.display = "flex";
    document.getElementById("close-shop-btn").style.display = "block";
    document.getElementById("income-upgrades-info-btn").style.display = "block";
    document.getElementById("number-game-panel").style.display = "none";
    document.getElementById("farm-table-settings-btn").style.display = "block";
    playAudio3();
    
    for (let x = 0; actionBtnStorage.length; x++) {
        actionBtnStorage[x].style.display = "none";
    }
}

document.getElementById("close-shop-btn").onclick = function() {
    document.getElementById("shop-menu").style.display = "none";
    document.getElementById("close-shop-btn").style.display = "none";
    document.getElementById("number-game-panel").style.display = "Flex";
    document.getElementById("income-upgrades-info-btn").style.display = "none";
    document.getElementById('income-upgrades-info').style.display = 'none';
    document.getElementById("close-income-upgrades-info").style.display = "none";
    document.getElementById('farm-table-settings-btn').style.display = 'none';
    document.getElementById('farm-table-settings-panel').style.display = 'none';
    playAudio3();
    
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "block";
    }
}

document.getElementById("perform-btn").onclick = function() {
    setTimeout( function() {
          document.getElementById("num-inp").value = "";
    }, 500)
    
  if (document.getElementById("num-inp").value == no_input) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-panel").style.backgroundColor = "darkred";
        document.getElementById("output-text").innerHTML = "YOU HAVE NOT ENTERED A DIGIT IN THE FIELD!";
        document.getElementById("perform-btn").disabled = true;
        playAudio3();
        playAudio2();
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = no_input;
            document.getElementById("perform-btn").disabled = false;
            document.getElementById("selection-output").innerHTML = "";
            document.getElementById("perform-panel").style.display = "none";
            }, 2500)
    } else if (document.getElementById("num-inp").value > 10) {
        document.getElementById("output-panel").style.display = "block";
        
        document.getElementById("output-text").innerHTML = "YOU CANNOT CHOOSE NUMBERS BEYOND 10";
        document.getElementById("perform-btn").disabled = true;
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = no_input;
            document.getElementById("perform-btn").disabled = false;
            document.getElementById("selection-output").innerHTML = "";
            document.getElementById("perform-panel").style.display = "none";
            //document.getElementById("num-inp").value = "";
        }, 2000)
    } else if (document.getElementById("num-inp").value < 1) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-panel").style.backgroundColor = "darkred";
        document.getElementById("output-text").innerHTML = "YOU ARE UNABLE TO INPUT NUMBERS BELOW 1!";
        document.getElementById("perform-btn").disabled = true;
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = no_input;
            document.getElementById("perform-btn").disabled = false;
            document.getElementById("selection-output").innerHTML = "";
            document.getElementById("perform-panel").style.display = "none";
            //document.getElementById("num-inp").value = "";
        }, 2500)
    } else {
        let random_selection = Math.floor(Math.random()*random_num_storage.length);
        
       document.getElementById("perform-panel").style.display = "block";
        document.getElementById("selection-output").innerHTML = " " + random_selection;
        //alert("done");
        
        if (document.getElementById("num-inp").value == random_selection) {
            document.getElementById("output-panel").style.display = "block";
            document.getElementById("output-panel").style.backgroundColor = "green";
            document.getElementById("output-text").innerHTML = "MATCH!";
            document.getElementById("perform-btn").disabled = true;
            document.getElementById('task-1-progress').value += 1;
            //alert("Your choice matches the generated number! [$50 added to your balance]");
            
            user_fund_balance += 50;
            user_tycoon_score += 2;
            user_savings_balance += 10;
            task_1_user_progress += 1;
            document.getElementById("balance-output").innerHTML = "<b>BALANCE</b> : $" + user_fund_balance;
            document.getElementById("savings-output").innerHTML = "SAVINGS : $" + user_savings_balance;
            document.getElementById("tycoon-score-output").innerHTML = "TYCOON POINTS : " + user_tycoon_score + " PTS";
            playAudio4();
            playAudio7();
            task1Checker();
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = no_input;
            document.getElementById("perform-btn").disabled = false;
            document.getElementById("selection-output").innerHTML = "";
            document.getElementById("perform-panel").style.display = "none";
            //document.getElementById("num-inp").value = "";
        }, 1000)
        } else {
            document.getElementById("output-panel").style.display = "block";
            document.getElementById("output-panel").style.backgroundColor = "darkred";
            document.getElementById("output-text").innerHTML = "NO MATCH!";
            document.getElementById("perform-btn").disabled = true;
            playAudio2();
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = no_input;
            document.getElementById("perform-btn").disabled = false;
            document.getElementById("selection-output").innerHTML = "";
            document.getElementById("perform-panel").style.display = "none";
            document.getElementById("num-inp").value = "";
        }, 1000)
        }
    }
}


// bottom

function playAudio() {
    let audio = document.getElementById("access-granted");
    audio.play();
}

function playAudio2() {
    let audio2 = document.getElementById("access-denied");
    audio2.play();
}

function playAudio3() {
    let audio3 = document.getElementById("button-click");
    audio3.play();
}

function playAudio4() {
    let audio4 = document.getElementById("success-effect");
    audio4.play();
}

function playAudio5() {
    let audio5 = document.getElementById("popup-effect");
    audio5.play();
}

function playAudio6() {
    let audio6 = document.getElementById("small-cash-effect");
    audio6.play();
}

function playAudio7() {
    let audio7 = document.getElementById("unlock-effect");
    audio7.play();
}