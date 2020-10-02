const API_BASEURL = 'http://localhost:4000/api/customer';
    export var getCustomers = async function(){
        let response = await fetch(API_BASEURL);
        let customers = await response.json();
        console.log(JSON.stringify(customers));
        return customers;
      }
      export var deleteCustomer = async function(id){
        console.log("deleteCustomer:"+id);
        let response = await fetch(API_BASEURL,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
            method:"delete",
            body:JSON.stringify({id:id})
        });
        let result = await response.json(); 
        return result;
    } 
    export var getCustomerById = async function(id){
        console.log("getCustomerById:"+id);
        let response = await fetch(API_BASEURL+"/"+id);
        let result = await response.json(); 
        return result;
    } 
    export var addCustomer = async function(customer){
        console.log("addCustomer:");
        let response = await fetch(API_BASEURL,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
            method:"post",
            body:JSON.stringify(customer)
        });
        let result = await response.json(); 
        return result;
    } 
    export var updateCustomer = async function(customer){
        console.log("updateCustomer:"+JSON.stringify(customer));
        let response = await fetch(API_BASEURL,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
            method:"put",
            body:JSON.stringify(customer)
        });
        let result = await response.json(); 
        return result;
    } 
