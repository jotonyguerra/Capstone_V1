class ReadingsController < ApplicationController

  def index
    @readings = Reading.all
  end

  def import
    @file = params[:file]

    if @file
      Reading.import(params[:file])
      redirect_to root_path, notice: 'Readings Imported!'
    else
      flash[:notice] = "please select a valid file"
      redirect_to readings_path
    end
  end

  private


end
