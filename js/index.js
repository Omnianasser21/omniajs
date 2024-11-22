var input1=document.getElementById('input1');
var input2=document.getElementById('input2');
var closeBtn = document.getElementById('exit');
var parentDiv = document.querySelector('.parent');
var btn= document.querySelector('#btnn');




 
 





var productList;
if(localStorage.getItem('products')==null){
    productList=[];
}else{
    productList=JSON.parse(localStorage.getItem('products'));
    display()

}



function addProduct(){
   var product={
    WebsiteName: input1.value,
    visitName: input2.value
   }
   
    productList.push(product)
    localStorage.setItem('products',JSON.stringify(productList))
    clear()
    display()
   
    
}

function clear(){
    input1.value=null;
    input2.value=null;
}
function display(){
    var cart='';
    for(var i =1  ;  i<productList.length ; i++){
        cart+=`   <div class="col-lg-3 ">
            <div class="item3 text-center ">
              <h2 class="h6 fw-bold">${i}</h2>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="item3 text-center ">
              <h2 class="h6 fw-bold"> ${productList[i]. WebsiteName}</h2>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="item3 text-center ">
              <button  onclick='geturl(${i})' class=" btn btn-info p-2"> <i class="fa-solid fa-eye"></i> Visit</button>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="item3 text-center ">
              <button onclick="Delete(${i})" class=" btn btn-danger p-2"><i class="fa-solid fa-trash"></i> Delete</button>
            </div>
          </div>`
    }
    document.getElementById('demo').innerHTML=cart;
}

function Delete(index){
    productList.splice(index,1);
    display()
    
}

function geturl(index){
    var visitName=productList[index].visitName;
    if (visitName){
        window.open(visitName,'_blank');
    }else{
        alert('no')
    }

}


function vaildationinputs(elment){
    var regexs={
        input1:/^[A-Z][a-z]{2,10}$/,
        input2:/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,})$/
    };
    if(  regexs[elment.id].test(elment.value)==true){
        elment.classList.add('is-valid')
        elment.classList.remove('is-invalid')

        btn.addEventListener('click', function(){
          parentDiv.classList.add('d-none');
        
        });
        
        
    }else{
        elment.classList.add('is-invalid')
        elment.classList.remove('is-valid')
        // parentDiv.classList.remove('d-none');
        btn.addEventListener('click', function(){
          parentDiv.classList.remove('d-none');
        
        });
        
    }
  
    
    
}

closeBtn.addEventListener('click', function () {
  parentDiv.classList.replace('d-flex', 'd-none');
});




