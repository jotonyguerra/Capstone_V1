class ReadingsController < ApplicationController

  def index
    @readings = Reading.all
  end

  def import
    Reading.import(params[:file])
    redirect_to root_path, notice: 'Readings Imported!'
  end


end
