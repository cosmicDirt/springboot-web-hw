package com.example.demo.controller;

import com.example.demo.dao.OrderDAO;
import com.example.demo.entity.Orders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.DoubleAccumulator;

@RestController
public class OrderController {
    @Autowired
    public OrderDAO orderDAO;

    @PostMapping("/order/createOrder")
    @ResponseBody
    public Map<String, Object> createOrder(@RequestBody Map<String, String> data) {
        Map<String, Object> map = new HashMap<>();

        String status = "";
        String details = "";
        Orders orders=new Orders();
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        String time=df.format(new Date());// new Date()为获取当前系统时间
        orders.setCreateTime(time);
        orders.setOrderBuyerName(data.get("userName"));
        orders.setOrderGoodId(Long.parseLong(data.get("goodId")));
        orders.setOrderAmount(Long.parseLong(data.get("orderAmount")));
        orders.setOrderMoney(Double.parseDouble(data.get("orderMoney")));
        orders.setOrderAddress(data.get("orderAddress"));
        orders.setOrderGoodName(data.get("goodName"));
        Orders aftero=orderDAO.save(orders);
        status="success";
        map.put("status", status);
        map.put("details", details);

        return map;
    }

    @PostMapping("/order/getOrderList")
    @ResponseBody
    public Map<String, Object> getOrderList(@RequestBody Map<String, String> data) {
        Map<String, Object> map = new HashMap<>();

        String status = "";
        String details = "";
        List<Orders> list=orderDAO.findByOrderBuyerName(data.get("userName"));
        status="success";

        map.put("list",list);
        map.put("status", status);
        map.put("details", details);

        return map;
    }
}
