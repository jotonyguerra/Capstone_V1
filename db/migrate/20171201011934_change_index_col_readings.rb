class ChangeIndexColReadings < ActiveRecord::Migration[5.1]
  def change
    rename_column :readings, :Index, :index
  end
end
