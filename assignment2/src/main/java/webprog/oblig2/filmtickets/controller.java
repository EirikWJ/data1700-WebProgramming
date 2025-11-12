package webprog.oblig2.filmtickets;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class controller {
    public List<Order> Orders = new ArrayList<>();
    @GetMapping("/getAllOrders")
    public List<Order> getAllOrders(){
        if(Orders.size()>0) {
            String out = Orders.size()+" Orders: \n";
            for (Order order : Orders) out += order + "\n";
            System.out.println(out);
        }
        return Orders;
    }
    @GetMapping("/getIDBreakpoint")
    public Integer getIDBreakpoint(){
        Integer id=0;
        for(Order order : Orders){
            if(id<order.getID())id = order.getID();
        }
        if(Orders.size()!=0)id++;
        return id;
    }
    @PostMapping("/setTicket")
    public String setTicket(Order order){
        System.out.println("Recived object at "+new java.util.Date()+" \n"+order+"\n");
        Orders.add(order);
        return "object received";
    }
    @DeleteMapping("/deleteAll")
    public String deleteAll(){
        Orders = new ArrayList<>();
        System.out.println("List of Orders Was CLEARED");
        return "List of Orders Was CLEARED";
    }
}
