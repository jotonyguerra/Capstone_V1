class AddColumnsToReadings < ActiveRecord::Migration[5.1]
  def change
    add_column :readings, :patient_info, :string
  end
end
