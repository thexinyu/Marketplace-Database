package com.example.springtemplate.daos;

import com.example.springtemplate.models.Shop;
import com.example.springtemplate.repositories.ShopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")

public class ShopOrmDao {
    @Autowired
    ShopRepository shopRepository;

    @PostMapping("/api/shops")
    public Shop createShop(@RequestBody Shop shop) {
        return shopRepository.save(shop);
    }

    @GetMapping("/api/shops")
    public List<Shop> findAllShops() {
        return shopRepository.findAllShops();
    }

    @GetMapping("/api/shops/{shopId}")
    public Shop findShopById(
            @PathVariable("shopId") Integer id) {
        return shopRepository.findShopById(id);
    }

    @PutMapping("/api/shops/{shopId}")
    public Shop updateShop(
            @PathVariable("shopId") Integer id,
            @RequestBody Shop shopUpdates) {
        Shop shop = shopRepository.findShopById(id);
        shop.setShopName(shopUpdates.getShopName());
        return shopRepository.save(shop);
    }

    @DeleteMapping("/api/shops/{shopId}")
    public void deleteShop(
            @PathVariable("shopId") Integer id) {
        shopRepository.deleteById(id);
    }
}

