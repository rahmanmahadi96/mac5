// displaying costs value

function displayValue (specifications, price){
    const displayValueId = document.getElementById(specifications + '-cost');
    displayValueId.innerText = price;
}

// individual costs 

function individualCost(specifications){
    const additionalItem = document.getElementById(specifications +'-cost');
    const additionalCost = parseInt(additionalItem.innerText);
    return additionalCost;
}

// update total 

function updateTotal (totalId){
    const deviceCost = individualCost('device');
    const memoryCost = individualCost('memory');
    const storageCost = individualCost('storage');
    const deliveryCost = individualCost('delivery');
    const inputField = document.getElementById('input-field');
    let inputValue = inputField.value;
    const totalCost = deviceCost + memoryCost + storageCost + deliveryCost;
    if(inputValue == 'stevekaku'){
        document.getElementById(totalId).innerText = totalCost * ((100-20)/100);
    }

    else{
        document.getElementById(totalId).innerText = totalCost;
    }

    inputField.value = '';

}

// featured function 

function features(specifications, price){
    
    displayValue(specifications, price);
    
    updateTotal('total-cost');
    
    updateTotal('grand-total');
}

// 8GB memory Selected

document.getElementById('memory-8GB').addEventListener('click', function(){
    
    features('memory', 0);
})

// 16GB memory Selected

document.getElementById('memory-16GB').addEventListener('click', function(){
    
    features('memory',180);
})

// 256GB storage Selected

document.getElementById('storage-256GB').addEventListener('click', function(){
    
    features('storage', 0);
})

// 512GB storage Selected

document.getElementById('storage-512GB').addEventListener('click', function(){
    
    features('storage', 100);  
})

// 1TB storage Selected

document.getElementById('storage-1TB').addEventListener('click', function(){
    
    features('storage', 180);;
})

// free delivery option selected 

document.getElementById('free').addEventListener('click', function(){
    
    features('delivery', 0);
})

// express delivery option selected

document.getElementById('express').addEventListener('click', function(){
    
    features('delivery', 20);
})

// promo code applied 

document.getElementById('apply-button').addEventListener('click', function(){
    
    updateTotal('grand-total'); 
})


