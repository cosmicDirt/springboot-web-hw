package com.example.demo.entity;


import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Orders {

  private long orderId;
  private String orderBuyerName;
  private long orderGoodId;
  private String createTime;
  private String orderAddress;
  private long orderAmount;
  private double orderMoney;
  private String orderGoodName;

  @Id
  public long getOrderId() {
    return orderId;
  }

  public void setOrderId(long orderId) {
    this.orderId = orderId;
  }


  public String getOrderBuyerName() {
    return orderBuyerName;
  }

  public void setOrderBuyerName(String orderBuyerName) {
    this.orderBuyerName = orderBuyerName;
  }


  public long getOrderGoodId() {
    return orderGoodId;
  }

  public void setOrderGoodId(long orderGoodId) {
    this.orderGoodId = orderGoodId;
  }


  public String getCreateTime() {
    return createTime;
  }

  public void setCreateTime(String createTime) {
    this.createTime = createTime;
  }


  public String getOrderAddress() {
    return orderAddress;
  }

  public void setOrderAddress(String orderAddress) {
    this.orderAddress = orderAddress;
  }


  public long getOrderAmount() {
    return orderAmount;
  }

  public void setOrderAmount(long orderAmount) {
    this.orderAmount = orderAmount;
  }


  public double getOrderMoney() {
    return orderMoney;
  }

  public void setOrderMoney(double orderMoney) {
    this.orderMoney = orderMoney;
  }


  public String getOrderGoodName() {
    return orderGoodName;
  }

  public void setOrderGoodName(String orderGoodName) {
    this.orderGoodName = orderGoodName;
  }
}
