package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name="shops")
public class Shop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String shopname;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getShopName() { return shopname; }
    public void setShopName(String shopname) { this.shopname = shopname; }

    public Shop(String shopname) {
        this.shopname = shopname;
    }

    public Shop() {}
}
