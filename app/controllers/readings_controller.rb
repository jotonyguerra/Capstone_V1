class ReadingsController < ApplicationController

  def index
    @readings = Reading.all
    readings = Reading.all

    respond_to do |format|
      format.html
      format.json
    end
  end

  def show
    @reading = Reading.find(params[:id])
  end

  def new
  end

  def create
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

  def readings_params
    params.require(:reading).permit(:glucose_value, :time, :patient_info)
  end


end
