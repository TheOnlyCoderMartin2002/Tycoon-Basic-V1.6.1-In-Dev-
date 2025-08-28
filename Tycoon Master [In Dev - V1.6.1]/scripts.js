let random_num_storage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // top
let no_input = "";
let actionBtnStorage = document.getElementsByClassName("action-btn");
let farmBtnStorage = document.getElementsByClassName('farm-btn');
let numberInpStorage = document.getElementsByClassName('num-inp');
let loanOptionStorage = document.getElementsByClassName('loan-option');

let item_price = 0;

let user_fund_balance = 0;
let user_savings_balance = 0;
let passive_earnings_total = 25;
let user_loan_debt = 0;
let user_tycoon_score = 0;
let user_loan_interest = 0;

let total_income_upgrades_count = 0;
let total_cash_farm_income_count = 0;
let total_farm_click_count = 0;

let task_1_user_progress = 0;
let task_2_user_progress = 0;

let stat = document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
let stat_2 = document.getElementById("savings-output").innerHTML = "SAVINGS : $" + user_savings_balance;
let stat_3 = document.getElementById("loan-debt-output").innerHTML = "LOAN DEBT : $" + user_loan_debt;
let stat_4 = document.getElementById("tycoon-score-output").innerHTML = "TYCOON CREDIT SCORE : " + user_tycoon_score + " PTS";
let stat_5 = document.getElementById("total-passive-earnings-output").innerHTML = "TOTAL PASSIVE EARNINGS : $" + passive_earnings_total;
let stat_6 = document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
let stat_7 = document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICK : " + total_farm_click_count;
let statsStorage = [stat, stat_2, stat_3, stat_4, stat_5, stat_6, stat_7];

let cash_row_collection_ready = false;
let cash_row_2_collection_ready = false;
let cash_row_3_collection_ready = false;
let cash_row_4_collection_ready = false;


for (let z = 0; z < farmBtnStorage.length; z++) {
    farmBtnStorage[z].onclick = function() {
        playAudio();
    }
}

function showDebt() {

if (user_loan_debt == 0) {
    document.getElementById("loan-debt-output").style.display = 'none';
} else if (user_loan_debt > 0) {
    document.getElementById("loan-debt-output").style.display = '';
}
}
showDebt();

// TASKS

function taskChecker() {
    if (task_1_user_progress == 2) {
       
        alert("TASK COMPLETED! - CLAIM YOUR REWARD IN TASKS MENU");
        console.log("task complete");
        document.getElementById('claim-task-reward-btn').innerHTML = "CLAIM REWARD";
        document.getElementById('claim-task-reward-btn').style.backgroundColor = "darkred";
        document.getElementById('claim-task-reward-btn').disabled = false;
    } else {
        console.log("task incomplete");
    }
    
    if (task_1_user_progress == 4) {
        
        alert("TASK COMPLETED! - CLAIM YOUR REWARD IN TASKS MENU");
        console.log("task complete");
        document.getElementById('claim-task-reward-btn-2').innerHTML = "CLAIM REWARD";
        document.getElementById('claim-task-reward-btn-2').style.backgroundColor = "darkred";
        document.getElementById('claim-task-reward-btn-2').disabled = false;
    } else {
        console.log("task incomplete");
    }
    
    if (task_1_user_progress == 6) {
        task_1_user_progress = 0;
        alert("TASK COMPLETED! - CLAIM YOUR REWARD IN TASKS MENU");
        console.log("task complete");
        document.getElementById('claim-task-reward-btn-3').innerHTML = "CLAIM REWARD";
        document.getElementById('claim-task-reward-btn-3').style.backgroundColor = "darkred";
        document.getElementById('claim-task-reward-btn-3').disabled = false;
    } else {
        console.log("task incomplete");
    }
    
    if (task_2_user_progress == 3) {
        task_2_user_progress = 0;
        alert("TASK COMPLETED! - CLAIM YOUR REWARD IN TASKS MENU");
        console.log("task complete");
        document.getElementById('claim-task-reward-btn-4').innerHTML = "CLAIM REWARD";
        document.getElementById('claim-task-reward-btn-4').style.backgroundColor = "darkred";
        document.getElementById('claim-task-reward-btn-4').disabled = false;
    }
}

document.getElementById('buy-perk-1').onclick = function() {
    item_price = 1500;
    
    if (user_fund_balance >= item_price) {
        user_fund_balance -= item_price;
        document.getElementById("buy-perk-1").innerHTML = 'PERK OWNED & ACTIVE';
        document.getElementById("buy-perk-1").style.backgroundColor = 'darkred';
        document.getElementById("buy-perk-1").disabled = true;
        document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "PERK OBTAINED & ACTIVATED!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getErlementById("output-text").innerHTML = "";
            //document.getElementById('transfer-from-savings-inp').value = '';
        }, 2000)
        
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
        setInterval( function() {
            checkReadyStatus();
        }, 500)
    } else {
        //alert('INSUFFIECIENT FUNDS!');
        playAudio2();
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "INSUFFICIENT FUNDS!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getErlementById("output-text").innerHTML = "";
             }, 2000)
    }
}

document.getElementById('store-btn').onclick = function() {
    document.getElementById("store-panel").style.display = 'flex';
    document.getElementById("number-game-panel").style.display = 'none';
    document.getElementById("close-admin-btn").style.display = 'block';
    
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "none";
    }
}

document.getElementById('task-details-btn').onclick = function() {
    alert("Visit the main menu & enter numbers of your choice between 1-10 | Get 2 matches to complete task");
}

document.getElementById('task-details-btn-2').onclick = function() {
    alert("Visit the main menu & enter numbers of your choice between 1-10 | Get 4 matches to complete task");
}

document.getElementById('task-details-btn-3').onclick = function() {
    alert("Visit the main menu & enter numbers of your choice between 1-10 | Get 6 matches to complete task");
}

document.getElementById('task-details-btn-4').onclick = function() {
    alert("Purchase X3 income upgrades costing $200 to complete task");
}


document.getElementById('claim-task-reward-btn').onclick = function() {
    playAudio();
    user_fund_balance += 200;
    user_tycoon_score += 3;
    document.getElementById('claim-task-reward-btn').innerHTML = "CLAIMED";
    document.getElementById('claim-task-reward-btn').disabled = true;
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    document.getElementById("tycoon-score-output").innerHTML = "TYCOON CREDIT SCORE : " + user_tycoon_score + " PTS";
}

document.getElementById('claim-task-reward-btn-2').onclick = function() {
    playAudio();
    user_fund_balance += 400;
    user_tycoon_score += 5;
    document.getElementById('claim-task-reward-btn-2').innerHTML = "CLAIMED";
    document.getElementById('claim-task-reward-btn-2').disabled = true;
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    document.getElementById("tycoon-score-output").innerHTML = "TYCOON CREDIT SCORE : " + user_tycoon_score + " PTS";
}

document.getElementById('claim-task-reward-btn-3').onclick = function() {
    playAudio();
    user_fund_balance += 600;
    user_tycoon_score += 7;
    document.getElementById('claim-task-reward-btn-3').innerHTML = "CLAIMED";
    document.getElementById('claim-task-reward-btn-3').disabled = true;
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    document.getElementById("tycoon-score-output").innerHTML = "TYCOON CREDIT SCORE : " + user_tycoon_score + " PTS";
}

document.getElementById('claim-task-reward-btn-4').onclick = function() {
    playAudio();
    user_fund_balance += 400;
    user_tycoon_score += 5;
    document.getElementById('claim-task-reward-btn-4').innerHTML = "CLAIMED";
    document.getElementById('claim-task-reward-btn-4').disabled = true;
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    document.getElementById("tycoon-score-output").innerHTML = "TYCOON CREDIT SCORE : " + user_tycoon_score + " PTS";
}

document.getElementById('tasks-btn').onclick = function() { 
    document.getElementById('tasks-menu').style.display = 'flex';
    document.getElementById('close-admin-btn').style.display = 'block';
    document.getElementById("number-game-panel").style.display = "none";
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    playAudio3();
    
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "none";
    }
}

document.getElementById('pay-custom-amount').onclick = function() {
    let payment_inp = document.getElementById("custom-payment-inp");
    
    if (payment_inp.value == 0) {
        alert('FAILED - INVALID AMOUNT');
    } else if (user_fund_balance < payment_inp.value) {
        alert('FAILED - INSUFFICIENT BALANCE');
        document.getElementById("custom-payment-inp").value = '';
    } else if (user_loan_debt == 0) {
        alert('FAILED - YOU HAVE NO ACTIVE DEBT');
        document.getElementById("custom-payment-inp").value = '';
    } else if (payment_inp.value > user_loan_debt) {
        alert('FAILED - AMOUNT EXCEEDS WHAT YOU OWE');
    } else if (payment_inp.value == user_loan_debt) {
        user_fund_balance -= payment_inp.value;
        user_loan_debt -= payment_inp.value;
        user_loan_interest = 5;
        user_fund_balance -= user_loan_interest;
        playAudio();
        showDebt();
        
        alert('SUCCESS - YOU PAID THE DEBT IN FULL!');
        document.getElementById("loan-debt-output").innerHTML = "LOAN DEBT : $" + user_loan_debt;
        document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
        document.getElementById("custom-payment-inp").value = '';
    
    } else {
        user_fund_balance -= payment_inp.value;
        user_loan_debt -= payment_inp.value;
        user_loan_interest = 5;
        user_fund_balance -= user_loan_interest;
        playAudio();
        showDebt();
        
        alert('SUCCESS - THANKS FOR YOUR PAYMENT!');
        document.getElementById("loan-debt-output").innerHTML = "LOAN DEBT : $" + user_loan_debt;
        document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
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
        document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
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
        document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
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
        document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    } else {
        alert('LOAN FAILED - YOUR TYCOON SCORE IS BELOW THE REQUIREMENT FOR THIS OPTION! [REQUIREMENT: 150PTS]');
    }
}

document.getElementById('loan-5000').onclick = function() {
    if (user_tycoon_score >= 225) {
        user_fund_balance += 5000;
        user_loan_debt += 5000;
        user_loan_interest = 1500;
        user_loan_debt += user_loan_interest;
        
        alert('# LOAN OF $5,000.00 ADDED TO YOUR BALANCE! 7 MINUTE WAITING PERIOD BEFORE YOU ARE ABLE TO GET THIS LOAN AGAIN!');
        document.getElementById("loan-5000").disabled = true;
        
        setInterval( function() {
            document.getElementById("loan-5000").disabled = false;
        }, 600000)
        
        document.getElementById("loan-debt-output").innerHTML = "LOAN DEBT : $" + user_loan_debt;
        document.getElementById("loan-debt-output").style.display = 'block';
        document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    } else {
        alert('LOAN FAILED - YOUR TYCOON SCORE IS BELOW THE REQUIREMENT FOR THIS OPTION! [REQUIREMENT: 225PTS]');
    }
}

document.getElementById('income-upgrades-info-btn').onclick = function() {
    document.getElementById("close-income-upgrades-info").style.display = "block";
    document.getElementById('income-upgrades-info-btn').style.display = 'none';
    document.getElementById('shop-menu').style.display = 'none';
    document.getElementById('income-upgrades-info').style.display = 'flex';
    document.getElementById("number-game-panel").style.display = "none";
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
        }

document.getElementById("close-loan-info").onclick = function() {
        document.getElementById("loans-panel").style.display = "flex";
        document.getElementById("loan-info-btn").style.display = "block";
        document.getElementById("loan-info-panel").style.display = "none";
        document.getElementById("close-loan-info").style.display = "none";
        }

document.getElementById("farm-info-btn").onclick = function() {
    document.getElementById("farm-table-info").style.display = "flex";
    document.getElementById("earn-panel").style.display = "none";
    document.getElementById("close-farm-info").style.display = "block";
    document.getElementById("farm-info-btn").style.display = "none";
}

document.getElementById("close-farm-info").onclick = function() {
        document.getElementById("farm-table-info").style.display = "none";
        document.getElementById("earn-panel").style.display = "flex";
        document.getElementById("close-farm-info").style.display = "none";
        document.getElementById("farm-info-btn").style.display = "block";
        }

document.getElementById("darkred-theme").onclick = function() {
    document.getElementById("root").style.backgroundImage = "linear-gradient(darkred, darkred)";
}

document.getElementById("darkblue-theme").onclick = function() {
    document.getElementById("root").style.backgroundImage = "linear-gradient(darkblue, darkblue)";
}

document.getElementById("default-theme").onclick = function() {
    document.getElementById("root").style.backgroundImage = "linear-gradient(black, black)";
}

function disableAudio() {
if (document.getElementById("turn-off-audio").checked == true) {
    document.getElementById("access-granted").muted = true;
    document.getElementById("access-denied").muted = true;
    document.getElementById("button-click").muted = true;
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
    
document.getElementById('add-cash-manual-btn').onclick = function() {
    let user_input = parseInt(prompt('Enter an amount:'));
    let amount = user_input.value;
    
    user_fund_balance += user_input;
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
}

document.getElementById("buy-all-upgrades-btn").onclick = function() {
    user_fund_balance += 4050;
    buy_farm();
    buy_farm_2();
    buy_farm_3();
    buy_farm_4();
    buy_farm_5();
    buy_farm_6();
    playAudio3();
    document.getElementById("total-passive-earnings-output").innerHTML = "TOTAL PASSIVE EARNINGS : $" + passive_earnings_total;
    alert("UNLOCKED ALL UPGRADES!");
}

document.getElementById("clear-balance").onclick = function() {
    user_fund_balance = 0;
    user_savings_balance = 0;
    alert("Balances cleared successfully!");
    
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    document.getElementById("savings-output").innerHTML = "SAVINGS : $" + user_savings_balance;
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
        document.getElementById('balance-output').innerHTML = 'BALANCE : $' + user_fund_balance;
        playAudio();
        
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
        document.getElementById('balance-output').innerHTML = 'BALANCE : $' + user_fund_balance;
        playAudio();
        
        for (let ni = 0; ni < numberInpStorage.length; ni++) {
            numberInpStorage[ni].value = "";
        }
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "TRANSFER COMPLETE!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getErlementById("output-text").innerHTML = "";
            //document.getElementById('transfer-from-savings-inp').value = '';
        }, 2000)
    }
}

document.getElementById('settings-btn').onclick = function() { 
    document.getElementById('settings-panel').style.display = 'flex';
    document.getElementById('close-admin-btn').style.display = 'block';
    document.getElementById("number-game-panel").style.display = "none";
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    playAudio3();
    
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "none";
    }
}

document.getElementById('close-updates-panel').onclick = function() {
    document.getElementById("close-updates-panel").style.display = "none";
    document.getElementById("updates-panel").style.display = "none";
    document.getElementById("updates-btn").style.display = "block";
}

document.getElementById('updates-btn').onclick = function() {
    document.getElementById("updates-btn").style.display = "none";
    document.getElementById('updates-panel').style.display = 'flex';
    document.getElementById('close-admin-btn').style.display = 'block';
    document.getElementById("number-game-panel").style.display = "none";
    document.getElementById("close-updates-panel").style.display = "block";
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    playAudio3();
    
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "none";
    }
}

document.getElementById('savings-btn').onclick = function() { 
    document.getElementById('savings-panel').style.display = 'flex';
    document.getElementById('close-admin-btn').style.display = 'block';
    document.getElementById("number-game-panel").style.display = "none";
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    playAudio3();
    
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "none";
    }
}

let farm_btn = document.getElementById('farm-btn').onclick = function() {
    user_fund_balance += 1;
    total_cash_farm_income_count += 1;
    total_farm_click_count += 1;
    cash_collection_ready = true;
    document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICKS : " + total_farm_click_count;
    document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
    playAudio();
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
}

let farm_btn_2 = document.getElementById('farm-btn-2').onclick = function() {
    user_fund_balance += 3;
    total_cash_farm_income_count += 3;
    total_farm_click_count += 1;
    cash_row_2_collection_ready = false;
    document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICKS : " + total_farm_click_count;
    document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
    playAudio();
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    document.getElementById('farm-btn-2').style.display = 'none';
    
    setTimeout( function() {
        document.getElementById('cooldown-2').innerHTML = '00:03';
        setTimeout( function() {
            document.getElementById('cooldown-2').innerHTML = '00:02';
            setTimeout( function() {
                document.getElementById('cooldown-2').innerHTML = '00:01';
                setTimeout( function() {
                    document.getElementById('cooldown-2').innerHTML = "Collect";
                    document.getElementById('cooldown-2').style.fontWeight = 'bold';
                    document.getElementById('cooldown-2').style.fontFamily = 'Fantasy, Arial';
                    document.getElementById('farm-btn-2').style.display = 'flex';
                    cash_row_2_collection_ready = true;
                }, 500)
            }, 1000)
        }, 1000)
    }, 500)
}

let farm_btn_3 = document.getElementById('farm-btn-3').onclick = function() {
    user_fund_balance += 5;
    total_cash_farm_income_count += 5;
    total_farm_click_count += 1;
    cash_row_3_collection_ready = false;
    document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICKS : " + total_farm_click_count;
    document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
    playAudio();
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    document.getElementById('farm-btn-3').style.display = 'none';
    
    setTimeout( function() {
        document.getElementById('cooldown-3').innerHTML = '00:05';
        setTimeout( function() {
            document.getElementById('cooldown-3').innerHTML = '00:04';
            setTimeout( function() {
                document.getElementById('cooldown-3').innerHTML = '00:03';
                setTimeout( function() {
                    document.getElementById('cooldown-3').innerHTML = '00:02';
                    setTimeout( function() {
                        document.getElementById('cooldown-3').innerHTML = '00:01';
                        setTimeout( function() {
                            document.getElementById('cooldown-3').innerHTML = 'Collect';
                            document.getElementById('cooldown-3').style.fontWeight = 'bold';
                            document.getElementById('cooldown-3').style.fontFamily = 'Fantasy, Arial';
                            document.getElementById('farm-btn-3').style.display = 'flex';
                            cash_row_3_collection_ready = true;
                        }, 500)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}

let farm_btn_4 = document.getElementById('farm-btn-4').onclick = function() {
    user_fund_balance += 10;
    total_cash_farm_income_count += 10;
    total_farm_click_count += 1;
    cash_row_4_collection_ready = false;
    document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICKS : " + total_farm_click_count;
    document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
    playAudio();
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    document.getElementById('farm-btn-4').style.display = 'none';
    
    setTimeout( function() {
        document.getElementById('cooldown-4').innerHTML = '00:08';
        setTimeout( function() {
            document.getElementById('cooldown-4').innerHTML = '00:07';
            setTimeout( function() {
                document.getElementById('cooldown-4').innerHTML = '00:06';
                setTimeout( function() {
                    document.getElementById('cooldown-4').innerHTML = '00:05';
                    setTimeout( function() {
                        document.getElementById('cooldown-4').innerHTML = '00:04';
                        setTimeout( function() {
                            document.getElementById('cooldown-4').innerHTML = '00:03';
                            setTimeout( function() {
                                document.getElementById('cooldown-4').innerHTML = '00:02';
                                setTimeout( function() {
                                    document.getElementById('cooldown-4').innerHTML = '00:01';
                                    setTimeout( function() {
                                        document.getElementById('cooldown-4').innerHTML = 'Collect';
                                        document.getElementById('cooldown-4').style.fontWeight = 'bold';
                                        document.getElementById('cooldown-4').style.fontFamily = 'Fantasy, Arial';
                                        document.getElementById('farm-btn-4').style.display = 'flex';
                                        cash_row_4_collection_ready = true;
                                    }, 500)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}

document.getElementById('buy-farm-btn').onclick = function() {
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
        document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
        playAudio();
        
        document.getElementById('buy-farm-btn').style.display = 'none';
        document.getElementById('farm-btn-5').style.display = 'flex';
        document.getElementById('cooldown-5').innerHTML = 'Collect';
        document.getElementById('price-panel').innerHTML = 'OWNED';
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "FARM PURCHASED!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
    }
    let farm_btn_5 = document.getElementById('farm-btn-5').onclick = function() {
        user_fund_balance += 20;
        user_tycoon_score += 1;
        total_cash_farm_income_count += 20;
        total_farm_click_count += 1;
        document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICKS : " + total_farm_click_count;
        document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
    
        document.getElementById("tycoon-score-output").innerHTML = "TYCOON CREDIT SCORE : " + user_tycoon_score + " PTS";
        playAudio();
        document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
        document.getElementById('farm-btn-5').style.display = 'none';
        
        setTimeout( function() {
            document.getElementById('cooldown-5').innerHTML = '00:15';
            setTimeout( function() {
                document.getElementById('cooldown-5').innerHTML = '00:14';
                setTimeout( function() {
                    document.getElementById('cooldown-5').innerHTML = '00:13';
                    setTimeout( function() {
                        document.getElementById('cooldown-5').innerHTML = '00:12';
                        setTimeout( function() {
                            document.getElementById('cooldown-5').innerHTML = '00:11';
                            setTimeout( function() {
                                document.getElementById('cooldown-5').innerHTML = '00:10';
                                setTimeout( function() {
                                    document.getElementById('cooldown-5').innerHTML = '00:09';
                                    setTimeout( function() {
                                        document.getElementById('cooldown-5').innerHTML = '00:08';
                                        setTimeout( function() {
                                            document.getElementById('cooldown-5').innerHTML = '00:07';
                                            setTimeout( function() {
                                                document.getElementById('cooldown-5').innerHTML = '00:06';
                                                setTimeout( function() {
                                                    document.getElementById('cooldown-5').innerHTML = '00:05';
                                                    setTimeout( function() {
                                                        document.getElementById('cooldown-5').innerHTML = '00:04';
                                                        setTimeout( function() {
                                                            document.getElementById('cooldown-5').innerHTML = '00:03';
                                                            setTimeout( function() {
                                                                document.getElementById('cooldown-5').innerHTML = '00:02';
                                                                setTimeout( function() {
                                                                    document.getElementById('cooldown-5').innerHTML = '00:01';
                                                                    setTimeout( function() {
                                                                        document.getElementById('cooldown-5').innerHTML = 'Collect';
                                                                        document.getElementById('cooldown-5').style.fontWeight = 'bold';
                                                                        document.getElementById('cooldown-5').style.fontFamily = 'Fantasy, Arial';
                                                                        document.getElementById('farm-btn-5').style.display = 'flex';
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

document.getElementById('buy-farm-btn-2').onclick = function() {
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
        document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
        playAudio();
        
        document.getElementById('buy-farm-btn-2').style.display = 'none';
        document.getElementById('farm-btn-6').style.display = 'flex';
        document.getElementById('cooldown-6').innerHTML = 'Collect';
        document.getElementById('price-panel-2').innerHTML = 'OWNED';
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "FARM PURCHASED!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
    }
    
    let farm_btn_6 = document.getElementById('farm-btn-6').onclick = function() {
        user_fund_balance += 35;
        user_tycoon_score += 1;
        total_cash_farm_income_count += 35;
        total_farm_click_count += 1;
        document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICKS : " + total_farm_click_count;
        document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
        document.getElementById("tycoon-score-output").innerHTML = "TYCOON CREDIT SCORE : " + user_tycoon_score + " PTS";
        playAudio();
        document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
        document.getElementById('farm-btn-6').style.display = 'none';
        
        setTimeout( function() {
            document.getElementById('cooldown-6').innerHTML = '00:20';
            setTimeout( function() {
                document.getElementById('cooldown-6').innerHTML = '00:19';
                setTimeout( function() {
                    document.getElementById('cooldown-6').innerHTML = '00:18';
                    setTimeout( function() {
                        document.getElementById('cooldown-6').innerHTML = '00:17';
                        setTimeout( function() {
                            document.getElementById('cooldown-6').innerHTML = '00:16';
                            setTimeout( function() {
                                document.getElementById('cooldown-6').innerHTML = '00:15';
                                setTimeout( function() {
                                    document.getElementById('cooldown-6').innerHTML = '00:14';
                                    setTimeout( function() {
                                        document.getElementById('cooldown-6').innerHTML = '00:13';
                                        setTimeout( function() {
                                            document.getElementById('cooldown-6').innerHTML = '00:12';
                                            setTimeout( function() {
                                                document.getElementById('cooldown-6').innerHTML = '00:11';
                                                setTimeout( function() {
                                                    document.getElementById('cooldown-6').innerHTML = '00:10';
                                                    setTimeout( function() {
                                                        document.getElementById('cooldown-6').innerHTML = '00:09';
                                                        setTimeout( function() {
                                                            document.getElementById('cooldown-6').innerHTML = '00:08';
                                                            setTimeout( function() {
                                                                document.getElementById('cooldown-6').innerHTML = '00:07';
                                                                setTimeout( function() {
                                                                    document.getElementById('cooldown-6').innerHTML = '00:06';
                                                                    setTimeout( function() {
                                                                        document.getElementById('cooldown-6').innerHTML = '00:05';
                                                                        setTimeout( function() {
                                                                            document.getElementById('cooldown-6').innerHTML = '00:04';
                                                                            setTimeout( function() {
                                                                                document.getElementById('cooldown-6').innerHTML = '00:03';
                                                                                setTimeout( function() {
                                                                                    document.getElementById('cooldown-6').innerHTML = '00:02';
                                                                                    setTimeout( function() {
                                                                                        document.getElementById('cooldown-6').innerHTML = '00:01';
                                                                                        setTimeout( function() {
                                                                                            document.getElementById('cooldown-6').innerHTML = 'Collect';
                                                                                            document.getElementById('cooldown-6').style.fontWeight = 'bold';
                                                                                            document.getElementById('cooldown-6').style.fontFamily = 'Fantasy, Arial';
                                                                                            document.getElementById('farm-btn-6').style.display = 'flex';
                                    
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

document.getElementById('buy-farm-btn-3').onclick = function() {
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
        document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
        playAudio();
        
        document.getElementById('buy-farm-btn-3').style.display = 'none';
        document.getElementById('farm-btn-7').style.display = 'flex';
        document.getElementById('cooldown-7').innerHTML = 'Collect';
        document.getElementById('price-panel-3').innerHTML = 'OWNED';
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "FARM PURCHASED!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
    }
    
    let farm_btn_7 = document.getElementById('farm-btn-7').onclick = function() {
        user_fund_balance += 50;
        user_tycoon_score += 2;
        total_cash_farm_income_count += 50;
        total_farm_click_count += 1;
        document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICKS : " + total_farm_click_count;
        document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
        document.getElementById("tycoon-score-output").innerHTML = "TYCOON CREDIT SCORE : " + user_tycoon_score + " PTS";
        
        playAudio();
        document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
        document.getElementById('farm-btn-7').style.display = 'none';
        
        setTimeout( function() {
            document.getElementById('cooldown-7').innerHTML = '00:30';
            setTimeout( function() {
                document.getElementById('cooldown-7').innerHTML = '00:29';
                setTimeout( function() {
                    document.getElementById('cooldown-7').innerHTML = '00:28';
                    setTimeout( function() {
                        document.getElementById('cooldown-7').innerHTML = '00:27';
                        setTimeout( function() {
                            document.getElementById('cooldown-7').innerHTML = '00:26';
                            setTimeout( function() {
                                document.getElementById('cooldown-7').innerHTML = '00:25';
                                setTimeout( function() {
                                    document.getElementById('cooldown-7').innerHTML = '00:24';
                                    setTimeout( function() {1
                                        document.getElementById('cooldown-7').innerHTML = '00:23';
                                        setTimeout( function() {
                                            document.getElementById('cooldown-7').innerHTML = '00:22';
                                            setTimeout( function() {
                                                document.getElementById('cooldown-7').innerHTML = '00:21';
                                                setTimeout( function() {
                                                    document.getElementById('cooldown-7').innerHTML = '00:20';
                                                    setTimeout( function() {
                                                        document.getElementById('cooldown-7').innerHTML = '00:19';
                                                        setTimeout( function() {
                                                            document.getElementById('cooldown-7').innerHTML = '00:18';
                                                            setTimeout( function() {
                                                                document.getElementById('cooldown-7').innerHTML = '00:17';
                                                                setTimeout( function() {
                                                                    document.getElementById('cooldown-7').innerHTML = '00:16';
                                                                    setTimeout( function() {
                                                                        document.getElementById('cooldown-7').innerHTML = '00:15';
                                                                        setTimeout( function() {
                                                                            document.getElementById('cooldown-7').innerHTML = '00:14';
                                                                            setTimeout( function() {
                                                                                document.getElementById('cooldown-7').innerHTML = '00:13';
                                                                                setTimeout( function() {
                                                                                    document.getElementById('cooldown-7').innerHTML = '00:12';
                                                                                    setTimeout( function() {
                                                                                        document.getElementById('cooldown-7').innerHTML = '00:11';
                                                                                        setTimeout( function() {
                                                                                            document.getElementById('cooldown-7').innerHTML = '00:10';
                                                                                            setTimeout( function() {
                                                                                                document.getElementById('cooldown-7').innerHTML = '00:09';
                                                                                                setTimeout( function() {
                                                                                                    document.getElementById('cooldown-7').innerHTML = '00:08';
                                                                                                    setTimeout( function() {
                                                                                                        document.getElementById('cooldown-7').innerHTML = '00:07';
                                                                                                        setTimeout( function() {
                                                                                                            document.getElementById('cooldown-7').innerHTML = '00:06';
                                                                                                            setTimeout( function() {
                                                                                                                document.getElementById('cooldown-7').innerHTML = '00:05';
                                                                                                                setTimeout( function() {
                                                                                                                    document.getElementById('cooldown-7').innerHTML = '00:04';
                                                                                                                    setTimeout( function() {
                                                                                                                        document.getElementById('cooldown-7').innerHTML = '00:03';
                                                                                                                        setTimeout( function() {
                                                                                                                            document.getElementById('cooldown-7').innerHTML = '00:02';
                                                                                                                            setTimeout( function() {
                                                                                                                                document.getElementById('cooldown-7').innerHTML = '00:01';
                                                                                                                                setTimeout( function() {
                                                                                                                                    document.getElementById('cooldown-7').innerHTML = 'Collect';
                                                                                                                                    document.getElementById('cooldown-7').style.fontWeight = 'bold';
                                                                                                                                    document.getElementById('cooldown-7').style.fontFamily = 'Fantasy, Arial';
                                                                                                                                    document.getElementById('farm-btn-7').style.display = 'flex';
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
        user_fund_balance += 10;
        total_cash_farm_income_count += 10;
        total_farm_click_count += 1;
        document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICKS : " + total_farm_click_count;
        document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
        playAudio();
        document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
        //document.getElementById('farm-btn-7').style.display = 'none';
}

document.getElementById('buy-farm-btn-4').onclick = function() {
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
        document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
        playAudio();
        
        document.getElementById('buy-farm-btn-4').style.display = 'none';
        document.getElementById('farm-btn-8').style.display = 'flex';
        document.getElementById('cooldown-8').innerHTML = 'Collect';
        document.getElementById('price-panel-4').innerHTML = 'OWNED';
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "FARM PURCHASED!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
    }
}

let farm_btn_9 = document.getElementById('farm-btn-9').onclick = function() {
        user_fund_balance += 20;
        total_cash_farm_income_count +=1;
        total_farm_click_count += 1;
        document.getElementById("total-farm-clicks-output").innerHTML = "TOTAL FARM CLICKS : " + total_farm_click_count;
        document.getElementById("total-cash-farm-output").innerHTML = "TOTAL CASH FARMED : $" + total_cash_farm_income_count;
        playAudio();
        document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
}

document.getElementById('buy-farm-btn-5').onclick = function() {
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
        document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
        playAudio();
        
        document.getElementById('buy-farm-btn-5').style.display = 'none';
        document.getElementById('farm-btn-9').style.display = 'flex';
        document.getElementById('cooldown-9').innerHTML = 'Collect';
        document.getElementById('price-panel-5').innerHTML = 'OWNED';
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "FARM PURCHASED!";
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
        }, 2000)
    }
}    


let default_reward = setInterval( function() {
    let timed_grant = user_savings_balance += 15;
    
    playAudio();
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    document.getElementById("savings-output").innerHTML = "SAVINGS : $" + user_savings_balance;
    document.getElementById("earning-granted-output").style.display = 'block';
    document.getElementById("earning-granted-output").innerHTML = 'RECEIVED +$20';
    
    setTimeout( function() {
        document.getElementById("earning-granted-output").style.display = 'none';
        document.getElementById("earning-granted-output").innerHTML = '';
    }, 1000)
    
    
    console.log(user_fund_balance);
    
    document.getElementById("balance-panel").style.backgroundColor = "green";
            
            setTimeout( function() {
                document.getElementById("balance-panel").style.backgroundColor = "transparent";
            }, 2000)
    
}, 30000)

document.getElementById('earn-btn').onclick = function() {
    document.getElementById('close-admin-btn').style.display = 'block';
    document.getElementById('farm-info-btn').style.display = 'block';
      document.getElementById('earn-panel').style.display = 'flex';
    document.getElementById("number-game-panel").style.display = "none";
    playAudio3();
    
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
    playAudio3();
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "none";
    }
        
        
    }
}

document.getElementById("add-funds-btn").onclick = function() {
    user_fund_balance += 100;
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    
    document.getElementById("earning-granted-output").style.display = 'block';
    document.getElementById("earning-granted-output").innerHTML = 'RECEIVED +$100';
    
    setTimeout( function() {
        document.getElementById("earning-granted-output").style.display = 'none';
    }, 1000)
    
    playAudio();
    
    document.getElementById("balance-panel").style.backgroundColor = "green";
            
            setTimeout( function() {
                document.getElementById("balance-panel").style.backgroundColor = "transparent";
            }, 1000)
}

document.getElementById("add-funds-btn-2").onclick = function() {
    user_fund_balance += 500;
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    
    document.getElementById("earning-granted-output").style.display = 'block';
    document.getElementById("earning-granted-output").innerHTML = 'RECEIVED +$500';
    
    setTimeout( function() {
        document.getElementById("earning-granted-output").style.display = 'none';
    }, 1000)
    
    playAudio();
    
    document.getElementById("balance-panel").style.backgroundColor = "green";
            
            setTimeout( function() {
                document.getElementById("balance-panel").style.backgroundColor = "transparent";
            }, 1000)
}

document.getElementById("add-funds-btn-3").onclick = function() {
    user_fund_balance += 2500;
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    
    document.getElementById("earning-granted-output").style.display = 'block';
    document.getElementById("earning-granted-output").innerHTML = 'RECEIVED +$2,500';
    
    setTimeout( function() {
        document.getElementById("earning-granted-output").style.display = 'none';
    }, 1000)
    
    playAudio();
    
    document.getElementById("balance-panel").style.backgroundColor = "green";
            
            setTimeout( function() {
                document.getElementById("balance-panel").style.backgroundColor = "transparent";
            }, 1000)
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
       payment_inp = '';
      playAudio3();
    
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "block";
    }
    
     for (let z = 0; z < loanOptionStorage.length; z++) {
        loanOptionStorage[z].style.display = 'flex';
    }
}

let buy_farm = document.getElementById("buy-btn").onclick = function() {
    item_price = 100;
    
    if (user_fund_balance < item_price) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "NOT ENOUGH FUNDS!";
        //document.getElementById("shop-menu").style.display = "none";
        
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
        document.getElementById("owned-upgrades-output").innerHTML = "OWNED UPGRADES : " + total_income_upgrades_count;
        document.getElementById("tycoon-score-output").innerHTML = "TYCOON CREDIT SCORE : " + user_tycoon_score + " PTS";
        document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
        playAudio();
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "PURCHASE SUCCESSFUL!";
        //document.getElementById("shop-menu").style.display = "none";
        
        passive_earnings_total += 5;
        document.getElementById("total-passive-earnings-output").innerHTML = "TOTAL PASSIVE EARNINGS : $" + passive_earnings_total;
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
setInterval( function() {
    user_fund_balance += 5;
    playAudio();
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    console.log(user_fund_balance);
    
    document.getElementById("balance-panel").style.backgroundColor = "green";
            
            setTimeout( function() {
                document.getElementById("balance-panel").style.backgroundColor = "transparent";
            }, 2000)
    
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
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById("shop-menu").style.display = "flex";
            }, 2000)
        playAudio2();
    } else if (user_fund_balance >= item_price) {
        user_fund_balance -= item_price;
        user_tycoon_score += 2;
        task_2_user_progress += 1;
        total_income_upgrades_count += 1;
        taskChecker();
        document.getElementById("owned-upgrades-output").innerHTML = "OWNED UPGRADES : " + total_income_upgrades_count;
        document.getElementById("tycoon-score-output").innerHTML = "TYCOON CREDIT SCORE : " + user_tycoon_score + " PTS";
        document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
        playAudio();
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "PURCHASE SUCCESSFUL!";
        //document.getElementById("shop-menu").style.display = "none";
        passive_earnings_total += 10;
        document.getElementById("total-passive-earnings-output").innerHTML = "TOTAL PASSIVE EARNINGS : $" + passive_earnings_total;
      document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
setInterval( function() {
    user_fund_balance += 10;
    playAudio();
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    console.log(user_fund_balance);
    
    document.getElementById("balance-panel").style.backgroundColor = "green";
            
            setTimeout( function() {
                document.getElementById("balance-panel").style.backgroundColor = "transparent";
            }, 2000)
    
        
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
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
             }, 2000)
        playAudio2();
    } else if (user_fund_balance >= item_price) {
        user_fund_balance -= item_price;
        user_tycoon_score += 3;
        total_income_upgrades_count += 1;
        document.getElementById("owned-upgrades-output").innerHTML = "OWNED UPGRADES : " + total_income_upgrades_count;
        document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
        playAudio();
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "PURCHASE SUCCESSFUL!";
        //document.getElementById("shop-menu").style.display = "none";
        
        passive_earnings_total += 15;
        document.getElementById("total-passive-earnings-output").innerHTML = "TOTAL PASSIVE EARNINGS : $" + passive_earnings_total;
        document.getElementById("tycoon-score-output").innerHTML = "TYCOON CREDIT SCORE : " + user_tycoon_score + " PTS";
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
setInterval( function() {
    user_fund_balance += 15;
    playAudio();
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    console.log(user_fund_balance);
    
    document.getElementById("balance-panel").style.backgroundColor = "green";
            
            setTimeout( function() {
                document.getElementById("balance-panel").style.backgroundColor = "transparent";
            }, 2000)
    
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
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            }, 2000)
        playAudio2();
    } else if (user_fund_balance >= item_price) {
        user_fund_balance -= item_price;
        user_tycoon_score += 5;
        total_income_upgrades_count += 1;
        document.getElementById("owned-upgrades-output").innerHTML = "OWNED UPGRADES : " + total_income_upgrades_count;
        document.getElementById("tycoon-score-output").innerHTML = "TYCOON CREDIT SCORE : " + user_tycoon_score + " PTS";
        document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
        playAudio();
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "PURCHASE SUCCESSFUL!";
        //document.getElementById("shop-menu").style.display = "none";
        
        passive_earnings_total += 20;
        document.getElementById("total-passive-earnings-output").innerHTML = "TOTAL PASSIVE EARNINGS : $" + passive_earnings_total;
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
setInterval( function() {
    user_fund_balance += 20;
    playAudio();
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    console.log(user_fund_balance);
    
    document.getElementById("balance-panel").style.backgroundColor = "green";
            
            setTimeout( function() {
                document.getElementById("balance-panel").style.backgroundColor = "transparent";
            }, 2000)
    
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
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            }, 2000)
        playAudio2();
    } else if (user_fund_balance >= item_price) {
        user_fund_balance -= item_price;
        user_tycoon_score += 6;
        total_income_upgrades_count += 1;
        document.getElementById("owned-upgrades-output").innerHTML = "OWNED UPGRADES : " + total_income_upgrades_count;
        document.getElementById("tycoon-score-output").innerHTML = "TYCOON CREDIT SCORE : " + user_tycoon_score + " PTS";
        document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
        playAudio();
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "PURCHASE SUCCESSFUL!";
        //document.getElementById("shop-menu").style.display = "none";
        
        passive_earnings_total += 30;
        document.getElementById("total-passive-earnings-output").innerHTML = "TOTAL PASSIVE EARNINGS : $" + passive_earnings_total;
     document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
setInterval( function() {
    user_fund_balance += 30;
    playAudio();
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    console.log(user_fund_balance);
    
    document.getElementById("balance-panel").style.backgroundColor = "green";
            
            setTimeout( function() {
                document.getElementById("balance-panel").style.backgroundColor = "transparent";
            }, 2000)
    
    
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
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = "";
            //document.getElementById("shop-menu").style.display = "flex";
            }, 2000)
        playAudio2();
    } else if (user_fund_balance >= item_price) {
        user_fund_balance -= item_price;
        user_tycoon_score += 6;
        total_income_upgrades_count += 1;
        document.getElementById("owned-upgrades-output").innerHTML = "OWNED UPGRADES : " + total_income_upgrades_count;
        document.getElementById("tycoon-score-output").innerHTML = "TYCOON CREDIT SCORE : " + user_tycoon_score + " PTS";
        document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
        playAudio();
        
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "PURCHASE SUCCESSFUL!";
        //document.getElementById("shop-menu").style.display = "none";
        
        passive_earnings_total += 50;
        document.getElementById("total-passive-earnings-output").innerHTML = "TOTAL PASSIVE EARNINGS : $" + passive_earnings_total;
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
setInterval( function() {
    user_fund_balance += 50;
    playAudio();
    document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
    console.log(user_fund_balance);
    
    document.getElementById("balance-panel").style.backgroundColor = "green";
            
            setTimeout( function() {
                document.getElementById("balance-panel").style.backgroundColor = "transparent";
            }, 2000)
    
    
}, 25000)
        
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
      
    playAudio3();
    
    for (let y = 0; actionBtnStorage.length; y++) {
        actionBtnStorage[y].style.display = "block";
    }
}

document.getElementById("perform-btn").onclick = function() {
    if (document.getElementById("num-inp").value == no_input) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "PLEASE ENTER A NUMBER";
        document.getElementById("perform-btn").disabled = true;
        playAudio3();
        
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = no_input;
            document.getElementById("perform-btn").disabled = false;
            document.getElementById("selection-output").innerHTML = "";
            document.getElementById("perform-panel").style.display = "none";
            document.getElementById("num-inp").value = "";
        }, 2000)
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
            document.getElementById("num-inp").value = "";
        }, 2000)
    } else if (document.getElementById("num-inp").value < 1) {
        document.getElementById("output-panel").style.display = "block";
        document.getElementById("output-text").innerHTML = "YOU CANNOT CHOOSE NUMBERS BELOW 1";
        document.getElementById("perform-btn").disabled = true;
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = no_input;
            document.getElementById("perform-btn").disabled = false;
            document.getElementById("selection-output").innerHTML = "";
            document.getElementById("perform-panel").style.display = "none";
            document.getElementById("num-inp").value = "";
        }, 2000)
    } else {
        let random_selection = Math.floor(Math.random()*random_num_storage.length);
        
        document.getElementById("perform-panel").style.display = "block";
        document.getElementById("selection-output").innerHTML = " " + random_selection;
        //alert("done");
        
        if (document.getElementById("num-inp").value == random_selection) {
            document.getElementById("output-panel").style.display = "block";
            document.getElementById("output-text").innerHTML = "YOUR NUMBER IS A MATCH!";
            document.getElementById("perform-btn").disabled = true;
            document.getElementById("balance-panel").style.backgroundColor = "green";
            //alert("Your choice matches the generated number! [$50 added to your balance]");
            
            
            setTimeout( function() {
                document.getElementById("balance-panel").style.backgroundColor = "transparent";
                document.getElementById("num-inp").value = "";
            }, 2000)
            
            user_fund_balance += 50;
            user_tycoon_score += 2;
            user_savings_balance += 10;
            task_1_user_progress += 1;
            document.getElementById("balance-output").innerHTML = "BALANCE : $" + user_fund_balance;
            document.getElementById("savings-output").innerHTML = "SAVINGS : $" + user_savings_balance;
            document.getElementById("tycoon-score-output").innerHTML = "TYCOON CREDIT SCORE : " + user_tycoon_score + " PTS";
            playAudio();
            taskChecker();
        
        setTimeout( function() {
            document.getElementById("output-panel").style.display = "none";
            document.getElementById("output-text").innerHTML = no_input;
            document.getElementById("perform-btn").disabled = false;
            document.getElementById("selection-output").innerHTML = "";
            document.getElementById("perform-panel").style.display = "none";
            document.getElementById("num-inp").value = "";
        }, 1000)
        } else {
            document.getElementById("output-panel").style.display = "block";
            document.getElementById("output-text").innerHTML = "YOUR NUMBER IS NOT A MATCH!";
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