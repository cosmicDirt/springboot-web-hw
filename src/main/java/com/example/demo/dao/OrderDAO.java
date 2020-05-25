package com.example.demo.dao;

import com.example.demo.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Repository
public interface OrderDAO extends JpaRepository<Orders,Integer> {
    Orders save(Orders order);
    List<Orders> findByOrderBuyerName(String user);
}
