package com.example.springtemplate.models;

import javax.persistence.*;
import java.math.BigInteger;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer shop;
    private String username;
    private String firstname;
    private String lastname;
    private String password;
    private String email;
    private BigInteger phone;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public Integer getShop() { return shop; }
    public void setShop(Integer shop) { this.shop = shop; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getFirstName() { return firstname; }
    public void setFirstName(String firstname) { this.firstname = firstname; }

    public String getLastName() { return lastname; }
    public void setLastName(String lastname) { this.firstname = lastname; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public BigInteger getPhone() { return phone; }
    public void setPhone(BigInteger phone) { this.phone = phone; }


    public User(Integer shop, String username, String firstname, String lastname, String password, String email, BigInteger phone) {
        this.shop = shop;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.email = email;
        this.phone = phone;
    }

    public User() {}
}
