package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.xml.bind.v2.model.core.ID;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Table(name="item")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private Integer price;
    private Integer inventory;
    private String category;
    private Integer shop;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Integer getPrice() { return price; }
    public void setPrice(Integer price) { this.price = price; }

    public Integer getInventory() { return inventory; }
    public void setInventory(Integer inventory) { this.inventory = inventory; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public Integer getShop() { return shop; }
    public void setShop(Integer shop) { this.shop = shop; }


    public Item(String name, Integer price, Integer inventory, String category, Integer shop) {
        this.name = name;
        this.price = price;
        this.inventory = inventory;
        this.category = category;
        this.shop = shop;
    }

    public User() {}
}