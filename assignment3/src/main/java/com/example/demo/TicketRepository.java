package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TicketRepository extends JpaRepository<Order, Long> {
    @Query(value="SELECT * FROM Orders o ORDER BY LAST_NAME", nativeQuery = true)
    List<Order> getOrders();
}
