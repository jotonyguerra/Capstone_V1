class ReadingsController < ApplicationController
  before_action :authenticate_user!

  def index
    @readings = Reading.all
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
      redirect_to readings_path, notice: 'Readings Imported!'
    else
      flash[:notice] = "please select a valid file"
      redirect_to readings_path
    end
  end

  private

  def readings_params
    params.require(:reading).permit(:glucose_value, :time, :patient_info, :user_id)
  end


end
