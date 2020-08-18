class AddPasswordToBuyers < ActiveRecord::Migration[6.0]
  def change
    add_column :buyers, :encrypted_password, :string, null: false, default: ""
  end
end
