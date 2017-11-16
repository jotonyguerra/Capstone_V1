class Readings < ActiveRecord::Migration[5.1]
  def change
    #CSV = Timestamp (YYYY-MM-DDThh:mm:ss)
    create_table :readings do |t|
      t.datetime :time, null: false

      #index for csv data?
      t.integer :index, null: false

      #(hh:mm:ss)
      t.timestamp :duration

      #patient info
      t.string :first_name, null: false
      t.string :last_name, null: false

      #device info
      t.string :device, null: false
      t.string :source_device_id, null: false

      #event high, low
      t.string :event # null: false
      t.string :event_subtype

      #glucose values
      #(mg/dL)
      t.integer :glucose_value, null: false
      #(mg/dL/min)
      t.integer :glucose_rate_of_change

      #transmitter
      t.integer :transmitter_time, null: false

      #reference
      t.references :user, foreign_key: true
    end

  end
end
