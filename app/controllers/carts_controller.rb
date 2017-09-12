class CartsController < ApplicationController
  def index
    @recipes = Recipe.where(user_id: current_user.id).where(added_to_cart: true)
    @items = Hash.new
    @recipes.each do |recipe|
      recipe.items.each do |item|
        item.name = item.name.singularize
        if @items[item.name].nil?
          @items[item.name] = Hash.new
          @items[item.name]["quantity"] = 0
          @items[item.name]["quantity_type"] = item.quantity_type
        end
        @items[item.name]["quantity"] += item.quantity
      end
    end
    puts @items
  end
end
