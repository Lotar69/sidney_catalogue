class BuyersController < ApplicationController
  def index

  end

  def create
  end

  def edit
  end

  def update
  end

  def show
  end

  def new
  end

  private

  def set_animal
    @animal = Animal.find(params[:animal_id])
  end
end
