class AnimalsController < ApplicationController
  before_action :find_animal, only: [:show, :edit, :create, :update]

  def index
    @animals = Animal.all
  end

  def show
  end

  def new
    @animal = Animal.new
  end

  def create
    if @animal.save
      redirect_to animals_path(@animal)
    else
      render :new
    end
  end

  def edit
  end

  def update
    @animal.update(animal_params)

    redirect_to animal_path(@animal)
  end

  private

  def find_animal
    @animal = Animal.find(params[:id])
  end
end
