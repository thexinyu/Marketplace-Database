package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Shop;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ShopRepository
        extends CrudRepository<Shop, Integer> {
    @Query(value = "SELECT * FROM shops",
            nativeQuery = true)
    public List<Shop> findAllShops();

    @Query(value = "SELECT * FROM shops WHERE id=:shopId",
            nativeQuery = true)
    public Shop findShopById(@Param("shopId") Integer id);




    @Query(value = "SELECT * FROM shops WHERE name=:shopname",
            nativeQuery = true)
    public Shop getShopName(@Param("shopname") String name);
    @Query(value = "INSERT INTO shop (`shopname`) VALUES (name)",
            nativeQuery = true)
    public Shop addShop(@Param("shopname") String name);
}
