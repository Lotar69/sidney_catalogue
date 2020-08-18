class AddUserName < ActiveRecord::Migration[6.0]
  def change
    add_column :buyers, :user_name, :string, unique: false
    add_column :sellers, :user_name, :string, unique: false

  end
end
