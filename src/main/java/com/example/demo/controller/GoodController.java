package com.example.demo.controller;

import com.example.demo.dao.GoodDAO;
import com.example.demo.dao.TrolleyGoodDAO;
import com.example.demo.dao.UserDAO;
import com.example.demo.entity.Good;
import com.example.demo.entity.TrolleyGood;
import com.example.demo.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class GoodController {
    @Autowired
    public GoodDAO goodDAO;
    @Autowired
    public TrolleyGoodDAO trolleyGoodDAO;

    @PostMapping("/good/getGoodsList")
    @ResponseBody
    public Map<String, Object> getGoodsList(@RequestBody Map<String, String> data) {
        Map<String, Object> map = new HashMap<>();

        String status = "error";
        String details = "";
        List<Good> list = goodDAO.findAll();
        if (list.isEmpty()) {
            details = "商品为空";
        }
        else {
            status = "success";
            map.put("list",list);
        }

        map.put("status", status);
        map.put("details", details);

        return map;
    }

    @PostMapping("/good/getGoodDetail")
    @ResponseBody
    public Map<String, Object> getGoodDetail(@RequestBody Map<String, String> data) {
        Map<String, Object> map = new HashMap<>();

        String status = "error";
        String details = "";
        List<Good> list = goodDAO.findByGoodId(Long.parseLong(data.get("goodId")));
        if (list.isEmpty()) {
            details = "商品为空";
        }
        else {
            status = "success";
            map.put("good",list.get(0));
        }

        map.put("status", status);
        map.put("details", details);

        return map;
    }

    @PostMapping("/good/addToTrolley")
    @ResponseBody
    public Map<String, Object> addToTrolley(@RequestBody Map<String, String> data) {
        Map<String, Object> map = new HashMap<>();

        String status = "error";
        String details = "";
        TrolleyGood tg=new TrolleyGood();
        tg.setTrolleyGood(Integer.parseInt(data.get("goodId")));
        tg.setTrolleyUser(data.get("userName"));
        TrolleyGood aftersave=trolleyGoodDAO.save(tg);
        if(aftersave!=null) {
            status = "success";
        }
        else {
            details="加入失败";
        }

        map.put("status", status);
        map.put("details", details);

        return map;
    }

    @PostMapping("/good/getTrolley")
    @ResponseBody
    public Map<String, Object> getTrolley(@RequestBody Map<String, String> data) {
        Map<String, Object> map = new HashMap<>();

        String status = "";
        String details = "";
        List<TrolleyGood> list1 = trolleyGoodDAO.findByTrolleyUser(data.get("userName"));
        List<Good> list2=new ArrayList<Good>();
        for(int i=0;i<list1.size();i++)
        {
            long id=list1.get(i).getTrolleyGood();
            Good good=goodDAO.findByGoodId(id).get(0);
            list2.add(good);
        }
        status = "success";
        map.put("list",list2);
        map.put("status", status);
        map.put("details", details);

        return map;
    }
}

