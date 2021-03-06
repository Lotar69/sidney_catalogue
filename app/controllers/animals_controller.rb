class AnimalsController < ApplicationController
  before_action :find_animal, only: [:show, :edit, :update]
  skip_before_action :authenticate_buyer!, only: [:edit, :update, :new, :create]
  before_action :authenticate_seller!, only: [:edit, :update, :new, :create]

  def index
    if params[:category].present?
      @animals = Animal.search_by_category(params[:category])
    else
      @animals = Animal.all
    end
  end

  def show
  end

  def new
    @animal = Animal.new
  end

  def create
    @animal = Animal.new(animal_params)
    @animal.seller = current_seller
    if @animal.save
      redirect_to dashboard_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    @animal.update(animal_params)

    redirect_to dashboard_path
  end

  private

  def find_animal
    @animal = Animal.find(params[:id])
  end

  def animal_params
    params.require(:animal).permit(:category, :gender, :age, :stage, :health, :description, :price, :photo)
  end
end
