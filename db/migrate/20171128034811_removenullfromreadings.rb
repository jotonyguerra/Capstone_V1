class Removenullfromreadings < ActiveRecord::Migration[5.1]
  def change
    change_column :readings, :index, :integer, null:true

  end
end
