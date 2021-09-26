'use strict';

const CartRepository = require('../../infrastructure/repository/CartRepository');
const ProductRepository = require('../../infrastructure/repository/ProductRepository');
const InventoryRepository = require('../../infrastructure/repository/InventoryRepository');

const ConfirmCheckout = async (cart_id) => {
  let cart = await CartRepository.findByPk(cart_id);

  if (cart.dataValues.is_checkout == 1)
    throw new Error('This cart already checkout');

  // Update inventory
  let items = cart.dataValues.items;

  for (let i = 0; i < items.length; i++) {
    let product = await ProductRepository.findByName(items[i]);
    let productId = product.dataValues.id;
  
    let inventory = await InventoryRepository.findByProductId(productId);
    let inventoryQty = inventory.dataValues.qty;


    if (inventoryQty == 0) {
      throw new Error(`${items[i]} stock is still empty`);
    }
  
    await InventoryRepository.updateQty(productId, inventoryQty - 1);
  }

  let updated = await CartRepository.update_confirmation_checkout(cart_id);

  return {
    is_checkout: updated == 1 ? true : false
  };
};

module.exports = {
  confirmation: (cart_id) => ConfirmCheckout(cart_id)
};