class TodosController < ApplicationController

  #Get
  #/todos/search
  # todos_search_path
  def search
    @todos = Todo.where(task: params[:task])
    render 'index'

  end

  #POST
  #/todos/:id/add_contact
  # add_todo_contact_path for linking
  def add_contact
    todo = Todo.find(params[:id])
    #contact_id
    contact = Contact.find(params[:contact_id])
   # select * from contacts where id = params[:contact_id]
   todo.contacts << contact
    redirect_to todo
  end

  def remove_contact
    todo = Todo.find(params[:id])
    contact = Contact.find(params[:contact_id])
    todo.contacts.delete(contact)
    redirect_to todo

 # def remove_contact
 #    todo = Todo.find(params[:id])
 #    contact = Contact.find(params[:contact_id])
 #    todo.contacts.destroy(contact)
 #    redirect_to todo


  end


  def index
    @todos = Todo.all
  end

  def new
  end

  def create
    task = params[:task]
    description = params[:description]
    due_date = params[:due_date]
    todo = Todo.new
    todo.task = task
    todo.description = description
    todo.due_date = due_date
    todo.save
    redirect_to('/todos')
  end

  def show
    @todo = Todo.find(params[:id])
    all_contacts = Contact.all
    @avaliable_contacts = all_contacts - @todo.contacts
  end

  def edit
    params[:id]
    @todo = Todo.find(params[:id])
    @contacts = Contact.all
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.contact_ids.include?(params[:contact].to_i) == false  && params[:contact].to_i > 0
      @contact = Contact.find(params[:contact])
    end
    @todo.task = params[:task]
    @todo.description = params[:description]
    @todo.due_date = params[:due_date]
    @todo.completed = params[:completed]
    if @contact
      @todo.contacts << @contact
    end
    @todo.save
    redirect_to("/todos/#{@todo.id}")
  end

  def destroy
    todo = Todo.find(params[:id])
    todo.destroy
    redirect_to('/todos')
  end
end