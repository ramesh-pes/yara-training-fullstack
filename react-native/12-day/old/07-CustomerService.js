var service = {};
var customers = [
    {id:1,name:'Rama',email:'rama@gmail.com',phone:'876534232',address:'India'}
];

service.getCustomers = function(){
    return customers;
}
service.addCustomer = function(customer){
    customers.push(customer);
}
service.getCustomerById = function(id){
    var customer = {};
    for(var i = 0; i < customers.length; i++){
        if(id == customers[i].id){
            return customers[i];
        }
    }
    return customer;
  }

service.updateCustomer = function(customer){
    var tempItems = customers;
    for(var i = 0; i < tempItems.length; i++){
      if(tempItems[i].id == customer.id){
        tempItems[i].phone = customer.phone;
        tempItems[i].name = customer.name;
        tempItems[i].email = customer.email;
        tempItems[i].address = customer.address;
        break;
      }
    }
}

service.deleteCustomer = function(customerId){
    var tempList = [];
    for(var i = 0; i < customers.length;i++) {
      if(customers[i].id != customerId){
        tempList.push(customers[i]);
      }
    }
    customers = tempList;
}
export default service;
