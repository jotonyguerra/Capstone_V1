require 'csv'

class Reading < ApplicationRecord

  def self.import(file)
    CSV.foreach(file.path, headers: true) do |row|
      Reading.create! do |reading|
        reading.glucose_value = row["Glucose Value (mg/dL)"]
        reading.glucose_rate_of_change = row["Glucose Rate of Change (mg/dL/min)"]
        reading.index = row["Index"]
        reading.time = row["Timestamp (YYYY-MM-DDThh:mm:ss)"]
        reading.duration = row["Duration (hh:mm:ss)"]
        reading.device = row["Device Info"]
        reading.event = row["Event Type"]
        reading.event_subtype = row["Event Subtype"]
        reading.transmitter_time = row["Transmitter Time (Long Integer)"]
        reading.source_device_id = row["Source Device ID"]
        reading.patient_info = row["Patient Info"]
      end
    end
  end
  belongs_to :user, optional: true
end
