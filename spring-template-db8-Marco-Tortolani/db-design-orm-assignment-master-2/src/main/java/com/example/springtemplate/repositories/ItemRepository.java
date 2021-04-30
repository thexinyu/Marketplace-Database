package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Item;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ItemRepository
        extends CrudRepository<Item, Integer> {
    @Query(value = "SELECT * FROM items",
            nativeQuery = true)
    public List<Item> findAllItems();

//this one is messed up
    @Query(value = "SELECT * FROM items WHERE id=:itemId",
            nativeQuery = true)
    public Item findItemById(@Param("itemId") Integer id);


    @Query(value = "SELECT * FROM items WHERE name=:itemname",
            nativeQuery = true)
    public Item getItemName(@Param("itemname") String name);

    @Query(value = "INSERT INTO items (`itemname`, `price`, `inventory`, `category`) VALUES (name, price, inventory, category)",
            nativeQuery = true)
    public Item addItem(@Param("itemname") String itemname,
                        @Param("price") Integer name,
                        @Param("inventory") Integer inventory,
                        @Param("category") String category);

    @Query(value = "select * from items where items.shop=:shopId",
            nativeQuery = true)
    public List<Item> findItemsForShop(@Param("shopId") Integer id);


}



