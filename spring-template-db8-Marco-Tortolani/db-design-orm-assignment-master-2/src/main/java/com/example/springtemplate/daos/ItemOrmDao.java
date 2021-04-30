package com.example.springtemplate.daos;

import com.example.springtemplate.models.Item;
import com.example.springtemplate.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")

public class ItemOrmDao {
    @Autowired
    ItemRepository itemRepository;

    @PostMapping("/api/items")
    public Item createItem(@RequestBody Item item) {
        return itemRepository.save(item);
    }

    @GetMapping("/api/items")
    public List<Item> findAllItems() {
        return itemRepository.findAllItems();
    }

    @GetMapping("/api/items/{itemId}")
    public Item findItemById(
            @PathVariable("itemId") Integer id) {
        return itemRepository.findItemById(id);
    }

    @PutMapping("/api/items/{itemId}")
    public Item updateItem(
            @PathVariable("itemId") Integer id,
            @RequestBody Item itemUpdates) {
        Item item = itemRepository.findItemById(id);
        item.setName(itemUpdates.getName());
        item.setPrice(itemUpdates.getPrice());
        item.setInventory(itemUpdates.getInventory());
        item.setCategory(itemUpdates.getCategory());
        item.setShop(itemUpdates.getShop());
        return itemRepository.save(item);
    }

    @DeleteMapping("/api/items/{itemId}")
    public void deleteItem(
            @PathVariable("itemId") Integer id) {
        itemRepository.deleteById(id);
    }

    @GetMapping("/api/shops/{id}/items")
    public List<Item> findItemsForShop(@PathVariable("id") Integer id) {
        return itemRepository.findItemsForShop(id);
    }

}
