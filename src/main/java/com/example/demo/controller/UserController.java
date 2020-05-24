package com.example.demo.controller;

import com.example.demo.dao.UserDAO;
import com.example.demo.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class UserController {

    @Autowired
    public UserDAO userDAO;

    @PostMapping("/user/login")
    @ResponseBody
    public Map<String, Object> doLogin(@RequestBody Map<String, String> data) {
        Map<String, Object> map = new HashMap<>();

        String status = "error";
        String details = "";
        List<User> list = userDAO.findByUserName(data.get("userName"));
        if (list.isEmpty()) {
            details = "用户不存在，请先注册！";
        } else if (!list.get(0).getUserPassword().equals(data.get("password"))) {
            details = "密码错误，请重新输入！";
        }
        //用户名与密码正确
        else {
            status = "success";
        }

        map.put("status", status);
        map.put("details", details);

        return map;
    }

    @PostMapping("/user/register")
    @ResponseBody
    public Map<String, Object> register(@RequestBody Map<String, String> data) {
        User u = new User();

        Map<String, Object> map = new HashMap<>();
        String status = "error";
        String details = "";


        int userId = 0;
        List<User> list = userDAO.findByUserName(data.get("userName"));
        if (list.isEmpty()) {
            u.setUserName(data.get("userName"));
            u.setUserPassword(data.get("password"));
            userDAO.save(u);
            status="success";
        } else {
            details = "用户名已存在！";
        }
        map.put("status", status);
        map.put("details", details);

        return map;
    }
}
