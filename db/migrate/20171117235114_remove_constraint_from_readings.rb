class RemoveConstraintFromReadings < ActiveRecord::Migration[5.1]
  def change
    change_column :readings, :time, :datetime, null:true
    change_column :readings, :first_name, :string, null:true
    change_column :readings, :last_name, :string, null:true
    change_column :readings, :first_name, :string, null:true
    change_column :readings, :device, :string, null:true
    change_column :readings, :source_device_id, :string, null:true
    change_column :readings, :glucose_value, :integer, null:true
    change_column :readings, :transmitter_time, :integer, null:true
  end
end
