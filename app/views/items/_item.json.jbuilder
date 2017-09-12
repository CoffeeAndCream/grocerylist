json.extract! item, :id, :name, :quantity, :quantity_type, :user_id, :created_at, :updated_at
json.url item_url(item, format: :json)