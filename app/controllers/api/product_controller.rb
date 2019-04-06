class Api::ProductController < ApplicationController
  before_action :set_department, only [:update, :destroy]

  def index
    render json: @department.products
  end
 
  def create
    @product = @department.products.new(product_params)
    if @product.save
      render json: @product
    else
      render json: { errors: @product.errors }, status: :unprocessable_entity
    end
  end
 
  def update
    @product = @department.products.find(params[:id])
    if @product.update(product_params)
      render json: product
    else
      render json: { errors: @product.errors }, status: :unprocessable_entity
  end
 
  def destroy
    @department.products.find(params[:id]).destroy
    render json: { message: 'Product deleted' }
  end
 
  private
 
  def product_params
    params.require(:product).permit(:name, :description, :price, :stock)
  end
 
  def set_department
    @department = department.find(params[:id])
  end
 
 end