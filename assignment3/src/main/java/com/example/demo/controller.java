package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class controller {

    @Autowired
    TicketRepository Rep;
    @GetMapping("/getAllOrders")
    public List<Order> getAllOrders(){
        System.out.println("getting object");
        List<Order> orderList = Rep.getOrders();
        return orderList;
    }
    @PostMapping("/setTicket")
    public String setTicket(Order order){
        System.out.println("Recived object at "+new java.util.Date()+" \n"+order+"\n");
        Rep.save(order);
        return "object received";
    }
    @DeleteMapping("/deleteAll")
    public String deleteAll(){
        Rep.deleteAll();
        System.out.println("List of Orders Was CLEARED");
        return "List of Orders Was CLEARED";
    }
}
